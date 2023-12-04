import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import menuItems from '../../public/MenuItemsList';
import ChangeQuantity from '../components/ChangeQuantity';

function ItemInCart({ cart, cartNumber, countDecimalDigits }) {
    const navigate = useNavigate();

    const withLineStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '0.5vw',
    };

    const cartItemStyle = {
        display: 'flex',
        width: '75vw',
        flexDirection: 'row',
        justifyContent: 'space-between',
    };

    const leftStyle = {
        display: 'flex',
        flexDirection: 'row',
    };

    const rightStyle = {
        display: 'flex',
        flexDirection: 'column',
    };

    const imageStyle = {
        width: '10vw',
        height: '5vw',
        objectFit: 'cover',
        borderRadius: '1vw',
        border: '0.15vw solid var(--red40)',
    };

    const nameStyle = {
        marginLeft: '1vw',
    };

    const quantityStyle = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    };

    const dividerStyle = {
        width: '75vw',
        height: '0.15vw',
        backgroundColor: 'var(--red20)',
        marginBottom: '1vw',
    };

    const priceTotal = cart[cartNumber].quantity * cart[cartNumber].price;

    return (
        <div style={withLineStyle}>
            {cartNumber > 0 && <div style={dividerStyle}></div>}
            <div style={cartItemStyle}>
                <div style={leftStyle}>
                    <img src={cart[cartNumber].path} style={imageStyle}></img>
                    <p style={nameStyle} className="heading-2">
                        {cart[cartNumber].name}
                    </p>
                </div>
                <div style={rightStyle}>
                    <p
                        className="heading-2"
                        style={{ marginTop: '0', marginBottom: '0.5vw' }}
                    >
                        ${priceTotal.toFixed(2)}
                        {countDecimalDigits(priceTotal.toFixed(2)) === 1 && '0'}
                    </p>
                    <div style={quantityStyle}>
                        <p
                            className="heading-2"
                            style={{
                                marginTop: '0',
                                marginBottom: '0',
                                marginRight: '2vw',
                            }}
                        >
                            quantity: {cart[cartNumber].quantity}
                        </p>
                        <ChangeQuantity
                            countDecimalDigits={countDecimalDigits}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemInCart;
