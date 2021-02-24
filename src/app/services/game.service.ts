import { Injectable } from '@angular/core';
import { GameOptions } from '../models/game-options.model';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private _gameOpts: GameOptions;

  constructor() {}

  get gameOpts(): GameOptions {
    if (this._gameOpts) {
      return this._gameOpts;
    } else if (localStorage.getItem('options')) {
      this._gameOpts = JSON.parse(localStorage.getItem('options'));
      return this._gameOpts;
    }
    return null;
  }

  set gameOpts(gameOpts: GameOptions) {
    this._gameOpts = gameOpts;
    localStorage.setItem('options', JSON.stringify(gameOpts));
  }

  public clearOpts(): void {
    this._gameOpts = null;
    localStorage.clear();
  }

}
