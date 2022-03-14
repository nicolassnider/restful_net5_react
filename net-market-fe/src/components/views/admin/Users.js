import {
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import useStyles from "../../../theme/useStyles";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Users = () => {
  const classes = useStyles();
  return (
    <Container className={classes.containermt}>
      <Typography variant="h4" className={classes.text_title}>
        Users
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>User</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Admin</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>108f11f9-b5f6-46fb-b5cc-795f82f0536d</TableCell>
              <TableCell>Juan Perez</TableCell>
              <TableCell>Juan.perez@gmail.com</TableCell>
              <TableCell>
                <CheckIcon className={classes.icon_delivered}></CheckIcon>                
              </TableCell>
              <TableCell>
                <Button variant="contained" color="primary">
                  <EditIcon></EditIcon>
                </Button>
                <Button variant="contained" color="secondary">
                  <DeleteIcon></DeleteIcon>
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>5328d8c7-aaa5-4db6-8ce4-116440906da0</TableCell>
              <TableCell>Juan Perez2</TableCell>
              <TableCell>Juan.perez2@gmail.com</TableCell>
              <TableCell>
                <ClearIcon className={classes.icon_not_delivered}></ClearIcon>
              </TableCell>
              <TableCell>
                <Button variant="contained" color="primary">
                  <EditIcon></EditIcon>
                </Button>
                <Button variant="contained" color="secondary">
                  <DeleteIcon></DeleteIcon>
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Users;
