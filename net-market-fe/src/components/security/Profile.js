import {
  Avatar,
  Button,
  Container,
  Divider,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import useStyles from "../../theme/useStyles";
import ImageUploader from "react-images-upload";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";

const Profile = (props) => {
  const classes = useStyles();

  const openDetails = () => {
    const id = "773194a9-6d14-417e-8728-6665b977baa2";
    props.history.push("/purchaseOrder/" + id);
  };
  return (
    <Container className={classes.containermt}>
      <Grid container spacing={2}>
        <Grid item md={3} cs={12}>
          <Typography variant="h5" className={classes.textTitle}>
            User´s profile
          </Typography>
          <form onSubmit={(e) => e.preventDefault()} className={classes.form}>
            <ImageUploader
              withIcon={false}
              buttonStyles={{
                borderRadius: "50%",
                padding: 10,
                margin: 0,
                position: "absolute",
                bottom: 15,
                left: 15,
              }}
              className={classes.imageUploader}
              buttonText={<AddAPhotoIcon />}
              label={
                <Avatar alt="profile" className={classes.avatarProfile} />
              }
              src="https://png.pngtree.com/png-clipart/20220109/original/pngtree-awesome-gamer-illustration-for-t-shirt-design-png-image_7021992.png"
              imgExtension={[".jpg", ".gif", ".png", ".jpeg"]}
              maxFileSize={5242880}
            />
            <TextField
              label="First Name"
              variant="outlined"
              fullWidth
              className={classes.gridmb}
              value="juan"
            />
            <TextField
              label="Last Name"
              variant="outlined"
              fullWidth
              className={classes.gridmb}
              value="perez"
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              className={classes.gridmb}
              value="juan.perez@gmail.com"
            />
            <Divider />
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              className={classes.gridmb}
              value="juan.perez@gmail.com"
            />
            <TextField
              label="Confirm Password"
              variant="outlined"
              fullWidth
              className={classes.gridmb}
              value="juan.perez@gmail.com"
            />
            <Button variant="contained" color="primary">
              Save
            </Button>
          </form>
        </Grid>
        <Grid item md={9} cs={12}>
          <Typography variant="h5" className={classes.textTitle}>
            My Purchases
          </Typography>
          <TableContainer className={classes.form}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Total</TableCell>
                  <TableCell>Paid</TableCell>
                  <TableCell>Delivered</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>773194a9-6d14-417e-8728-6665b977baa2</TableCell>
                  <TableCell>2020-12-15</TableCell>
                  <TableCell>$60</TableCell>
                  <TableCell>2020-12-15</TableCell>
                  <TableCell>
                    <CheckIcon className={classes.iconDelivered} />

                    <ClearIcon className={classes.iconNotDelivered} />
                  </TableCell>
                  <TableCell>
                    <Button variant="contained" onClick={openDetails}>
                      Details
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;
