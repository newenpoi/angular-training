import { Pipe, PipeTransform } from '@angular/core';
import * as numeral from 'numeral';

@Pipe({ name: 'numeralFormat' })

export class NumeralFormatPipe implements PipeTransform {
    
    transform(value: any, format: string = '0,0'): string {
        return numeral(value).format(format.replace(',', ' '));
    }
}