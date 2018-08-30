import React, { Component } from "react"
import "./Locations.css"


export default class LocationDetail extends Component {
    state = {
        location: {},
        edit: false,
    }
    render() {
        const location = this.props.locations.find(l => l.id === parseInt(this.props.match.params.locationId)) || {}

        return (
            <section className="location">
                <div key={location.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            {location.name}
                        </h4>
                        
                        <h6 className="card-title">{location.city}</h6>
                        <a href="#"
                            onClick={() => this.props.deleteLocation(location.id)
                                .then(() => this.props.history.push("/locations"))}
                            className="card-link">Delete</a>
                        <p>This is a great kennel where you may house your friends! We will give them the best kennel experience :)</p>
                    </div>
                </div>
            </section>
        )
    }
}