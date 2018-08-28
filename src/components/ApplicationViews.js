// These are all of the modules that are being imported
import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './Animals/animals'
import LocationList from './Locations/locations'
import EmployeeList from './Employees/EmployeeList'
import Owners from './Owners/owners'
// This is the css that is being applied to the ApplicationViews module
import "./ApplicationViews.css"

// In this the states are left empty. In a previous exercise it was filled with arrays of object such as
// the locations, animals, employees, and owners.
export default class ApplicationViews extends Component {
    state = {
        locations: [],
        animals: [],
        employees: [],
        owners: []
    }

    // Fetching from the API. Fetching info for animals, employees, locations, and owners.
    componentDidMount() {
        const newState = {}

        fetch("http://localhost:5002/animals")
            .then(r => r.json())
            .then(animals => newState.animals = animals)
            .then(() => fetch("http://localhost:5002/employees")
            .then(r => r.json()))
            .then(employees => newState.employees = employees)
            .then(() => fetch("http://localhost:5002/locations")
            .then(r => r.json()))
            .then(locations => newState.locations = locations)
            .then(() => fetch("http://localhost:5002/owners")
            .then(r => r.json()))
            .then(owners => newState.owners = owners)
            .then(() => this.setState(newState))
    }


    // Rendering the module info to the DOM. 
    // Not sure why the path for locations is just displayed with a "/" and not "/locations" like how it is for 
    // employees, animals, and owners. 
    // Before, the "main" tag was a "React.Fragment" but that made the styling very strange as the info from the API
    // appeared to overlap the items in the navbar. With "main" I was able to style it by giving it a margin-top
    // and margin-left of 4 and 1em respectively.
    render() {
        return (
            <main>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations}
                    destroyLocation={this.destroyLocation} locations={this.state.locations} />
                }} />
                <Route exact path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees}
                    fireEmployee={this.fireEmployee} employees={this.state.employees} />
                }} />
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals} 
                    deleteAnimal={this.deleteAnimal} animals={this.state.animals} />
                }} />
                <Route exact path="/owners" render={(props) => {
                    return <Owners owners={this.state.owners}
                    forfeitOwner={this.forfeitOwner} owners={this.state.owners} />
                }} />
            </main>
        )
    }
    // functions for deleting array items using the "DELETE" method. You are targetting the id's specifically.
    deleteAnimal = id => {
        return fetch(`http://localhost:5002/animals/${id}`, {
            method: "DELETE"
        })
        .then(e => e.json())
        .then(() => fetch(`http://localhost:5002/animals`))
        .then(e => e.json())
        .then(animals => this.setState({
            animals: animals
        }))
    }
    fireEmployee = id => {
        return fetch(`http://localhost:5002/employees/${id}`, {
            method: "DELETE"
        })
        .then(e => e.json())
        .then(() => fetch(`http://localhost:5002/employees`))
        .then(e => e.json())
        .then(employees => this.setState({
            employees: employees
        }))
    }
    forfeitOwner = id => {
        return fetch(`http://localhost:5002/owners/${id}`, {
            method: "DELETE"
        })
        .then(e => e.json())
        .then(() => fetch(`http://localhost:5002/owners`))
        .then(e => e.json())
        .then(owners => this.setState({
            owners: owners
        }))
    }
    destroyLocation = id => {
        return fetch(`http://localhost:5002/locations/${id}`, {
            method: "DELETE"
        })
        .then(e => e.json())
        .then(() => fetch(`http://localhost:5002/locations`))
        .then(e => e.json())
        .then(locations => this.setState({
            locations: locations
        }))
    }
}