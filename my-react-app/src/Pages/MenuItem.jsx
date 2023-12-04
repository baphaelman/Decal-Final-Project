import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../Components/Header';
import GoToCart from '../Components/GoToCart';

function MenuItem({ addToCart, cartItem, quantity, setQuantity, cartNumber }) {
    const navigate = useNavigate();

    function countDecimalDigits(number) {
        const decimalPart = number.toString().split('.')[1];
        return decimalPart.length;
    }

    const handleClick = () => {
        addToCart(cartItem);
        navigate('/');
    };

    const increase = () => {
        if (quantity < 10) {
            setQuantity(quantity + 1);
        }
    };

    const decrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const imageStyle = {
        width: '35vw',
        height: '35vw',
        border: '0.25vw solid var(--red40)',
        borderRadius: '3vw',
    };

    const itemStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '7vw',
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
        width: '0.25vw',
        height: '35vw',
        backgroundColor: 'var(--red20)',
        borderRadius: '100vw',
    };

    const informationStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '46vw',
        marginLeft: '2vw',
        marginRight: '2vw',
    };

    const quantityContainerStyle = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    };

    const signStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    };

    const plusStyle = {
        fontSize: '5vw',
        borderRadius: '100vw 0 0 100vw',
        border: 'none',
        borderRight: '0.25vw solid var(--red100)',
        color: 'var(--white)',
    };

    const minusStyle = {
        fontSize: '5vw',
        borderRadius: '0 100vw 100vw 0',
        border: 'none',
        borderLeft: '0.25vw solid var(--red100)',
        color: 'var(--white)',
    };

    const boldStyle = {
        fontFamily: 'Sansation-bold',
        margin: '0',
        padding: '0',
        transform: 'translate(0, -1.65vw)',
    };

    const addtoCartStyle = {
        color: 'var(--white)',
        fontSize: '2vw',
        fontFamily: 'Sansation-bold',
        width: '10vw',
        height: '7vw',
        border: 'none',
        borderRadius: '2vw',
        marginTop: '2vw',
        position: 'absolute',
        right: '25vw',
        bottom: '7vw',
    };

    return (
        <div>
            <GoToCart cartNumber={cartNumber} />
            <Header />
            <p
                className="link"
                onClick={() => {
                    navigate('/');
                }}
            >
                {'< MENU'}
            </p>
            <div className="page" style={{ marginTop: '0vw' }}>
                <div style={itemStyle}>
                    <div style={imageDivStyle}>
                        <img src={cartItem.path} style={imageStyle} />
                    </div>
                    <div style={lineStyle}></div>
                    <div style={informationStyle}>
                        <p className="heading-1">{cartItem.name}</p>
                        <p className="heading-2">
                            ${cartItem.price}
                            {countDecimalDigits(cartItem.price) === 1 && '0'}
                        </p>
                        <p
                            className="heading-2"
                            style={{ marginTop: '0', marginBottom: '2vw' }}
                        >
                            {cartItem.description}
                        </p>
                        <div style={quantityContainerStyle}>
                            <p className="heading-2" style={{ width: '20vw' }}>
                                quantity: {cartItem.quantity}
                            </p>
                            <div style={signStyle}>
                                <button
                                    className="heading-2 sign"
                                    onClick={increase}
                                    style={plusStyle}
                                >
                                    <p style={boldStyle}>+</p>
                                </button>
                                <button
                                    onClick={decrease}
                                    className="heading-2 sign"
                                    style={minusStyle}
                                >
                                    <p style={boldStyle}>-</p>
                                </button>
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    width: '100%',
                                    justifyContent: 'center',
                                }}
                            >
                                <button
                                    onClick={() => handleClick()}
                                    className="old-basic add-to-cart"
                                    style={addtoCartStyle}
                                >
                                    ADD TO CART
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MenuItem;
