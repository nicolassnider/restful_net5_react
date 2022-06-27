import {
	Avatar,
	Button,
	Container,
	Divider,
	Grid,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	TextField,
	Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import useStyles from "../../theme/useStyles";
import ImageUploader from "react-images-upload";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import { useStateValue } from "../../context/store";
import { v4 as uuidv4 } from "uuid";
import { updateUser } from "../../actions/UserActions";
import { withRouter } from "react-router-dom";

const Profile = (props) => {
	const imageNotFound =
		"https://firebasestorage.googleapis.com/v0/b/netmarketfbase.appspot.com/o/images%2Fimage-not-found.png?alt=media&token=f87fb342-112b-41e8-87d9-d8f4f5fae783";
	const [{ userSession }, dispatch] = useStateValue();

	const [user, setUser] = useState({
		id: "",
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		userName: "",
		file: "",
		image: "",
	});
	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	useEffect(() => {
		if (userSession) {
			setUser(userSession.user);
		}
	}, [userSession]);

	const upImage = (images) => {
		let photo = images[0];
		let photoUrl = "";
		try {
			photoUrl = URL.createObjectURL(photo);
		} catch (e) {
			console.log(e);
		}
		setUser((prev) => ({
			...prev,
			file: photo,
			tempImage: photoUrl,
		}));
	};

	const saveUser = (e) => {
		e.preventDefault();
		updateUser(userSession.user.id, user, dispatch).then((response) => {
			if (response.status === 200) {
				window.localStorage.setItem("token", response.data.token);
				props.history.push("/");
			} else {
				dispatch({ type: "OPEN_SNACKBAR", message: "Error updating user" });
			}
		});
	};

	const keyImage = uuidv4();

	const classes = useStyles();

	const openDetails = () => {
		const id = "773194a9-6d14-417e-8728-6665b977baa2";
		props.history.push("/purchaseOrder/" + id);
	};
	return (
		<Container
			className={classes.containermt}
			style={{
				marginTop: 30,
			}}
		>
			<Grid container spacing={2}>
				<Grid item md={3} cs={12}>
					<Typography
						variant="h5"
						className={classes.textTitle}
						style={{
							fontWeight: 600,
							color: "#494949",
							marginBottom: 10,
						}}
					>
						User´s profile
					</Typography>
					<form
						onSubmit={(e) => e.preventDefault()}
						className={classes.form}
						style={{
							marginTop: 40,
							marginBottom: 10,
						}}
					>
						<ImageUploader
							key={keyImage}
							onChange={upImage}
							withIcon={false}
							buttonStyles={{
								borderRadius: "50%",
								padding: 10,
								margin: 0,
								position: "absolute",
								bottom: 15,
								left: 15,
							}}
							buttonText={<AddAPhotoIcon/>}
							className={classes.imageUploader}
							style={{
								padding: 0,
								margin: "-25px auto 15px",
								width: 0,
							}}
							label={
								<Avatar
									alt="profile"
									className={classes.avatarProfile}
									style={{
										width: 130,
										height: 130,
										backgroundColor: "#0F80AA",
									}}
									src={
										user.tempImage
											? user.tempImage
											: user.image
											? user.image
											: imageNotFound
									}
								/>
							}
							imgExtension={[".jpg", ".gif", ".png", ".jpeg"]}
							maxFileSize={5242880}
						/>
						<TextField
							label="First Name"
							variant="outlined"
							name="firstName"
							fullWidth
							className={classes.gridmb}
							style={{ marginTop: 5, marginBottom: 20 }}
							value={user.firstName}
							onChange={handleChange}
						/>
						<TextField
							label="Last Name"
							variant="outlined"
							name="lastName"
							fullWidth
							className={classes.gridmb}
							style={{ marginTop: 5, marginBottom: 20 }}
							value={user.lastName}
							onChange={handleChange}
						/>
						<TextField
							label="Email"
							variant="outlined"
							name="email"
							fullWidth
							className={classes.gridmb}
							style={{ marginTop: 5, marginBottom: 20 }}
							value={user.email}
							disabled
						/>
						<Divider />
						<TextField
							label="Password"
							variant="outlined"
							fullWidth
							className={classes.gridmb}
							style={{ marginTop: 5, marginBottom: 20 }}
						/>
						<TextField
							label="Confirm Password"
							variant="outlined"
							fullWidth
							className={classes.gridmb}
							style={{ marginTop: 5, marginBottom: 20 }}
						/>
						<Button onClick={saveUser} variant="contained" color="primary">
							Save
						</Button>
					</form>
				</Grid>
				<Grid item md={9} cs={12}>
					<Typography
						variant="h5"
						className={classes.textTitle}
						style={{
							width: 300,
							height: 25,
						}}
					>
						My Purchases
					</Typography>
					<TableContainer className={classes.form}>
						<Table
							className={classes.table}
							style={{ border: "1px solid #E0E0E0" }}
						>
							<TableHead>
								<TableRow>
									<TableCell>ID</TableCell>
									<TableCell>Date</TableCell>
									<TableCell>Total</TableCell>
									<TableCell>Paid</TableCell>
									<TableCell>Delivered</TableCell>
									<TableCell></TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								<TableRow>
									<TableCell>773194a9-6d14-417e-8728-6665b977baa2</TableCell>
									<TableCell>2020-12-15</TableCell>
									<TableCell>$60</TableCell>
									<TableCell>2020-12-15</TableCell>
									<TableCell>
										<CheckIcon className={classes.iconDelivered} />

										<ClearIcon className={classes.iconNotDelivered} />
									</TableCell>
									<TableCell>
										<Button variant="contained" onClick={openDetails}>
											Details
										</Button>
									</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</TableContainer>
				</Grid>
			</Grid>
		</Container>
	);
};

export default withRouter(Profile); //redireccion a dashboard
