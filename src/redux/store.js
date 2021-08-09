import {applyMiddleware, combineReducers, createStore} from "redux";
import profile_reducer from "./profile_reducer";
import dialogs_reducer from "./dialogs_reducer";
import users_reducer from "./users_reducer";
import auth_reducer from "./auth_reducer";
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from "redux-form";

let reducers = combineReducers(
    {
        profilePage: profile_reducer,
        dialogsPage: dialogs_reducer,
        usersPage: users_reducer,
        auth: auth_reducer,
        form: formReducer
    }
)

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store