
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import React, {useContext} from 'react';
import {firebaseAuth} from '../provider/AuthProvider'

import Navigation from "../Navigation";
import LandingPage from "../Landing";
import SignUpPage from "../SignUp";
import SignInPage from "../SignIn";
import HomePage from "../Homepage";

import * as ROUTES from "../../constants/routes";

function App() {
  const { token } = useContext(firebaseAuth)
  const {handleSignup} = useContext(firebaseAuth)
  console.log(handleSignup)

  return (
    <Router>
      <div>

        <Switch>
          {/* route allows you to render by url path */}

          <Route exact path='/' render={rProps => token === null ? <SignInPage /> : <HomePage />} />
          <Route exact path='/signin' component={SignInPage} />
          <Route exact path='/signup' component={SignUpPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
