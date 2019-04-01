import React from 'react';

const Article = (props) => {
    const { articles } = props;

    const array = articles.map((el, index) => {
        return (
            <article key={index} className="article">
                <img className="article__img" src={el.image} alt="" />
                <header>
                    <h2 className="article__heading">{el.title}</h2>
                </header>
                <p className="article__text">{el.body}</p>
            </article>
        );
    });

    return array;
};

export default Article;