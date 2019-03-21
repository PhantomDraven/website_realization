import React, { Component } from 'react';

import './About.css';
import './Animation.css';

class About extends Component {
    constructor(props) {
        super(props);

        this.state = {
            animate: false,
            name: 'Kevin',
            surname: 'Statua',
            role: 'Frontend Developer',
            job: 'Alpenite S.r.l.',
            skills: [
                {
                    name: 'HTML',
                    star: 5,
                    note: ''
                },
                {
                    name: 'CSS',
                    star: 4,
                    note: ''
                },
                {
                    name: 'SCSS',
                    star: 5,
                    note: (
                        <span>
                            I'm working with it in the last 3 years and it's too
                            powerfull to come back to pure CSS. I prefer this to
                            LESS due to following the community.
                        </span>
                    )
                },
                {
                    name: 'Less',
                    star: 4,
                    note: (
                        <span>
                            I have to work with LESS language because Magento
                            e-commerce has is in his base package.
                        </span>
                    )
                },
                {
                    name: 'Js',
                    star: 5,
                    note: (
                        <span>
                            I constantly keep me update with the last feature of
                            it because i{' '}
                            <span role="img" aria-label="love">
                                ❤️
                            </span>{' '}
                            it. This is a list of all the frameworks/libraries
                            that i have worked until now:
                            <ul>
                                <li>underscore js</li>
                                <li>knockout js</li>
                                <li>require js</li>
                                <li>jquery</li>
                                <li>anime js</li>
                                <li>aurora js</li>
                                <li>vueJs</li>
                                <li>reactJs</li>
                            </ul>
                        </span>
                    )
                },
                {
                    name: 'ReactJs / Native',
                    star: 4,
                    note: (
                        <span>
                            I'm working with ReactJs in the last year in some
                            Alpenite's projects and personal. I really
                            appreciate the structure of ReactJs and how it
                            works. It makes me so happy that sometimes i want to
                            use it everywhere! In the last 6 months I'm studying
                            it in a Typescript environment that help me to
                            better understand how the library works. I said
                            library because i think that the main difference
                            between React and Angular (for example) is that you
                            have to add other packages to React for use it at
                            full potential. Instaed Angular is a complete
                            package that doens't need other things to give you a
                            complete suite.
                        </span>
                    )
                },
                {
                    name: 'VueJs',
                    star: 3,
                    note: (
                        <span>
                            I didn't play very much with Vue, i just chill with
                            vuestorefront of Divante Ltd. I think that they did
                            an amazing job and i hope to have more time in the
                            future to help them like i did before.
                        </span>
                    )
                },
                {
                    name: 'NodeJs',
                    star: 4,
                    note: (
                        <span>
                            The world of NodeJs is too big to be a Master of it
                            in 3 years of experience. <br />
                            I've create some NodeJs structure to get me at this
                            level like:
                            <ul>
                                <li>
                                    REST Api with MongoDb in order to store data
                                </li>
                                <li>
                                    Static pages templating with gulp and
                                    nunjucks
                                </li>
                                <li>
                                    Static pages templating with grunt and
                                    handlebars
                                </li>
                                <li>
                                    Webpack customization for a custom CRA of
                                    ReactJs
                                </li>
                                <li>
                                    Webpack and Typescript for a custom data
                                    structure with Hybris technology
                                </li>
                            </ul>
                        </span>
                    )
                },
                {
                    name: 'PHP',
                    star: 3,
                    note: (
                        <span>
                            I'm working with it in some project with Magento,
                            Magento 2 and Magento Cloud platform. And I'm able
                            to make my own module in order to be autonomous.
                        </span>
                    )
                },
                {
                    name: 'Linux',
                    star: 3,
                    note: (
                        <span>
                            I have a little knowledge of linux and his system,
                            this is a MUST for me because I have access to
                            production environment of my Magento projects.
                        </span>
                    )
                },
                {
                    name: 'Docker',
                    star: 4,
                    note: (
                        <span>
                            I made my own local environment for all of my
                            project with docker, that NOW is just an easy
                            "docker-compose up -d". This helped me a lot in my
                            working routine.
                        </span>
                    )
                },
                {
                    name: 'Photoshop / Sketch',
                    star: 2,
                    note: (
                        <span>
                            I have the knowledge that let me take all the data
                            that i need from GFX in order to reproduce it on a
                            web application. Now I'm working only on Pixel
                            Perfece and Mobile First web application.
                        </span>
                    )
                }
            ]
        };
    }

    componentWillMount() {
        document.title = 'Kevin Statua About';
    }

    componentDidMount() {
        this.setState({
            animate: true
        });
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

    timed = (animate, index) => {
        if (animate) {
            setTimeout(() => {
                return 'animation';
            }, index * 100);
        } else {
            return '';
        }
    };

    render() {
        const self = this;
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
                    <div className="section-skill">
                        <h3 className="section-title">Skills:</h3>
                        <div className="section-content">
                            <ul>
                                {this.state.skills.map((el, i) => {
                                    return (
                                        <li
                                            key={i}
                                            className={
                                                i % 2
                                                    ? self.timed(
                                                          this.state.animate,
                                                          i
                                                      ) + 'right'
                                                    : self.timed(
                                                          this.state.animate,
                                                          i
                                                      ) + 'left'
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
                </main>
                <footer className="page-footer">
                    <span>Do you want to contact me?</span>
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
