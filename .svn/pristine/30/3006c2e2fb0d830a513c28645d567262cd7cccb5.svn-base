import { Component, OnInit } from '@angular/core';
import { Utilities } from '../../Utils/Utli';

@Component({

    selector: 'app-comm-timer',
    template: '<div class="timing">{{currentTime}}</div>',
    styles: ['div.timing {' +
            'color: #ffffff;' +
            'margin: 0 auto;' +
            'display: inline-block;}'
    ]
})

export class TimeComponent implements OnInit {

    private currentTime?: string;

    ngOnInit() {
        setInterval(() => this.timer(), 1000);
    }

    private timer(): void {

        let date = new Date();
        this.currentTime = date.getFullYear() + '年' + Utilities.formatNum(date.getMonth() + 1) + '月' + Utilities.formatNum(date.getDate()) + '日' + ' 星期' + Utilities.formateData(date.getDay()) + ' ' + Utilities.formatNum(date.getHours()) + ':' + Utilities.formatNum(date.getMinutes()) + ':' + Utilities.formatNum(date.getSeconds());
        date = null;
    }
}
