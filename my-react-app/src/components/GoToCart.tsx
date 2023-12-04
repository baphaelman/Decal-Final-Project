import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import menuItems from '../../public/MenuItemsList';

function GoToCart() {
    const navigate = useNavigate();

    const goToCartStyle = {
        position: 'absolute',
        right: '5vw',
        top: '10vw',
        width: '12vw',
        height: '6vw',
        border: 'none',
        borderRadius: '100vw',
        color: 'white',
    };

    const imageStyle = {
        width: '4vw',
        height: '4vw',
        margin: '0',
        transform: 'translate(0, 0.5vw)',
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
