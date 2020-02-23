import React from "react";
import { Navbar, Nav } from 'react-bootstrap'
import brand from "../images/brand.svg"

class AppHeader extends React.Component {

    render() {
        return (
            <div className={`app-header ${this.props.showSidePanel ? "app-header-show-side" : ""}`} >
                <Navbar bg="$main-background-color" variant="light">
                    <Navbar.Brand href="/">Meal<img src={brand} alt="" />Master</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#schedule">Schedule</Nav.Link>
                        <Nav.Link href="#plans">Plans</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        )
    }

}

export default AppHeader;