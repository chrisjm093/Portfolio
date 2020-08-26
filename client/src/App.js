import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import AboutMe from "./pages/AboutMe"
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import PortfolioNavbar from "./components/PortfolioNavbar"
import PortfolioFooter from "./components/PortfolioFooter"

function App() {
  return (
      <Router>
      <div>
        <PortfolioNavbar />
        <Switch>
          <Route exact path="/" component={AboutMe} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <PortfolioFooter />
      </div>
      </Router>
    )
}

export default App;
