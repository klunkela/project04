import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {isAuth_} from "./redux/auth_selectors";
import Login from "./Components/Login/Login";
import ContentWrapper from "./Components/Login/ContentWrapper";
import {Redirect, Route} from "react-router-dom";
import {setIsAuth} from "./redux/auth_reducer";

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function App() {
    const isAuth = useSelector(isAuth_)

    let login = getCookie("login")
    let password = getCookie("password")
    const dispatch = useDispatch()
    dispatch(setIsAuth(login, password))

    return (
        <div>

            {
                isAuth ?
                    <div>
                        <ContentWrapper/>
                        <Redirect to={'/'}/>
                    </div> :
                    <Redirect to={'/login'}/>
            }

            <Route path="/login" render={() => <Login/>}/>

        </div>
    );
}

/*
{
    isJustRegistered && <AfterRegisterPage id={id} setIsJustRegistered={setIsJustRegistered}/>
}
{
    isAuth_ && !isJustRegistered && <Content id={id}/>
}
{
    !isAuth_ && <Login setIsJustRegistered={setIsJustRegistered}/>
}
*/
export default App;
