import axios from "axios";
const initialState = {
  comments: [],
  commentsByQuestion: [],
};

const comments = (state = initialState, action) => {
  switch (action.type) {
    case "comments/add/pending":
      return {
        ...state,
        commentsLoading: true,
      };
    case "comments/add/fullfilled":
        console.log(action.payload)
      return {
        ...state,
        commentsByQuestion:[ 
            ...state.commentsByQuestion, 
            action.payload
        ],
        commentsLoading: false,
      };
    case "comments/add/rejected":
      return {
        ...state,
        commentsLoading: false,
        error: action.error,
      };
    case "comments/deleted/pending":
      return {
        ...state,
        commentsLoading: true,
      };
    case "comments/deleted/fullfilled":
      return {
        ...state,
        comments: [
          ...state.comments.filter((item) => {
            return item._id !== action.payload;
          }),
        ],
      };
    case "comments/getByQuestion/pending":
      return {
        ...state,
        commentsLoading: true,
      };
    case "comments/getByQuestion/fullfilled":
      return {
        ...state,
        commentsLoading: false,
        commentsByQuestion: action.payload,
      };
    case "comments/getByQuestion/rejected":
      return {
        ...state,
        commentsLoading: false,
        error: action.error,
      };
    case "comments/get/pending":
      return {
        ...state,
        commentsLoading: true,
      };
    case "comments/get/fullfilled":
      return {
        ...state,
        commentsLoading: false,
        comments: [...action.payload],
      };
    case "comments/get/rejected":
      return {
        ...state,
        commentsLoading: false,
        error: action.error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default comments;

export const addComment = (id, text) => {
  return async (dispatch, getState) => {
    dispatch({ type: "commnets/add/pending" });
    const state = getState();

    try {

      const data = await axios.post(
        `http://localhost:4000/comments/${id}`,
        {text},
        {
          headers: {
            Authorization: `Bearer ${state.user.token}`,
          },
        }
      );
      console.log(data.data)

      dispatch({ type: "comments/add/fullfilled", payload: data.data });
    } catch (err) {
      dispatch({ type: "comments/add/rejected", error: err.toString() });
    }
  };
};

export const deleteComment = (id) => {
  return async (dispatch, getState) => {
    const state = getState();
    dispatch({ type: "comments/deleted/pending" });
    try {
      axios.delete(`http://localhost:4000/comments/${id}`, {
        headers: {
          Authorization: `Bearer ${state.user.token}`,
        },
      });
      dispatch({ type: "comments/deleted/fullfilled", payload: id });
    } catch (err) {
      dispatch({ type: "comments/deleted/rejected", error: err.toString() });
    }
  };
};

export const getComments = () => {
  return async (dispatch, getState) => {
    const state = getState();

    dispatch({ type: "comments/get/pending" });
    try {
      const data = await axios.get("http://localhost:4000/comments", {
        headers: {
          Authorization: `Bearer ${state.user.token}`,
        },
      });
      dispatch({ type: "comments/get/fullfilled", payload: data });
    } catch (err) {

      dispatch({ type: "comments/get/rejected", error: err.toString() });
    }
  };
};

export const getCommentsByQuestionId = (id) => {
  return async (dispatch, getState) => {
    const state = getState();

    dispatch({ type: "comments/getByQuestion/pending" });
    try {
      const data = await axios.get(`http://localhost:4000/comments/${id}`, {
        headers: {
          Authorization: `Bearer ${state.user.token}`,
        },
      });

      dispatch({ type: "comments/getByQuestion/fullfilled", payload: data });
    } catch (err) {
      dispatch({
        type: "comments/getByQuestion/rejected",
        error: err.toString(),
      });
    }
  };
};
