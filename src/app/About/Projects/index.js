import React, { Component } from 'react';

import { projects } from '../data';

class Project extends Component {
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

export default Project;
