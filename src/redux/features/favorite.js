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
        console.log(action.payload)
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
    default:
      return {
        ...state,
      };
  }
};

export default favorite;

export const getFavorite = () => {
    console.log(54)
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
      const data = await axios.patch(`http://localhost:4000/favorite/${id}`, {
        headers: {
          Authorization: `Bearer ${state.user.token}`,
        },
      });
      dispatch({ type: "favorite/add/fullfilled", payload: data });
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
      const data = await axios.patch(`http://localhost:4000/favorite/${id}`, {
        headers: {
          Authorization: `Bearer ${state.user.token}`,
        },
      });
      dispatch({ type: "favorite/delete/fullfilled", payload: data });
    } catch (err) {
      dispatch({ type: "favorite/delete/rejected", error: err.toString() });
    }
  };
};
