import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { JugarComponent } from './jugar.component';
import { JugarRoutingModule } from './jugar-routing.module';
import { GameCardModule } from 'src/app/components/game-card/game-card.module';

@NgModule({
  declarations: [JugarComponent],
  imports: [CommonModule, MatCardModule, JugarRoutingModule, GameCardModule],
})
export class JugarModule {}
