import {applyMiddleware, combineReducers, createStore} from "redux";
import auth_reducer from "./auth_reducer";
import thunkMiddleware from "redux-thunk"
import profile_reducer from "./profile_reducer";

let reducers = combineReducers(
    {
        auth: auth_reducer,
        profilePage: profile_reducer
    }
)

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store