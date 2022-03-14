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
import Users from "./components/views/admin/Users";

function App() {
  return (
    <ThemeProvider theme={theme}>
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
          <Route exact path="/admin/users" component={Users} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
