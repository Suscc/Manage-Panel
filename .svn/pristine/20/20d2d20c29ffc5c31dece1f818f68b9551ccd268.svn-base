import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'character-filter'})
export class CharacterFilter implements PipeTransform {
    transform(value: string): string {

        if (!value) {
            return;
        }

        return value.replace(/&lt;/g, '<' );
    }
}
