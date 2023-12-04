import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../Components/Header';
import GoToCart from '../Components/GoToCart';

function MenuItem({ addToCart, cartItem, quantity, setQuantity }) {
    const navigate = useNavigate();

    function countDecimalDigits(number) {
        const decimalPart = number.toString().split('.')[1];
        return decimalPart.length;
    }

    const handleClick = () => {
        addToCart(cartItem);
        navigate('/');
    };

    const imageStyle = {
        width: '35vw',
        height: '35vw',
        border: '1vw solid var(--red40)',
        borderRadius: '3vw',
    };

    const itemStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const imageDivStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50vw',
        margin: '0',
    };

    const lineStyle = {
        margin: '0',
        width: '0.5vw',
        height: '35vw',
        backgroundColor: 'var(--red20)',
        borderRadius: '100vw',
    };

    const informationStyle = {
        display: 'flex',
        flexDirection: 'column',
        width: '46vw',
        marginLeft: '2vw',
        marginRight: '2vw',
    };

    const quantityContainerStyle = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    };

    return (
        <div>
            <GoToCart />
            <Header />
            <div className="page" style={{ marginTop: '0vw' }}>
                <p className="heading-1" style={{ marginBottom: '1vw' }}>
                    {cartItem.name}
                </p>
                <div style={itemStyle}>
                    <div style={imageDivStyle}>
                        <img src={cartItem.path} style={imageStyle} />
                    </div>
                    <div style={lineStyle}></div>
                    <div style={informationStyle}>
                        <p className="old-basic">
                            ${cartItem.price}
                            {countDecimalDigits(cartItem.price) === 1 && '0'}
                        </p>
                        <div style={quantityContainerStyle}>
                            <p className="old-basic">
                                quantity: {cartItem.quantity}
                            </p>
                            <button
                                className="old-basic"
                                onClick={() => setQuantity(quantity + 1)}
                            >
                                +
                            </button>
                            <button
                                onClick={() => setQuantity(quantity - 1)}
                                className="old-basic"
                            >
                                -
                            </button>
                        </div>
                        <button
                            onClick={() => handleClick()}
                            className="old-basic"
                        >
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MenuItem;
