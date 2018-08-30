import React, { Component } from "react"
import "./Employee.css"


export default class EmployeeDetail extends Component {
    state = {
        employee: {},
        edit: false,
    }
    render() {
        const employee = this.props.employees.find(l => l.id === parseInt(this.props.match.params.employeeId)) || {}

        return (
            <section className="employee">
                <div key={employee.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            {employee.name}
                        </h4>
                        <a href="#"
                            onClick={() => this.props.deleteEmployee(employee.id)
                                .then(() => this.props.history.push("/employees"))}
                            className="card-link">Delete</a>
                        <p>I work at the kennel and I love taking care of your best friends!</p>
                    </div>
                </div>
            </section>
        )
    }
}