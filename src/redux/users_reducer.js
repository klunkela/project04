import {loginAPI, usersAPI} from "../api/api";

const SET_USERS_COUNT = 'SET_USERS_COUNT'

let initialState = {
    users: [],
    usersCount: 0,
    pagesCount: 0,
    limit: 0,
    currentPage: 0
}

const auth_reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS_COUNT: {
            return {
                ...state,
                ...action.data
            }
        }
        default: {
            return state;
        }
    }
}

export let setUsersCount_ = (usersCount) => {
    return {type: SET_USERS_COUNT, data: {usersCount}}
}

export const setUsersCount = () => {
    return (dispatch) => {
        usersAPI.getUsersCount().then(res => {
            dispatch(setUsersCount_(res.data.value))
        })
    }
}


export default auth_reducer
