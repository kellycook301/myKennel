import React, { Component } from "react"
import "./Animal.css"
import { Link } from "react-router-dom"
import dog from "./DogIcon.png"


export default class AnimalDetail extends Component {
    render() {
        /*
            Using the route parameter, find the animal that the
            user clicked on by looking at the `this.props.animals`
            collection that was passed down from ApplicationViews
        */
        const animal = this.props.animals.find(a => a.id === parseInt(this.props.match.params.animalId)) || {}
        return (
            <section className="animal">
                <div key={animal.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title" className="animal-name">
                            <img src={dog} className="icon--dog" />
                            {animal.name}
                        </h4>
                        <h6 className="card-title" className="animal-breed">{animal.breed}</h6>
                        <Link className="nav-link" className="edit-button" to={`/animals/edit/${animal.id}`}>Edit</Link>
                        <a href="#"
                            onClick={() => this.props.deleteAnimal(animal.id)
                                .then(() => this.props.history.push("/animals"))}
                            className="card-link">Delete</a>
                    </div>
                </div>
            </section>
        )
    }
}