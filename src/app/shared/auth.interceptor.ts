import { AuthService } from './../auth/auth.service';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpParams, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.authService.getToken();
        const clonedReq = req.clone({
            params: new HttpParams().set('auth', token)
        });
        return next.handle(clonedReq);
    }
}
