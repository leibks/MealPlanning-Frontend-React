import React from "react";
import MealCard from "./MealCard";
import Calendar from 'react-calendar';
import "../../styles/schedule.scss";
import "../../styles/calendar.css"

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

const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayImg = [food1, food2, foodMachine, foodProcessor, cannedFood, lobster, foodVendor]
const one_day = 1000 * 60 * 60 * 24 // 1 day in milliseconds

class MealPlanPanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mealsInfo: [],
            showCalendar: false,
            dateRange: [new Date(), new Date(Date.now() + 6 * one_day)]
        };
    }

    componentDidMount() {
        // close the calendar when click other doms
        // let calendarDom = document.querySelector("#calendar");
        // document.addEventListener('click', (e) => {
        //     if (e.target !== calendarDom && !calendarDom.contains(e.target)) {
        //         this.displayCalendar(false)
        //     }
        // })
    }

    findSelectWeek = (date) => {
        let first = new Date(date.getTime() - date.getDay() * one_day);
        let last = new Date(first.getTime() + 6 * one_day);
        return [first, last];
    }

    updateDate = (givenDate) => {
        this.setState({
            dateRange: this.findSelectWeek(givenDate)
        }, () => {
            console.log(this.state.dateRange)
        })
    }

    displayCalendar = (display) => {
        this.setState({
            showCalendar: display
        })
    }

    displayMealCards = () => {
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
        return mealCards;
    }

    render() {
        

        return (
            <div className="schedule-panel">
                <div className="operations-colletion">
                    <div className="calendar-item" id="calendar">
                        <img onClick={() => this.displayCalendar(!this.state.showCalendar)} src={calendar} alt=""/>    
                        <Calendar className={`${!this.state.showCalendar ? "hidden" : ""}`} 
                                  locale="en"
                                  minDetail="decade"
                                  onChange={this.updateDate} 
                                  value={this.state.dateRange} />
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
                        <span className="left-date">
                            {this.state.dateRange[0].toDateString().split(" ")[2]} / 
                            {this.state.dateRange[0].toDateString().split(" ")[1]} / 
                            {this.state.dateRange[0].toDateString().split(" ")[3]}
                        </span> 
                        <span className="text">Schedule</span> 
                        <span className="right-arrow"><img src={rightArrow} alt=""/></span>
                        <span className="right-date">
                            {this.state.dateRange[1].toDateString().split(" ")[2]} / 
                            {this.state.dateRange[1].toDateString().split(" ")[1]} / 
                            {this.state.dateRange[1].toDateString().split(" ")[3]}
                        </span> 
                    </div>
                </div>
                {this.displayMealCards()}
            </div>
        )
    }

}

export default MealPlanPanel;