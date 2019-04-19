import React, { Component } from 'react';
import '../styles/profil.scss';
import profilIMG from '../img/profil-1.png'
import PersonalStats from './PersonalStats';
import StatsCategory from './StatsCategory';

class Profil extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nick: "",
            player: {
                stats: {
                    kills: 0,
                    wins: 0,
                    matches: 0,
                    playersoutlived: 0,
                    score: 0,
                }
            },
            matches: [
                {
                    name: "solo",
                    kills: 0,
                    top1: 0,
                    top10: 0,
                    top25: 0,
                    matches: 0,
                    score: 0
                },
                {
                    name: "duo",
                    kills: 0,
                    top1: 0,
                    top5: 0,
                    top12: 0,
                    matches: 0,
                    score: 0
                },
                {
                    name: "squad",
                    kills: 0,
                    top1: 0,
                    top3: 0,
                    top6: 0,
                    matches: 0,
                    score: 0
                },
            ],
            informationStatus: false,
            error: false,
        };
    }

    createPlayer(data) {
        const player = {
            stats: {
                kills: data.kills,
                wins: data.placetop1,
                matches: data.matchesplayed,
                playersoutlived: data.playersoutlived,
                score: data.score,
            }
        };

        return player;
    }

    createMatches(data) {
        const { defaultsolo, defaultduo, defaultsquad } = data;

        const matches = [];

        if (defaultsolo) {
            matches.push(
                {
                    name: "solo",
                    kills: defaultsolo.default.kills,
                    top1: defaultsolo.default.placetop1,
                    top10: defaultsolo.default.placetop10,
                    top25: defaultsolo.default.placetop25,
                    matches: defaultsolo.default.matchesplayed,
                    score: defaultsolo.default.score
                }
            )
        }

        if (defaultduo) {
            matches.push(
                {
                    name: "duo",
                    kills: defaultduo.default.kills,
                    top1: defaultduo.default.placetop1,
                    top5: defaultduo.default.placetop5,
                    top12: defaultduo.defaultplacetop12,
                    matches: defaultduo.default.matchesplayed,
                    score: defaultduo.default.score
                }
            );
        }

        if(defaultsquad) {
            matches.push(
                {
                    name: "squad",
                    kills: defaultsquad.default.kills,
                    top1: defaultsquad.default.placetop1,
                    top3: defaultsquad.default.placetop3,
                    top6: defaultsquad.defaultplacetop6,
                    matches: defaultsquad.default.matchesplayed,
                    score: defaultsquad.default.score
                }
            );
        }

        return matches;
    }

    componentDidMount() {
        const urlForUID = `https://fortnite-public-api.theapinetwork.com/prod09/users/id?username=${this.props.match.params.userNick}`;

        const userID = fetch(urlForUID)
        .then( result => result.json() )
        .then( result => result.uid);

        userID
        .then( uid => fetch(`https://fortnite-public-api.theapinetwork.com/prod09/users/public/br_stats_v2?user_id=${uid}`) )
        .then( result => result.json() )
        .then((stats) => {
            if (stats.data.length === 0) {
                this.setState(() => {
                    return ({
                        error: true,
                    });
                })
            } else {
                this.setState(() => {
                    return ({
                        nick: stats.epicName,
                        player: this.createPlayer(stats.overallData.defaultModes),
                        matches: this.createMatches(stats.data.keyboardmouse),
                        informationStatus: true,
                    });
                });
            }
        });
    }

    render() {
        const { nick, player, matches, informationStatus, error } = this.state;

        return (
                error === true ? (
                    <div className="error">
                        <p className="error__text">Player doesn't exist !!!!</p>
                    </div>
                ) : (
                    <section className="section-profil">
                        <div className="container">
                            <figure>
                                <img id="user-avatar" className="avatar" src={profilIMG} alt="" />
                                <figcaption className="avatar__name">{nick}</figcaption>
                            </figure>
                            {
                                informationStatus && (
                                    <>
                                        <PersonalStats stats={player} />
                                        <div className="categoris">
                                            {
                                                matches.map(el => (
                                                    <StatsCategory key={el.name} matches={el} />
                                                ))
                                            }
                                        </div>
                                    </>
                                )
                            }
                        </div>
                    </section>
                )
        );
    }
}

export default Profil;