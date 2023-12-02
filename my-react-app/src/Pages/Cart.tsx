import React from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../components/Header';
import ItemInCart from '../components/ItemInCart';

function Cart({ cart }) {
    const navigate = useNavigate();
    return (
        <>
            <Header />
            CART
            {cart.map((cartItem) => (
                <ItemInCart
                    key={cartItem.cartNumber}
                    cart={cart}
                    cartNumber={cartItem.cartNumber}
                />
            ))}
            <button onClick={() => navigate('/time-and-date')}>
                Proceed to Time and Date
            </button>
        </>
    );
}

export default Cart;
