import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import useStyles from "../../theme/useStyles";
import { TestProductArray } from "../data/dataTest";

const Products = (props) => {
  const productsArray = TestProductArray;
  const openProduct = (id)=>{
      props.history.push('/productDetail/'+id);
  }
  const classes = useStyles();
  return (
    <Container className={classes.containermt}
      style={{
        marginTop: 30,
      }}>
      <Typography variant="h4" className={classes.textTitle}>
        Products
      </Typography>
      <Grid container spacing={4}>
        {productsArray.map((data) => (
          <Grid item lg={3} md={6} sm={6} xs={12} key={data.key}>
            <Card>
              <CardMedia
                className={classes.media}
                image="https://www.molinaripixel.com.ar/wp-content/uploads/2015/02/foto_cursos_fotografia_productos-356x534.jpg"
                title="title"
              >
                <Avatar className={classes.price} variant="square">
                  ${data.price}
                </Avatar>
              </CardMedia>
              <CardContent>
                <Typography variant="h6" className={classes.textCard}>
                  {data.name}
                </Typography>
                <Button variant="contained" color="primary" fullWidth onClick={()=> openProduct(data.key)}>
                  MORE DETAILS
                </Button>
              </CardContent>
            </Card>
          </Grid>
  ))}
      </Grid>
    </Container>
  );
};

export default Products;
