import axios from "axios";
const initialState = {
  questions: [],
  oneQuestion: {},
};

const question = (state = initialState, action) => {
  switch (action.type) {
    case "question/get/pending":
      return {
        ...state,
        questionLoading: true,
      };
    case "question/get/fullfilled":
      return {
        ...state,
        questionLoading: false,
        question: [...action.payload.data],
      };
    case "question/get/rejected":
      return {
        ...state,
        error: action.error,
      };
    case "oneQuestion/get/pending":
      return {
        ...state,
        questionLoading: true,
      };
    case "oneQuestion/get/fullfilled":
      return {
        ...state,
        questionLoading: false,
        oneQuestion: { ...action.payload },
      };
    case "oneQuestion/get/rejected":
      return {
        ...state,
        error: action.error,
      };
    case "question/uppRaiting/pending":
      return {
        ...state,
        uppRaitingLoading: true,
      };
    case "question/uppRaiting/fullfilled":
      return {
        ...state,
        uppRaitingLoading: false,
        questions:[
            ...state.questions.map((item)=>{
               
                   if(item._id === action.id){
                    return (
                        item.raiting.filter((user)=>{
                            return(
                                item
                            )
                        })
                    )
                   }
                
            })
        ]
      };
    case "question/uppRaiting/rejected":
      return {
        ...state,
        error: action.error
      };
    case "question/downRaiting/pending":
      return {
        ...state,
        downRaitingLoading: true,
      };
    case "question/downRaiting/fullfilled":
      return {
        ...state,
        downRaitingLoading: false,
      };
    case "question/downRaiting/rejected":
      return {
        ...state,
        error: action.error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default question;

export const getQuestion = () => {
  return async (dispatch, getState) => {
    const state = getState();
    dispatch({ type: "question/get/pending" });

    try {
      const data = await axios.get("http://localhost:4000/question", {
        headers: {
          Authorization: `Bearer ${state.user.token}`,
          "Content-type": "application/json",
        },
      });

      dispatch({ type: "question/get/fullfilled", payload: data });
    } catch (err) {
      dispatch({ type: "question/get/rejected", error: err.toString() });
    }
  };
};

export const getOneQuestion = (id) => {
  return async (dispatch, getState) => {
    const state = getState();
    dispatch({ type: "oneQuestion/get/pending" });
    try {

      const data = await axios.get(`http://localhost:4000/question/${id}`, {
        headers: {
          Authorization: `Bearer ${state.user.token}`,
          "Content-type": "application/json",
        },
      });
      dispatch({ type: "oneQuestion/get/fullfilled", payload: data });
    } catch (err) {
      dispatch({ type: "oneQuestion/get/rejected", error: err.toString() });
    }
  };
};

export const uppRaiting = (id) => {
  return async (dispatch, getState) => {
    const state = getState();
    dispatch({ type: "question/uppRaiting/pending" });
    try {
      const data = axios.patch(`http://localhost:4000/question/${id}`, {
        headers: {
          Authorization: `Bearer ${state.user.token}`,
          "Content-type": "application/json",
        },
      });
      dispatch({ type: "question/uppRaiting/fullfilled", payload: data });
    } catch (err) {
      dispatch({ type: "question/uppRaiting/rejected", error: err.toString() });
    }
  };
};

export const downRaiting = (id) => {
  return async (dispatch, getState) => {
    const state = getState();
    dispatch({ type: "question/downRaiting/pending" });
    try {
      const data = axios.patch(`http://localhost:4000/question/${id}`, {
        headers: {
          Authorization: `Bearer ${state.user.token}`,
          "Content-type": "application/json",
        },
      });
      dispatch({ type: "question/downRaiting/fullfilled", payload: data });
    } catch (err) {
      dispatch({
        type: "question/downRaiting/rejected",
        error: err.toString(),
      });
    }
  };
};
