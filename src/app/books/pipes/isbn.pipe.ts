import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isbn',
})
export class IsbnPipe implements PipeTransform {
  transform(value: string, seperator: string | null): string {
    console.log('Formatting isbn');

    const seperatorInternal = seperator ?? '-';

    return value.match(/.{1,3}/g)?.join(seperatorInternal) || '';
  }
}
