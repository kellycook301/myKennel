// allowing React to be used
import React, { Component } from 'react';
import "./locations.css"

// you can also export from all the way up here. I guess it's like putting the "export" and the component
// on the same line.
export default class locations extends Component {

// the XML that will be rendered to the DOM. You will see an onClick feature that will allow for the deletion of an item
// by targetting the id. It will invoke the function "destroyLocation" upon clicking the button. That function can be found
// in ApplicationView.js
render() {
    return (
        <section className="locations">
            {
                this.props.locations.map(location =>
                    <div key={location.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                {location.name}
                                <a href="#"
                                    onClick={() => this.props.destroyLocation(location.id)}
                                    className="card-link">DESTROY LOCATION</a>
                            </h5>
                        </div>
                    </div>
                )
            }
            </section>
        )
    }
}

// Kinda like how you will export modules with grunt/browserify
