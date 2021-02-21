import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { GameCardComponent } from './game-card.component';

@NgModule({
  declarations: [GameCardComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [GameCardComponent],
})
export class GameCardModule {}
