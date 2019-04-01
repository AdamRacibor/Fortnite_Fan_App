import React from 'react';

const Category = (props) => {
    const { items } = props;

    const itemsArray = items.map( (el, index) => {
        return (
            <img key={index} className="row__img" src={el.item.images.information} alt={el.name} />
        );
    });

    return itemsArray;
};

export default Category;