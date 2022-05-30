import axios from "axios";

const initialState = {
  token: localStorage.getItem("token"),
  userId: localStorage.getItem("id"),
  firstname: "",
  img: "",
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "user/register/pending":
      return {
        ...state,
        registerLoading: true,
      };
    case "user/register/fullfilled":
      return {
        registerLoading: false,
      };
    case "user/register/rejected":
      return {
        ...state,
        registerLoading: false,
        error: action.error,
      };
    case "user/login/pending":
      return {
        ...state,
        loginLoading: true,
      };
    case "user/login/fullfilled":
      return {
        ...state,
        loginLoading: false,
        userInf: action.payload.payload,
      };
    case "user/login/rejected":
      return {
        ...state,
        loginLoading: false,
        error: action.error,
      };
    case "user/get/pending":
      return {
        ...state,
        userLoading: true,
      };
    case "user/get/fullfilled":
      return {
        ...state,
        userLoading: false,
        firstname: action.payload.firstName,
        img: action.payload.img,
      };
    case "user/get/rejected":
      return {
        ...state,
        userLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default user;

export const registerUser = (firstname, lastname, email, phone, password) => {
  return async (dispatch) => {
    dispatch({ type: "user/register/pending" });
    try {
      await axios.post(
        "http://localhost:4000/user/signup",
        { firstname, lastname, email, phone, password },
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      dispatch({ type: "user/register/fullfilled" });
    } catch (err) {
      dispatch({ type: "user/register/rejected", error: err.toString() });
    }
  };
};

export const loginUser = (email, password) => {
  return async (dispatch) => {
    dispatch({ type: "user/login/pending" });
    console.log(33);
    try {
      const data = await fetch("http://localhost:4000/user/signin", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const user = await data.json();
      console.log(user);
      dispatch({ type: "user/login/fullfilled", payload: user });
      localStorage.setItem("token", user.token);
      localStorage.setItem("id", user.payload.id);
    } catch (err) {
      dispatch({ type: "user/login/rejected", error: err.toString() });
    }
  };
};

export const getUser = (id) => {
  return async (dispatch, getState) => {
    const state = getState();
    dispatch({ type: "user/get/pending" });
    try {
      const res = await fetch(`http://localhost:4000/user`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${state.user.token}`,
        },
      });
      const user = await res.json();
      dispatch({ type: "user/get/fullfilled", payload: user });
    } catch (err) {
      dispatch({ type: "user/get/rejected", error: err.toString() });
    }
  };
};
