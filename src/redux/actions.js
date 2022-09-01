import axios from "axios";
import { config } from "../config";

export const getUsers = (users) => ({
  type: "GET_USERS",
  payload: users,
});

const userDeleted = () => ({
  type: "DELETE_USER",
});

export const loadUsers = () => {
  return function (dispatch) {
    axios
      .get(config.url_account)
      .then((resp) => {
        console.log("resp", resp);
        dispatch(getUsers(resp.data));
      })
      .catch((error) => console.log(error));
  };
};

export const deleteUser = (id) => {
  return function (dispatch) {
    axios
      .delete(config.url_account / id)
      .then((resp) => {
        console.log("resp", resp);
        dispatch(userDeleted());
      })
      .catch((error) => console.log(error));
  };
};
