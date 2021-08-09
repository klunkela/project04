import {authAPI} from "../api/api";

const SET_USER_AUTH_DATA = 'SET_USER_AUTH_DATA'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const auth_reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_AUTH_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }

        default: {
            return state;
        }
    }
}

export let setUserAuthData = (email, userId, login) => {
    return {type: SET_USER_AUTH_DATA, data: {email, userId, login}}
}
export const getUserAuthData = () => {
    return (dispatch) => {
        authAPI.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {email, id, login} = response.data.data
                    dispatch(setUserAuthData(email, id, login));
                }
            });
    }
}

export default auth_reducer
