import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from '../app/Home';

import About from '../app/About';
import Ideas from '../app/Ideas';

import './App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <React.Fragment>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/ideas" component={Ideas} />
                </React.Fragment>
            </Router>
        );
    }
}

export default App;
