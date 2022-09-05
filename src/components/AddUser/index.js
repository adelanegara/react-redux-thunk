import React, { useState } from "react";
import { Button, Box, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/actions";

const AddUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState();
  const [state, setState] = useState({
    name: "",
    address: "",
    email: "",
    contact: "",
  });

  const { name, address, email, contact } = state;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !address || !email || !contact) {
      setError("Please input all the field!");
    } else {
      dispatch(addUser(state));
      navigate("/");
      setError("");
    }
  };

  return (
    <>
      <Button
        style={{ marginTop: "30px" }}
        variant="contained"
        color="secondary"
        onClick={() => navigate("/")}
      >
        Back
      </Button>
      {error && <h3 style={{ color: "red" }}> {error} </h3>}
      <h1 style={{ marginBottom: "50px" }}>Add User</h1>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "45ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-basic"
          label="Name"
          name="name"
          value={name}
          type="text"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Address"
          name="address"
          value={address}
          type="text"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Email"
          value={email}
          name="email"
          type="email"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Contact"
          value={contact}
          name="contact"
          type="number"
          onChange={handleInputChange}
        />
      </Box>
      <Button variant="contained" type="submit" onSubmit={handleSubmit}>
        Submit
      </Button>
    </>
  );
};

export default AddUser;
