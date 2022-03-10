import {
  Button,
  Card,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import useStyles from "../../theme/useStyles";

const clearProduct = {
  name: "",
  stock: "",
  brandId: "",
  //brand: {},
  categoryId: "",
  //category: {},
  price: "",
  image: "",
};

const Product = () => {
  const [product, setProduct] = useState({
    name: "",
    stock: "",
    brandId: "",
    //brand: {},
    categoryId: "",
    //category: {},
    price: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const saveData = () => {
    console.log(product);
    setProduct(clearProduct);
  };

  const openDialog = () => {
    setOpen(true);
    console.log("edit");
  };

  const deleteData = () => {
    console.log("delete");
  };

  const [productEdit, setProductEdit] = useState({
    nameEdit: "",
    stockEdit: "",
    brandIdEdit: "",
    //brand: {},
    categoryIdEdit: "",
    //category: {},
    priceEdit: "",
    imageEdit: "",
  });

  const handleChangeEdit = (e) => {
    const { name, value } = e.target;
    setProductEdit((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [open, setOpen] = useState(false);

  const closeDialog = () => {
    setOpen(false);
  };

  const editData = () => {
    console.log(productEdit);
    closeDialog();
  };

  const classes = useStyles();
  return (
    <Container className={classes.containermt}>
      <Grid container justify="center">
        <Grid item lg={12} md={12}>
          <Card className={classes.card} align="center">
            <Typography variant="h4">Products</Typography>
            <form
              className={classes.form}
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <Grid container spacing={2}>
                <Grid item md={12} xs={12} className={classes.gridmb}>
                  <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    name="name"
                    value={product.name}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item md={12} xs={12} className={classes.gridmb}>
                  <TextField
                    label="Stock"
                    variant="outlined"
                    fullWidth
                    name="stock"
                    value={product.stock}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item md={12} xs={12} className={classes.gridmb}>
                  <TextField
                    select
                    label="Brand"
                    variant="outlined"
                    fullWidth
                    align="left"
                    name="brandId"
                    value={product.brandId}
                    onChange={handleChange}
                  >
                    <MenuItem value="brand1">brand1</MenuItem>
                    <MenuItem value="brand2">brand2</MenuItem>
                    <MenuItem value="brand3">brand3</MenuItem>
                  </TextField>
                </Grid>

                <Grid item md={12} xs={12} className={classes.gridmb}>
                  <TextField
                    select
                    label="Category"
                    variant="outlined"
                    fullWidth
                    align="left"
                    name="categoryId"
                    value={product.categoryId}
                    onChange={handleChange}
                  >
                    <MenuItem value="categ1">categ1</MenuItem>
                    <MenuItem value="categ2">categ2</MenuItem>
                    <MenuItem value="categ3">categ3</MenuItem>
                  </TextField>
                </Grid>
                <Grid item md={12} xs={12} className={classes.gridmb}>
                  <TextField
                    label="Price"
                    variant="outlined"
                    fullWidth
                    name="price"
                    value={product.price}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item md={12} xs={12} className={classes.gridmb}>
                  <TextField
                    label="Image"
                    variant="outlined"
                    fullWidth
                    name="image"
                    value={product.image}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item md={12} xs={12} className={classes.gridmb}>
                  <Button
                    variant="contained"
                    fullWidth
                    color="primary"
                    type="submit"
                    onClick={saveData}
                  >
                    Save
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Card>
        </Grid>
      </Grid>
      <TableContainer component={Paper} className={classes.containermt}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Stock</TableCell>
              <TableCell>BrandId</TableCell>
              <TableCell>Brand</TableCell>
              <TableCell>CategoryId</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Image</TableCell>
              <TableCell align="center" colSpan={2}>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Prod 1 </TableCell>
              <TableCell>120 </TableCell>
              <TableCell>1 </TableCell>
              <TableCell>Brand 1 </TableCell>
              <TableCell>2 </TableCell>
              <TableCell>Category 2</TableCell>
              <TableCell>$1237 </TableCell>
              <TableCell>Image </TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={openDialog}
                >
                  Edit
                </Button>
              </TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={deleteData}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog
        open={open}
        onClose={closeDialog}
        maxWidth="xs"
        fullWidth
        align="center"
      >
        <DialogTitle>Edit Product</DialogTitle>
        <DialogContent>
          <form onSubmit={(e) => e.preventDefault()}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              name="nameEdit"
              className={classes.gridmb}
              value={productEdit.nameEdit}
              onChange={handleChangeEdit}
            />
            <TextField
              label="Stock"
              variant="outlined"
              fullWidth
              name="stockEdit"
              className={classes.gridmb}
              value={productEdit.stockEdit}
              onChange={handleChangeEdit}
            />
            <TextField
              select
              label="Brand"
              variant="outlined"
              fullWidth
              align="left"
              name="brandIdEdit"
              className={classes.gridmb}
              value={productEdit.brandIdEdit}
              onChange={handleChangeEdit}
            >
              <MenuItem value="brand1">brand1</MenuItem>
              <MenuItem value="brand2">brand2</MenuItem>
              <MenuItem value="brand3">brand3</MenuItem>
            </TextField>
            <TextField
              select
              label="Category"
              variant="outlined"
              fullWidth
              align="left"
              name="categoryIdEdit"
              className={classes.gridmb}
              value={productEdit.categoryIdEdit}
              onChange={handleChangeEdit}
            >
              <MenuItem value="categ1">categ1</MenuItem>
              <MenuItem value="categ2">categ2</MenuItem>
              <MenuItem value="categ3">categ3</MenuItem>
            </TextField>
            <TextField
              label="Price"
              variant="outlined"
              fullWidth
              name="priceEdit"
              className={classes.gridmb}
              value={productEdit.priceEdit}
              onChange={handleChangeEdit}
            />
            <TextField
              label="Image"
              variant="outlined"
              fullWidth
              name="imageEdit"
              className={classes.gridmb}
              value={productEdit.imageEdit}
              onChange={handleChangeEdit}
            />
            <Button
              variant="contained"
              fullWidth
              color="primary"
              className={classes.gridmb}
              type="submit"
              onClick={editData}
            >
              Save
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default Product;
