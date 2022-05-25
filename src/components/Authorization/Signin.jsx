import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser } from '../../redux/features/user';
import styles from "./authorization.module.css"

const Signin = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleRegister = ()=>{
        dispatch(loginUser(email,password))
    }
    return (
        <div className={styles.mainBlock}>
            <div className={styles.emailInput}>
            <span>Email</span><br/>
            <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)}/>
            </div>
            <div className={styles.passwordInput}>
                <span>Password</span><br/>
            <input type="text" value={password} onChange={(e)=> setPassword(e.target.value)} />
            </div>
            <div>

            <button onClick={()=> handleRegister()}>авторизация</button>
            <Link to =  "/signup" > <button>регистрация</button></Link>
            </div>
            

        </div>
    );
};

export default Signin;