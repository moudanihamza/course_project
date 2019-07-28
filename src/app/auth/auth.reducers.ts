import * as authActions from './auth.actions';

export interface State {
    token: string;
    isAuthenticated: boolean;
}

const initialState: State = {
    token: null,
    isAuthenticated: false
};

export function authReducer(state = initialState, action: authActions.AuthActions) {
    switch (action.type) {
        case authActions.SET_TOKEN:
            return {
                ...state,
                token: action.payload
            }

        case authActions.SIGNUP:

        case authActions.SIGNIN:
            return {
                ...state,
                isAuthenticated: true
            }

        case authActions.LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                token: null
            }

        default:
            return state;
    }

}