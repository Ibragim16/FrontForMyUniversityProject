import {combineReducers, applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk"
import question from "./features/question"
import user from "./features/user"
const combineRouter = combineReducers({
    user,
    question
}) 

const store = createStore(combineRouter, applyMiddleware(thunk))

export default store
