import {
	Avatar,
	Button,
	ListItem,
	ListItemIcon,
	ListItemText,
	Menu,
	MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom"; //para redireccionar a la pagina de login
import useStyles from "../../../theme/useStyles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonIcon from "@mui/icons-material/Person";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useStateValue } from "../../../context/store";

const ClientMenu = (props) => {
	const imageNotFound =
		"https://firebasestorage.googleapis.com/v0/b/netmarketfbase.appspot.com/o/images%2Fimage-not-found.png?alt=media&token=f87fb342-112b-41e8-87d9-d8f4f5fae783";
	const [{ userSession }, dispatch] = useStateValue();
	const [anchorEl, setAnchorEl] = useState(null);

	const handleClick = (e) => {
		setAnchorEl(e.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	const closeSession = (e) => {
		e.preventDefault();
		localStorage.removeItem("token");
		dispatch({ tyoe: "CLOSE_SESSION", newUser: null, authenticated: false });
		props.history.push("/login");
	};
	const classes = useStyles();
	return (
		<>
			<Button color="inherit" className={classes.button_icon}>
				<Link className={classes.linkAppBarDesktop} to="/shoppingCart">
					<ShoppingCartIcon className={classes.mr} />
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
							src={userSession
								? userSession.authenticated
									? userSession.user.image
									: imageNotFound
								: imageNotFound}
						/>
						{userSession
							? userSession.authenticated
								? userSession.user.firstName + " " + userSession.user.lastName
								: "Guest"
							: "Guest"}
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
						<Link className={classes.linkAppBarMobile} to="/profile">
							<ListItemIcon className={classes.listItemIcon}>
								<PersonIcon />
							</ListItemIcon>
							<ListItemText>My Profile</ListItemText>
						</Link>
					</MenuItem>
					<MenuItem className={classes.listItem} onClick={handleClose}>
						<Link className={classes.linkAppBarMobile} to="/">
							<ListItemIcon className={classes.listItemIcon}>
								<ExitToAppIcon />
							</ListItemIcon>
							<ListItem button onClick={closeSession}>
								<ListItemText>Close Session</ListItemText>
							</ListItem>
						</Link>
					</MenuItem>
				</Menu>
			</div>
		</>
	);
};

export default withRouter(ClientMenu);
