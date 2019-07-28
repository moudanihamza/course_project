import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as AuthAction from './auth.actions';
import { map, switchMap, mergeMap, tap } from 'rxjs/operators';
import { from } from 'rxjs';
import * as firebase from 'firebase';
import { Router } from '@angular/router';


@Injectable()
export class AuthEffects {

    @Effect()
    authSignUp = this.action$
        .pipe(
            ofType(AuthAction.TRY_SIGNUP),
            map((action: AuthAction.TrySignUp) => { return action.payload; }),
            switchMap(
                (authData: { email: string, password: string }) => {
                    return from(
                        firebase.auth().createUserWithEmailAndPassword(authData.email, authData.password)
                    );
                }),
            switchMap(() => from(firebase.auth().currentUser.getIdToken())),
            mergeMap(
                (token: string) => {
                    this.router.navigate(['/']);
                    return [
                        { type: AuthAction.SIGNUP },
                        {
                            type: AuthAction.SET_TOKEN,
                            payload: token
                        }
                    ];
                })
        );

    @Effect()
    authSignIn = this.action$
        .pipe(
            ofType(AuthAction.TRY_SIGNIN),
            map((action: AuthAction.TrySignIn) => action.payload),
            switchMap(
                (authData: { email: string, password: string }) => {
                    return from(
                        firebase.auth().signInWithEmailAndPassword(authData.email, authData.password)
                    );
                }
            ),
            switchMap(() => from(firebase.auth().currentUser.getIdToken())),
            mergeMap(
                (token: string) => {
                    this.router.navigate(['/']);
                    return [
                        { type: AuthAction.SIGNIN },
                        {
                            type: AuthAction.SET_TOKEN,
                            payload: token
                        }
                    ];
                }
            )

        );

    @Effect({ dispatch: false })
    authLogout = this.action$
        .pipe(ofType(AuthAction.LOGOUT),
            tap(
                () => {
                    firebase.auth().signOut();
                    this.router.navigate(['/']);
                }
            )
        );

    constructor(private action$: Actions, private router: Router) {

    }
}