import axios from "axios";
import { config } from "../config";

const getUsers = (users) => ({
  type: "GET_USERS",
  payload: users,
});

const userDeleted = (id) => ({
  type: "DELETE_USER",
  id,
});

export const loadUsers = () => {
  return (dispatch) => {
    axios
      .get(config.url_account)
      .then((resp) => {
        dispatch(getUsers(resp.data));
      })
      .catch((error) => console.log(error));
  };
};

export const deleteUser = (id) => {
  return (dispatch) => {
    dispatch(userDeleted(id));
  };
};
