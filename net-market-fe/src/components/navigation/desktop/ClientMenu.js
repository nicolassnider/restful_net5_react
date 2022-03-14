import {
  Avatar,
  Button,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useStyles from "../../../theme/useStyles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonIcon from "@mui/icons-material/Person";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const ClientMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();
  return (
    <>
      <Button color="inherit" className={classes.button_icon}>
        <Link className={classes.link_app_bar_desktop} to="/shoppingCart">
          <ShoppingCartIcon className={classes.mr}></ShoppingCartIcon>
          My Orders
        </Link>
      </Button>
      <div>
        <Button
          color="inherit"
          className={classes.button_icon}
          onClick={handleClick}
        >
          <div className={classes.link_app_bar_desktop}>
            <Avatar
              alt="image"
              className={classes.avatar_profile_app_bar}
              src="https://png.pngtree.com/png-clipart/20220109/original/pngtree-awesome-gamer-illustration-for-t-shirt-design-png-image_7021992.png"
            />
            Juan Perez
            <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
          </div>
        </Button>
        <Menu
          elevation={2}
          anchorEl={anchorEl}
          getContentAnchorEl={null}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          transformOrigin={{ vertical: "top", horizontal: "center" }}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem className={classes.list_item} onClick={handleClose}>
            <Link className={classes.link_app_bar_mobile} to="/profile">
              <ListItemIcon className={classes.list_item_icon}>
                <PersonIcon></PersonIcon>
              </ListItemIcon>
              <ListItemText>My Profile</ListItemText>
            </Link>
          </MenuItem>
          <MenuItem className={classes.list_item} onClick={handleClose}>
            <Link className={classes.link_app_bar_mobile} to="/profile">
              <ListItemIcon className={classes.list_item_icon}>
                <ExitToAppIcon></ExitToAppIcon>
              </ListItemIcon>
              <ListItemText>Close Session</ListItemText>
            </Link>
          </MenuItem>
        </Menu>
      </div>
    </>
  );
};

export default ClientMenu;
