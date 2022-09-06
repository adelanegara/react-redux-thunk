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
      return {
        ...state,
        users: newUsers,
      };
    case "EDIT_USER":
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case "ADD_USER":
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default userReducers;
