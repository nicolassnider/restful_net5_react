import {
  AppBar,
  Container,
  Drawer,
  IconButton,
  List,
  Toolbar,
  Typography,
} from "@mui/material";
import StoreIcon from "@mui/icons-material/Store";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import useStyles from "../../theme/useStyles";
import { Link } from "react-router-dom";
import ClientMenu from "./desktop/ClientMenu";
import AdminMenu from "./desktop/AdminMenu";
import MenuMobile from "./mobile/MenuMobile";
import PublicMenuMobile from "./mobile/PublicMenuMobile";
import PublicMenu from "./desktop/PublicMenu";

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
                <MenuIcon fontSize="large" />
              </IconButton>
            </div>
            <Drawer open={open} onClose={closeToggle}>
              <div className={classes.list}>
                <List>
                  <PublicMenuMobile clickHandler={closeToggle} />
                  <MenuMobile clickHandler={closeToggle} />
                </List>
              </div>
            </Drawer>
            <div className={classes.grow}>
              <Link
                className={classes.linkAppBarLogo}
                to="/"
                color="inherit"
                underline="none"
              >
                <StoreIcon className={classes.mr} fontSize="large" />
                <Typography variant="h5">SHOP</Typography>
              </Link>
            </div>
            <div className={classes.sectionDesktop}>
              <PublicMenu />
              <ClientMenu />
              <AdminMenu />
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default MenuAppBar;
