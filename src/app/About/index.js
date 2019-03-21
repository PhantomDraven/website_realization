import React, { Component } from 'react';

import './About.css';
import './Animation.css';

import Header from '../../core/Header';
import Footer from '../../core/Footer';

import Skills from './Skills';
import Projects from './Projects';

class About extends Component {
    constructor(props) {
        super(props);

        const { activeSkill = false } = this.props;

        this.state = {
            title: 'Kevin Statua',
            subtitle: 'Frontend Developer',
            job: 'Alpenite S.r.l.',
            activeSkill
        };
    }

    componentWillMount() {
        document.title = 'Kevin Statua - About';
    }

    render() {
        return (
            <React.Fragment>
                <Header
                    title={this.state.title}
                    subtitle={this.state.subtitle}
                />
                <main className="page-wrapper">
                    <Skills requestSkill={this.state.activeSkill} />
                    <Projects />
                </main>
                <Footer />
            </React.Fragment>
        );
    }
}

export default About;
