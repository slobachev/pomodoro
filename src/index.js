import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import thunk from "redux-thunk";

import { createStore, applyMiddleware } from "redux";

import App from "./app/App";
import rootReducer from "./reducers";
import * as serviceWorker from "./serviceWorker";
import "./index.css";

const middleware = applyMiddleware(thunk);
const store = createStore(rootReducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
