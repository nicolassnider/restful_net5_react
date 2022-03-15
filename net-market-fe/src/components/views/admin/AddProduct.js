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

const AddProduct = () => {
  const classes = useStyles();
  return (
    <Container className={classes.containermt}>
      <Grid container justifyContent="center">
        <Grid item sm={6} xs={12}>
          <Typography variant="h4" className={classes.textTitle}>
            Add Products
          </Typography>
          <form onSubmit={(e) => e.preventDefault()} className={classes.form}>
            <TextField
              label="Product Name"
              variant="outlined"
              fullWidth
              className={classes.gridmb}
              InputLabelProps={{ shrink: true }}
            />

            <TextField
              label="Price"
              variant="outlined"
              fullWidth
              className={classes.gridmb}
              InputLabelProps={{ shrink: true }}
            />

            <TextField
              label="Brand"
              variant="outlined"
              fullWidth
              className={classes.gridmb}
              InputLabelProps={{ shrink: true }}
            />

            <TextField
              label="Stock"
              variant="outlined"
              fullWidth
              className={classes.gridmb}
              InputLabelProps={{ shrink: true }}
            />

            <TextField
              label="Description"
              variant="outlined"
              fullWidth
              className={classes.gridmb}
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
                <Avatar variant="square" className={classes.productAvatar} />
              </Grid>
            </Grid>

            <Button variant="contained" color="primary">
              Add
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AddProduct;
