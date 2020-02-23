import React from 'react';
import MainSchedulePanel from "./schedule/MainSchedulePanel";
import PlanPanel from "./plans/PlanPanel"
import SidePanel from "./SidePanel"
import AppHeader from "./AppHeader";
import '../styles/layout.scss';
import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import { createHashHistory } from 'history'

const history = createHashHistory()

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showSidePanel: false
    };
  }

  componentDidMount() {
    // detect the route change
    history.listen(location => {
      window.scrollTo(0, 0);
      this.updateSidePanel(false)
    });

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
          <AppHeader showSidePanel={this.state.showSidePanel} ></AppHeader>
          <div className={`main-panel ${this.state.showSidePanel ? "" : "main-panel-not-side"}`}>
            <Switch>
              <Route path="/" exact render={() => { return <Redirect to="/schedule" /> }} />
              <Route path="/schedule"
                render={() => (
                  <MainSchedulePanel
                    updateSidePanel={this.updateSidePanel}>
                  </MainSchedulePanel>)} />
              <Route path="/plans"
                render={() =>
                  (<PlanPanel>
                  </PlanPanel>)} />
            </Switch>
          </div>
          {sidePanel}
        </Router>
      </div>
    );
  }
}

export default App;
