import { Injectable } from '@angular/core';
import {
    CanActivate,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanActivateChild
} from '@angular/router';


import { TokenProxy } from '../shared';

import { AuthService } from '../auth';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
    constructor(
        private service: AuthService,
        private router: Router,
        private tokenProxy: TokenProxy
    ) { }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | boolean {
        const token = this.tokenProxy.token;
        const url: string = state.url;
        // Store the attempted URL for redirecting
        this.service.redirectUrl = url;

        if (!token) {
            this.router.navigate(['/auth/login'], {
                queryParams: {
                    redirectUrl: url
                }
            });
            return false;
        }
        return true;
    }

    public canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | boolean {
        return this.canActivate(route, state);
    }
}
