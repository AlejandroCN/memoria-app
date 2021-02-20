import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JugarComponent } from './jugar.component';

const rutas: Routes = [
  {
    path: '',
    component: JugarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(rutas)],
  exports: [RouterModule],
})
export class JugarRoutingModule {}
