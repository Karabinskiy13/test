import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllProducts} from "../../store/slice";
import ProductItemComponent from "../ProductItemComponent/ProductItemComponent";
import "./ProductListStyle.css"


const Products = () => {

    const {products} = useSelector(state => state.productReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch]);
    const [searchQuery, setSearchQuery] = useState('')
    const filteredProducts = products.filter(product => {
        return product.name.toLowerCase().includes(searchQuery.toLowerCase())
    })

    return (
        <div>
            <h1 className="header">Products</h1>
            <form className="search">
                <input
                    type="text"
                    placeholder="search..."
                    className="search__input"
                    onChange={(event) => setSearchQuery(event.target.value)}
                />
            </form>
            {filteredProducts && filteredProducts.map(product => <ProductItemComponent key={product.id} product={product}/>)}
        </div>
    )
}

export default Products;
