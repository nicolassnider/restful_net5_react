import {
  Avatar,
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import useStyles from "../../../theme/useStyles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AdminIcon from "@mui/icons-material/AdminPanelSettings";
import GroupIcon from "@mui/icons-material/Group";
import StorefrontIcon from "@mui/icons-material/Storefront";



const MenuMobile = (props) => {
  const [openClient, setOpenClient] = useState(false);
  const [openAdmin, setOpenAdmin] = useState(false);

  const handleClickClient = () => {
    setOpenClient((prevOpenClient) => !prevOpenClient);
  };

  const handleClickAdmin = () => {
    setOpenAdmin((prevOpenAdmin) => !prevOpenAdmin);
  };
  const classes = useStyles();
  return (
    <>
      <ListItem
        button
        onClick={handleClickClient}
        className={classes.list_item}
      >
        <div className={classes.link_app_bar_mobile}>
          <Avatar
            alt="image"
            className={classes.avatar_profile_app_bar}
            src="https://png.pngtree.com/png-clipart/20220109/original/pngtree-awesome-gamer-illustration-for-t-shirt-design-png-image_7021992.png"
          />
          <ListItemText>Juan Perez</ListItemText>
          <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
        </div>
      </ListItem>
      <Collapse component="li" in={openClient} timeout="auto" unmountOnExit>
        <List disablePadding>
          <ListItem
            button
            className={classes.list_sub_item}
            onClick={props.clickHandler}
          >
            <Link className={classes.link_app_bar_mobile} to="/profile">
              <ListItemIcon className={classes.list_item_icon}>
                <PersonIcon></PersonIcon>
              </ListItemIcon>
              <ListItemText>My Profile</ListItemText>
            </Link>
          </ListItem>
          <ListItem
            button
            className={classes.list_sub_item}
            onClick={props.clickHandler}
          >
            <Link className={classes.link_app_bar_mobile} to="/">
              <ListItemIcon className={classes.list_item_icon}>
                <ExitToAppIcon></ExitToAppIcon>
              </ListItemIcon>
              <ListItemText>Close Session</ListItemText>
            </Link>
          </ListItem>
          <Divider />
        </List>
      </Collapse>
      {/*Admin*/}
      <ListItem button onClick={handleClickAdmin} className={classes.list_item}>
        <div className={classes.link_app_bar_mobile}>
          <ListItemIcon className={classes.list_item_icon}>
            <AdminIcon></AdminIcon>
          </ListItemIcon>
          <ListItemText>Admin</ListItemText>
          <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
        </div>
      </ListItem>
      <Collapse component="li" in={openAdmin} timeout="auto" unmountOnExit>
        <List disablePadding>
          <ListItem
            button
            className={classes.list_sub_item}
            onClick={props.clickHandler}
          >
            <Link className={classes.link_app_bar_mobile} to="/admin/users">
              <ListItemIcon className={classes.list_item_icon}>
                <GroupIcon></GroupIcon>
              </ListItemIcon>
              <ListItemText>Users</ListItemText>
            </Link>
          </ListItem>
          <ListItem
            button
            className={classes.list_sub_item}
            onClick={props.clickHandler}
          >
            <Link className={classes.link_app_bar_mobile} to="/">
              <ListItemIcon className={classes.list_item_icon}>
                <StorefrontIcon></StorefrontIcon>
              </ListItemIcon>
              <ListItemText>Products</ListItemText>
            </Link>
          </ListItem>
          <ListItem
            button
            className={classes.list_sub_item}
            onClick={props.clickHandler}
          >
            <Link className={classes.link_app_bar_mobile} to="/">
              <ListItemIcon className={classes.list_item_icon}>
                <ShoppingCartIcon></ShoppingCartIcon>
              </ListItemIcon>
              <ListItemText>Orders</ListItemText>
            </Link>
          </ListItem>
          <ListItem
            button
            className={classes.list_sub_item}
            onClick={props.clickHandler}
          >
            <Link className={classes.link_app_bar_mobile} to="/">
              <ListItemIcon className={classes.list_item_icon}>
                <ExitToAppIcon></ExitToAppIcon>
              </ListItemIcon>
              <ListItemText>Close Session</ListItemText>
            </Link>
          </ListItem>
          <Divider />
        </List>
      </Collapse>
      <ListItem
        button
        className={classes.list_item}
        onClick={props.clickHandler}
      >
        <Link className={classes.link_app_bar_mobile} to="/shoppingCart">
          <ListItemIcon className={classes.list_item_icon}>
            <ShoppingCartIcon></ShoppingCartIcon>
          </ListItemIcon>
          <ListItemText>My Orders</ListItemText>
        </Link>
      </ListItem>
    </>
  );
};

export default MenuMobile;
