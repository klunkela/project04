import {useState} from "react";
import React from "react";
import LoginForm from "./LoginForm";
import Register from "./Register";
import ReactModal from 'react-modal';
import s from './Login.module.css';

function Login(props) {
    let [isNewAcc, setIsNewAcc] = useState(false)

    let closeModal = () => {
        setIsNewAcc(false)
    };
    return (
        <div>
            <button onClick={() => setIsNewAcc(true)}>Create new account</button>
            <LoginForm/>

            <ReactModal ariaHideApp={false} isOpen={isNewAcc} onRequestClose={closeModal}>
                <Register/>
            </ReactModal>


        </div>
    )
}

export default Login
