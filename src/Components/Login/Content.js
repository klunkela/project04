import React from "react";
import Preloader from "../Preloader/Preloader";
import {useDispatch, useSelector} from "react-redux";
import {getUserData_} from "../../redux/auth_selectors";
import {logout} from "../../redux/auth_reducer";

let Content = (props) => {
    let userData = useSelector(getUserData_)
    const dispatch = useDispatch()
    let logout_ = () => {
        dispatch(logout())
    }

    return <div>
        cnt

        <button onClick={() => logout_()}>LOGOUT</button>
        {
            userData.email &&
            <div>
                {userData.avatar}
                <br/>
                {userData.email}
                <br/>
                {userData.login}
                <br/>
                {userData.password}
                <br/>
                {userData.id}
            </div>
        }
        {
            !userData.email &&
            <Preloader/>
        }
    </div>
}

export default Content;

/*
function Content(props) {
    let [userData, setUserData] = useState({})

    useEffect(() => {
        userAPI.getLogin(props.id).then(res => {
            setUserData(res.data)
        })
    }, []);

    return <div>
        {
            userData.login && userData.email &&
            <div className={s.content}>
                <SideBar setIsAuth={props.setIsAuth} userData={userData} id={props.id}/>
                <Route
                    path="/heroes"
                    render={() => <Heroes id={props.id}/>}
                />

                <Route
                    path="/profile"
                    render={() => <Profile/>}
                />

                <Route
                    path="/users"
                    render={() => <Users/>}
                />


            </div>
        }
        {
            (!userData.login || !userData.email) &&
            <Preloader/>
        }
    </div>
}

*/