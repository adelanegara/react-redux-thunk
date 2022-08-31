import axios from "axios";
import * as types from "./actionType";

const getUsers = (users) => ({
  type: types.GET_USERS,
  PAYLOAD: users,
});

export const loadUsers = () => {
  return function (dispatch) {
    axios
      .get(`${process.env.APP_API}`)
      .then((resp) => {
        console.log("resp", resp);
        dispatch(getUsers(resp.data));
      })
      .catch((error) => console.log(error));
  };
};
