import React from 'react';
import "./ProductItemStyle.css"

const ProductItemComponent = ({product}) => {
    const {name, price, img} = product
    return (
        <div className="product">
            <img className="product__image" src={img} alt="image"/>
            <div className="product__name">Description: {name}</div>
            <div className="product__price">
                <mark>Price{price} $</mark>
            </div>
        </div>
    );
};

export default ProductItemComponent;
