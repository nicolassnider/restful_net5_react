import {
	Button,
	CardMedia,
	Container,
	Divider,
	Grid,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableRow,
	Typography,
} from "@mui/material";
import React from "react";
import useStyles from "../../theme/useStyles";
import DeleteIcon from "@mui/icons-material/Delete";
import { useStateValue } from "../../context/store";

const ShoppingCart = (props) => {
	const [{ shoppingCartSession }, dispatch] = useStateValue();
	const productArray = shoppingCartSession ? shoppingCartSession.items : [];
	let sum = 0;
	productArray.forEach((product) => {
		sum += product.price;
	});

	const processPurchase = () => {
		props.history.push("/purchaseProcess");
	};
	const classes = useStyles();
	return (
		<Container
			className={classes.containermt}
			style={{
				marginTop: 30,
			}}
		>
			<Typography variant="h4" className={classes.textTitle}>
				Shopping cart
			</Typography>
			<Grid container spacing={2}>
				<Grid item lg={9} md={8} sm={12} xs={12}>
					<TableContainer>
						<Table>
							<TableBody>
								{productArray.map((item) => (
									<TableRow key={item.id}>
										<TableCell>
											<CardMedia
												className={classes.imgProductCC}
												image={item.image}
												title={item.description}
											/>
										</TableCell>
										<TableCell>
											<Typography className={classes.textDetail}>
												{item.name}
											</Typography>
										</TableCell>
										<TableCell>
											<Typography className={classes.textDetail}>
												{item.price}
											</Typography>
										</TableCell>
										<TableCell>
											<Typography className={classes.textDetail}>
												{item.quantity}
											</Typography>
										</TableCell>
										<TableCell>
											<DeleteIcon />
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</Grid>
				<Grid item lg={3} md={4} sm={6} xs={12}>
					<Paper variant="outlined" square className={classes.paperPadding}>
						<Typography variant="h6" className={classes.textTitle}>
							Subtotal ({productArray.length}) Products
						</Typography>
						<Typography className={classes.textTitle}>$ {sum}</Typography>
						<Divider
							className={classes.gridmb}
							style={{ marginTop: 5, marginBottom: 20 }}
						/>
						<Button
							variant="contained"
							color="primary"
							size="large"
							onClick={processPurchase}
						>
							Buy
						</Button>
					</Paper>
				</Grid>
			</Grid>
		</Container>
	);
};

export default ShoppingCart;
