import {
  Button,
  CardMedia,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  Step,
  StepLabel,
  Stepper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import useStyles from "../../theme/useStyles";

const PurchaseProcess = (props) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(1);
  const continueProcess = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const backStepProcees = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const completePurchase = () => {
    const idPurchase = "773194a9-6d14-417e-8728-6665b977baa2";
    props.history.push("/purchaseOrder/" + idPurchase);
  };
  return (
    <Container className={classes.containermt}
      style={{
        marginTop: 30,
      }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        <Step>
          <StepLabel>Register</StepLabel>
        </Step>
        <Step>
          <StepLabel>Shipping</StepLabel>
        </Step>
        <Step>
          <StepLabel>Payment Methods</StepLabel>
        </Step>
        <Step>
          <StepLabel>Process Purchase</StepLabel>
        </Step>
      </Stepper>
      {activeStep === 1 ? (
        <Grid container>
          <Grid item>
            <Typography variant="h6" className={classes.textTitle}>
              Product Shipping
            </Typography>
            <form onSubmit={(e) => e.preventDefault()}>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <TextField
                    label="Address"
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="City"
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Country"
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={continueProcess}
                  >
                    Continue
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      ) : activeStep === 2 ? (
        <Grid className={classes.gridPC}>
          <Typography variant="h6" className={classes.textTitle}>
            Payment Methods
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl className={classes.formControl}>
                <FormLabel>Select Payment Method</FormLabel>
                <RadioGroup>
                  <FormControlLabel
                    value="Paypal"
                    control={<Radio color="primary"></Radio>}
                    label="Paypal or Credit Card"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              className={classes.buttonBack}
              onClick={backStepProcees}
            >
              Back
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={continueProcess}
            >
              Continue
            </Button>
          </Grid>
        </Grid>
      ) : activeStep === 3 ? (
        <Grid container className={classes.gridPC}>
          <Grid item md={8} xs={12} className={classes.gridLR}>
            <Typography variant="h6" className={classes.textTitle}>
              Shipping
            </Typography>
            <Typography>Address: asdasd 1231</Typography>
            <Divider className={classes.divider}></Divider>
            <Typography variant="h6" className={classes.textTitle}>
              Payment Method
            </Typography>
            <Typography>Method: Paypal</Typography>
            <Divider className={classes.divider}></Divider>
            <Typography variant="h6" className={classes.textTitle}>
              Products
            </Typography>
            <TableContainer className={classes.gridmb}
              style= {{marginTop: 5,marginBottom: 20}}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <CardMedia
                        className={classes.imgProductPC}
                        image="https://www.molinaripixel.com.ar/wp-content/uploads/2015/02/foto_cursos_fotografia_productos-356x534.jpg"
                        title="product"
                      ></CardMedia>
                    </TableCell>
                    <TableCell>
                      <Typography className={classes.textDetail}>
                        Bomber Jacket Casu SD
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography className={classes.textDetail}>
                        2 * $25.00 = $50.00
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                className={classes.buttonBack}
                onClick={backStepProcees}
              >
                Back
              </Button>
            </Grid>
          </Grid>
          <Grid item md={4} xs={12}>
            <TableContainer component={Paper} square>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell colSpan={2}>
                      <Typography variant="h6" className={classes.textTitle}>
                        Resume
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography className={classes.textTitle}>
                        Products
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography className={classes.textTitle}>
                        $50.00
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography className={classes.textTitle}>
                        Shipping
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography className={classes.textTitle}>
                        $2.00
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography className={classes.textTitle}>
                        Tax
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography className={classes.textTitle}>
                        $8.00
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography className={classes.textTitle}>
                        Total
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography className={classes.textTitle}>
                        $60.00
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        onClick={completePurchase}
                      >
                        Complete Order
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      ) : null}
    </Container>
  );
};

export default PurchaseProcess;
