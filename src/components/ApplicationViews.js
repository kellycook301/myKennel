// These are all of the modules that are being imported
import { Route, Redirect } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './Animals/AnimalList'
import LocationList from './Locations/LocationList'
import EmployeeList from './Employees/EmployeeList'
import OwnerList from './Owners/OwnerList'
import AnimalManager from "../modules/AnimalManager"
import EmployeeManager from "../modules/EmployeeManager"
import OwnerManager from "../modules/OwnerManager"
import LocationManager from "../modules/LocationManager"
import AnimalDetail from "./Animals/AnimalDetail"
import LocationDetail from "./Locations/LocationDetail"
import EmployeeDetail from "./Employees/EmployeeDetail"
import OwnerDetail from "./Owners/OwnerDetail"
import AnimalForm from "./Animals/AnimalForm"
import AnimalEditForm from "./Animals/AnimalEditForm"
import EmployeeForm from "./Employees/EmployeeForm"
import OwnerForm from "./Owners/OwnerForm"
import LocationForm from "./Locations/LocationForm"
import Login from './Login'
// This is the css that is being applied to the ApplicationViews module
import "./ApplicationViews.css"

// In this the states are left empty. In a previous exercise it was filled with arrays of object such as
// the locations, animals, employees, and owners.
export default class ApplicationViews extends Component {

    isAuthenticated = () => localStorage.getItem("credentials") !== null

    state = {
        locations: [],
        animals: [],
        employees: [],
        owners: []
    }

    // Fetching from the API. Fetching info for animals, employees, locations, and owners.
    componentDidMount() {
        const newState = {}

        AnimalManager.getAll()
        fetch("http://localhost:5002/animals")
            .then(r => r.json())
            .then(animals => newState.animals = animals)
            .then(() => fetch("http://localhost:5002/employees").then(r => r.json()))
            .then(employees => newState.employees = employees)
            .then(() => fetch("http://localhost:5002/locations").then(r => r.json()))
            .then(locations => newState.locations = locations)
            .then(() => fetch("http://localhost:5002/owners").then(r => r.json()))
            .then(owners => newState.owners = owners)
            .then(() => this.setState(newState))
    }

    // Rendering the module info to the DOM. 
    // Not sure why the path for locations is just displayed with a "/" and not "/locations" like how it is for 
    // employees, animals, and owners. 
    // Before, the "main" tag was a "React.Fragment" but that made the styling very strange as the info from the API
    // appeared to overlap the items in the navbar. With "main" I was able to style it by giving it a margin-top
    // and margin-left of 4 and 1em respectively.
    // If you want this shit to work you have to have {...props} right after you enter the component name.
    // I was getting an error when trying to add an owner. "Employees" was not getting passed in. In OwnerForm route "employees"
    // needed to be passed in under "owners" so the component would know what the heck it is referencing.
    // This is complicated, but I will get it.
    render() {
        return (
            <main>
                <Route path="/login" component={Login} />

                <Route exact path="/" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <LocationList {...props}
                            deleteLocation={this.deleteLocation}
                            locations={this.state.locations} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route path="/locations/new" render={(props) => {
                    return <LocationForm {...props}
                        addLocation={this.addLocation}
                        employees={this.state.employees} />
                }} />
                <Route path="/locations/:locationId(\d+)" render={(props) => {
                    return <LocationDetail {...props}
                        deleteLocation={this.deleteLocation}
                        locations={this.state.locations}
                        addLocation={this.addLocation} />
                }} />
                <Route exact path="/animals" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <AnimalList {...props}
                            deleteAnimal={this.deleteAnimal}
                            animals={this.state.animals} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route path="/animals/new" render={(props) => {
                    return <AnimalForm {...props}
                        addAnimal={this.addAnimal}
                        employees={this.state.employees} />
                }} />
                <Route path="/animals/:animalId(\d+)" render={(props) => {
                    return <AnimalDetail {...props}
                        deleteAnimal={this.deleteAnimal}
                        animals={this.state.animals}
                        editAnimal={this.editAnimal} />
                }} />
                <Route path="/animals/edit/:animalId(\d+)" render={(props) => {
                    return <AnimalEditForm {...props}
                        animals={this.state.animals}
                        employees={this.state.employees}
                        owners={this.state.owners}
                        editAnimal={this.editAnimal} />
                }} />
                <Route exact path="/employees" render={props => {
                    if (this.isAuthenticated()) {
                        return <EmployeeList {...props} deleteEmployee={this.deleteEmployee}
                            employees={this.state.employees} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route path="/employees/new" render={(props) => {
                    return <EmployeeForm {...props}
                        addEmployee={this.addEmployee}
                        employees={this.state.employees} />
                }} />
                <Route path="/employees/:employeeId(\d+)" render={(props) => {
                    return <EmployeeDetail {...props}
                        deleteEmployee={this.deleteEmployee}
                        employees={this.state.employees}
                        addEmployee={this.addEmployee} />
                }} />
                <Route exact path="/owners" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <OwnerList {...props} deleteOwner={this.deleteOwner}
                            owners={this.state.owners} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route path="/owners/new" render={(props) => {
                    return <OwnerForm {...props}
                        addOwner={this.addOwner}
                        owners={this.state.owners}
                        employees={this.state.employees} />
                }} />
                <Route path="/owners/:ownerId(\d+)" render={(props) => {
                    return <OwnerDetail {...props}
                        deleteOwner={this.deleteOwner}
                        owners={this.state.owners}
                        addOwner={this.addOwner} />
                }} />
            </main>
        )
    }
    // functions for deleting array items using the "DELETE" method. You are targetting the id's specifically.

    addAnimal = animal => AnimalManager.post(animal)
        .then(() => AnimalManager.getAll())
        .then(animals => this.setState({
            animals: animals,
        }))

    editAnimal = (id, animal) => {
        return AnimalManager.edit(animal, id)
        .then (() => AnimalManager.getAll())
        .then(animals => this.setState({
            animals: animals
        }))
    }

    addEmployee = employee => EmployeeManager.post(employee)
        .then(() => EmployeeManager.getAll())
        .then(employees => this.setState({
            employees: employees
        }))

    addOwner = owner => OwnerManager.post(owner)
        .then(() => OwnerManager.getAll())
        .then(owners => this.setState({
            owners: owners
        }))

    addLocation = location => LocationManager.post(location)
        .then(() => LocationManager.getAll())
        .then(locations => this.setState({
            locations: locations
        }))

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

    deleteEmployee = id => {
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

    deleteOwner = id => {
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

    deleteLocation = id => {
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