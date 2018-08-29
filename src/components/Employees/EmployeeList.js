// allowing React to be used.
import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "./Employee.css"

// creating a component named "EmployeeList."
// Contains the XML that will be rendered to the DOM. You will see an onClick feature that will allow for the deletion of an item
// by targetting the id. It will invoke the function "deleteEmployee" upon clicking the button. That function can be found
// in ApplicationView.js

export default class EmployeeList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="employeeButton">
                    <button type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push("/employees/new")}
                            }>
                        Add Employee
                    </button>
                </div>
            <section className="employees">
            {
                this.props.employees.map(employee =>
                    <div key={employee.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                {employee.name}
                                <Link className="nav-link employee-detail" to={`/employees/${employee.id}`}>Details</Link>
                                <a href="#"
                                    onClick={() => this.props.deleteEmployee(employee.id)}
                                    className="card-link terminate">TERMINATE</a>
                            </h5>
                        </div>
                    </div>
                )
            }
            </section>
            </React.Fragment>
        )
    }
}

// Kinda like how you will export modules with grunt/browserify
