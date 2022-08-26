import React from 'react';
import "./StyleForComponents.css"

const ProductComponent = ({product}) =>{
  const {name, price, img} = product
    return (
        <div className="products">
            <img className="image" src={img} alt="image"/>
            <div className="name">Description: {name}</div>
            <div className="price"><mark>Price{price} $</mark></div>
        </div>
    );
};

export default ProductComponent;
