import React from "react";
import Preloader from "../Preloader/Preloader";
import {useSelector} from "react-redux";
import {getUserData_} from "../../redux/auth_selectors";
import Wrapper from "../ContentWrapper/Wrapper";

let ContentWrapper = (props) => {
    let userData = useSelector(getUserData_)

    return <div>
        {userData.login ? <Wrapper/> : <Preloader/>}
    </div>
}

export default ContentWrapper;
