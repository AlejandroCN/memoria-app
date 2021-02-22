import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { RankingComponent } from './ranking.component';
import { RankingRoutingModule } from './ranking-routing.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { SpinnerModule } from 'src/app/components/spinner/spinner.module';

@NgModule({
  declarations: [RankingComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatPaginatorModule,
    FontAwesomeModule,
    RankingRoutingModule,
    PipesModule,
    SpinnerModule,
  ],
})
export class RankingModule {}
