// allowing React to be used
import React, { Component } from 'react';
import { Link } from "react-router-dom"
import "./Locations.css"

// you can also export from all the way up here. I guess it's like putting the "export" and the component
// on the same line.
export default class locations extends Component {

    // the XML that will be rendered to the DOM. You will see an onClick feature that will allow for the deletion of an item
    // by targetting the id. It will invoke the function "deleteLocation" upon clicking the button. That function can be found
    // in ApplicationView.js
    render() {
        return (
            <React.Fragment>
                <section className="locations">
                    {
                        this.props.locations.map(location =>
                            <div key={location.id} className="card">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        {location.name}
                                        <Link className="nav-link detail" to={`/locations/${location.id}`}>Details</Link>
                                            <a href="#" onClick={() => this.props.deleteLocation(location.id)}
                                            className="card-link">Delete</a>
                                    </h5>
                                </div>
                            </div>
                        )
                    }
                </section>
                <div className="locationButton">
                    <button type="button"
                        className="btn btn-success"
                        className="location-button"
                        onClick={() => {
                            this.props.history.push("/locations/new")
                        }
                        }>
                        Add Location
                    </button>
                </div>
            </React.Fragment>
        )
    }
}

// Kinda like how you will export modules with grunt/browserify
