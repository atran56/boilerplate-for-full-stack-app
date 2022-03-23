import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import App from "./app";

// import history from "./history";
// import store from "./store";
// import { Provider } from "react-redux";


ReactDOM.render(
//   <Provider store={store}>
//     <Router history={history}>
    <App />,
//     </Router>
//   </Provider>,
    document.getElementById("app")
);