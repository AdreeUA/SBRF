import {Button} from "antd";
import * as React from "react";
import {hot} from "react-hot-loader";
import {renderRoutes} from "react-router-config";
import {Link} from "react-router-dom";
import "./App.css";
import logoSvg from "./logo.svg";

class App extends React.Component<any, {}> {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logoSvg} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React!</h1>
          <ul>
            <li>
              <Link to="/"> Home</Link>
            </li>
            <li>
              <Link to="/parent"> Parent</Link>
            </li>
            <li>
              <Link to="/parent/111/child"> Child</Link>
            </li>
          </ul>
        </header>
        <Button>Button</Button>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        {renderRoutes(this.props.route.routes)}
      </div>
    );
  }
}

export default hot(module)(App);
