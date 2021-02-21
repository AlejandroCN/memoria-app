import { Component, OnInit } from '@angular/core';

import { GameService } from 'src/app/services/game.service';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-jugar',
  templateUrl: './jugar.component.html',
  styleUrls: ['./jugar.component.css'],
})
export class JugarComponent implements OnInit {
  public rowsArray: any[];
  public colsArray: any[];

  public imagenes: string[];

  constructor(
    private gameService: GameService,
    private configService: ConfigService
  ) {
    this.imagenes = [];
  }

  ngOnInit(): void {
    this.rowsArray = new Array(this.gameService.gameOpts.numRenglones);
    this.colsArray = new Array(this.gameService.gameOpts.numColumnas);

    this.selectRandomImages();
  }

  private async selectRandomImages(): Promise<void> {
    const gameOpts = await this.configService.getConfig();
    const totalImagenesTablero = this.rowsArray.length * this.colsArray.length;
    let contadorImagenes = 0;

    while (contadorImagenes < totalImagenesTablero) {
      const numImagenRandom = Math.floor(
        Math.random() * gameOpts.totalImagenesDisponibles
      );
      if (this.imagenes.indexOf(`${numImagenRandom.toString()}.png`) >= 0) {
        continue;
      }

      let posicionRandom1 = Math.floor(Math.random() * totalImagenesTablero);
      let posicionRandom2 = Math.floor(Math.random() * totalImagenesTablero);
      while (
        this.imagenes[posicionRandom1] ||
        this.imagenes[posicionRandom2] ||
        posicionRandom1 === posicionRandom2
      ) {
        posicionRandom1 = Math.floor(Math.random() * totalImagenesTablero);
        posicionRandom2 = Math.floor(Math.random() * totalImagenesTablero);
      }
      this.imagenes[posicionRandom1] = `${numImagenRandom.toString()}.png`;
      this.imagenes[posicionRandom2] = `${numImagenRandom.toString()}.png`;
      contadorImagenes += 2;
    }
  }
}
