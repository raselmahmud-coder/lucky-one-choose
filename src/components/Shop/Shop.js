import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Shop.css'
const Shop = (props) => {
    const { product, getProduct } = props;
    const { img, name, price} = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h6>Name: {name}</h6>
            <p>Price: ${price}</p>
            <button className='btn btn-primary' onClick={()=> getProduct(product)}>Add to cart <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Shop;