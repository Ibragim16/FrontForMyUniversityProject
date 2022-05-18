import axios from "axios"

const initialState = {
token: localStorage.getItem("token")
}

const user = (state = initialState, action)=>{
    switch(action.type){
        case "user/register/pending":
        return{
            ...state,
            registerLoading: true
        }
        case "user/register/fullfilled":
            return{
                registerLoading: false
            }
        case "user/register/rejected":
            return{
                ...state,
                registerLoading: false,
                error: action.error
            }
        case "user/login/pending":
            return{
                ...state,
                loginLoading: true
            }
        case "user/login/fullfilled":
            return{
                ...state,
                loginLoading: false,
                userInf: action.payload.payload
            }
        case "user/login/rejected":
            return{
                ...state,
                loginLoading: false,
                error: action.error
            }
         default:
            return state
    }
}

export default user

export const registerUser = (firstname, lastname, email, phone, password)=>{
    return async (dispatch)=>{
        dispatch({type:"user/register/pending"})
        try{
            await axios.post("http://localhost:4000/user/signup", {firstname, lastname, email, phone, password}, {headers:{
                "Content-type": "application/json"
            }})
            dispatch({type: "user/register/fullfilled"})
        }
        catch(err){
            dispatch({type: "user/register/rejected", error: err.toString()})
        }
    }
}

export const loginUser = (email, password)=>{
    return async (dispatch)=>{
        dispatch({type: "user/login/pending"})
        console.log(33)
        try{
            const data = await fetch("http://localhost:4000/user/signin",{
                method: "POST",
                headers:{
                    "Content-type": "application/json"
                },
                body: JSON.stringify({email, password})
            }
            )
            const user = await data.json()
            console.log(user)
            dispatch({type:"user/login/fullfilled", payload: user})
            localStorage.setItem("token", user.token)
        }
        catch(err){
            dispatch({type: "user/login/rejected", error: err.toString()})
        }
    }
}