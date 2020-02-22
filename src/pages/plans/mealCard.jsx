import React from "react";
import clean from "../../images/clean.svg"

class MealCard extends React.Component {

    render() {
        return (
            <div className="meal-card">
                <div className="day-column">{this.props["card-day"]}</div>
                <div className="img-column"><img src={this.props["card-img"]} alt="" /></div>
                <div className="detail-column" onClick={() => this.props.updateSidePanel(true)}>
                    <div>Breakfast</div>
                    <div>Lunch</div>
                    <div>Dinner</div>
                </div>
                <div className="edit-column">
                    <div className="edit-img"><img src={clean} alt="" /></div>
                </div>
            </div>
        )
    }

}

export default MealCard;