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

const userAdded = () => ({
  type: "ADD_USER",
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

export const addUser = (user) => {
  return (dispatch) => {
    axios
      .post(config.url_account, user)
      .then((resp) => {
        console.log("resp", resp);
        dispatch(userAdded());
      })
      .catch((error) => console.log(error));
  };
};
