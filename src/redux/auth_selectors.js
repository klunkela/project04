import {createSelector} from "reselect";

export const isAuth_ = (state) => {
    return state.auth.isAuth
}

export const getUserId_ = (state) => {
    return state.auth.userId
}

export const getUserData_ = (state) => {
    return state.auth
}
