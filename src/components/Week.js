import React from 'react';
import battelstar from '../img/battel-star.png';

const Week = (props) => {
    const { challenges } = props;

    const challengesArray = challenges.map(( el, index ) => {
        return (
            <li key={index} className="week-challenges__item">
                <p className="week-challenges__text">{el.challenge}</p>
                <figure className="figure">
                    <img className="week-challenges__icon" src={battelstar} alt="Battle star" />
                    <figcaption className="week-challenges__number">{el.stars}</figcaption>
                </figure>
            </li>
        )
    });

    return challengesArray;
};

export default Week;