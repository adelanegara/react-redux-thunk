import * as types from "./actionType";

const initialState = {
  users: [],
  user: {},
  loading: false,
};

const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case types.DELETE_USER:
      return {};
    default:
      return state;
  }
};

export default userReducers;
