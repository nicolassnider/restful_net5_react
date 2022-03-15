import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import useStyles from "../../../theme/useStyles";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";


const PublicMenu = () => {
  const classes = useStyles();
  return (
    <>
      <Button color="inherit" className={classes.buttonIcon}>
        <Link className={classes.linkAppBarDesktop} to="/shopingCart">
          <ShoppingCartIcon
            className={classes.mr}
            style={{ marginRight: 3 }}
            fontSize="small"
          />
          My Orders
        </Link>
      </Button>
      <Button color="inherit" className={classes.buttonIcon}>
        <Link className={classes.linkAppBarDesktop} to="/login">
          <PersonIcon
            className={classes.mr}
            style={{ marginRight: 3 }}
            fontSize="small"
          />
          LOGIN
        </Link>
      </Button>
    </>
  );
};

export default PublicMenu;
