import React, { Component } from 'react';
import Week from './Week';
import '../styles/challenges.scss';
import battelpass from '../img/battel-star.png';

class Challenges extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weeks: [],
        };
    }

    componentDidMount() {
        const state = JSON.parse(sessionStorage.getItem("Challanges"));

        if(state) {
            this.setState(() => state);
        } else {
            const url = `https://fortnite-public-api.theapinetwork.com/prod09/challenges/get?season=current`;

            fetch(url)
                .then(result => result.json())
                .then(result => result.challenges)
                .then(data => Object.values(data))
                .then(data => data.filter(el => el.length > 0).reverse())
                .then(weeks => this.setState(() => ({ weeks })))
        }
    }

    componentWillUnmount() {
        sessionStorage.setItem("Challanges", JSON.stringify(this.state));
    }

    render() {
        const { weeks } = this.state;

        return (
            <section className="section-challenges">
                <div className="container">
                    <img className="section-challenges__icon" src={battelpass} alt="Battle star" />
                    <h2 className="section-challenges__heading">Seasson 8<br />is already available</h2>
                    <p className="section-challenges__subheading">See new challenges</p>
                    {weeks.length > 0 ? (
                        weeks.map(( el, index ) => {
                            return (
                                <ul key={index} className="week-challenges">
                                    <li className="week-challenges__week">{`Week ${weeks.length-index}`}</li>
                                    <Week challenges={el} />
                                </ul>
                            )
                        })
                    ) : null}
                </div>
        </section>
        );
    }
}

export default Challenges;