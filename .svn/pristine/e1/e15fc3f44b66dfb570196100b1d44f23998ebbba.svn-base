import {
    Component,
    ElementRef,
    AfterViewInit,
    OnInit, Injectable,
    EventEmitter,
    Input
    } from '@angular/core';
import { animate, trigger, state, style, transition, keyframes } from '@angular/animations';

@Injectable()
export class SearchService {

    recoveryFn?: any;
    confirmFn?: any;

    searchRecoveryShow = new EventEmitter<any>();
    searchRecoveryHide = new EventEmitter<any>();
    searchShow = new EventEmitter<any>();
    searchHide = new EventEmitter<any>();
}

@Component({
    selector: 'app-comm-search',
    templateUrl: './search.component.html',
    animations: [
        trigger(
            'visibility', [
                state('shown', style({
                    transform: 'translateY(0)',
                })),
                state('hidden', style({
                    transform: 'translateY(-100%)',
                })),

                transition('hidden => shown', animate('700ms ease-in-out', keyframes([
                    style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
                    style({ opacity: 1, transform: 'translateY(35px)', offset: 0.5 }),
                    style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 })])))
                ]
        )
    ]
})

export class SearchComponent implements AfterViewInit, OnInit {
    private visibility = 'hidden';
    private height?: number;
    private recoveryDis?: boolean;

    constructor(private elementRef: ElementRef, private searchService: SearchService) {}

    ngAfterViewInit(): void {

    }

    ngOnInit() {
        this.height = this.choseDom('.searchPanel').offsetHeight
            - this.choseDom('.searchPanel_tit').offsetHeight
            - this.choseDom('.c-controlArea-spacing-align').offsetHeight
            - 20;

        this.searchService.searchRecoveryShow.subscribe(() => this.recoveryDis = true);
        this.searchService.searchRecoveryHide.subscribe(() => this.recoveryDis = false);
        this.searchService.searchShow.subscribe(() => this.visibility = 'shown');
        this.searchService.searchHide.subscribe(() => this.visibility = 'hidden');
    }

    closePanel(): void {

        this.visibility = 'hidden';
    }

    confirm(): void {
        this.recoveryDis = true;
        this.searchService.confirmFn();
    }

    recovery(): void {
        this.recoveryDis = false;
        this.searchService.recoveryFn();
    }

    private choseDom(dom: string): any {
        const selectedDom = this.elementRef.nativeElement.querySelector(dom);
        return selectedDom;
    }
}

