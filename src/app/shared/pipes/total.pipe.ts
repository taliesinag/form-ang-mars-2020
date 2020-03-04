import { Pipe, PipeTransform } from '@angular/core';
import { Prestation } from '../models/prestation';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {
// ... spread operator pour desctructurer un tableau
  transform(value: any, args?: any): unknown {
    if (value ) {
      if( args ) {
        return value.totalTtc();
      }
      return value.totalHt();
    }
    return null ;
  }
  // Exemple du spread opérator
  // let f = ['fraise', 'banane'];
  // let t = ['vibro', 'god'];
  // let s = [...f,...t];
  // s sera la contact de f et de t
  // Pour un object
  // let o = {
  //   id: 1,
  //   name: 'chris'
  // }
  // Copie par référence
  // let p = o;
  // Copie sans lien de référence
  // let x = {...o}
}
