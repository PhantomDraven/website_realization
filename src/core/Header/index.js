import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className="page-header">
                <h1 className="page-title">
                    <span className="color-primary italic">
                        {this.props.title}
                    </span>
                </h1>
                <span className="page-subtitle">
                    <span className="color-primary">{this.props.subtitle}</span>
                    {/*<span className="color-secondary">{this.props.job}</span>*/}
                </span>
            </header>
        );
    }
}

export default Header;
