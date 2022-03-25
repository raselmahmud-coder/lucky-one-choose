import React, { useEffect, useState } from 'react';
import Shop from '../Shop/Shop';
import './Main.css'
const Main = () => {
    const [ products, setProduct] = useState([]);
    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
        .then(data => setProduct(data))
    }, []);
    return (
        <div className="container">
            <div className="row">
            <div className='products'>
            {
                products.map(product => <Shop key={product.id} product={product}/>)
            }
        </div>
            </div>
</div>
    );
};

export default Main;