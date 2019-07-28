import { Action } from '@ngrx/store';

export const TRY_SIGNUP = 'TRY_SIGNUP';
export const TRY_SIGNIN = 'TRY_SIGNIN';
export const SIGNIN = 'SIGNIN';
export const SIGNUP = 'SIGNUP';
export const LOGOUT = 'LOGOUT';
export const SET_TOKEN = 'SET_TOKEN';


export class TrySignIn implements Action {
    readonly type = TRY_SIGNIN;
    constructor(public payload: { email: string, password: string }) { }
}

export class TrySignUp implements Action {
    readonly type = TRY_SIGNUP;
    constructor(public payload: { email: string, password: string }) { }
}

export class SignIn implements Action {
    readonly type = SIGNIN;
}

export class SignUp implements Action {
    readonly type = SIGNUP;
}

export class LogOut implements Action {
    readonly type = LOGOUT;
}

export class SetToken implements Action {
    readonly type = SET_TOKEN;
    constructor(public payload: string) { }
}

export type AuthActions =
    TrySignIn |
    TrySignUp |
    SignIn |
    SignUp |
    LogOut |
    SetToken;