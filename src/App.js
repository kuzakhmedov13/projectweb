import React from "react";
import Navbar from "./Components/Navbar";
import Footer from './Components/Footer';
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/HomePage/Home";
import Products from "./Pages/Products/Products";
import Services from "./Pages/ServicesPage/Services";
import SignUp from "./Pages/SignUp/SignUp";
import Trailer from "./Pages/Trailer/Trailer";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" exact component={Services} />
        <Route path="/products" exact component={Products} />
        <Route path="/sign-up" exact component={SignUp} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
