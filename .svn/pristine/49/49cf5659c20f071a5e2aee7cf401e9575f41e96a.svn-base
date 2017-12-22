import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from '../Loading/loading.component';
import { Handler, DataType } from '../../Utils/Handler';

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

    constructor(private http: HttpClient, private loadingService: LoadingService, private elmentRef: ElementRef, private handler: Handler) {

    }

    ngOnInit() {
        this.getWeatherInfo();
    }

    private getWeatherInfo(): void {
        this.handler
            .get('http://jsonip.com/?callback=')
            .then((res) => {
                this.ip = res.ip;
            })
            .then(() => {
                this.handler
                    .get(`https://free-api.heweather.com/v5/now?city=${this.ip}&key=56cb41b979f944b58c96e98c457a2f5b`)
                    .then((res) => {
                        this.location = res.HeWeather5[0].basic.city;
                        this.weatherState = res.HeWeather5[0].now.cond.txt;
                        this.weatherTemp = res.HeWeather5[0].now.tmp as string + '℃';

                        this.loadingService.hide.emit(null);
                    });
            }).catch((err: Error) => {

                console.log('出错啦' + err);
                this.loadingService.hide.emit(null);
                this.elmentRef.nativeElement.querySelector('.weatherDiv').style.display = 'none';
            });
    }
}
