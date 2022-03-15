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
        <div className={classes.linkAppBarDesktop}>
          <AdminIcon className={classes.mr} />
          Admin
          <KeyboardArrowDownIcon />
        </div>
      </Button>
      <Menu
        elevation={2}
        anchorEl={anchorEl}
        getcontentanchorel={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem className={classes.listItem} onClick={handleClose}>
          <Link className={classes.linkAppBarMobile} to="/admin/users">
            <ListItemIcon className={classes.listItemIcon}>
              <GroupIcon/>
            </ListItemIcon>
            <ListItemText>Users</ListItemText>
          </Link>
        </MenuItem>
        <MenuItem className={classes.listItem} onClick={handleClose}>
          <Link className={classes.linkAppBarMobile} to="/admin/products">
            <ListItemIcon className={classes.listItemIcon}>
              <StorefrontIcon/>
            </ListItemIcon>
            <ListItemText>Products</ListItemText>
          </Link>
        </MenuItem>
        <MenuItem className={classes.listItem} onClick={handleClose}>
          <Link className={classes.linkAppBarMobile} to="/admin/orders">
            <ListItemIcon className={classes.listItemIcon}>
              <ShoppingCartIcon/>
            </ListItemIcon>
            <ListItemText>Orders</ListItemText>
          </Link>
        </MenuItem>
        <MenuItem className={classes.listItem} onClick={handleClose}>
          <Link className={classes.linkAppBarMobile} to="/profile">
            <ListItemIcon className={classes.listItemIcon}>
              <ExitToAppIcon/>
            </ListItemIcon>
            <ListItemText>Close Session</ListItemText>
          </Link>
        </MenuItem>
      </Menu>
    </>
  );
};

export default AdminMenu;
