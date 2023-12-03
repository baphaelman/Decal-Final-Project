import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MenuItem({ addToCart, cartItem, quantity, setQuantity }) {
    const navigate = useNavigate();

    const handleClick = () => {
        addToCart(cartItem);
        navigate('/');
    };

    return (
        <div>
            <h2>Menu Item Details</h2>
            <p>name: {cartItem.name}</p>
            <p>price: {cartItem.price}</p>
            <p>quantity: {cartItem.quantity}</p>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
            <button onClick={() => setQuantity(quantity - 1)}>-</button>
            <button onClick={() => handleClick()}>Add to cart</button>
        </div>
    );
}

export default MenuItem;
