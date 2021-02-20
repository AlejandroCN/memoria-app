import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';

import { InicioComponent } from './inicio.component';
import { InicioRoutingModule } from './inicio-routing.module';

@NgModule({
  declarations: [InicioComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSelectModule,
    MatGridListModule,
    FontAwesomeModule,
    InicioRoutingModule,
  ],
})
export class InicioModule {}
