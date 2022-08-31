import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { loadUsers } from "../../redux/actions";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  return (
    <div>
      <h2>Home </h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>No</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Contact</TableCell>
              <TableCell align="center">Address</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody></TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Home;
