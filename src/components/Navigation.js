import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../img/logo.svg';
import menu from '../img/menu.svg';
import cross from '../img/cross.svg';
import '../styles/navigation.scss';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuActive: false,
        };
    }

    handleMenuClick = () => {
        this.setState((prevState) => ({ menuActive: !prevState.menuActive} ));
    };

    render() {
        const { menuActive } = this.state;
        return (
            <>
                <nav className={`nav ${menuActive ? 'show': 'hidden'}`}>
                    <h1 className="logo">
                        <Link className="logo__link" to="/">
                            <img className="logo__img" src={logo} alt="Fortnite fan app" />
                        </Link>
                    </h1>
                    <ul className="navigation-list">
                        <li className="navigation-list__item">
                            <NavLink className="navigation-list__link" activeClassName="navigation-list__link--active" to="/news">News</NavLink>
                        </li>
                        <li className="navigation-list__item">
                            <NavLink className="navigation-list__link" activeClassName="navigation-list__link--active" to="/store">Daily store</NavLink>
                        </li>
                        <li className="navigation-list__item">
                            <NavLink className="navigation-list__link" activeClassName="navigation-list__link--active" to="/challenges">Challenges</NavLink>
                        </li>
                    </ul>
                    <Link className="stats-link" to="/stats">Your stats</Link>
                </nav>
                <button onClick={this.handleMenuClick} className="navigation-button" title="Open and close website navigation">
                    {menuActive ? (
                        <img className="navigation-button__icon" src={cross} alt="Close menu" />
                    ) : (
                        <img className="navigation-button__icon" src={menu} alt="Open menu" />
                    )}
                </button>
            </>
        );
    }
};

export default Navigation;