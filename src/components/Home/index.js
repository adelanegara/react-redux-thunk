import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { loadUsers, deleteUser } from "../../redux/actions";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.data);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure want to delete this user?")) {
      dispatch(deleteUser(id));
    }
  };

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  return (
    <div>
      <h1>Home </h1>
      <div className="addContainer">
        <Button
          style={{ marginBottom: "50px" }}
          variant="contained"
          onClick={() => navigate("/add")}
        >
          Add User
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ bgcolor: "primary.main" }}>
              <TableCell>No</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Address</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Contact</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users &&
              users?.map((user, index) => (
                <TableRow
                  key={user.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell align="center">{user.name}</TableCell>
                  <TableCell align="center">{user.address}</TableCell>
                  <TableCell align="center">{user.email}</TableCell>
                  <TableCell align="center">{user.contact}</TableCell>
                  <TableCell align="center">
                    <ButtonGroup
                      disableElevation
                      variant="contained"
                      aria-label="Disabled elevation buttons"
                    >
                      <Button
                        color="error"
                        onClick={() => handleDelete(user.id)}
                      >
                        DELETE
                      </Button>
                      <Button>EDIT</Button>
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Home;
