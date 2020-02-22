import React from "react";


class SidePanel extends React.Component {

    render() {
        return (
            <div className="side-panel">
                <div className="side-header">
                    <div onClick={() => this.props.updateSidePanel(false)} className="close">X</div>
                </div>
                <div className="side-content">
                    <div className="content-component"></div>
                    <div className="content-component"></div>
                    <div className="content-component"></div>
                </div>
            </div>
        )
    }

}

export default SidePanel;