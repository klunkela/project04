import {loginAPI, usersAPI} from "../api/api";

const SET_USER_AUTH_DATA = 'SET_USER_AUTH_DATA'

let initialState = {
    id: null,
    login: null,
    password: null,
    email: null,
    avatar: null,
    heroes: null,
    heroesCount: null,
    isAuth: false
}

const auth_reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_AUTH_DATA: {
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

export let setIsAuth_ = (id, login, password, email, avatar, heroes, heroesCount, isAuth) => {
    if (isAuth) {
        setCookie('login', login, {secure: true, 'max-age': 3600})
        setCookie('password', password, {secure: true, 'max-age': 3600})
    } else {
        deleteCookie('login')
        deleteCookie('password')
    }
    return {type: SET_USER_AUTH_DATA, data: {id, login, password, email, avatar, heroes, heroesCount, isAuth}}
}

export const setIsAuth = (login, password) => {
    return (dispatch) => {
        loginAPI.checkUserInDB(login, password).then(id => {
            if (id > 0) {
                usersAPI.getUserData(id).then(res => {
                    let email = res.data.email
                    let avatar = res.data.avatar
                    let heroes = res.data.heroes
                    let heroesCount = res.data.heroesCount
                    dispatch(setIsAuth_(id, login, password, email, avatar, heroes, heroesCount, true))
                })

            }
        })
    }
}

export const regUser = (login, password, email) => {
    return (dispatch) => {
        loginAPI.regUser(login, password, email).then(res => {
                if (res.status === 201) {
                    dispatch(setIsAuth_(res.data.id, login, password, email,
                        '', {}, '', true))
                }
            }
        )
    }
}

export const logout = () => {
    return (dispatch) => {
        dispatch(setIsAuth_(null, null, null, null,
            null, null, null, false))

    }
}

function deleteCookie(name) {
    setCookie(name, "", {
        'max-age': -1
    })
}

function setCookie(name, value, options = {}) {

    options = {
        path: '/',
        // при необходимости добавьте другие значения по умолчанию
        ...options
    };

    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }

    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }

    document.cookie = updatedCookie;
}

export default auth_reducer
