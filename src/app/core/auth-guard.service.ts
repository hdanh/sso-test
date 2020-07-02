import { Observable } from 'rxjs';
import { filter, switchMap, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanActivateChild
} from '@angular/router';

import { AuthService } from '../auth';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private service: AuthService
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<boolean> {

        return this.service.canActivateProtectedRoutes$
            .pipe(tap(x => console.log('You tried to go to ' + state.url + ' and this guard said ' + x)));

    }
}
