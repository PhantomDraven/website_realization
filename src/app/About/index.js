import React, { Component } from 'react';

import './About.css';
import './Animation.css';

import Header from '../../core/Header';
import Footer from '../../core/Footer';

import Skills from './Skills';
import Skill from './Skill';
import Projects from './Projects';
import Project from './Project';

class About extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: 'Kevin Statua',
            subtitle: 'Frontend Developer'
        };
    }

    componentWillMount() {
        document.title = 'Kevin Statua - About';
    }

    getSkills = list => {
        if (list) {
            return <Skills />;
        }
        return <Skill requestSkill={this.props.param} />;
    };

    getProjects = list => {
        if (list) {
            return <Projects />;
        }
        return <Project requestProject={this.props.param} />;
    };

    render() {
        const { request = false, showList = false } = this.props;
        let getProjects, getProject, getSkills, getSkill;
        if (showList) {
            if (request === 'Skills') {
                getSkills = this.getSkills(showList);
            } else if (request === 'Projects') {
                getProjects = this.getProjects(showList);
            }
        } else {
            if (request === 'Skills') {
                getSkill = this.getSkills(showList);
            } else if (request === 'Projects') {
                getProject = this.getProjects(showList);
            }
        }
        return (
            <React.Fragment>
                <Header
                    title={this.state.title}
                    subtitle={this.state.subtitle}
                />
                <main className="page-wrapper">
                    {getSkills}
                    {getSkill}
                    {getProjects}
                    {getProject}
                </main>
                <Footer />
            </React.Fragment>
        );
    }
}

export default About;
