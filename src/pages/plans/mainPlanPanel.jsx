import React from "react";
import MealCard from "./MealCard"
import "../../styles/plans.scss"

class MealPlanPanel extends React.Component {
    
    render() {
        return (
            <div className="plan-panel">
                <h1>Weekly Plans</h1> 
                <MealCard></MealCard>
                <MealCard></MealCard>
                <MealCard></MealCard>
            </div>
        )
    }

}

export default MealPlanPanel;