import React, { Component } from "react"
import "./Locations.css"

export default class LocationForm extends Component {
    // Set initial state
    state = {
        locationName: "",
        employee: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    /*
        Local method for validation, creating animal object, and
        invoking the function reference passed from parent component
     */
    constructNewLocation = evt => {
        evt.preventDefault()
        if (this.state.location === "") {
            window.alert("Please select someone to manage this new location")
        } else {
            const location = {
                name: this.state.locationName,
                employeeId: this.props.employees.find(e => e.name === this.state.employee).id
            }

            // Create the employee and redirect user to employee list
            this.props.addLocation(location).then(() => this.props.history.push("/locations"))
        }
    }

    render() {
        return (
            <React.Fragment>
                <form className="locationForm">
                    <div className="form-group">
                        <label htmlFor="LocationeName">New Location</label>
                        <input type="text" required="true"
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="locationName"
                               placeholder="Location Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="employee">Assign New Manager </label>
                        <select defaultValue="" name="employee" id="employee"
                                onChange={this.handleFieldChange}>
                            <option value="">Select New Manager </option>
                        {
                            this.props.employees.map(e => <option key={e.id} id={e.id}>{e.name}</option>)
                        }
                        </select>
                    </div>
                    <button type="submit" onClick={this.constructNewLocation} className="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>
        )
    }
}