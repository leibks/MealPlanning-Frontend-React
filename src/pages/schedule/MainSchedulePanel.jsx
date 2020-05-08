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
import pick from "../../images/pick.svg"
import save from "../../images/save.svg"
import leftArrow from "../../images/leftArrow.svg"
import rightArrow from "../../images/rightArrow.svg"
import calendar from "../../images/calendar.svg"

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
                <div className="operations-colletion">
                    <div className="calendar-item">
                        
                        <img src={calendar} alt=""/>
                    </div>
                    <div className="general-items">
                        <span className="radius-btn red-btn">
                            <img src={pick} alt="" />
                            Plans
                        </span>
                        <span className="radius-btn green-btn ">
                            <img src={save} alt="" />
                            Save
                        </span>
                    </div>
                    <div className="switch-day-item">
                        <span className="left-arrow"><img src={leftArrow} alt=""/></span>
                        <span className="left-date">5/4/2020</span> 
                        <span className="text">Weekly Plans</span> 
                        <span className="right-arrow"><img src={rightArrow} alt=""/></span>
                        <span className="right-date">5/10/2020</span>    
                    </div>
                </div>
                {mealCards}
            </div>
        )
    }

}

export default MealPlanPanel;