import {
  Button,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useStyles from "../../../theme/useStyles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AdminIcon from "@mui/icons-material/AdminPanelSettings";
import GroupIcon from "@mui/icons-material/Group";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const AdminMenu = () => {
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
      <Button
        color="inherit"
        className={classes.button_icon}
        onClick={handleClick}
      >
        <div className={classes.link_app_bar_desktop}>
          <AdminIcon className={classes.mr}>Admin</AdminIcon>
          Admin
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
          <Link className={classes.link_app_bar_mobile} to="/admin/users">
            <ListItemIcon className={classes.list_item_icon}>
              <GroupIcon></GroupIcon>
            </ListItemIcon>
            <ListItemText>Users</ListItemText>
          </Link>
        </MenuItem>
        <MenuItem className={classes.list_item} onClick={handleClose}>
          <Link className={classes.link_app_bar_mobile} to="/">
            <ListItemIcon className={classes.list_item_icon}>
              <StorefrontIcon></StorefrontIcon>
            </ListItemIcon>
            <ListItemText>Products</ListItemText>
          </Link>
        </MenuItem>
        <MenuItem className={classes.list_item} onClick={handleClose}>
          <Link className={classes.link_app_bar_mobile} to="/">
            <ListItemIcon className={classes.list_item_icon}>
              <ShoppingCartIcon></ShoppingCartIcon>
            </ListItemIcon>
            <ListItemText>Orders</ListItemText>
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
    </>
  );
};

export default AdminMenu;
