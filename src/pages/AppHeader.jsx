import React from "react";
import { Navbar, Nav } from 'react-bootstrap'
import brand from "../images/brand.svg"
import { NavLink } from 'react-router-dom';

class AppHeader extends React.Component {

    componentDidMount() {

    }

    render() {
        return (
            <div className={`app-header ${this.props.showSidePanel ? "app-header-show-side" : ""}`} >
                <Navbar bg="$header-color" variant="dark">
                    <Navbar.Brand href="/">Meal<img src={brand} alt="" />Master</Navbar.Brand>
                    <Nav>
                        <NavLink exact to="/plans">Plans</NavLink>
                        <NavLink exact to="/schedule">Schedule</NavLink>
                    </Nav>
                    <Nav className="profile-nav"></Nav>
                </Navbar>
            </div>
        )
    }

}

export default AppHeader;