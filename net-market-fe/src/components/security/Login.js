import {
	Avatar,
	Button,
	Card,
	Container,
	Grid,
	TextField,
	Typography,
} from "@mui/material";
import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import useStyles from "../../theme/useStyles";
import { Link } from "react-router-dom";
import { loginUser } from "../../actions/UserActions";
import { useStateValue } from "../../context/store";

const clearUser = {
	email: "",
	password: "",
};

const Login = (props) => {
	const [{ userSession }, dispatch] = useStateValue();
	const [user, setUser] = useState({
		email: "",
		password: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const loginEventUSer = () => {
		loginUser(user, dispatch).then((response) => {
			if (response.status === 200) {
				localStorage.setItem("token", response.data.token);
				props.history.push("/");
			} else {
				dispatch({
					type: "OPEN_SNACKBAR",
					openMessage: {
						open: true,
						message: response.data.errorMessage
							? response.data.errorMessage
							: "Login failed",
					},
				});
			}
		});
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
				<Grid item lg={12} md={12}>
					<Card className={classes.card} align="center">
						<Avatar className={classes.avatar}>
							<PersonIcon className={classes.icon} />
						</Avatar>
						<Typography variant="h5" color="primary">
							Login
						</Typography>
						<form className={classes.form} onSubmit={(e) => e.preventDefault()}>
							<Grid container spacing={2}>
								<Grid
									item
									xs={12}
									className={classes.gridmb}
									style={{ marginTop: 5, marginBottom: 20 }}
								>
									<TextField
										label="Email"
										variant="outlined"
										fullWidth
										type="email"
										name="email"
										value={user.email}
										onChange={handleChange}
									/>
								</Grid>
								<Grid
									item
									xs={12}
									className={classes.gridmb}
									style={{ marginTop: 5, marginBottom: 20 }}
								>
									<TextField
										label="Password"
										variant="outlined"
										fullWidth
										type="password"
										name="password"
										value={user.password}
										onChange={handleChange}
									/>
								</Grid>
								<Grid
									item
									xs={12}
									className={classes.gridmb}
									style={{ marginTop: 5, marginBottom: 20 }}
								>
									<Button
										variant="contained"
										fullWidth
										color="primary"
										type="submit"
										onClick={loginEventUSer}
									>
										Access
									</Button>
								</Grid>
							</Grid>
							<Link to="/register" variant="body1" className={classes.link}>
								No account? Register
							</Link>
						</form>
					</Card>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Login;
