import {combineReducers, applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk"
import comments from "./features/comments"
import question from "./features/question"
import user from "./features/user"
const combineRouter = combineReducers({
    user,
    question,
    comments
}) 

const store = createStore(combineRouter, applyMiddleware(thunk))

export default store
