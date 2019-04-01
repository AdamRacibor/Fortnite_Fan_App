import React from 'react';
import '../styles/statscategory.scss';

const StatsCategory = (props) => {
    const { matches } = props;

    const array = Object.entries(matches)
    .slice(1)
    .filter(el => el[1] !== undefined);

    return (
        <div className={`category ${matches.name}`}>
            <h2 className="category__heading">{matches.name}</h2>
            <ul className="category-list">
                {
                    array.map((el, index) => {
                        return (
                            <li key={index} className="category-list__item">{`${el[0]}: ${el[1]}`}</li>
                        );
                    })
                }
            </ul>
        </div>
    );
};

export default StatsCategory;