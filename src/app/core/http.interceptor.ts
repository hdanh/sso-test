import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
  constructor(private snackBar: MatSnackBar) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap((evt) => {
        if (evt instanceof HttpResponse) {
          if (evt.body) {
            console.log(evt);
          }
        }
        // if (evt instanceof HttpRequest) {
        //     this.snackBar.open('Yeah this is a request', 'Request');
        // }
      }),
      catchError((err: any) => {
        // if (err instanceof HttpErrorResponse) {
        //     try {
        //         alert(JSON.stringify(err));
        //     } catch (e) {
        //     }
        // }
        return of(err);
      })
    );
  }
}
