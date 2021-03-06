import {
  Avatar,
  Button,
  Card,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/PersonAdd";
import React, { useState } from "react";
import useStyles from "../../theme/useStyles";
import { Link } from "react-router-dom";
import { registerUser } from "../../actions/UserActions";
import { useStateValue } from "../../context/store";

const RegisterUser = (props) => {

  const[{userSession},dispatch] = useStateValue()
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    userName: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const saveUser = () => {
    registerUser(user,dispatch).then((response) => {
      props.history.push("/");
      window.localStorage.setItem("token", response.data.token);
    });
  };
  const classes = useStyles();
  return (
    <Container
      className={classes.containermt}
      style={{
        marginTop: 30,
      }}
    >
      <Grid container justifyContent="center">
        <Grid item lg={12} md={12}>
          <Card className={classes.card} align="center">
            <Avatar className={classes.avatar}>
              <PersonIcon className={classes.icon} />
            </Avatar>
            <Typography variant="h5" color="primary">
              Register user
            </Typography>
            <form
              className={classes.form}
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <Grid container spacing={2}>
                <Grid
                  item
                  md={6}
                  xs={12}
                  className={classes.gridmb}
                  style={{ marginTop: 5, marginBottom: 20 }}
                >
                  <TextField
                    label="First Name"
                    variant="outlined"
                    fullWidth
                    name="firstName"
                    value={user.firstName}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid
                  item
                  md={6}
                  xs={12}
                  className={classes.gridmb}
                  style={{ marginTop: 5, marginBottom: 20 }}
                >
                  <TextField
                    label="Last name"
                    variant="outlined"
                    fullWidth
                    name="lastName"
                    value={user.lastName}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid
                  item
                  md={12}
                  xs={12}
                  className={classes.gridmb}
                  style={{ marginTop: 5, marginBottom: 20 }}
                >
                  <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid
                  item
                  md={12}
                  xs={12}
                  className={classes.gridmb}
                  style={{ marginTop: 5, marginBottom: 20 }}
                >
                  <TextField
                    label="Password"
                    variant="outlined"
                    fullWidth
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid
                  item
                  md={12}
                  xs={12}
                  className={classes.gridmb}
                  style={{ marginTop: 5, marginBottom: 20 }}
                >
                  <TextField
                    label="User Name"
                    variant="outlined"
                    fullWidth
                    name="userName"
                    value={user.userName}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid
                  item
                  md={12}
                  xs={12}
                  className={classes.gridmb}
                  style={{ marginTop: 5, marginBottom: 20 }}
                >
                  <Button
                    variant="contained"
                    fullWidth
                    color="primary"
                    onClick={saveUser}
                    type="submit"
                  >
                    register
                  </Button>
                </Grid>
              </Grid>
              <Link to="/login" variant="body1" className={classes.link}>
                Have user? Log in
              </Link>
            </form>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default RegisterUser;
