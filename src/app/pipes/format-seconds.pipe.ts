import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatSeconds'
})
export class FormatSecondsPipe implements PipeTransform {

  transform(seconds: number): string {
    return new Date(seconds * 1000).toISOString().substr(11, 8);
  }

}
