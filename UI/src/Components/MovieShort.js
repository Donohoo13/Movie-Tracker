import React, { Component } from 'react';

export default class MovieShort extends Component {

    render() {

        return(
            <div className="movie" key={this.props.movie._id}>
                <div className="title">{this.props.movie.title}</div>
                <img className="image" src={this.props.movie.image} />
            </div>
        );
    }
}