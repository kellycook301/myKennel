// allowing react to be used
import React, { Component } from "react"
import { Link } from "react-router-dom"
// allowing some bootstrap styles to be used
import "bootstrap/dist/css/bootstrap.min.css"
import "./NavBar.css"

// this is XML. It is NOT HTML. It may look very similar but just remember that you ae using XML when
// using React. This will be rendered to the page.
class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Locations</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/animals">Animals</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/employees">Employees</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/owners">Owners</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

// Kinda like how you will export modules with grunt/browserify
export default NavBar