import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
const Cart = ({ cart }) => {
    const unique = Math.random()+"hablu";    

    console.log(cart.length);
    return (
        <div>
            <div className="cart">
                <h1>Order Summery <FontAwesomeIcon icon={faCoffee} /></h1>
                {
                    cart.map(product => { 
                        return <h6 key={product.id}>{product.name}</h6>
                    })
                }
                <button className='btn btn-primary me-3'>Choose 1 for me</button>
                <button className='btn btn-primary'>Choose again</button>
            </div>
        </div>
    );
};

export default Cart;