import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Collections from "./Pages/Collections/Collections/Collections";
import Login from "./Pages/Login/Login/Login";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import Register from "./Pages/Login/Register/Register";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import AddProduct from "./Pages/Dashboard/AddProduct/AddProduct";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import ManageProduct from "./Pages/Dashboard/ManageProduct/ManageProduct";
import ManageAllOrders from "./Pages/Dashboard/ManageAllOrders/ManageAllOrders";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin/MakeAdmin";
import MyOrders from "./Pages/Dashboard/MyOrders/MyOrders";
import Payment from "./Pages/Dashboard/Payment/Payment";
import Reviews from "./Pages/Dashboard/Reviews/Reviews";
import Sidebar from "./Pages/Dashboard/Sidebar/Sidebar";
import NotFound from "./Pages/NotFound/NotFound";
import Contact from "./Pages/Home/Contact/Contact";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/collections">
              <Collections />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <PrivateRoute path="/addProduct">
              <AddProduct />
            </PrivateRoute>
            <PrivateRoute path="/manageProduct">
              <ManageProduct />
            </PrivateRoute>
            <PrivateRoute path="/manageOrder">
              <ManageAllOrders />
            </PrivateRoute>
            <Route path="/makeAdmin">
              <MakeAdmin />
            </Route>
            <PrivateRoute path="/myOrders">
              <MyOrders />
            </PrivateRoute>
            <PrivateRoute path="/payment">
              <Payment />
            </PrivateRoute>
            <PrivateRoute path="/review">
              <Reviews />
            </PrivateRoute>
            <Route path="/productDetails/:productId">
              <ProductDetails />
            </Route>
            <PrivateRoute path="/dashboard">
              <Sidebar />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
