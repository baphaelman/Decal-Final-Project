import React from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../components/Header';
import ItemInCart from '../components/ItemInCart';
import ChangeQuantity from '../Components/ChangeQuantity';

function Cart({ cart, quantity, setQuantity, countDecimalDigits }) {
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
        width: '76vw',
    };

    const proceedStyle = {
        color: 'var(--white)',
        fontFamily: 'Sansation-bold',
        border: 'none',
        borderRadius: '1.5vw',
        padding: '1.5vw',
        marginBottom: '8vw',
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
                <button
                    onClick={() => navigate('/time-and-date')}
                    style={proceedStyle}
                    className="time-and-date"
                >
                    {'TIME AND DATE >'}
                </button>
            </div>
        </>
    );
}

export default Cart;
