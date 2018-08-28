// allowing React to be used.
import React, { Component } from 'react'
import "./Employee.css"

// creating a component named "EmployeeList."
// Contains the XML that will be rendered to the DOM. You will see an onClick feature that will allow for the deletion of an item
// by targetting the id. It will invoke the function "fireEmployee" upon clicking the button. That function can be found
// in ApplicationView.js
class EmployeeList extends Component {
    render() {
        return (
            <section className="employees">
            {
                this.props.employees.map(employee =>
                    <div key={employee.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                {employee.name}
                                <a href="#"
                                    onClick={() => this.props.fireEmployee(employee.id)}
                                    className="card-link">TERMINATE</a>
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
export default EmployeeList