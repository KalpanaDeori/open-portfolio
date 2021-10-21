import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

// PORTFOLIO LINKS
import { DemoPortfolio } from "./Portfolios/demo-portfolio/demo-potfolio";
import { Dolendeori } from "./Portfolios/DolenDeori/dolendeori";
function App() {
  return (
    <>
      <Router>
        <Switch>
          {/* HOME PAGE LINK */}
          <Route exact path="/">
            <Container className="mt-5 default-main-page-heading">
              <h1 className="homepage-heading">
                This is a Open Source Portfolio
              </h1>
              <p>Add your porfolio link below. Name the link with your name</p>

              {/* PORTFOLIO LINKS */}
              <NavLink to="/demo-portfolio" className="portfolio-link">
                Demo Portfolio
              </NavLink>
              <NavLink to="/dolen-deori" className="portfolio-link">
                Dolen Deori
              </NavLink>
            </Container>
          </Route>

          {/* DEMO PORTFOLIO LINK */}
          <Route exact path="/demo-portfolio">
            <DemoPortfolio></DemoPortfolio>
          </Route>
          <Route exact path="/dolen-deori">
            <Dolendeori></Dolendeori>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
