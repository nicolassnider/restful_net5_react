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
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";

const OrdersList = (props) => {
  const classes = useStyles();

  const openDetails = () => {
    const id = "d3fa4206-78ec-4b1e-85e1-3b30201916a8";
    props.history.push("/purchaseOrder/" + id);
  };
  return (
    <Container
      className={classes.containermt}
      style={{
        marginTop: 30,
      }}
    >
      <Grid container>
        <Grid item lg={6} sm={6} xs={12}>
          <Typography variant="h4" className={classes.textTitle}>
            Orders
          </Typography>
        </Grid>
      </Grid>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>User</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Delivered</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>d3fa4206-78ec-4b1e-85e1-3b30201916a8</TableCell>
              <TableCell>Juan Perez</TableCell>
              <TableCell>2020-12-22</TableCell>
              <TableCell>$60</TableCell>
              <TableCell>2020-12-23</TableCell>
              <TableCell>
                <CheckIcon className={classes.iconDelivered} />
              </TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="inherit"
                  onClick={openDetails}
                >
                  Details
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>4f731ebc-dc33-4564-9bb1-869a10a651e5</TableCell>
              <TableCell>Juan Perez2</TableCell>
              <TableCell>2020-12-23</TableCell>
              <TableCell>$100</TableCell>
              <TableCell>2020-12-25</TableCell>
              <TableCell>
                <ClearIcon className={classes.iconNotDelivered} />
              </TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="inherit"
                  onClick={openDetails}
                >
                  Details
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default OrdersList;
