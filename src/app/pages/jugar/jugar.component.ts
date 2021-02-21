import { Component, OnInit } from '@angular/core';

import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-jugar',
  templateUrl: './jugar.component.html',
  styleUrls: ['./jugar.component.css'],
})
export class JugarComponent implements OnInit {
  public rowsArray: any[];
  public colsArray: any[];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.rowsArray = new Array(this.gameService.gameOpts.numRenglones);
    this.colsArray = new Array(this.gameService.gameOpts.numColumnas);
  }
}
