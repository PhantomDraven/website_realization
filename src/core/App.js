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
                    <Route exact path="/about" component={About} />
                    <Route
                        exact
                        path="/about/skills"
                        render={() => (
                            <About request="Skills" showList="Skills" />
                        )}
                    />
                    <Route
                        path="/about/skills/:skill"
                        render={props => (
                            <About
                                request="Skills"
                                param={props.match.params.skill}
                            />
                        )}
                    />
                    <Route
                        exact
                        path="/about/projects"
                        render={() => (
                            <About request="Projects" showList="Projects" />
                        )}
                    />
                    <Route
                        path="/about/projects/:project"
                        render={props => (
                            <About
                                request="Projects"
                                param={props.match.params.project}
                            />
                        )}
                    />
                    <Route exact path="/concepts" component={Concepts} />
                </React.Fragment>
            </Router>
        );
    }
}

export default App;
