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
import { Link, withRouter } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AdminIcon from "@mui/icons-material/AdminPanelSettings";
import GroupIcon from "@mui/icons-material/Group";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { useStateValue } from "../../../context/store";

const MenuMobile = (props) => {
	const imageNotFound =
		"https://firebasestorage.googleapis.com/v0/b/netmarketfbase.appspot.com/o/images%2Fimage-not-found.png?alt=media&token=f87fb342-112b-41e8-87d9-d8f4f5fae783";
	const [{ userSession }, dispatch] = useStateValue();
	const [openClient, setOpenClient] = useState(false);
	const [openAdmin, setOpenAdmin] = useState(false);

	const handleClickClient = () => {
		setOpenClient((prevOpenClient) => !prevOpenClient);
	};

	const handleClickAdmin = () => {
		setOpenAdmin((prevOpenAdmin) => !prevOpenAdmin);
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
			<ListItem button onClick={handleClickClient} className={classes.listItem}>
				<div className={classes.linkAppBarMobile}>
					<Avatar
						alt="image"
						className={classes.avatarProfileAppBar}
						src={userSession.user.image
							?(userSession.user.image?userSession.user.image : imageNotFound)
						:imageNotFound}
					/>
					<ListItemText>{userSession
					?(userSession.authenticated?userSession.user.firstName +' '+userSession.user.lastName:'Guest'):"Guest"}</ListItemText>
					<KeyboardArrowDownIcon />
				</div>
			</ListItem>
			<Collapse component="li" in={openClient} timeout="auto" unmountOnExit>
				<List disablePadding>
					<ListItem
						button
						className={classes.listSubItem}
						onClick={props.clickHandler}
					>
						<Link className={classes.linkAppBarMobile} to="/profile">
							<ListItemIcon className={classes.listItemIcon}>
								<PersonIcon />
							</ListItemIcon>
							<ListItemText>My Profile</ListItemText>
						</Link>
					</ListItem>
					<ListItem
						button
						className={classes.listSubItem}
						onClick={props.clickHandler}
					>
						<Link className={classes.linkAppBarMobile} to="/">
							<ListItemIcon className={classes.listItemIcon}>
								<ExitToAppIcon />
							</ListItemIcon>
							<ListItem button onClick={closeSession}>
								<ListItemText>Close Session</ListItemText>
							</ListItem>
						</Link>
					</ListItem>
					<Divider />
				</List>
			</Collapse>
			{/*Admin*/}
			<ListItem button onClick={handleClickAdmin} className={classes.listItem}>
				<div className={classes.linkAppBarMobile}>
					<ListItemIcon className={classes.listItemIcon}>
						<AdminIcon />
					</ListItemIcon>
					<ListItemText>Admin</ListItemText>
					<KeyboardArrowDownIcon />
				</div>
			</ListItem>
			<Collapse component="li" in={openAdmin} timeout="auto" unmountOnExit>
				<List disablePadding>
					<ListItem
						button
						className={classes.listSubItem}
						onClick={props.clickHandler}
					>
						<Link className={classes.linkAppBarMobile} to="/admin/users">
							<ListItemIcon className={classes.listItemIcon}>
								<GroupIcon />
							</ListItemIcon>
							<ListItemText>Users</ListItemText>
						</Link>
					</ListItem>
					<ListItem
						button
						className={classes.listSubItem}
						onClick={props.clickHandler}
					>
						<Link className={classes.linkAppBarMobile} to="/admin/products">
							<ListItemIcon className={classes.listItemIcon}>
								<StorefrontIcon />
							</ListItemIcon>
							<ListItemText>Products</ListItemText>
						</Link>
					</ListItem>
					<ListItem
						button
						className={classes.listSubItem}
						onClick={props.clickHandler}
					>
						<Link className={classes.linkAppBarMobile} to="/admin/orders">
							<ListItemIcon className={classes.listItemIcon}>
								<ShoppingCartIcon />
							</ListItemIcon>
							<ListItemText>Orders</ListItemText>
						</Link>
					</ListItem>
					<ListItem
						button
						className={classes.listSubItem}
						onClick={props.clickHandler}
					>
						<Link className={classes.linkAppBarMobile} to="/">
							<ListItemIcon className={classes.listItemIcon}>
								<ExitToAppIcon />
							</ListItemIcon>
							<ListItemText>Close Session</ListItemText>
						</Link>
					</ListItem>
					<Divider />
				</List>
			</Collapse>
			<ListItem
				button
				className={classes.listItem}
				onClick={props.clickHandler}
			>
				<Link className={classes.linkAppBarMobile} to="/shoppingCart">
					<ListItemIcon className={classes.listItemIcon}>
						<ShoppingCartIcon />
					</ListItemIcon>
					<ListItemText>My Orders</ListItemText>
				</Link>
			</ListItem>
		</>
	);
};

export default withRouter(MenuMobile);
