import React from 'react';
import MainPlanPanel from "./plans/MainPlanPanel";
import SidePanel from "./SidePanel"
import AppHeader from "./AppHeader";
import '../styles/Layout.scss';
import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showSidePanel: false
    };
  }

  // close or open the side panel
  updateSidePanel = (set) => {
    this.setState({
      showSidePanel: set
    })
  }

  render() {
    const sidePanel = this.state.showSidePanel ?
      <SidePanel
        updateSidePanel={this.updateSidePanel}>
      </SidePanel> :
      ""

    return (
      <div className="app">
        <Router>
          <AppHeader></AppHeader>
          <div className={`main-panel ${this.state.showSidePanel ? "" : "has-side-panel"}`}>
            <Switch>
              <Route path="/" exact render={() => { return <Redirect to="/mainPlans" /> }} />
              <Route path="/mainPlans"
                render={() => (<MainPlanPanel updateSidePanel={this.updateSidePanel}></MainPlanPanel>)} />
            </Switch>
          </div>
          {sidePanel}
        </Router>
      </div>
    );
  }
}

export default App;
