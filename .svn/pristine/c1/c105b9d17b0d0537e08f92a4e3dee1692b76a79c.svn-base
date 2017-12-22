import { Component, OnInit, Injectable, EventEmitter, Output } from '@angular/core';

@Injectable()
export class TabControlService {
    tabSuccess = new EventEmitter<any>();
}

@Component({

    selector: 'app-comm-page-back',
    template: '<button class="c-button" (click)="tabJump()">' +
    '返回' +
    '</button>'
})

export class PageBackComponent {

}

@Component({

    selector: 'app-comm-page-close',
    template: '<button class="c-button" ' +
                '*ngIf="original || tabList.length !== 1" ' +
                '(click)="original ? tabJump() : tabClose()"' +
                '>' +
                '{{original ? "返回" : "关闭"}}' +
              '</button>'
})

export class PageCloseComponent implements OnInit {

    private original?: any;
    @Output() currentTab;
    constructor(private tabControlService: TabControlService) { }

    ngOnInit() {
        this.tabControlService.tabSuccess.subscribe(() => setTimeout(this.original = this.currentTab.original, 0));
    }
}

@Component({

    selector: 'app-comm-page-close-back',
    template: '<button class="c-button" ' +
                '*ngIf="original || tabList.length !== 1" ' +
                '(click)="original ? tabJump() : tabClose()"' +
                '>' +
                '{{original ? "返回" : "关闭"}}' +
              '</button>'
})

export class PageCloseOrBackComponent implements OnInit {

    private original?: any;
    @Output() currentTab;
    constructor(private tabControlService: TabControlService) {}

    ngOnInit() {
        this.tabControlService.tabSuccess.subscribe(() => setTimeout(this.original = this.currentTab.original, 0));
    }
}
