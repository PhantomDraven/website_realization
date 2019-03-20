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
                    title: 'Ideas',
                    path: '/ideas',
                    click: 0
                }
            ]
        };
    }

    activeButton = (e, key) => {
        if (this.state.pages[key].click === 0) {
            e.preventDefault();
        }

        e.currentTarget.parentElement.classList.add('active');

        // update state
        const pages = this.state.pages;
        pages[key].click = pages[key].click + 1;
        this.setState({
            pages
        });
    };

    render() {
        return (
            <React.Fragment>
                <div className="homepage">
                    {this.state.pages.map((el, i) => {
                        const { title, path } = el;
                        return (
                            <div key={i} className="link-wrapper">
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
