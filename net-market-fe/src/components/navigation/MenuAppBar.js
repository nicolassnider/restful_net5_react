import {
  AppBar,
  Button,
  Container,
  Drawer,
  Icon,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import StoreIcon from "@mui/icons-material/Store";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import useStyles from "../../theme/useStyles";
import { Link } from "react-router-dom";

const MenuAppBar = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const openToggle = () => {
    setOpen(true);
  };
  const closeToggle = () => {
    setOpen(false);
  };
  return (
    <div>
      <AppBar position="static" className={classes.appBar}>
        <Container>
          <Toolbar>
            <div className={classes.sectionMobile}>
              <IconButton color="inherit" onClick={openToggle}>
                <Icon fontSize="large">
                  <MenuIcon></MenuIcon>
                </Icon>
              </IconButton>
            </div>
            <Drawer open={open} onClose={closeToggle}>
              <div className={classes.list}>
                <List>
                  <ListItem
                    button
                    onClick={closeToggle}
                    className={classes.listItem}
                  >
                    <Link
                      to="/login"
                      color="inherit"
                      className={classes.linkAppBarMobile}
                      underline="none"
                    >
                      <ListItemIcon className={classes.listItemIcon}>
                        <Icon>
                          <PersonIcon></PersonIcon>
                        </Icon>
                      </ListItemIcon>
                      <ListItemText>Login</ListItemText>
                    </Link>
                  </ListItem>
                </List>
              </div>
            </Drawer>
            <div className={classes.grow}>
              <Link
                to="/"
                color="inherit"
                className={classes.linkAppBarLogo}
                underline="none"
              >
                <Icon className={classes.mr} fontSize="large">
                  <StoreIcon
                    className={classes.mr}
                    fontSize="large"
                  ></StoreIcon>
                </Icon>
                <Typography variant="h5">SHOP</Typography>
              </Link>
            </div>
            <div className={classes.sectionDesktop}>
              <Button color="inherit" className={classes.buttonIcon}>
                <Link
                  to="/login"
                  color="inherit"
                  className={classes.linkAppBarDesktop}
                  underline="none"
                >
                  <Icon className={classes.mr} fontSize="small">
                    <PersonIcon className={classes.mr}></PersonIcon>
                  </Icon>
                  LOGIN
                </Link>
              </Button>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default MenuAppBar;
