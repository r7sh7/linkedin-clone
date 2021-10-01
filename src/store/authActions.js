import { LOGIN, LOGOUT } from "./authConstants";
import { auth, provider } from "../config/firebase";

export const login = (userAuth) => {
  return (dispatch) => {
    dispatch({
      type: LOGIN,
      payload: userAuth,
    });
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch({
      type: LOGOUT,
    });
  };
};

export function signInAPI() {
  return (dispatch) => {
    auth
      .signInWithPopup(provider)
      .then((payload) => {
        dispatch({
          type: LOGIN,
          payload: payload.user,
        });
      })
      .catch((err) => alert(err.message));
  };
}

export function getUserAuth() {
  return (dispatch) => {
    auth.onAuthStateChanged((userAuth) => {
      console.log(userAuth);
      if (userAuth) {
        dispatch(login(userAuth));
      } else {
        dispatch(logout());
      }
    });
  };
}
