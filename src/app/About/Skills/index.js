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
            animate: false,
            activeSkill: {
                ...activeSkillDefaultValue
            },
            pageTitle: 'Skills',
            skills: skills
        };

        this.getActive = this.getActive.bind(this);
        this.getRequestedSkill = this.getRequestedSkill.bind(this);
        this.ranking = this.ranking.bind(this);
        this.timedSkils = this.timedSkils.bind(this);
    }

    componentWillMount() {
        if (this.props.requestSkill) {
            const saveState = this.state.activeSkill;
            const { index, name, star, note } = this.getRequestedSkill(
                this.props.requestSkill
            );
            saveState.active = true;
            saveState.animation = true;
            saveState.name = name;
            saveState.star = star;
            saveState.note = note;
            saveState.index = index;
            this.setState({
                activeSkill: saveState,
                animate: true
            });
        }
    }

    componentDidMount() {
        this.timedSkils();
    }

    getActive = () => {
        const { active, name, note, animation } = this.state.activeSkill;
        if (active) {
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
                    <Link to="/about">
                        <button className="button-back">Go back</button>
                    </Link>
                </div>
            );
        }
        return null;
    };

    getRequestedSkill(request) {
        const skills = this.state.skills;
        for (let index = 0; index < skills.length; index++) {
            const element = skills[index];
            if (element.url === request) {
                return { ...element, index };
            }
        }
    }

    ranking = evaluation => {
        let returnString = ``;
        let symbolEvaluated = `★`;
        let symbolNotEvaluated = `☆`;
        for (let index = 0; index < 5; index++) {
            if (index < evaluation) {
                returnString += symbolEvaluated;
            } else {
                returnString += symbolNotEvaluated;
            }
        }
        return returnString;
    };

    timedSkils = () => {
        const self = this;
        const { skills } = this.state;
        let index = 0;
        let timer = setInterval(() => {
            if (index === skills.length) {
                clearInterval(timer);
            }
            // add animation to this element state
            if (skills[index] !== undefined) {
                skills[index].animation = 'animation-show ';
                self.setState({
                    skills: skills
                });
            }
            index++;
        }, 50);
    };

    getLists = () => {
        const self = this;
        const { animate } = self.state;
        if (!animate) {
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
                                            el.animation +
                                            (showMore ? showMore + ' ' : '') +
                                            'single-section-wrapper'
                                        }
                                    >
                                        <Link to={'/about/skills/' + el.url}>
                                            <div className="section-info">
                                                <span className="name">
                                                    {el.name}
                                                </span>
                                                <span className="ranking">
                                                    {self.ranking(el.star)}
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
        }
        return null;
    };

    render() {
        const listSkills = this.getLists();
        const activeSkill = this.getActive();
        return (
            <React.Fragment>
                {listSkills}
                {activeSkill}
            </React.Fragment>
        );
    }
}

export default Skills;
