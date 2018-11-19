import React, { Component } from 'react';
import './CSS/Movies.css';

class Movies extends Component {
    constructor() {
    super()
        this.state = {
            movies: [],
    }
}

    componentDidMount = async () => {
        await fetch('http://localhost:4000/movies')
        .then(res => { return res.json()})
        .then( data => { 
        let movies = data.map((movie) => {
            return(
            <div className="movie" key={movie._id}>
                <div className="title"> {movie.title} </div>
                <img className="image" src={movie.image} />
            </div>
            )
        })
            this.setState({movies: movies})
    })
}
    render() {

        return(
            <div>
                <h1>Movies Page works!</h1>
                {this.state.movies}
            </div>
        );
    }
}

export default Movies