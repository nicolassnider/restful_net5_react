import {
  Avatar,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import useStyles from "../../../theme/useStyles";
import ImageUploader from "react-images-upload";

const EditProduct = () => {
  const classes = useStyles();
  return (
    <Container className={classes.containermt}>
      <Grid container justifyContent="center">
        <Grid item sm={6} x2={12}>
          <Typography variant="h4" className={classes.textTitle}>
            Edit Product
          </Typography>
          <form onSubmit={(e) => e.preventDefault()} className={classes.form}>
            <TextField
              label="Product Name"
              variant="outlined"
              fullWidth
              className={classes.gridmb}
              style={{ marginTop: 5, marginBottom: 20 }}
              InputLabelProps={{ shrink: true }}
            />

            <TextField
              label="Price"
              variant="outlined"
              fullWidth
              className={classes.gridmb}
              style={{ marginTop: 5, marginBottom: 20 }}
              InputLabelProps={{ shrink: true }}
            />

            <TextField
              label="Brand"
              variant="outlined"
              fullWidth
              className={classes.gridmb}
              style={{ marginTop: 5, marginBottom: 20 }}
              InputLabelProps={{ shrink: true }}
            />

            <TextField
              label="Stock"
              variant="outlined"
              fullWidth
              className={classes.gridmb}
              style={{ marginTop: 5, marginBottom: 20 }}
              InputLabelProps={{ shrink: true }}
            />

            <TextField
              label="Description"
              variant="outlined"
              fullWidth
              className={classes.gridmb}
              style={{ marginTop: 5, marginBottom: 20 }}
              InputLabelProps={{ shrink: true }}
              multiline
              rows={4}
            />
            <Grid container spacing={2}>
              <Grid item sm={6} xs={12}>
                <ImageUploader
                  withIcon={true}
                  buttonText="Search"
                  imgExtension={[".jpg", ".jpeg", ".png", ".gif"]}
                  maxFileSize={5242880}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <Avatar
                  variant="square"
                  style={{
                    width: 175,
                    height: 175,
                    backgroundColor: "#F2F2F2",
                  }}
                  className={classes.productAvatar}
                />
              </Grid>
            </Grid>

            <Button variant="contained" color="primary">
              Edit
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default EditProduct;
