import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/stats.scss';

class Stats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nick: '',
        };
    }

    handleNickChange = (e) => {
        const nick = e.target.value;
        this.setState(() => ({ nick }));
    };

    render() {
        const { nick } = this.state;
        return (
            <header className="stats-header">
                <div className="container">
                    <div className="form">
                        <label className="form__label" htmlFor="nickname">Write your Epic nick</label>
                        <input onChange={(e) => this.handleNickChange(e)} className="form__input" type="text" value={nick} />
                        <Link className="btn-submit" to={`/profil/${nick}`}>Search</Link>
                    </div>
                </div>
            </header>
        );
    }
}

export default Stats;