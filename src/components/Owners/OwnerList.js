// allowing React to be used
import React, { Component } from 'react';
import { Link } from "react-router-dom"
import "./Owner.css"

// creating a class named "owners." It contains the following...
// Contains the XML that will be rendered to the DOM. You will see an onClick feature that will allow for the deletion of an item
// by targetting the id. It will invoke the function "deleteOwner" upon clicking the button. That function can be found
// in ApplicationView.js

export default class OwnerList extends Component {

    render() {
        return (
            <React.Fragment>
                <section className="owners">
                    {
                        this.props.owners.map(owner =>
                            <div key={owner.id} className="card">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        {owner.name}
                                        <Link className="nav-link owner-detail" to={`/owners/${owner.id}`}>Details</Link>
                                        <a href="#"
                                            onClick={() => this.props.deleteOwner(owner.id)}
                                            className="card-link">Forfeit Ownership</a>
                                    </h5>
                                </div>
                            </div>
                        )
                    }
                </section>
                <div className="ownerButton">
                    <button type="button"
                        className="btn btn-success"
                        class="owner-button"
                        onClick={() => {
                            this.props.history.push("/owners/new")
                        }
                        }>
                        Add Owner
                    </button>
                </div>
            </React.Fragment>
        )
    }
}

// Kinda like how you will export modules with grunt/browserify
