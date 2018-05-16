import {inject, observer} from "mobx-react";
import * as React from "react";
import {IStore} from "src/data/store/interfaces";

@inject("homeStore")
@observer
class Home extends React.Component<IStore, {}> {
  public render() {
    return <h2>{this.props.homeStore}</h2>;
  }
}

export default Home;
