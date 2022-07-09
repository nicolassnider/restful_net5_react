import {
	Button,
	Container,
	Pagination,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import useStyles from "../../../theme/useStyles";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { getUsers } from "../../../actions/UserActions";
import { withRouter } from "react-router-dom";

const UsersList = (props) => {
	const [requestUsers, setRequestUsers] = useState({
		pageIndex: 1,
		pageSize: 20,
		search: "",
	});

	const [usersPaginator, setUsersPaginator] = useState({
		count: 0,
		pageIndex: 0,
		pageSize: 0,
		pageCount: 0,
		data: [],
	});

	const handleChange = (event, value) => {
		setRequestUsers((prev) => ({ ...prev, pageIndex: value }));
	};

	useEffect(() => {
		const getUsersList = async () => {
			const response = await getUsers(requestUsers);
			setUsersPaginator(response.data);
		};
		getUsersList();
	}, [requestUsers]);

	const classes = useStyles();
	const editUser = (id) => {
		props.history.push("/admin/users/" + id);
	};
	return (
		<Container
			className={classes.containermt}
			style={{
				marginTop: 30,
			}}
		>
			<Typography variant="h4" className={classes.textTitle}>
				Users
			</Typography>
			<TableContainer>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Id</TableCell>
							<TableCell>User</TableCell>
							<TableCell>Email</TableCell>
							<TableCell>User Name</TableCell>
							<TableCell></TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{usersPaginator.data.map((user) => (
							<TableRow key={user.id}>
								<TableCell>{user.id}</TableCell>
								<TableCell>{user.firstName + " " + user.lastName}</TableCell>
								<TableCell>{user.email}</TableCell>
								<TableCell>{user.userName}</TableCell>
								<TableCell>
									<Button
										variant="contained"
										color="primary"
										onClick={() => editUser(user.id)}
									>
										<EditIcon />
									</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			<Pagination
				count={usersPaginator.pageCount}
				page={usersPaginator.pageIndex}
				onChange={handleChange}
			></Pagination>
		</Container>
	);
};

export default withRouter( UsersList);
