import {
  Button,
  CardMedia,
  Container,
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

const ProductDetail = (props) => {
    const addToShoppingCart = ()=>{
        props.history.push("/shoppingCart")
    }
  const classes = useStyles();
  return (
    <Container className={classes.containermt}>
      <Typography variant="h4" className={classes.text_title}>
        Bomber Jacket Casu SD
      </Typography>
      <Grid container spacing={4}>
        <Grid item lg={8} md={8} xs={12}>
          <Paper className={classes.paper_img} variant="outlined" square>
            <CardMedia
              className={classes.media_detail}
              image="https://www.molinaripixel.com.ar/wp-content/uploads/2015/02/foto_cursos_fotografia_productos-356x534.jpg"
              title="product"
            />
          </Paper>
        </Grid>
        <Grid item lg={4} md={4} xs={12}>
          <TableContainer component={Paper} variant="outlined">
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Typography variant="subtitle2">Price</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">$9.99</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography variant="subtitle2">Quantity</Typography>
                  </TableCell>
                  <TableCell>
                    <TextField size="small" select variant="outlined">
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                    </TextField>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={2}>
                    <Button variant="contained" color="primary" size="large" onClick={addToShoppingCart}>
                      Add to Cart
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item lg={8} md={8} xs={12}>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <Typography className={classes.text_detail}>
                Price: $25.99
              </Typography>
              <Typography className={classes.text_detail}>
                Stock: 150
              </Typography>
              <Typography className={classes.text_detail}>
                Brand: Brand 1
              </Typography>
              <Typography className={classes.text_detail}>
                Category: Category 1
              </Typography>
            </Grid>
            <Grid item md={6}>
              <Typography className={classes.text_detail}>
                Description: 
              </Typography>
              <Typography className={classes.text_detail}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque ad nisi ducimus quidem et maiores labore magnam necessitatibus harum hic temporibus, modi eius quisquam atque doloribus dolorum? Quam, ipsam expedita?
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetail;
