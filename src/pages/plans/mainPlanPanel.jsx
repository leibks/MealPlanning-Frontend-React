import React from "react";
import MealCard from "./mealCard"

class mealCard extends React.Component {
    
    render() {
        return (
            <div>
                <h3>Main Plans</h3> 
                <MealCard></MealCard>
                <MealCard></MealCard>
                <MealCard></MealCard>
            </div>
        )
    }

}

export default mealCard;