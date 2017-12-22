import {ElementRef} from '@angular/core';
export class Utilities {

    public static formatNum(num: number): string {

        if (num < 10) {
            return '0' + num;
        } else {

            return num.toString();
        }
    }

    public static formateData(day: number): string {

        if (day === 1) {
            return '一';
        } else if (day === 2) {
            return '二';
        } else if (day === 3) {
            return '三';
        } else if (day === 4) {
            return '四';
        } else if (day === 5) {
            return '五';
        } else if (day === 6) {
            return '六';
        } else if (day === 7) {
            return '日';
        }
    }

    public static log(msg?: any): void {
        console.log.apply(console, <any>[msg]);
    }
}
