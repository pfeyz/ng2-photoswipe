import { Injectable, PipeTransform, Pipe } from '@angular/core';

/**
 * Transforms any input value
 */
@Pipe({
  name: 'photoswipePipe'
})
@Injectable()
export class PhotoswipePipe implements PipeTransform {
  transform(value: any, args: any[] = null): string {
    return value;
  }
}
