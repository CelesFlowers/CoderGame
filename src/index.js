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
        domain="dev-omtcqhymjc4pjbp6.us.auth0.com"
        clientId="K6PixtCH1oIk73faxMuR1IOIgT5lPFCG"
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
