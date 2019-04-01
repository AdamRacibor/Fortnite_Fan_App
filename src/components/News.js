import React, { Component } from 'react';
import Article from './Article';
import '../styles/news.scss';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: props.date,
            articles: [],
            activeArticles: [],
        };
    }

    showOldNews = () => {
        const arrayLength = this.state.activeArticles.length;
        const articles = this.state.articles.slice(arrayLength, arrayLength+3);

        this.setState((prevState) => {
            return {
                activeArticles: prevState.activeArticles.concat(articles),
            }
        })
    };

    componentDidMount() {
        const state = JSON.parse(sessionStorage.getItem("News"));

        if(state) {
            this.setState(() => state);
        } else {
            const url = `https://fortnite-public-api.theapinetwork.com/prod09/br_motd/get?language=en`;

            fetch(url)
                .then(result => result.json())
                .then(result => result.entries)
                .then((data) => {
                    const activeArticles = data.slice(0, 3);
                    this.setState(() => {
                        return {
                            articles: data,
                            activeArticles
                        }
                    });
                });
        }
    }

    componentWillUnmount() {
        sessionStorage.setItem("News", JSON.stringify(this.state));
    }

    render() {
        const { date, activeArticles, articles } = this.state;
        return (
            <section className="section-news">
                <div className="container">
                    <h2 className="section-news__heading">News<br/>{`${date.day} ${date.month}`}</h2>
                    <div className="articles">
                        <Article articles={activeArticles}/>
                    </div>
                    {activeArticles.length === articles.length ? null : <button onClick={this.showOldNews} className="news-link">Show old news</button> }
                </div>
            </section>
        );
    }
}

export default News;