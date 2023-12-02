import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import menuItems from '../../public/MenuItemsList';

function ItemInCart({ cart, cartNumber }) {
    const navigate = useNavigate();

    return (
        <div>
            <img src={cart[cartNumber].image}></img>
            <p>{cart[cartNumber].name}</p>
            <p>price: {cart[cartNumber].price}</p>
            <p>quantity: {cart[cartNumber].quantity}</p>
        </div>
    );
}

export default ItemInCart;
