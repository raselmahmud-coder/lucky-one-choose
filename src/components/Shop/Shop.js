import React from 'react';
import './Shop.css'
const Shop = (props) => {
    console.log(props);
    const { img, name, price } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h6>Name: {name}</h6>
            <p>Price: ${price}</p>
            <button className='btn btn-primary'>Add to cart</button>
        </div>
    );
};

export default Shop;