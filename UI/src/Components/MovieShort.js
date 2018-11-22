import React, { Component } from 'react';

export default class MovieShort extends Component {

    deleteMovie = async (event) => {
        // event.preventDefault()
        await fetch("http://localhost:4000/movies/id/" + this.props.movie._id, {
            method: 'DELETE',
            // body: JSON.stringify(),
        })
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.error('Error:', error))
    }

    render() {

        return(
            <div className="movie" key={this.props.movie._id}>
                <div className="title">{this.props.movie.title}</div>
                <img className="image" src={this.props.movie.image} />
                    <form onSubmit={this.deleteMovie}>
                        <button>Delete</button>
                    </form>
            </div>
        );
    }
}