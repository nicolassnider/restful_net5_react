import { ThemeProvider } from "@mui/styles";
import MenuAppBar from "./components/navigation/MenuAppBar";
import Login from "./components/security/Login";
import RegisterUser from "./components/security/RegisterUser";
import theme from "./theme/theme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Product from "./components/views/Product";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <MenuAppBar />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={RegisterUser} />
          <Route exact path="/" component={Product} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
