import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(section: any[]): any {
    return section.sort( (q1, q2) => q1.order - q2.order );
  }

}
