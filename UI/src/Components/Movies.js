import React, { Component } from 'react';
import MoviesIndex from './index';
import './CSS/Movies.css';

class Movies extends Component {
    constructor() {
    super()
        this.state = {
            movies: [],
            search: ''
    }
}

getMovies = async () => {
    await fetch('http://localhost:4000/movies')
    .then(res => res.json())
    .then(data => {this.setState({movies: data})})
}

Search = async (event) => {
    event.preventDefault()
    if(this.state.search === ''){
        return this.getMovies()
    } else
    await fetch('http://localhost:4000/movies/title/' + this.state.search)
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
                <form onSubmit={this.Search}>
                    <input type="text" onChange={event => this.setState({search: event.target.value})} />
                    <input type="submit" value="Search" />
                </form>
                <MoviesIndex data={this.state.movies} />
            </div>
        );
    }
}

export default Movies