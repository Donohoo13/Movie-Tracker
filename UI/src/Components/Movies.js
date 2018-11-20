import React, { Component } from 'react';
import MoviesIndex from './index';
import './CSS/Movies.css';

class Movies extends Component {
    constructor() {
    super()
        this.state = {
            movies: [],
    }
}

getMovies = async () => {
    await fetch('http://localhost:4000/movies')
    .then(res => res.json())
    .then(data => {this.setState({movies: data})})
}

componentDidMount = async () => {
    await this.getMovies()
}
    render() {

        return(
            <div>
                <h1>Movies Page works!</h1>
                <MoviesIndex data={this.state.movies} />
            </div>
        );
    }
}

export default Movies