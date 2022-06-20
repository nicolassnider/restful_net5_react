import { Pagination } from "@material-ui/lab";
import {
	Avatar,
	Button,
	Card,
	CardContent,
	CardMedia,
	Container,
	Grid,
	Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { getProducts } from "../../actions/ProductActions";
import useStyles from "../../theme/useStyles";

const Products = (props) => {
	const imageNotFound =
		"https://firebasestorage.googleapis.com/v0/b/netmarketfbase.appspot.com/o/images%2Fimage-not-found.png?alt=media&token=f87fb342-112b-41e8-87d9-d8f4f5fae783";

	const [productsRequest, setProductsRequest] = useState({
		pageIndex: 1,
		pageSize: 4,
		search: "",
	});
	const openProduct = async (item) => {
		//await addItemToShoppingCart(shoppingCartSession,item,dispatch)
		props.history.push("/productDetail/" + item.id);
	};
	const classes = useStyles();
	const [productsPaginator, setProductsPaginator] = useState({
		count: 0,
		pageIndex: 0,
		pageSize: 0,
		pageCount: 0,
		data: [],
	});
	const handleChange = (event, value) => {
		setProductsRequest((prev) => ({
			...prev,
			pageIndex: value,
		}));
	};
	useEffect(() => {
		const getProductsList = async () => {
			const response = await getProducts(productsRequest);
			setProductsPaginator(response.data);
		};
		getProductsList();
	}, [productsRequest]);

	if (!productsPaginator.data) {
		return null;
	}
	return (
		<Container
			className={classes.containermt}
			style={{
				marginTop: 30,
			}}
		>
			<Typography variant="h4" className={classes.textTitle}>
				Products
			</Typography>
			<Grid container spacing={4}>
				{productsPaginator.data.map((data) => (
					<Grid key={data.key} item lg={3} md={6} sm={6} xs={12}>
						<Card >
							<CardMedia
								className={classes.media}
								image={data.image ? data.image : imageNotFound}
								title="title"
							>
								<Avatar className={classes.price} variant="square">
									${data.price ? data.price : 0}
								</Avatar>
							</CardMedia>
							<CardContent>
								<Typography variant="h6" className={classes.textCard}>
									{data.name ? data.name : "No Name Defined"}
								</Typography>
								<Button
									variant="contained"
									color="primary"
									fullWidth
									onClick={() => openProduct(data)}
								>
									MORE DETAILS
								</Button>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
			<Pagination
				count={productsPaginator.pageCount}
				page={productsPaginator.pageIndex}
				onChange={handleChange}
			/>
		</Container>
	);
};

export default Products;
