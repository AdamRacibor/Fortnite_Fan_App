import React, { Component } from 'react';
import Category from './Category';
import '../styles/store.scss';

class Store extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: props.date,
            items: {
                outfit: [],
                pickaxe: [],
                glider: [],
                emote: [],
                other: [],
            },
            data: false,
        };
    }

    sortItems = (array) => {
        const items = {
            outfit: array.filter(el => el.item.type === "outfit"),
            pickaxe: array.filter(el => el.item.type === "pickaxe"),
            glider: array.filter(el => el.item.type === "glider"),
            emote: array.filter(el => el.item.type === "emote"),
            wrap: array.filter(el => el.item.type === "wrap"),
        }

        this.setState(() => ({ items, data: true }));
    };

    componentDidMount() {
        const state = JSON.parse(sessionStorage.getItem("Store"));

        if(state) {
            this.setState(() => state);
        } else {
            const url = `https://fortnite-public-api.theapinetwork.com/prod09/store/get?language=en`;

            fetch(url)
                .then(result => result.json())
                .then(result => result.items)
                .then((data) => {
                    this.sortItems(data);
                });
        }
    };

    componentWillUnmount() {
        sessionStorage.setItem("Store", JSON.stringify(this.state));
    }

    render() {
        const { items, data, date } = this.state;
        return (
            <section className="section-store">
                <div className="container">
                    <h2 className="section-store__heading">Daily store</h2>
                    <p className="section-store__subheading">{`${date.day} ${date.month}`}</p>
                    { data && (
                        <>
                            <h3 className="heading-category">Outfit</h3>
                            <div className="row">
                                <Category items={items.outfit} />
                            </div>
                            <h3 className="heading-category">Pickaxe</h3>
                            <div className="row">
                                <Category items={items.pickaxe} />
                            </div>
                            <h3 className="heading-category">Glider</h3>
                            <div className="row">
                                <Category items={items.glider} />
                            </div>
                            <h3 className="heading-category">Emote</h3>
                            <div className="row">
                                <Category items={items.emote} />
                            </div>
                            {items.wrap.length !== 0 ? <h3 className="heading-category">Other</h3> : null}
                            <div className="row">
                                <Category items={items.wrap} />
                            </div>
                        </>
                    ) }
                </div>
            </section>
        );
    }
}

export default Store;