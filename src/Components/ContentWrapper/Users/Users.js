import React, {useEffect, useState} from 'react';

import s from './Users.module.css';
import {useDispatch, useSelector} from "react-redux";
import {setUsersCount} from "../../../redux/users_reducer";


function Users(props) {
let usersCount = useSelector((state) => state.usersPage.usersCount)
    let dispatch = useDispatch()
    dispatch(setUsersCount())
    return (
        <div>
            {usersCount}
        </div>
    );
}

export default Users;