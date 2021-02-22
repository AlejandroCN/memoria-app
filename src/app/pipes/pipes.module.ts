import { NgModule } from '@angular/core';

import { FormatSecondsPipe } from './format-seconds.pipe';

@NgModule({
  declarations: [FormatSecondsPipe],
  exports: [FormatSecondsPipe],
})
export class PipesModule {}
