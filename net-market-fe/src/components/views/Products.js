import { Pagination } from "@material-ui/lab";
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
import React, { useEffect, useState } from "react";
import { getProducts } from "../../actions/ProductActions";
import useStyles from "../../theme/useStyles";

const Products = (props) => {
  const [productsRequest, setProductsRequest] = useState({
    pageIndex: 1,
    pageSize: 2,
    search: "",
  });
  const openProduct = (id) => {
    props.history.push("/productDetail/" + id);
  };
  const classes = useStyles();
  const [productsPaginator, setProductsPaginator] = useState({
    count: 0,
    pageIndex: 0,
    pageSize: 0,
    pageCount: 0,
    data: [],
  });
  const handleChange=(event,value)=>{
    setProductsRequest((prev)=>({
      ...prev,
      pageIndex:value
    }))
  }
  useEffect(() => {
    const getProductsList = async () => {
      const response = await getProducts(productsRequest);
      setProductsPaginator(response.data);
    };
    getProductsList();
  }, [productsRequest]);

  if (!productsPaginator.data) {
    return null;
  }
  return (
    <Container
      className={classes.containermt}
      style={{
        marginTop: 30,
      }}
    >
      <Typography variant="h4" className={classes.textTitle}>
        Products
      </Typography>
      <Grid container spacing={4}>
        {productsPaginator.data.map((data) => (
          <Grid key={data.key} item lg={3} md={6} sm={6} xs={12} >
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
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={() => openProduct(data.key)}
                >
                  MORE DETAILS
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Pagination
        count={productsPaginator.pageCount}
        page={productsPaginator.pageIndex}
        onChange={handleChange}
      />
    </Container>
  );
};

export default Products;
