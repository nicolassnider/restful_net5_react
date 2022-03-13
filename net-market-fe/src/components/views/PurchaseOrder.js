import {
  Button,
  CardMedia,
  Container,
  Divider,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import useStyles from "../../theme/useStyles";

const PurchaseOrder = (props) => {
  const { id } = props.match.params;
  const messageDelivery = "Delivered 2020-12-26";
  const messagePaid = "Paid 2020-12-20";
  const classes = useStyles();
  return (
    <Container className={classes.containermt}>
      <Typography variant="h5" className={classes.text_title}>
        Purchase Order: {id.toUpperCase()}
      </Typography>
      <Grid container spacing={2} className={classes.paper_padding}>
        <Grid item md={8} xs={12}>
          <Typography variant="h6" className={classes.text_title}>
            Shipping
          </Typography>
          <Typography variant="body2" className={classes.text_shipping}>
            Names: Juan Perez
          </Typography>
          <Typography variant="body2" className={classes.text_shipping}>
            Email: juanperez@gmail.com
          </Typography>
          <Typography variant="body2" className={classes.text_shipping}>
            Address: asdasd 1231
          </Typography>
          <div className={classes.alert_not_delivered}>
            <Typography variant="body2" className={classes.text_title}>
              {messageDelivery}
            </Typography>
          </div>
          <Divider className={classes.divider}></Divider>
          <Typography variant="h6" className={classes.text_title}>
            Payment Method
          </Typography>
          <Typography>Method: Paypal</Typography>
          <div className={classes.alert_delivered}>
            <Typography variant="body2" className={classes.text_title}>
              {messagePaid}
            </Typography>
          </div>
          <Divider className={classes.divider}></Divider>
          <Typography variant="h6" className={classes.text_title}>
            Products
          </Typography>
          <TableContainer className={classes.gridmb}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <CardMedia
                      className={classes.img_product_pc}
                      image="https://www.molinaripixel.com.ar/wp-content/uploads/2015/02/foto_cursos_fotografia_productos-356x534.jpg"
                      title="product"
                    ></CardMedia>
                  </TableCell>
                  <TableCell>
                    <Typography className={classes.text_detail}>
                      Bomber Jacket Casu SD
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography className={classes.text_detail}>
                      2 * $25.00 = $50.00
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item md={4} xs={12}>
          <TableContainer component={Paper} square>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell colSpan={2}>
                    <Typography variant="h6" className={classes.text_title}>
                      Resume
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography className={classes.text_title}>
                      Products
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography className={classes.text_title}>
                      $50.00
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography className={classes.text_title}>
                      Shipping
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography className={classes.text_title}>
                      $2.00
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography className={classes.text_title}>Tax</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography className={classes.text_title}>
                      $8.00
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography className={classes.text_title}>
                      Total
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography className={classes.text_title}>
                      $60.00
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={2}>
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      fullWidth
                      className={classes.gridmb}
                    >
                      Paypal
                    </Button>
                    <Button
                      variant="contained"
                      size="large"
                      fullWidth
                    >
                      Credit card
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

export default PurchaseOrder;
