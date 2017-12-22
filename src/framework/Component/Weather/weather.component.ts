import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from '../Loading/loading.component';

@Component({

    selector: 'app-comm-weather',
    template: '<div class="weatherDiv">{{location}} | {{weatherState}} | {{weatherTemp}}</div>',
    styles: ['div.weatherDiv {' +
                'color: #fff;' +
                'display: inline-block;' +
                'margin: 0 auto}'
    ]
})

export class WeatherComponent implements OnInit {

    private ip?: string;
    private location: '位置';
    private weatherState: '天气状态';
    private weatherTemp: String = '目前温度';

    constructor(
        private http: HttpClient,
        private loadingService: LoadingService,
        private elmentRef: ElementRef,
    ) {

    }

    ngOnInit() {
    }
}
