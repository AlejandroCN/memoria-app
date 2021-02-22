import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatBadgeModule } from '@angular/material/badge';

import { JugarComponent } from './jugar.component';
import { JugarRoutingModule } from './jugar-routing.module';
import { GameCardModule } from 'src/app/components/game-card/game-card.module';

@NgModule({
  declarations: [JugarComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatChipsModule,
    MatBadgeModule,
    JugarRoutingModule,
    GameCardModule,
  ],
})
export class JugarModule {}
