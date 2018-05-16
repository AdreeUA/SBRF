import * as React from "react";
import {renderRoutes} from "react-router-config";
import {IParentProps} from "./interfaces";

class Parent extends React.Component<IParentProps, {}> {
  public render() {
    return (
      <>
        <h2>Parent</h2>
        {renderRoutes(this.props.route.routes)}
      </>
    );
  }
}

export default Parent;
