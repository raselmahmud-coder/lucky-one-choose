import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import ProductModal from '../ProductModal/ProductModal';
const Cart = ({ cart }) => {
    return (
        <div>
            <div className="cart">
                <h1>Order Summery <FontAwesomeIcon icon={faCoffee} /></h1>
                {
                    cart.map(product => { 
                        return <h6 key={product.id}>{product.name}</h6>
                    })
                }
                <ProductModal cart={cart} className='btn btn-primary'></ProductModal>

            </div>
        </div>
    );
};

export default Cart;