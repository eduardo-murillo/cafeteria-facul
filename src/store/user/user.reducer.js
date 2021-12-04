import {HYDRATE} from "next-redux-wrapper";
import {USER_LOGIN, USER_LOGOUT} from "./user.action";

const INITIAL_STATE = {
  id: 0,
  name: "",
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HYDRATE:
      return {...state, ...action.payload};
    case USER_LOGIN:
      return {...state, ...action.payload};
    case USER_LOGOUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default reducer;
