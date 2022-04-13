import {
	Button,
	CardMedia,
	Container,
	Grid,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableRow,
	TextField,
	Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { getProduct } from "../../actions/ProductActions";
import useStyles from "../../theme/useStyles";
import { useStateValue } from "../../context/store";
import { addItemToShoppingCart} from "../../actions/ShoppingCartActions"
const ProductDetail = (props) => {
	const [{ shoppingCartSession }, dispatch] = useStateValue();
	const [quantity,setQuantity] = useState(1);
	const [selectedProduct, setSelectedProduct] = useState({
		id: 0,
		name: "",
		description: "",
		stock: 0,
		brandId: 0,
		brandName: "",
		categoryId: 0,
		categoryName: "",
		price: 0,
		image: "",
	});

	useEffect(() => {
		const id = props.match.params.id;
		const getProductAsync = async () => {
			const response = await getProduct(id);
			console.log(response);
			setSelectedProduct(response.data);
		};
		getProductAsync();
	}, [selectedProduct]);

	const addToShoppingCart = async () => {
		const item = {
			id: selectedProduct.id,
            name: selectedProduct.name,
            price: selectedProduct.price,
            quantity: quantity,
            image: selectedProduct.image,
            brand: selectedProduct.brandName,
            category: selectedProduct.categoryName
		};

		await addItemToShoppingCart(shoppingCartSession, item, dispatch);
		
		props.history.push("/shoppingCart");
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
				{selectedProduct.Name}
			</Typography>
			<Grid container spacing={4}>
				<Grid item lg={8} md={8} xs={12}>
					<Paper className={classes.paperImg} variant="outlined" square>
						<CardMedia
							className={classes.mediaDetail}
							image="https://www.molinaripixel.com.ar/wp-content/uploads/2015/02/foto_cursos_fotografia_productos-356x534.jpg"
							title={selectedProduct.description}
						/>
					</Paper>
				</Grid>
				<Grid item lg={4} md={4} xs={12}>
					<TableContainer component={Paper} variant="outlined">
						<Table>
							<TableBody>
								<TableRow>
									<TableCell>
										<Typography variant="subtitle2">Price</Typography>
									</TableCell>
									<TableCell>
										<Typography variant="subtitle2">
											${selectedProduct.price}
										</Typography>
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>
										<Typography variant="subtitle2">Quantity</Typography>
									</TableCell>
									<TableCell>
										<TextField
										id="product-quantity"
										label=""
										type="number"
										value={quantity}
										onChange={event=>setQuantity(event.target.value)}
										defaultValue={1}
										inputlabelprops={{
											shrink: true,
										}}
										/>
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell colSpan={2}>
										<Button
											variant="contained"
											color="primary"
											size="large"
											onClick={addToShoppingCart}
										>
											Add to Cart
										</Button>
									</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</TableContainer>
				</Grid>
				<Grid item lg={8} md={8} xs={12}>
					<Grid container spacing={2}>
						<Grid item md={6}>
							<Typography className={classes.textDetail}>
								Price: ${selectedProduct.price}
							</Typography>
							<Typography className={classes.textDetail}>
								Stock: {selectedProduct.stock}
							</Typography>
							<Typography className={classes.textDetail}>
								Brand: {selectedProduct.brandName}
							</Typography>
							<Typography className={classes.textDetail}>
								Category: Category 1
							</Typography>
						</Grid>
						<Grid item md={6}>
							<Typography className={classes.textDetail}>
								Description:
							</Typography>
							<Typography className={classes.textDetail}>
								{selectedProduct.description}
							</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
};

export default ProductDetail;
