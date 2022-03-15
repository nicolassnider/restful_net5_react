import {
  Button,
  CardMedia,
  Container,
  Divider,
  Grid,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import useStyles from "../../theme/useStyles";
import { TestProductArray } from "../data/dataTest";
import DeleteIcon from "@mui/icons-material/Delete";

const ShoppingCart = (props) => {
  const productArray = TestProductArray;
  const processPurchase = () => {
    props.history.push("/purchaseProcess");
  };
  const classes = useStyles();
  return (
    <Container className={classes.containermt}
      style={{
        marginTop: 30,
      }}>
      <Typography variant="h4" className={classes.textTitle}>
        Shopping cart
      </Typography>
      <Grid container spacing={2}>
        <Grid item lg={9} md={8} sm={12} xs={12}>
          <TableContainer>
            <Table>
              <TableBody>
                {productArray.map((product) => (
                  <TableRow key={product.key}>
                    <TableCell>
                      <CardMedia
                        className={classes.imgProductCC}
                        image="https://www.molinaripixel.com.ar/wp-content/uploads/2015/02/foto_cursos_fotografia_productos-356x534.jpg"
                        title="product"
                      ></CardMedia>
                    </TableCell>
                    <TableCell>
                      <Typography className={classes.textDetail}>
                        {product.name}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography className={classes.textDetail}>
                        {product.price}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <TextField select variant="outlined" size="small">
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                      </TextField>
                    </TableCell>
                    <TableCell>
                      <DeleteIcon/>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Paper variant="outlined" square className={classes.paperPadding}>
            <Typography variant="h6" className={classes.textTitle}>
              Subtotal ({productArray.length}) Products
            </Typography>
            <Typography className={classes.textTitle}>$ 456456.60</Typography>
            <Divider className={classes.gridmb}
              style= {{marginTop: 5,marginBottom: 20}} />
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={processPurchase}
            >
              Buy
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ShoppingCart;
