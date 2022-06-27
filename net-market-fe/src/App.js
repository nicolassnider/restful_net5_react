import { ThemeProvider } from "@mui/styles";
import MenuAppBar from "./components/navigation/MenuAppBar";
import Login from "./components/security/Login";
import RegisterUser from "./components/security/RegisterUser";
import theme from "./theme/theme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "./components/views/Products";
import ProductDetail from "./components/views/ProductDetail";
import ShoppingCart from "./components/views/ShoppingCart";
import PurchaseProcess from "./components/views/PurchaseProcess";
import PurchaseOrder from "./components/views/PurchaseOrder";
import Profile from "./components/security/Profile";
import EditUser from "./components/views/admin/EditUser";
import UsersList from "./components/views/admin/UsersList";
import ProductsList from "./components/views/admin/ProductsList";
import AddProduct from "./components/views/admin/AddProduct";
import EditProduct from "./components/views/admin/EditProduct";
import OrdersList from "./components/views/admin/OrdersList";
import { useEffect, useState } from "react";
import { getUser } from "./actions/UserActions";
import { useStateValue } from "./context/store";
import { getShoppingCart } from "./actions/ShoppingCartActions";
import { v4 as uuidv4 } from "uuid";
import { Snackbar } from "@mui/material";

function App() {
	const [{ userSession, openSnackbar }, dispatch] = useStateValue();
	const [serverResponse, setServerResponse] = useState(false);

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(async () => {
		let shoppingCartId = window.localStorage.getItem("shoppingCart");

		if (!shoppingCartId) {
			shoppingCartId = uuidv4();
			window.localStorage.setItem("shoppingCart", shoppingCartId);
		}

		if (!serverResponse) {
			await getUser(dispatch);
			await getShoppingCart(dispatch, shoppingCartId);
			setServerResponse(true);
		}
	}, [serverResponse]);
	return (
		<ThemeProvider theme={theme}>
			<Snackbar
				anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
				open={openSnackbar ? openSnackbar.open : false}
				autoHideDuration={3000}
				ContentProps={{ "aria-describedby": "message-id" }}
				message={
					<span id="message-id">
						{openSnackbar ? openSnackbar.message : ""}
					</span>
				}
				onClose={() =>
					dispatch({
						type: "OPEN_SNACKBAR",
						openMessage: {
							open: false,
							message: "",
						},
					})
				}
			></Snackbar>
			<Router>
				<MenuAppBar />
				<Switch>
					<Route exact path="/login" component={Login} />
					<Route exact path="/register" component={RegisterUser} />
					<Route exact path="/" component={Products} />
					<Route exact path="/productDetail/:id" component={ProductDetail} />
					<Route exact path="/shoppingCart" component={ShoppingCart} />
					<Route exact path="/purchaseProcess" component={PurchaseProcess} />
					<Route exact path="/purchaseOrder/:id" component={PurchaseOrder} />
					<Route exact path="/profile" component={Profile} />
					<Route exact path="/admin/users" component={UsersList} />
					<Route exact path="/admin/users/:id" component={EditUser} />
					<Route exact path="/admin/products" component={ProductsList} />
					<Route exact path="/admin/addProduct" component={AddProduct} />
					<Route exact path="/admin/editProduct/:id" component={EditProduct} />
					<Route exact path="/admin/orders" component={OrdersList} />
				</Switch>
			</Router>
		</ThemeProvider>
	);
}

export default App;
