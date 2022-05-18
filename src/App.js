import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Signin from "./components/Authorization/Signin";
import Signup from "./components/Authorization/Signup";
import Header from "./components/header/Header";
import Main from "./components/Main";
import Question from "./components/OneQuestion/Question";

function App() {
  const {token} = useSelector(state => state.user)
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
        <Route path="/question/:id" element={<Question/>}/>

      </Routes>
    </div>
  );
}

export default App;
