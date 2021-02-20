import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const rutas: Routes = [
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioModule)
  },
  {
    path: 'jugar',
    loadChildren: () => import('./jugar/jugar.module').then(m => m.JugarModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/inicio'
  }
];

@NgModule({
  imports: [RouterModule.forChild(rutas)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
