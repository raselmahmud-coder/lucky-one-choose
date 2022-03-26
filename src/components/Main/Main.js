import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Shop from '../Shop/Shop';
import './Main.css'
const Main = () => {
    const [products, setProduct] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
        .then(data => setProduct(data))
    }, []);
    let newCart = [];
    const getProduct = (fullProduct) => {
        newCart = [...cart, fullProduct]
        setCart(newCart);
    }
    const chooseAgain = () => {
        setCart([]);
    }
    return (
        <div className="container">
            <div className="row">
                <div className="products-container">
                    <div className='products'>
                    {
                            products.map(product => <Shop
                                key={product.id}
                                product={product}
                                getProduct={getProduct}
                            />)
                    }
                    </div>
                    <Cart cart={cart} chooseAgain={chooseAgain}/>
                </div>
            </div>
        </div>
    );
};

export default Main;