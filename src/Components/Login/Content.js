import React from "react";

let Content = (props) => {
    return <br/>
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