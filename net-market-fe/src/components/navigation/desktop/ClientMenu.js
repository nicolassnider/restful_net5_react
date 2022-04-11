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
import { useStateValue } from "../../../context/store";


const ClientMenu = () => {

  const[{userSession},dispatch] = useStateValue()
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
        <Link className={classes.linkAppBarDesktop} to="/shoppingCart">
          <ShoppingCartIcon className={classes.mr}/>
          My Orders
        </Link>
      </Button>
      <div>
        <Button
          color="inherit"
          className={classes.button_icon}
          onClick={handleClick}
        >
          <div className={classes.linkAppBarDesktop}>
            <Avatar
              alt="image"
              className={classes.avatarProfileAppBar}
              src="https://png.pngtree.com/png-clipart/20220109/original/pngtree-awesome-gamer-illustration-for-t-shirt-design-png-image_7021992.png"
            />
            {userSession
            ?(userSession.authenticated?`${userSession.user.firstName} ${userSession.user.lastName}`:"Guest")
            :"Guest" }
            <KeyboardArrowDownIcon/>
          </div>
        </Button>
        <Menu
                elevation={2}
                anchorEl={anchorEl}
                getcontentanchorel={null}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center"
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "center"
                }}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}>
          <MenuItem className={classes.listItem} onClick={handleClose}>
            <Link className={classes.linkAppBarMobile} to="/profile">
              <ListItemIcon className={classes.listItemIcon}>
                <PersonIcon/>
              </ListItemIcon>
              <ListItemText>My Profile</ListItemText>
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
      </div>
    </>
  );
};

export default ClientMenu;
