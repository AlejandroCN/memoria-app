import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { faTrophy } from '@fortawesome/free-solid-svg-icons/faTrophy';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import { RecordsService } from 'src/app/services/records.service';

import { Record } from 'src/app/models/record.model';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css'],
})
export class RankingComponent implements OnInit {
  public records: Record[];
  public mensajeErrorHttp: string;
  public cargando: boolean;
  public faTrophy = faTrophy;
  public faHome = faHome;

  public displayedColumns: string[] = [
    'fecha',
    'nickname',
    'tiempo',
    'totalIntentos',
  ];
  public dataSource: MatTableDataSource<Record> = null;

  @ViewChild(MatPaginator) public paginator: MatPaginator;
  @ViewChild(MatTable, { static: true }) public table: MatTable<any>;

  constructor(private recordsService: RecordsService) {
    this.cargando = true;
    this.mensajeErrorHttp = '';
    this.records = [];
  }

  ngOnInit(): void {
    this.obtenerRanking();
  }

  public obtenerRanking(): void {
    this.recordsService.findAll().subscribe(
      (snapshot) => {
        this.mensajeErrorHttp = '';
        if (snapshot.size === 0) {
          this.mensajeErrorHttp = 'No existe ningún record aún!';
        } else {
          snapshot.forEach((doc) => {
            const record: Record = doc.data() as Record;
            record.fecha = new Date(doc.data().fecha.toDate());
            this.records.push(record);
          });
        }
        this.initMatTable();
        this.cargando = false;
      },
      (err) => {
        console.log(err);
        this.cargando = false;
      }
    );
  }

  private initMatTable(): void {
    this.dataSource = new MatTableDataSource<Record>(this.records);
    this.dataSource.paginator = this.paginator;

    this.table.renderRows();
  }
}
