import {
	Button,
	Checkbox,
	Container,
	FormControl,
	FormControlLabel,
	Grid,
	TextField,
	Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { getUserById, setRole } from "../../../actions/UserActions";
import useStyles from "../../../theme/useStyles";
import { withRouter } from "react-router-dom";
import { useStateValue } from "../../../context/store";

const EditUser = (props) => {
	const [{ userSession }, dispatch] = useStateValue();

	const [user, setUser] = useState({
		firstName: "",
		lastName: "",
		email: "",
	});

	const [admin, setAdmin] = useState(false);

	const handleChange = (e) => {
		setAdmin(e.target.checked);
	};

	useEffect(() => {
		const id = props.match.params.id;
		const getUserIdAsync = async () => {
			const response = await getUserById(id);
			setAdmin(response.data.admin);
			setUser(response.data);
		};
		getUserIdAsync()
	}, []);

	const updateUserRole = async (e) => {
		e.preventDefault();
		const id = props.match.params.id;
		const role = {
			Name: "ADMIN",
			Status: admin,
		};
		const response = await setRole(id, role, dispatch);
		if(response.status===200){
			props.history.push("/admin/users");
		}else{
			dispatch({
				type:"OPEN_SNACKBAR",
				message:"Error updating user role",
			})
		}
	};

	const classes = useStyles();

	return (
		<Container
			className={classes.containermt}
			style={{
				marginTop: 30,
			}}
		>
			<Grid container justifyContent="center">
				<Grid item lg={6} sm={12}>
					<Typography variant="h4" className={classes.textTitle}>
						Edit User
					</Typography>
					<form onSubmit={(e) => e.preventDefault()} className={classes.form}>
						<TextField
							label="Name"
							variant="filled"
							value={user.firstName + " " + user.lastName}
							fullWidth
							disabled
							className={classes.gridmb}
							style={{ marginTop: 5, marginBottom: 20 }}
						/>
						<TextField
							label="Email"
							variant="filled"
							value="juan.perez@gmail.com"
							fullWidth
							disabled
							style={{ marginTop: 5, marginBottom: 20 }}
						/>
						<FormControl
							style={{
								display: "block",
								padding: 0,
								marginTop: 5,
								marginBottom: 5,
							}}
							className={classes.checkbox}
						>
							<FormControlLabel
								control={<Checkbox color="primary" />}
								label="Admin Profile"
								checked={admin}
								onChange={handleChange}
							/>
						</FormControl>
						<Button
							variant="contained"
							color="primary"
							onClick={updateUserRole}
						>
							Update
						</Button>
					</form>
				</Grid>
			</Grid>
		</Container>
	);
};

export default withRouter(EditUser);
