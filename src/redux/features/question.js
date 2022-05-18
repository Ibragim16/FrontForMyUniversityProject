import axios from "axios"
const initialState = {
    questions: [],
    oneQuestion: {}
}


const question = (state = initialState, action)=>{
    switch (action.type){
        case "question/get/pending":
            return{
                ...state,
                questionLoading: true
            }
        case "question/get/fullfilled":
            return{
                ...state,
                questionLoading: false,
                question:[
                    ...action.payload.data
                ]
            }
        case "question/get/rejected":
            return{
                ...state,
                error: action.error
            }
        case "oneQuestion/get/pending":
            return{
                ...state,
                questionLoading: true
            }
        case "oneQuestion/get/fullfilled":
            return{
                ...state,
                questionLoading: false,
                oneQuestion: {...action.payload}
            }
        case "oneQuestion/get/rejected":
            return{
                ...state,
                error: action.error
            }
        default:
        return{
            ...state
        }
    }
}

export default question


export const getQuestion = ()=>{
    return async (dispatch, getState)=>{
        const state = getState()
        dispatch({type: "question/get/pending"})
        
        try{
            const data = await axios.get("http://localhost:4000/question",{
                headers: {
                    Authorization: `Bearer ${state.user.token}`,
                    "Content-type": "application/json",
                },
            })
            console.log(data)

            dispatch({type: "question/get/fullfilled", payload: data})
        }
        catch(err){
            dispatch({type: "question/get/rejected", error: err.toString()})
        }
    }
}

export const getOneQuestion = (id)=>{
    return async(dispatch, getState)=>{
        const state = getState()
        dispatch({type: "oneQuestion/get/pending"})
        try{
            const data = await axios.get(`http://localhost:4000/question/${id}`,{
                headers: {
                    Authorization: `Bearer ${state.user.token}`,
                    "Content-type": "application/json",
                },
            })
            dispatch({type: "oneQuestion/get/fullfilled", payload: data})
        }
        catch(err){
            dispatch({type: "oneQuestion/get/rejected", error: err.toString()})

        }
    }
}