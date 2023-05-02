import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./Redux/store/store";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Auth0Provider
        domain="dev-nw4a48dj5goqe2ja.us.auth0.com"
        clientId="O7A2dLNpHkT0plBUVgaliEDklNOMJ97Q"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
        scope="openid,name,email,roles"
      >
        <App />
      </Auth0Provider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
