import { Injectable, ElementRef } from '@angular/core';

@Injectable()
export class TokenService {

    private cookieData?: any;
    private fr_userId?: any;

    constructor(private elementRef: ElementRef) {}

    quitStorage(): void {

        this.elementRef.nativeElement.querySelector(window).addEventListener('beforeunload', () => {
            document.cookie = 'aiyan_old_userID=' + this.cookieData();
            document.cookie = 'aiyan_userID=' + this.fr_userId;
        });
    }

    cancelQuitStorage(): void {

        this.elementRef.nativeElement.querySelector(window).removeEventListener('beforeunload', () => {
            document.cookie = 'aiyan_adminUsers_token=;expires=-1';
            location.assign('/login.html'); // 跳到登录页
        });
    }
}
