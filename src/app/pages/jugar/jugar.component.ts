import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

import { GameService } from 'src/app/services/game.service';
import { ConfigService } from 'src/app/services/config.service';
import { RecordsService } from 'src/app/services/records.service';

import { GameCard } from 'src/app/models/game-card.model';
import { Record } from 'src/app/models/record.model';

@Component({
  selector: 'app-jugar',
  templateUrl: './jugar.component.html',
  styleUrls: ['./jugar.component.css'],
})
export class JugarComponent implements OnInit {
  public rowsArray: any[];
  public colsArray: any[];

  public imagenes: GameCard[];
  public imagenSeleccionada: GameCard;

  public handlerInterval: any;
  public tiempo: number;
  public totalIntentos: number;

  constructor(
    private gameService: GameService,
    private configService: ConfigService,
    private recordsService: RecordsService,
    private router: Router
  ) {
    this.imagenes = [];
    this.tiempo = 0;
    this.totalIntentos = 0;
    this.handlerInterval = setInterval(() => {
      this.tiempo += 1;
    }, 1000);
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
      if (
        this.imagenes.find((img) => img?.imagen === `${numImagenRandom}.png`)
      ) {
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
      const card1 = new GameCard(posicionRandom1, `${numImagenRandom}.png`);
      const card2 = new GameCard(posicionRandom2, `${numImagenRandom}.png`);
      this.imagenes[posicionRandom1] = card1;
      this.imagenes[posicionRandom2] = card2;
      contadorImagenes += 2;
    }
  }

  public selectCard(gameCard: GameCard): void {
    const gameCardEnArray = this.imagenes.find(
      (gc) => gc.arrayIndex === gameCard.arrayIndex
    );
    if (!this.imagenSeleccionada) {
      this.imagenSeleccionada = gameCard;
    } else if (!this.imagenSeleccionada.error) {
      if (this.imagenSeleccionada.imagen === gameCard.imagen) {
        this.gameAssert(gameCardEnArray);
      } else {
        this.gameFail(gameCardEnArray);
      }
      this.totalIntentos += 1;
    } else {
      gameCardEnArray.shown = false;
    }
  }

  private gameAssert(gameCard: GameCard): void {
    this.imagenSeleccionada.success = true;
    gameCard.success = true;
    this.imagenSeleccionada = null;

    if (this.isGameOver()) {
      this.gameOver();
    }
  }

  private gameFail(gameCard: GameCard): void {
    gameCard.error = true;
    this.imagenSeleccionada.error = true;
    setTimeout(() => {
      this.imagenSeleccionada.shown = false;
      gameCard.shown = false;
      this.imagenSeleccionada.error = false;
      gameCard.error = false;
      this.imagenSeleccionada = null;
    }, 2000);
  }

  private isGameOver(): boolean {
    return this.imagenes.find((gc) => !gc.success) ? false : true;
  }

  private gameOver() {
    clearInterval(this.handlerInterval);

    setTimeout(() => {
      Swal.fire({
        allowEscapeKey: false,
        allowOutsideClick: false,
        title: 'Ingresa tu nickname',
        input: 'text',
        showCancelButton: false,
        confirmButtonText: 'Continuar',
        width: 600,
        padding: '3em',
        backdrop: `
          rgba(0,0,123,0.4)
          url(
          "https://www.animatedimages.org/data/media/296/animated-festivity-and-celebration-image-0218.gif")
          left top
          no-repeat
        `,
      }).then((result) => {
        if (result.value) {
          this.registrarPuntaje(result.value);
        }
      });
    }, 1000);
  }

  private registrarPuntaje(nick: string): void {
    const record: Record = new Record();
    record.nickname = nick;
    record.totalIntentos = this.totalIntentos;
    record.fecha = new Date();
    record.tiempo = this.tiempo;

    this.recordsService.save(record).then(() => {
      Swal.fire('Felicidades!', 'Su puntaje se agregó al ranking global', 'success');
      this.router.navigateByUrl('/ranking');
    }).catch(err => {
      Swal.fire('Algo salió mal!', 'No fue posible agregar su puntaje al ranking', 'error');
      console.log(err);
    });
  }
}
