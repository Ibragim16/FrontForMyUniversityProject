import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser } from '../../redux/features/user';

const Signin = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleRegister = ()=>{
        dispatch(loginUser(email,password))
    }
    return (
        <div>
            <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)}/>
            <input type="text" value={password} onChange={(e)=> setPassword(e.target.value)} />
            <button onClick={()=> handleRegister()}>авторизация</button>
            <Link to =  "/signup" > <button>регистрация</button></Link>

        </div>
    );
};

export default Signin;