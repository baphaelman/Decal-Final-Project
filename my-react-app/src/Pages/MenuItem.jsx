import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../Components/Header';
import GoToCart from '../Components/GoToCart';
import ChangeQuantity from '../Components/ChangeQuantity';

function MenuItem({
    addToCart,
    cartItem,
    quantity,
    setQuantity,
    cartNumber,
    countDecimalDigits,
}) {
    const navigate = useNavigate();

    const handleClick = () => {
        addToCart(cartItem);
        navigate('/');
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
        objectFit: 'cover',
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
                            <ChangeQuantity
                                quantity={quantity}
                                setQuantity={setQuantity}
                            />
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
