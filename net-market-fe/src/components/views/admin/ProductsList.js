import {
	Button,
	Container,
	Grid,
	Pagination,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import useStyles from "../../../theme/useStyles";
import AddIcon from "@mui/icons-material/Add";
import { TestProductArray } from "../../data/dataTest";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { getProducts } from "../../../actions/ProductActions";

const ProductsList = (props) => {
	const [requestProducts, setRequestProducts] = React.useState({
		pageIndex: 1,
		pageSize: 4,
		search: "",
	});

	const [paginatorProducts, setPaginatorProducts] = React.useState({
		count: 0,
		pageIndex: 1,
		pageSize: 4,
		pageCount: 0,
		data: [],
	});

	const handleChange = (event, value) => {
		setRequestProducts((prev) => ({
			...prev,
			pageIndex: value,
		}));
	};

	useEffect(() => {
		const getProductsList = async () => {
			const response = await getProducts(requestProducts);
			setPaginatorProducts(response.data);
		};
		getProductsList();
	}, [requestProducts]);

	const classes = useStyles();
	
	const addProduct = () => {
		props.history.push("/admin/addProduct");
	};
	const editProduct = (id) => {
		props.history.push("/admin/editProduct/" + id);
	};
	return (
		<Container
			className={classes.containermt}
			style={{
				marginTop: 30,
			}}
		>
			<Grid container>
				<Grid item lg={6} sm={6} xs={12}>
					<Typography variant="h4" className={classes.textTitle}>
						Products
					</Typography>
				</Grid>
				<Grid item lg={6} sm={6} xs={12}>
					<Button
						variant="contained"
						color="inherit"
						className={classes.add_button}
						onClick={addProduct}
					>
						<AddIcon />
						Add Product
					</Button>
				</Grid>
			</Grid>
			<TableContainer>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Id</TableCell>
							<TableCell>Name</TableCell>
							<TableCell>Price</TableCell>
							<TableCell>Brand</TableCell>
							<TableCell></TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{paginatorProducts.data.map((product) => (
							<TableRow key={product.id}>
								<TableCell>{product.id}</TableCell>
								<TableCell>{product.name}</TableCell>
								<TableCell>{product.price}</TableCell>
								<TableCell>{product.brandName}</TableCell>
								<TableCell>
									<Button
										variant="contained"
										color="primary"
										onClick={() => {
											editProduct(product.id);
										}}
									>
										<EditIcon />
									</Button>
									<Button variant="contained" color="secondary">
										<DeleteIcon />
									</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			<Pagination count={paginatorProducts.pageCount} page={paginatorProducts.pageIndex } onChange={handleChange} ></Pagination>
		</Container>
	);
};

export default ProductsList;
