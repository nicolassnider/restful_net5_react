import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import useStyles from "../../../theme/useStyles";

const PublicMenuMobile = (props) => {
  const classes = useStyles();
  return (
    <>
      <ListItem button onClick={props.clickHandler} className={classes.listItem}>
        <Link to="/login" className={classes.linkAppBarMobile}>
          <ListItemIcon className={classes.listItemIcon}>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText>Login</ListItemText>
        </Link>
      </ListItem>
      <ListItem button onClick={props.clickHandler} className={classes.listItem}>
        <Link to="/shoppingCart" className={classes.linkAppBarMobile}>
          <ListItemIcon className={classes.listItemIcon}>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText>My Orders</ListItemText>
        </Link>
      </ListItem>
    </>
  );
};

export default PublicMenuMobile;
