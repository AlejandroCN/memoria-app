import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faPlay } from '@fortawesome/free-solid-svg-icons/faPlay';

import { ConfigService } from 'src/app/services/config.service';
import { GameService } from 'src/app/services/game.service';

import { GameOptions } from 'src/app/models/game-options.model';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  public faPlay = faPlay;
  public gameConfig: any;

  public form: FormGroup;

  constructor(
    private configService: ConfigService,
    private gameService: GameService,
    private router: Router
  ) {
    this.configurarForm();
  }

  ngOnInit(): void {
    this.getConfig();
  }

  private getConfig(): void {
    this.configService.getConfig().then(
      (config) => {
        this.gameConfig = config;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  private configurarForm(): void {
    this.form = new FormGroup({
      rows: new FormControl('', Validators.required),
      cols: new FormControl('', Validators.required),
    });
  }

  public jugar(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.writeOptions();
      this.router.navigateByUrl('/jugar');
    }
  }

  private writeOptions(): void {
    const options: GameOptions = {
      numRenglones: Number(this.form.get('rows').value),
      numColumnas: Number(this.form.get('cols').value),
    };

    this.gameService.gameOpts = options;
  }
}
