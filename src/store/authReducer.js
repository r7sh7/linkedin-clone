import { LOGIN, LOGOUT } from "./authConstants";

const initState = {
  user: null,
};

export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT:
      return {
        user: null,
      };
    default:
      return state;
  }
};
