import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { skills } from '../data';

class Skill extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pageTitle: 'Skill',
            skills: skills
        };

        this.dataCollector = this.dataCollector.bind(this);
        this.getItem = this.getItem.bind(this);
    }

    getItem = request => {
        const { prev, next, name, note } = this.dataCollector(request);
        return (
            <div className="section-skill detail animation-show">
                <h1 className="section-title">{name}</h1>
                <div className="section-content">{note}</div>
                {prev}
                <Link to="/about/skills">
                    <button className="button-back">Go back</button>
                </Link>
                {next}
            </div>
        );
    };

    dataCollector = request => {
        const skills = this.state.skills;
        // default variables
        let returnElement = null;
        let indexRightElement = false;
        let prev = null;
        let next = null;
        // get element
        for (let index = 0; index < skills.length; index++) {
            const element = skills[index];
            if (element.url === request) {
                indexRightElement = index;
                returnElement = { ...element, index };
            }
        }
        // get prev
        if (skills[indexRightElement - 1]) {
            let url = skills[indexRightElement - 1].url,
                name = skills[indexRightElement - 1].name;
            prev = this.getArrow(url, name);
        }
        // get next
        if (skills[indexRightElement + 1]) {
            let url = skills[indexRightElement + 1].url,
                name = skills[indexRightElement + 1].name;
            next = this.getArrow(url, name);
        }
        // return data
        return { ...returnElement, next, prev };
    };

    getArrow = (url, name) => {
        return (
            <Link to={'/about/skills/' + url}>
                <button className="button-back">{name}</button>
            </Link>
        );
    };

    render() {
        const skill = this.getItem(this.props.requestSkill);
        return <React.Fragment>{skill}</React.Fragment>;
    }
}

export default Skill;
