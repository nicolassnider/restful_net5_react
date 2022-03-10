import {
  Avatar,
  Button,
  Card,
  Container,
  Grid,
  TextField,
  Typography  
} from "@mui/material";
import React from "react";
import Icon from "@mui/material/Icon";
import PersonIcon from "@mui/icons-material/Person";
import useStyles from "../../theme/useStyles";
import { Link } from "react-router-dom";

const Login = () => {
  const classes = useStyles();
  return (
    <Container className={classes.containermt}>
      <Grid container justify="center">
        <Grid item lg={12} md={12}>
          <Card className={classes.card} align="center">
            <Avatar className={classes.avatar}>
              <Icon className={classes.icon}>
                <PersonIcon></PersonIcon>
              </Icon>
            </Avatar>
            <Typography variant="h5" color="primary">
              Login
            </Typography>
            <form className={classes.form}>
              <Grid container spacing={2}>
                <Grid item xs={12} className={classes.gridmb}>
                  <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    type="email"
                  />
                </Grid>
                <Grid item xs={12} className={classes.gridmb}>
                  <TextField
                    label="Password"
                    variant="outlined"
                    fullWidth
                    type="password"
                  />
                </Grid>
                <Grid item xs={12} className={classes.gridmb}>
                  <Button variant="contained" fullWidth color="primary">
                    Access
                  </Button>
                </Grid>
              </Grid>
              <Link to="/register" variant="body1" className={classes.link}>
                No account? Register
              </Link>
            </form>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
