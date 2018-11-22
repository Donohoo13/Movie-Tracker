import React, { Component } from 'react';
import MovieShort from './MovieShort';

export default class MovieIndex extends Component {

    render() {
        const movies = this.props.data.map(movie => <MovieShort movie={movie}/>)

        return(
            <span key="{1++}">{movies}</span>
        );
    }
}