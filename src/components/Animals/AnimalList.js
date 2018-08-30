import React, { Component } from 'react'
import { Link } from "react-router-dom"
import dog from "./DogIcon.png"
import "./Animal.css"


export default class animals extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="animals">
                    {
                        this.props.animals.map(animal =>
                            <div key={animal.id} className="card">
                                <div className="card-body">
                                    <h4 className="card-title" className="animal-name">
                                        <img src={dog} className="icon--dog" />
                                        {animal.name}
                                    </h4>
                                    <h6>
                                        <Link className="nav-link" className="details" to={`/animals/${animal.id}`}>Details</Link>
                                        <a href="#" onClick={() => this.props.deleteAnimal(animal.id)}
                                            className="card-link">Delete</a>
                                    </h6>
                                </div>
                            </div>
                        )
                    }
                </section>
                <div className="animalButton">
                    <button type="button"
                        className="btn btn-success"
                        className="animal-button"
                        onClick={() => {
                            this.props.history.push("/animals/new")
                        }}>Admit Animal
                </button>
                </div>
            </React.Fragment>
        )
    }
}