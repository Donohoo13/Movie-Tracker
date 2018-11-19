import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import App from '../App'
import Movies from '../Movies';

class Routes extends Component {
    render(){

        return(
            <div>
                <Route path="/" component={App} />
                <Route path="/movies" component={Movies} />
            </div>
        );
    }
}

export default Routes