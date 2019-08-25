import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import RootContainer from './containers/root-container';
import TabContainer from './containers/tab-container';
import withRoot from "./withRoot";
class App extends React.Component{

  public render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/" component={RootContainer}  />
              <Route  path="/tabcontainer" component={TabContainer} />
            </Switch>
            </div>
        </BrowserRouter>
      </div>
        
    );
  }
}
export default  withRoot(App);
