import {Provider} from "mobx-react";
import * as React from "react";
import * as ReactDOM from "react-dom";
import {renderRoutes} from "react-router-config";
import {BrowserRouter} from "react-router-dom";
import {routes} from "src/data/routes";
import store from "src/data/store";
import "storm-react-diagrams/dist/style.min.css";
import "./index.css";

ReactDOM.render(
  <Provider {...store}>
    <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
  </Provider>,
  document.getElementById("root") as HTMLElement
);
