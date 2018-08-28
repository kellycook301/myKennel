// allowing React to be used
import React, { Component } from 'react';
import "./owners.css"

// creating a class named "owners." It contains the following...
// Contains the XML that will be rendered to the DOM. You will see an onClick feature that will allow for the deletion of an item
// by targetting the id. It will invoke the function "forfeitOwner" upon clicking the button. That function can be found
// in ApplicationView.js
class owners extends Component {

    render() {
        return (
            <section className="owners">
            {
                this.props.owners.map(owner =>
                    <div key={owner.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                {owner.name}
                                <a href="#"
                                    onClick={() => this.props.forfeitOwner(owner.id)}
                                    className="card-link">Forfeit Ownership</a>
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
export default owners