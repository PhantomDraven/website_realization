import React, { Component } from 'react';

import { projects } from '../data';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects
        };
    }
    render() {
        return <React.Fragment />;
    }
}

export default Projects;
