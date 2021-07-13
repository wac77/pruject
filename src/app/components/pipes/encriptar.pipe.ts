import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'encriptar'
})
export class EncriptarPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
