import React from "react";
import PlanCard from "./PlanCard"
import addIcon from "../../images/add.svg"
import "../../styles/plans.scss"

class PlanPanel extends React.Component {

    render() {
        // plan card for the whole week
        let planCards = []
        for (let i = 0; i < 5; i++) {
            planCards.push(
                <PlanCard
                    key={i}
                >
                </PlanCard>
            )
        }

        return (
            <div className="plan-panel">
                <h2>Design Your Plans</h2>
                <div className="plan-cards">
                    {planCards}
                    <div className="plan-card"><img src={addIcon} alt="" /></div>
                </div>
            </div>
        )
    }

}

export default PlanPanel;