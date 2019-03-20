import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pages: [
                {
                    title: 'About',
                    path: '/about',
                    click: 0
                },
                {
                    title: 'Concept',
                    path: '/concept',
                    click: 0
                }
            ]
        };
    }

    activeButton = (event, key) => {
        const self = this;
        const element = event.currentTarget;
        if (this.state.pages[key].click === 0) {
            event.preventDefault();
        }

        element.parentElement.classList.add('active');

        // update state
        const pages = this.state.pages;
        pages[key].click = pages[key].click + 1;
        this.setState({
            pages
        });

        // emulate click after animation
        setTimeout(() => {
            self.clickSimulation(element);
        }, 500);
    };

    clickSimulation = element => {
        const mouseClickEvents = ['mousedown', 'click', 'mouseup'];
        mouseClickEvents.forEach(mouseEventType =>
            element.dispatchEvent(
                new MouseEvent(mouseEventType, {
                    view: window,
                    bubbles: true,
                    cancelable: true,
                    buttons: 1
                })
            )
        );
    };

    render() {
        return (
            <React.Fragment>
                <div className="homepage">
                    {this.state.pages.map((el, i) => {
                        const { title, path } = el;
                        return (
                            <div
                                key={i}
                                className="link-wrapper"
                                ref={this.simulateClick}
                            >
                                <Link
                                    to={path}
                                    onClick={e => this.activeButton(e, i)}
                                >
                                    {title}
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </React.Fragment>
        );
    }
}

export default Home;
