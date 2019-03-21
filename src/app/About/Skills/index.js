import React, { Component } from 'react';

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
            skills: skills
        };

        this.getActive = this.getActive.bind(this);
        this.handleDetails = this.handleDetails.bind(this);
        this.hideDetails = this.hideDetails.bind(this);
        this.ranking = this.ranking.bind(this);
        this.showDetails = this.showDetails.bind(this);
        this.timedSkils = this.timedSkils.bind(this);
    }

    componentDidMount() {
        this.timedSkils();
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

    handleDetails = (enable, index) => {
        if (this.state.activeSkill.active && enable !== 'less') {
            this.hideDetails();
            const self = this;
            setTimeout(() => {
                self.showDetails(index);
            }, 250);
        } else if (enable === 'less') {
            this.hideDetails();
        } else if (enable === 'more') {
            this.showDetails(index);
        }
    };

    showDetails = index => {
        const { name, star, note } = this.state.skills[index];
        this.setState(
            {
                activeSkill: {
                    active: true,
                    index,
                    name,
                    star,
                    note,
                    animation: false
                }
            },
            () => {
                const self = this;
                setTimeout(() => {
                    const saveState = self.state.activeSkill;
                    self.setState({
                        activeSkill: {
                            ...saveState,
                            animation: true
                        }
                    });
                }, 250);
            }
        );
    };

    hideDetails = () => {
        const activeSkill = this.state.activeSkill;
        this.setState({
            activeSkill: {
                ...activeSkill,
                active: false,
                animation: false,
                index: 0
            }
        });
    };

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
                    <h3 className="section-title">{name}</h3>
                    <div className="section-content">{note}</div>
                </div>
            );
        }
        return null;
    };

    render() {
        const self = this;
        const activeSkill = self.getActive();
        return (
            <React.Fragment>
                <div className="section-skill">
                    <h3 className="section-title">Skills:</h3>
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
                                        onClick={() =>
                                            self.handleDetails(showMore, i)
                                        }
                                    >
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
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
                {activeSkill}
            </React.Fragment>
        );
    }
}

export default Skills;
