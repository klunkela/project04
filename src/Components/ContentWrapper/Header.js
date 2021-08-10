import React from 'react';
import header from './../../images/as.jpg';
import s from './Content.module.css';
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../redux/auth_reducer";
import {getUserData_} from "../../redux/auth_selectors";

function Header(props) {
    const dispatch = useDispatch()
    let logout_ = () => {
        dispatch(logout())
    }

    let ava = useSelector(getUserData_)
    ava = ava.avatar
    return (
        <div className={s.header}>
            <img className={s.logo} src={header}/>

            <div className={s.header_menu}>
                <button onClick={() => logout_()}>LOGOUT</button>
            </div>

            <img className={s.avatar} src={ava}/>
        </div>
    );
}

export default Header;