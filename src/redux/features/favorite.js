import axios from "axios";
const initialState = {
  favorites: {},
  favoriteLoading: false,
};

const favorite = (state = initialState, action) => {
  switch (action.type) {
    case "favorite/get/pending":
      return {
        ...state,
        favoriteLoading: true,
      };
    case "favorite/get/fullfilled":
      return {
        ...state,
        favoriteLoading: false,
        favorites: action.payload,
      };
    case "favorite/get/rejected":
      return {
        ...state,
        favoriteLoading: false,
        error: action.error,
      };
    case "favorite/add/pending":
      return {
        ...state,
        favoriteLoading: true,
      };
    case "favorite/add/fullfilled":
      return {
        ...state,
        favoriteLoading: false,
        favorites: action.payload,
      };
    case "favorite/add/rejected":
      return {
        ...state,
        favoriteLoading: false,
        error: action.error,
      };
    case "favorite/delete/pending":
      return {
        ...state,
        favoriteLoading: true,
      };
    case "favorite/delete/fullfilled":
      return {
        ...state,
        favoriteLoading: false,
        favorites:{
            ...state.favorites.questions.filter((item)=>{
                return item._id !== action.payload
            })
        }
         ,
      };
    case "favorite/delete/rejected":
      return {
        ...state,
        favoriteLoading: false,
        error: action.error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default favorite;

export const getFavorite = () => {
  return async (dispatch, getState) => {
    const state = getState();
    dispatch({ type: "favorite/get/pending" });
    try {
      const data = await axios.get(`http://localhost:4000/favorite`, {
        headers: {
          Authorization: `Bearer ${state.user.token}`,
        },
      });
      dispatch({ type: "favorite/get/fullfilled", payload: data.data });
    } catch (err) {
      dispatch({ type: "favorite/get/rejected", error: err.toString() });
    }
  };
};

export const addToFavorite = (id) => {
  return async (dispatch, getState) => {
    const state = getState();
    dispatch({ type: "favorite/add/pending" });
    try {
      const data = await fetch(`http://localhost:4000/favorite/add/${id}`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${state.user.token}`,
        },
      });
      const res = await data.json();
      dispatch({ type: "favorite/add/fullfilled", payload: res });
    } catch (err) {
      dispatch({ type: "favorite/add/rejected", error: err.toString() });
    }
  };
};

export const deleteToFavorite = (id) => {
  return async (dispatch, getState) => {
    const state = getState();
    dispatch({ type: "favorite/delete/pending" });
    try {
        const data = await fetch(`http://localhost:4000/favorite/delete/${id}`, {
            method: "PATCH",
            headers: {
              Authorization: `Bearer ${state.user.token}`,
            },
          });
          const result = await data.json()
          console.log(result)
      dispatch({ type: "favorite/delete/fullfilled", payload: id });
    } catch (err) {
      dispatch({ type: "favorite/delete/rejected", error: err.toString() });
    }
  };
};
