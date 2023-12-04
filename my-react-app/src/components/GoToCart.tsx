import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import menuItems from '../../public/MenuItemsList';

function GoToCart({ cartNumber }) {
    const navigate = useNavigate();

    const goToCartStyle = {
        position: 'absolute',
        right: '3vw',
        top: '5vw',
        width: '7vw',
        height: '4vw',
        border: 'none',
        borderRadius: '100vw',
        color: 'white',
        display: 'flex',
        flexDirection: 'row',
    };

    const imageStyle = {
        width: '3vw',
        height: '3vw',
        margin: '0',
        marginLeft: '0.75vw',
        marginTop: '0.25vw',
        transform: 'translate(0, 0.25vw)',
    };

    const cartNumberStyle = {
        color: 'var(--white)',
        marginLeft: '0.5vw',
        transform: 'translate(0, -1.25vw)',
        fontFamily: 'Sansation-normal',
    };

    if (cartNumber > 1) {
        return (
            <div>
                <button
                    onClick={() => navigate('/cart')}
                    style={goToCartStyle}
                    className="basic go-to-cart-button"
                >
                    <img src="/shopping-cart-icon.png" style={imageStyle} />
                    <p className="heading-1" style={cartNumberStyle}>
                        {cartNumber - 1}
                    </p>
                </button>
            </div>
        );
    }
}

export default GoToCart;
