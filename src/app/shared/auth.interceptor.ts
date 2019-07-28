import { HttpInterceptor, HttpRequest, HttpHandler, HttpParams, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducers';
import * as fromAuth from '../auth/auth.reducers';
import { switchMap, take } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private store: Store<AppState>) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return this.store.select('auth')
        .pipe(
            take(1),
            switchMap(
                (data: fromAuth.State) => {

                    const clonedReq = req.clone({
                        params: new HttpParams().set('auth', data.token)
                    });
                    return next.handle(clonedReq);
                }
            )
        );

    }
}
