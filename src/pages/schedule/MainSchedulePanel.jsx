import React from "react";
import MealCard from "./MealCard";
import "../../styles/schedule.scss";

import food1 from "../../images/food1.svg"
import food2 from "../../images/food2.svg"
import foodMachine from "../../images/foodMachine.svg"
import foodProcessor from "../../images/foodProcessor.svg"
import cannedFood from "../../images/cannedFood.svg"
import lobster from "../../images/lobster.svg"
import foodVendor from "../../images/foodVendor.svg"

const dayOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const dayImg = [food1, food2, foodMachine, foodProcessor, cannedFood, lobster, foodVendor]

class MealPlanPanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mealsInfo: []
        };
    }

    render() {
        // meal cards for the whole week
        let mealCards = []
        for (let i = 0; i < dayOfWeek.length; i++) {
            mealCards.push(
                <MealCard
                    key={dayOfWeek[i]}
                    card-day={dayOfWeek[i]} card-img={dayImg[i]}
                    breakfast="" lunch="" dinner=""
                    updateSidePanel={this.props.updateSidePanel}
                >
                </MealCard>
            )
        }

        return (
            <div className="schedule-panel">
                <h2>Weekly Plans</h2>
                {mealCards}
            </div>
        )
    }

}

export default MealPlanPanel;