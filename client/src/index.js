import React from "react";
import ReactDOM from "react-dom";
import AuthProvider from './components/provider/AuthProvider';
import {BrowserRouter} from 'react-router-dom'
import "./index.css";

import App from "./components/App";

import Firebase, { FirebaseContext } from "./components/Firebase";

ReactDOM.render(
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>,
  document.getElementById("root")
);
