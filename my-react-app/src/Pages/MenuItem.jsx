import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MenuItem({
    cart,
    setCart,
    addToCart,
    currentItem,
    cartItem,
    quantity,
    setQuantity,
}) {
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
            <button onClick={() => handleClick()}>Add to cart</button>
            <p>quantity: {cartItem.quantity}</p>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
            <button onClick={() => setQuantity(quantity - 1)}>-</button>
        </div>
    );
}

export default MenuItem;
