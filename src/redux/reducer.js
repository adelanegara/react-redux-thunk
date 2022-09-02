// import * as types from "./actionType";

const initialState = {
  users: [],
  user: {},
  loading: true,
};

const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case "DELETE_USER":
      const newUsers = state.users.filter((item) => {
        return item.id !== action.id;
      });
      console.log(state.users, newUsers);
      return {
        ...state,
        users: newUsers,
      };
    default:
      return state;
  }
};

export default userReducers;
