import axios from "axios";

const initialState = {
  user: {
    loggedIn: false
  }
};

const UPDATE_USER = "UPDATE_USER";
const LOGOUT = "LOGOUT";
const LOGIN = "LOGIN";

export function updateUser(userObj) {
  return {
    type: UPDATE_USER,
    payload: userObj
  };
}

export const logout = () => {
  axios.delete("/auth/logout");
  return {
    type: LOGOUT,
    payload: null
  };
};

export const login = () => {
  return {
    type: LOGIN,
    payload: null
  };
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_USER:
      return { ...state, user: payload, user: {loggedIn: true} };
    case LOGOUT:
      return { ...state, user: { loggedIn: false } };
    case LOGIN:
      return { ...state, user: { loggedIn: true } };
    default:
      return state;
  }
}
