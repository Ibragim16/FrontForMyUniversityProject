import React, { useState } from 'react';
import  { useDispatch } from "react-redux"
import { Link } from 'react-router-dom';
import { registerUser } from '../../redux/features/user';

const Signup = () => {
    const dispatch = useDispatch()

    const [firstName, setfirstName]= useState("")
    const [lastName, setLastName]= useState("")
    const [phone, setPhone]= useState("")
    const [email, setEmail]= useState("")
    const [password, setPassword]= useState("")

    const handleSignUp = () => {
        dispatch(registerUser(firstName,lastName,phone,email,password))
    }

    return (
        <div>
            <input type="text" value = {firstName} onChange={(e)=>setfirstName(e.target.value)}/>
            <input type="text" value = {lastName} onChange = {(e)=> setLastName(e.target.value)} />
            <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} />
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} />

            <button onClick={()=> handleSignUp()}>Signup</button>
            <Link to = "/signin"><button>Signin</button></Link>
        </div>
    );
};

export default Signup;