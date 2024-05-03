import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {
  transform(min?: number): string {
    let results = '';
    if(min){
      const hrs = Math.floor(min / 60);
      const remainMin = min % 60;


      if (hrs > 0) {
        results += `${hrs} ${hrs === 1 ? 'hour' : 'hrs'}`;
      }

      if (remainMin > 0) {
        if (results !== '') {
          results += ' and ';
        }
        results += `${remainMin} ${remainMin === 1 ? 'minute' : 'min'}`;
      }
    }
    return results !== '' ? results : '0 min';
  }
}
