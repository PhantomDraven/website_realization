import React, { Component } from 'react';

import './About.css';
import './Animation.css';

import Skills from './Skills';
import Projects from './Projects';

class About extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Kevin',
            surname: 'Statua',
            role: 'Frontend Developer',
            job: 'Alpenite S.r.l.'
        };
    }

    componentWillMount() {
        document.title = 'Kevin Statua - About';
    }

    render() {
        return (
            <React.Fragment>
                <main className="page-wrapper">
                    <h1 className="page-title">
                        <span className="color-primary italic">
                            {this.state.name} {this.state.surname}
                        </span>
                    </h1>
                    <span className="page-subtitle">
                        <span className="color-primary">{this.state.role}</span>
                        {/*<span className="color-secondary">{this.state.job}</span>*/}
                    </span>
                    <Skills activeSkill={false} />
                    <Projects />
                </main>
                <footer className="page-footer">
                    <p className="button-label">Do you want to contact me?</p>
                    <a
                        className="button-contact"
                        href="mailto:kevin.statua@gmail.com"
                    >
                        Hit this link!
                    </a>
                </footer>
            </React.Fragment>
        );
    }
}

export default About;
