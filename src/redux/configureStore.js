import {combineReducers, applyMiddleware, createStore, legacy_createStore } from "redux"
import thunk from "redux-thunk"
import comments from "./features/comments"
import favorite from "./features/favorite"
import question from "./features/question"
import user from "./features/user"
const combineRouter = combineReducers({
    user,
    question,
    comments,
    favorite
}) 

const store = legacy_createStore(combineRouter, applyMiddleware(thunk))

export default store
