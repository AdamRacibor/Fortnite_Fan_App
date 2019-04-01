import React from 'react';
import '../styles/header.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <h2 className="header__heading"><span className="first-part">Fortnite</span> <span className="second-part">fan app</span></h2>
                <p className="header__subheading">All information in one place</p>
            </div>
        </header>
    );
};

export default Header;