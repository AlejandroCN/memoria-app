import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RankingComponent } from './ranking.component';

const rutas: Routes = [
  {
    path: '',
    component: RankingComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(rutas)],
  exports: [RouterModule],
})
export class RankingRoutingModule {}
