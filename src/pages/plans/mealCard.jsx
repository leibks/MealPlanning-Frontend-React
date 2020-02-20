import React from "react";


class MealCard extends React.Component {

    render() {
        return (
            <div className="meal-card">
                <div className="day-column">Monday</div>
                <div className="img-column">Image</div>
                <ul className="detail-column">
                    <li>Breakfast</li>
                    <li>Lunch</li>
                    <li>Dinner</li>
                </ul>
                <div>Edit</div>
            </div>
        )
    }

}

export default MealCard;