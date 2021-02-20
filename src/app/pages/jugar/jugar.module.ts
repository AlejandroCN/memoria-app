import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JugarComponent } from './jugar.component';
import { JugarRoutingModule } from './jugar-routing.module';

@NgModule({
  declarations: [JugarComponent],
  imports: [CommonModule, JugarRoutingModule],
})
export class JugarModule {}
