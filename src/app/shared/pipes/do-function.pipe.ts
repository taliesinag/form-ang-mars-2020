import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doFunction'
})
export class DoFunctionPipe implements PipeTransform {

  transform(value: any, ...args: string[]): unknown {
    if (value && args.length > 0 ) {
      return value[args[0]]();
    }
    return null ;
  }

}
