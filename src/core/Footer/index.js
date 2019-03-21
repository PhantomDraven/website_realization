import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="page-footer">
                <p className="button-label">Do you want to contact me?</p>
                <a
                    className="button-contact"
                    href="mailto:kevin.statua@gmail.com"
                >
                    Hit this link!
                </a>
            </footer>
        );
    }
}

export default Footer;
