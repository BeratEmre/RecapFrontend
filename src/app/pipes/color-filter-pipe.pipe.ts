import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/car';


@Pipe({
  name: 'colorFilterPipe'
})
export class ColorFilterPipePipe implements PipeTransform {

  transform(value: Car[],text: string): Car[] {
    text=text?text.toLocaleLowerCase():""
    
    return text?
    value.filter((c:Car)=>c.colorName.toLocaleLowerCase().indexOf(text)!==-1)
    :value
  }

}
