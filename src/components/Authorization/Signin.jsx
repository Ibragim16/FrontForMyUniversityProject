import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../redux/features/user';
import styles from "./authorization.module.css"

const Signin = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const token = useSelector((state)=> state.user.token)

    const handleLogin = ()=>{
        dispatch(loginUser(email,password))
            navigate("/")
        
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

            <button onClick={()=> handleLogin()}>авторизация</button>
            <Link to =  "/signup" > <button>регистрация</button></Link>
            </div>
            

        </div>
    );
};

export default Signin;