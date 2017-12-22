import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService implements CanActivate {

    constructor(private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.checkLogin();
    }

    checkLogin(): boolean {

        if (environment.isLogin) {
            return true;
        }

        this.router.navigateByUrl('/login', {replaceUrl: true});

        return false;
    }
}
