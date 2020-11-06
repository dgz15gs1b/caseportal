import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";

import Navigation from "../Navigation";
import LandingPage from "../Landing";
import SignUpPage from "../SignUp";
import SignInPage from "../SignIn";
import HomePage from "../Homepage";

import * as ROUTES from "../../constants/routes";

function App() {
  return (
    <Router>
      <div>
        {/*<Navigation />*/}

        {/*<hr />*/}

        {/*<Route exact path={ROUTES.LANDING} component={LandingPage} />*/}
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route path={ROUTES.HOME} component={HomePage} />
      </div>
    </Router>
  );
}

export default App;
