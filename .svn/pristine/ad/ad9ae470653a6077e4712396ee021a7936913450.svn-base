import { Pipe,  PipeTransform} from '@angular/core';

@Pipe({name: 'pipe-filter'})
export class PipeFilter implements PipeTransform {
    transform(tar: string, effective: any): void {

        const tarDate = new Date(tar);

        // return effective ? new Date( '01/01/1900 00:00:00' )toString()  === tarDate.toString() ? false : true : new Date( tar );
    }
}
