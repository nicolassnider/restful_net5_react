import {
	Avatar,
	Button,
	Container,
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	TextField,
	Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import useStyles from "../../../theme/useStyles";
import ImageUploader from "react-images-upload";
import { getProduct, updateProduct } from "../../../actions/ProductActions";
import { v4 as uuidv4 } from "uuid";

const EditProduct = (props) => {
	const imageNotFound =
		"https://firebasestorage.googleapis.com/v0/b/netmarketfbase.appspot.com/o/images%2Fimage-not-found.png?alt=media&token=f87fb342-112b-41e8-87d9-d8f4f5fae783";

	const [product, setProduct] = useState({
		id: 0,
		name: "",
		description: "",
		stock: 0,
		brandId: 0,
		categoryId: 0,
		price: 0.0,
		image: "",
		file: "",
		tempImg: null,
	});

	const [category, setCategory] = useState("");
	const [brand, setBrand] = useState("");

	const handleCategoryChange = (event) => {
		setCategory(event.target.value);
	};
	const handleBrandChange = (event) => {
		setBrand(event.target.value);
	};
	const handleChange = (event) => {
		const { name, value } = event.target;
		setProduct((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const uploadImage = (images) => {
		let photo = images[0];
		let photoUrl = "";
		try {
			photoUrl = URL.createObjectURL(photo);
		} catch (error) {
			photoUrl = imageNotFound;
		}
		setProduct((prev) => ({
			...prev,
			file: photo,
			tempImg: photoUrl,
		}));
	};
	useEffect(() => {
		const id = props.match.params.id;
		const getProductAsync = async () => {
			const response = await getProduct(id);
			setProduct(response.data);
			setCategory(response.data.categoryId);
			setBrand(response.data.brandId);
		};
		getProductAsync();
	}, []);

	const saveProduct = async () => {
		console.log(props.match.params.id);
		product.categoryId = category;
		product.brandId = brand;
		const result = await updateProduct(props.match.params.id, product);		
	};

	const keyImage = uuidv4();

	const classes = useStyles();
	return (
		<Container className={classes.containermt}>
			<Grid container justifyContent="center">
				<Grid item sm={6} x2={12}>
					<Typography variant="h4" className={classes.textTitle}>
						Edit Product
					</Typography>
					<form onSubmit={(e) => e.preventDefault()} className={classes.form}>
						<TextField
							label="Product Name"
							variant="outlined"
							fullWidth
							className={classes.gridmb}
							style={{ marginTop: 5, marginBottom: 20 }}
							InputLabelProps={{ shrink: true }}
							value={product.name}
							name="name"
							onChange={handleChange}
						/>

						<TextField
							label="Price"
							variant="outlined"
							fullWidth
							className={classes.gridmb}
							style={{ marginTop: 5, marginBottom: 20 }}
							InputLabelProps={{ shrink: true }}
							value={product.price}
							name="price"
							onChange={handleChange}
						/>

						<TextField
							label="Stock"
							variant="outlined"
							fullWidth
							className={classes.gridmb}
							style={{ marginTop: 5, marginBottom: 20 }}
							InputLabelProps={{ shrink: true }}
							value={product.stock}
							name="stock"
							onChange={handleChange}
						/>

						<TextField
							label="Description"
							variant="outlined"
							fullWidth
							className={classes.gridmb}
							style={{ marginTop: 5, marginBottom: 20 }}
							InputLabelProps={{ shrink: true }}
							multiline
							rows={4}
							value={product.description}
							name="description"
							onChange={handleChange}
						/>
						<FormControl
							className={classes.formControl}
							style={{ minWidth: 120 }}
						>
							<InputLabel id="brand-select-label">Brand</InputLabel>
							<Select
								labelId="brand-select-id"
								id="brand-select"
								value={brand||''}
								onChange={handleBrandChange}
							>
								<MenuItem value={1}>brand 1</MenuItem>
								<MenuItem value={2}>brand 2</MenuItem>
								<MenuItem value={3}>brand 3</MenuItem>
							</Select>
						</FormControl>
						<FormControl
							className={classes.formControl}
							style={{ minWidth: 120 }}
						>
							<InputLabel id="category-select-label">Category</InputLabel>
							<Select
								labelId="category-select-id"
								id="category-select"
								value={category||''}
								onChange={handleCategoryChange}
							>
								<MenuItem value={1}>category 1</MenuItem>
								<MenuItem value={2}>category 2</MenuItem>
								<MenuItem value={3}>category 3</MenuItem>
							</Select>
						</FormControl>
						<Grid container spacing={2}>
							<Grid item sm={6} xs={12}>
								<ImageUploader
									singleImage={true}
									key={keyImage}
									withIcon={true}
									buttonText="Search"
									imgExtension={[".jpg", ".jpeg", ".png", ".gif"]}
									maxFileSize={5242880}
									onChange={uploadImage}
								/>
							</Grid>
							<Grid item sm={6} xs={12}>
								<Avatar
									variant="square"
									style={{
										width: 175,
										height: 175,
										backgroundColor: "#F2F2F2",
									}}
									className={classes.productAvatar}
									src={
										product.tempImg ? product.tempImg : (product.image?product.image:imageNotFound)}
								/>
							</Grid>
						</Grid>

						<Button variant="contained" color="primary" onClick={saveProduct}>
							Edit
						</Button>
					</form>
				</Grid>
			</Grid>
		</Container>
	);
};

export default EditProduct;
