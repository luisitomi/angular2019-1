import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncarTexto',
})
export class TruncarTextoPipe implements PipeTransform {
  transform(
    value: string,
    maxLength: number = 50,
    ellipsis: string = '...'
  ): string {
    if (!value) {
      return '';
    }
    if (value.length <= maxLength) {
      return value;
    }
    return value.substring(0, maxLength) + ellipsis;
  }
}
