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
import React from "react";
import useStyles from "../../../theme/useStyles";
import ImageUploader from "react-images-upload";
import { registerProduct } from "../../../actions/ProductActions";
import { v4 as uuidv4 } from "uuid";

const AddProduct = () => {
	const imageNotFound =
		"https://firebasestorage.googleapis.com/v0/b/netmarketfbase.appspot.com/o/images%2Fimage-not-found.png?alt=media&token=f87fb342-112b-41e8-87d9-d8f4f5fae783";

	const [product, setProduct] = React.useState({
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
		file: "",
		tempImg: null,
	});
	const [categoryId, setCategory] = React.useState("");
	const [brandId, setBrand] = React.useState("");
	const handleCategoryChange = (event) => {
		console.log(event.target);
		setCategory(event.target.value);
	};
	const handleBrandChange = (event) => {
		setBrand(event.target.value);
	};

	const saveProduct = async () => {
		product.categoryId = categoryId;
		product.brandId = brandId;
		console.log(product);
		const result = await registerProduct(product);
		console.log("result", result);
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setProduct((prev) => ({ ...prev, [name]: value }));
	};

	const upImage = (images) => {
		let photo = images[0];
		let photoUrl = "";
		try {
			photoUrl = URL.createObjectURL(photo);
		} catch (error) {
			photoUrl = imageNotFound;
		}
		setProduct((prev) => ({ ...prev, file: photo, tempImg: photoUrl }));
	};

	const classes = useStyles();

	const keyImage = uuidv4();
	return (
		<Container
			className={classes.containermt}
			style={{
				marginTop: 30,
			}}
		>
			<Grid container justifyContent="center">
				<Grid item sm={6} xs={12}>
					<Typography variant="h4" className={classes.textTitle}>
						Add Products
					</Typography>
					<form onSubmit={(e) => e.preventDefault()} className={classes.form}>
						<TextField
							label="Product Name"
							variant="outlined"
							fullWidth
							name="name"
							className={classes.gridmb}
							style={{ marginTop: 5, marginBottom: 20 }}
							InputLabelProps={{ shrink: true }}
							onChange={handleChange}
						/>

						<TextField
							label="Price"
							variant="outlined"
							fullWidth
							name="price"
							className={classes.gridmb}
							style={{ marginTop: 5, marginBottom: 20 }}
							InputLabelProps={{ shrink: true }}
							onChange={handleChange}
						/>

						<TextField
							label="Stock"
							variant="outlined"
							fullWidth
							name="stock"
							className={classes.gridmb}
							style={{ marginTop: 5, marginBottom: 20 }}
							InputLabelProps={{ shrink: true }}
							onChange={handleChange}
						/>

						<TextField
							label="Description"
							variant="outlined"
							fullWidth
							name="description"
							className={classes.gridmb}
							style={{ marginTop: 5, marginBottom: 20 }}
							InputLabelProps={{ shrink: true }}
							multiline
							rows={4}
							onChange={handleChange}
						/>

						<FormControl
							className={classes.formControl}
							style={{ margin: 10, minWidth: 200 }}
						>
							<InputLabel id="brand-select-label">Brand</InputLabel>
							<Select
								labelId="brand-select-label"
								id="brand-select"
								value={brandId}
								onChange={handleBrandChange}
							>
								<MenuItem value={1}>Nike</MenuItem>
								<MenuItem value={2}>Addidas</MenuItem>
								<MenuItem value={3}>Puma</MenuItem>
							</Select>
						</FormControl>

						<FormControl
							className={classes.formControl}
							style={{ margin: 10, minWidth: 200 }}
						>
							<InputLabel id="category-select-label">Category</InputLabel>
							<Select
								labelId="category-select-label"
								id="category-select"
								value={categoryId}
								onChange={handleCategoryChange}
							>
								<MenuItem value={1}>Summer</MenuItem>
								<MenuItem value={2}>Winter</MenuItem>
								<MenuItem value={3}>Spring</MenuItem>
							</Select>
						</FormControl>

						<Grid container spacing={2}>
							<Grid item sm={6} xs={12}>
								<ImageUploader
									withIcon={true}
									singleImage={true}
									key={keyImage}
									buttonText="Search"
									imgExtension={[".jpg", ".jpeg", ".png", ".gif"]}
									maxFileSize={5242880}
									onChange={upImage}
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
										product.tempImg
											? product.tempImg
											: product.image
											? product.image
											: imageNotFound
									}
								/>
							</Grid>
						</Grid>

						<Button variant="contained" color="primary" onClick={saveProduct}>
							Add
						</Button>
					</form>
				</Grid>
			</Grid>
		</Container>
	);
};

export default AddProduct;
