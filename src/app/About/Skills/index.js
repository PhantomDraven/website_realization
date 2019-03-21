import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { skills } from '../data';

const activeSkillDefaultValue = {
    active: false,
    index: 0,
    name: '',
    note: false,
    star: 0
};

class Skills extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeSkill: {
                ...activeSkillDefaultValue
            },
            pageTitle: 'Skills',
            skills: skills
        };

        this.getActive = this.getActive.bind(this);
        this.getRequestedSkill = this.getRequestedSkill.bind(this);
    }

    getActive = () => {
        const {
            active,
            name,
            note,
            animation,
            next = false,
            prev = false
        } = this.state.activeSkill;
        if (active) {
            let prevButton = null;
            let nextButton = null;
            if (prev) {
                const { url, name } = prev;
                prevButton = (
                    <Link to={'/about/skills/' + url}>
                        <button className="button-back">{name}</button>
                    </Link>
                );
            }
            if (next) {
                const { url, name } = next;
                nextButton = (
                    <Link to={'/about/skills/' + url}>
                        <button className="button-back">{name}</button>
                    </Link>
                );
            }
            return (
                <div
                    className={
                        'section-skill detail' +
                        (animation ? ' animation-show' : '')
                    }
                >
                    <h1 className="section-title">
                        {this.state.pageTitle}: {name}
                    </h1>
                    <div className="section-content">{note}</div>
                    {prevButton}
                    <Link to="/about">
                        <button className="button-back">Go back</button>
                    </Link>
                    {nextButton}
                </div>
            );
        }
        return null;
    };

    getRequestedSkill(request) {
        const skills = this.state.skills;
        let returnElement = null;
        let indexRightElement = false;
        let prev = false;
        let next = false;
        for (let index = 0; index < skills.length; index++) {
            const element = skills[index];
            if (element.url === request) {
                indexRightElement = index;
                returnElement = { ...element, index };
            }
        }
        if (skills[indexRightElement - 1]) {
            prev = {
                url: skills[indexRightElement - 1].url,
                name: skills[indexRightElement - 1].name
            };
        }
        if (skills[indexRightElement + 1]) {
            next = {
                url: skills[indexRightElement + 1].url,
                name: skills[indexRightElement + 1].name
            };
        }
        return { ...returnElement, next, prev };
    }

    getLists = () => {
        const self = this;
        return (
            <div className="section-skill">
                <h3 className="section-title">{this.state.pageTitle}</h3>
                <div className="section-content">
                    <ul>
                        {this.state.skills.map((el, i) => {
                            let showMore = el.note ? 'more' : false;
                            if (
                                self.state.activeSkill.index === i &&
                                showMore
                            ) {
                                showMore = 'less';
                            }
                            return (
                                <li
                                    key={i}
                                    className={
                                        (showMore ? showMore + ' ' : '') +
                                        'single-section-wrapper'
                                    }
                                >
                                    <Link to={'/about/skills/' + el.url}>
                                        <div className="section-info">
                                            <span className="name">
                                                {el.name}
                                            </span>
                                        </div>
                                        <span className="section-details">
                                            {el.note}
                                        </span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    };

    render() {
        const listSkills = this.getLists();
        return <React.Fragment>{listSkills}</React.Fragment>;
    }
}

export default Skills;
