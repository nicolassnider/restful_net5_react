import {
  Button,
  Container,
  Grid,
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
import AddIcon from "@mui/icons-material/Add";
import { TestProductArray } from "../../data/dataTest";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const ProductsList = (props) => {
  const classes = useStyles();
  const products = TestProductArray;
  const addProduct = () => {
    props.history.push("/admin/addProduct");
  };
  const editProduct=(id)=>{
    props.history.push("/admin/editProduct/"+id)
  }
  return (
    <Container className={classes.containermt}
      style={{
        marginTop: 30,
      }}>
      <Grid container>
        <Grid item lg={6} sm={6} xs={12}>
          <Typography variant="h4" className={classes.textTitle}>
            Products
          </Typography>
        </Grid>
        <Grid item lg={6} sm={6} xs={12}>
          <Button
            variant="contained"
            color="inherit"
            className={classes.add_button}
            onClick={addProduct}
          >
            <AddIcon />
            Add Product
          </Button>
        </Grid>
      </Grid>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Brand</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.key}>
                <TableCell>{product.key}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.brandId}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" onClick={()=>{editProduct(product.key)}}>
                    <EditIcon />
                  </Button>
                  <Button variant="contained" color="secondary">
                    <DeleteIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ProductsList;
