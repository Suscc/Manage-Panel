import { Component, OnInit, Input, Output, EventEmitter, Injectable, Pipe, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { animate, trigger, state, style, transition, keyframes } from '@angular/animations';
import { log } from 'util';

@Injectable()
export class NavigationService {
    // 导航栏事件分发
    public navigationClick = new EventEmitter<any>();
    // 子导航栏点击事件分发
    public hasSub = new EventEmitter<any>();
}

@Pipe({name: 'navigationPipe'})
export class NavigationPipe implements PipeTransform {
    transform(value: string, ...args: any[]) {
        if (value) {
            return value.charAt(0);
        }
    }
}

@Component({
    selector: 'app-nav-component',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.less'],
    animations: [
        trigger('visibility', [
            transition(':enter', [style({ height: 0, overflow: 'hidden' }), animate('.2s ease', style({ height: '*' }))]),
            transition(':leave', [style({ height: '*', overflow: 'hidden' }), animate('.2s ease', style({ height: 0 }))])
        ]),

        trigger('miniMode', [
            transition('true => false', [
                style({ width: '10%'}),
                animate('.2s ease-in', style({ width: '16%'}))
            ]),
            transition('false => true', [
                style({ width: '16%'}),
                animate('.2s ease-in', style({ width: '*', }))
            ])
        ])
    ]
})
export class NavigationComponent implements OnInit {

    @Input() private nav = []; // 导航栏数据结构
    @Input() private miniMode: boolean;  // 导航栏缩小模式
    private activeNav: any;
    private visibility;
    @Output() isExtend = false; // 是否为展开模式

    constructor(private navigationService: NavigationService) {}

    ngOnInit() {
    }

    // 主导航栏点击事件
    navSlide(act?: any): void {
        this.activeNav = act;
        if (act.href) {

            const str = act.href;
            // 事件分发，具体实现逻辑需引入导航栏服务
            this.navigationService.navigationClick.emit(str);
        }

        // 事件分发，具体实现逻辑需引入导航栏服务
        this.navigationService.hasSub.emit(act.sub ? true : false);
    }

    // 子导航栏点击事件
    subSlide(act?: any) {
        if (act.href) {

            const str = act.href;
            this.navigationService.navigationClick.emit(str);
        }
    }
}
