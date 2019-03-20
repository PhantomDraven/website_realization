import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from '../app/Home';

import About from '../app/About';
import Concepts from '../app/Concepts';

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            singlePage: true
        };

        this.getMainpage = this.getMainpage.bind(this);
    }

    getMainpage = () => {
        if (this.state.singlePage) {
            return About;
        }
        return Home;
    };

    render() {
        const Main = this.getMainpage();
        return (
            <Router>
                <React.Fragment>
                    <Route exact path="/" component={Main} />
                    <Route path="/about" component={About} />
                    <Route path="/concepts" component={Concepts} />
                </React.Fragment>
            </Router>
        );
    }
}

export default App;
