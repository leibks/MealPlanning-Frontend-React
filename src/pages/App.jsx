import React from 'react';
import MainPlanPlan from "./plans/MainPlanPanel"
import AppHeader from "./AppHeader"
import '../styles/Layout.scss'

function App() {
  return (
    <div className="app">
      <div className="main-panel">
      <AppHeader></AppHeader>
      <MainPlanPlan></MainPlanPlan>
      </div>
    </div>
  );
}

export default App;
