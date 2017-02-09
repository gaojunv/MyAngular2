import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'keys'})
export class KeysPipe implements PipeTransform {
    transform(value: any, args: string[]): string[] {
        if (typeof(value) !== 'object')
            throw 'keysPipe value must be object';

        return Object.keys(value);
    }
}