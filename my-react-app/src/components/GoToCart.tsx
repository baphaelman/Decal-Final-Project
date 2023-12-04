import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import menuItems from '../../public/MenuItemsList';

function GoToCart() {
    const navigate = useNavigate();

    const goToCartStyle = {
        position: 'absolute',
        right: '3vw',
        top: '5vw',
        width: '5vw',
        height: '3vw',
        border: 'none',
        borderRadius: '100vw',
        color: 'white',
    };

    const imageStyle = {
        width: '2vw',
        height: '2vw',
        margin: '0',
        transform: 'translate(0, 0.25vw)',
    };

    return (
        <div>
            <button
                onClick={() => navigate('/cart')}
                style={goToCartStyle}
                className="basic go-to-cart-button"
            >
                <img src="/shopping-cart-icon.png" style={imageStyle} />
            </button>
        </div>
    );
}

export default GoToCart;
