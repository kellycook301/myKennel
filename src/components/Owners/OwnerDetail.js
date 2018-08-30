import React, { Component } from "react"
import "./Owner.css"


export default class OwnerDetail extends Component {
    state = {
        owner: {},
        edit: false,
    }
    render() {
        const owner = this.props.owners.find(l => l.id === parseInt(this.props.match.params.ownerId)) || {}

        return (
            <section className="owner">
                <div key={owner.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            {owner.name}
                        </h4>
                        <a href="#"
                            onClick={() => this.props.deleteOwner(owner.id)
                                .then(() => this.props.history.push("/owners"))}
                            className="card-link">Delete</a>
                        <p>I am an owner and love my pet/best friend!</p>
                    </div>
                </div>
            </section>
        )
    }
}