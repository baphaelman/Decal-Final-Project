import React from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../components/Header';
import ItemInCart from '../components/ItemInCart';
import ChangeQuantity from '../Components/ChangeQuantity';

function Cart({ cart, countDecimalDigits }) {
    const navigate = useNavigate();

    const borderStyle = {
        display: 'flex',
        flexDirection: 'column',
        border: '0.35vw solid var(--red40)',
        borderRadius: '3vw',
        marginLeft: '10vw',
        marginRight: '10vw',
        marginBottom: '10vw',
        padding: '2vw',
        width: '80vw',
    };

    return (
        <>
            <Header />
            <div className="page" style={{ marginTop: '3vw' }}>
                <div className="heading-0">Cart</div>
                <div style={borderStyle}>
                    {cart.map((cartItem) => (
                        <ItemInCart
                            key={cartItem.cartNumber}
                            cart={cart}
                            cartNumber={cartItem.cartNumber}
                            countDecimalDigits={countDecimalDigits}
                        />
                    ))}
                </div>
                <button onClick={() => navigate('/time-and-date')}>
                    Proceed to Time and Date
                </button>
            </div>
        </>
    );
}

export default Cart;
