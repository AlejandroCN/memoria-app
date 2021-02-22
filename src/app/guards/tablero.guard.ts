import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import {GameService} from '../services/game.service';

@Injectable({
  providedIn: 'root'
})
export class TableroGuard implements CanActivate {

  constructor(private gameService: GameService, private router: Router) {
  }

  canActivate() {
    if (this.gameService.gameOpts) {
      return true;
    } else {
      this.router.navigateByUrl('/inicio');
      return false;
    }
  }
  
}
