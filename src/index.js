import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./App";
import App2 from "./App2";
import registerServiceWorker from "./registerServiceWorker";
import CssBaseline from "@material-ui/core/CssBaseline";

ReactDOM.render(
  <React.Fragment>
    <CssBaseline />
    <Router>
      <React.Fragment>
        <Route exact path="/" component={App} />
        <Route exact path="/2" component={App2} />
      </React.Fragment>
    </Router>
  </React.Fragment>,
  document.getElementById("root")
);
registerServiceWorker();
