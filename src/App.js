import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Signin from "./components/Authorization/Signin";
import Signup from "./components/Authorization/Signup";
import Favorites from "./components/Content/FavoritesBlock/Favorites";
import Header from "./components/header/Header";
import Main from "./components/Main";
import Question from "./components/OneQuestion/Question";
import { getQuestion } from "./redux/features/question";

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getQuestion())
    
  },[dispatch]);
  const {token} = useSelector(state => state.user)
  const state = useSelector(state => state.question.question)

  if(!token){
    return (
      <div className="App">
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/" element={<Navigate to="/signin" replace/>}/>

        </Routes>
      </div>
    );
  }
  return (
    <div className="App">
        <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/favorite" element={<Favorites/>}/>
        <Route path="/question/:id" element={<Question state = {state}/>}/>

      </Routes>
    </div>
  );
}

export default App;
