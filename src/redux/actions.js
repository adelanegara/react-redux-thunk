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

// const userEdited = (id) => ({
//   type: "EDIT_USER",
//   id,
// });

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
    axios
      .delete(`${config.url_account}/${id}`)
      .then(() => {
        dispatch(userDeleted(id));
      })
      .catch((error) => console.log(error));
  };
};

export const addUser = (user) => {
  return (dispatch) => {
    axios
      .post(config.url_account, user)
      .then(() => {
        dispatch(userAdded());
      })
      .catch((error) => console.log(error));
  };
};

export const editUser = (id, user) => {
  return () => {
    axios
      .put(`${config.url_account}/${id}`, user)
      .catch((error) => console.log(error));
  };
};

export const getUserById = (id, setState) => {
  axios
    .get(`${config.url_account}/${id}`)
    .then((resp) => {
      const { name, address, email, contact } = resp.data;
      setState({
        name,
        address,
        email,
        contact,
      });
    })
    .catch((error) => console.log(error));
};
