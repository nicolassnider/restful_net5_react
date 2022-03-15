import {
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import useStyles from "../../../theme/useStyles";

const EditUser = (props) => {
  const classes = useStyles();

  return (
    <Container className={classes.containermt}>
      <Grid container justifyContent="center">
        <Grid item lg={6} sm={12}>
          <Typography variant="h4" className={classes.textTitle}>
            Edit User
          </Typography>
          <form onSubmit={(e) => e.preventDefault()} className={classes.form}>
            <TextField
              label="Name"
              variant="filled"
              value="Juan Perez"
              fullWidth
              disabled
              className={classes.gridmb}
            />
            <TextField
              label="Email"
              variant="filled"
              value="juan.perez@gmail.com"
              fullWidth
              disabled
            />
            <FormControl className={classes.checkbox}>
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Admin Profile"
              />
            </FormControl>
            <Divider/>
            <Button variant="contained" color="primary">
              Update
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default EditUser;
