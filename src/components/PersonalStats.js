import React from 'react';
import '../styles/personalStats.scss';

import hairCross from '../img/hair-cross.svg';
import trophy from '../img/trophy.svg';
import gameController from '../img/game-controller.svg';
import clock from '../img/clock.svg';
import areaGraph from '../img/area-graph.svg';

const PersonalStats = (props) => {
    const { stats } = props.stats;

    return (
        <ul className="user-stats">
            <li className="user-stats__item">
                <img src={hairCross} alt="" className="user-stats__icon" />
                <span className="user-stats__category">Kills</span>
                <span className="user-stats__value">{stats.kills}</span>
            </li>
            <li className="user-stats__item">
                <img src={trophy} alt="" className="user-stats__icon" />
                <span className="user-stats__category">Wins</span>
                <span className="user-stats__value">{stats.wins}</span>
            </li>
            <li className="user-stats__item">
                <img src={gameController} alt="" className="user-stats__icon" />
                <span className="user-stats__category">Matches</span>
                <span className="user-stats__value">{stats.matches}</span>
            </li>
            <li className="user-stats__item">
                <img src={areaGraph} alt="" className="user-stats__icon" />
                <span className="user-stats__category">Score</span>
                <span className="user-stats__value">{stats.score}</span>
            </li>
            <li className="user-stats__item">
                <img src={clock} alt="" className="user-stats__icon" />
                <span className="user-stats__category">Players out lived</span>
                <span className="user-stats__value">{stats.playersoutlived}</span>
            </li>
        </ul>
    );
};

export default PersonalStats;