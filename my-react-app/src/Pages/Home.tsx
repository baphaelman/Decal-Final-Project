import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Header from '../components/Header';

import menuItems from '../../public/MenuItemsList';
import ItemOnMenu from '../components/ItemOnMenu';

function Home({ currentItem, setCurrentItem, addToCart }) {
    const navigate = useNavigate();

    const pageStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '10vw',
    };

    const menuStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        border: '1vw solid var(--red40)',
        borderRadius: '5vw',
        marginLeft: '10vw',
        marginRight: '10vw',
        transform: 'translate(0, -6vw)',
        padding: '2vw',
        width: '80vw',
    };

    const goToCartStyle = {
        position: 'relative',
        left: '37vw',
        bottom: '7vw',
        width: '12vw',
        height: '6vw',
        border: 'none',
        borderRadius: '100vw',
        color: 'white',
    };

    return (
        <>
            <Header />
            <div style={pageStyle}>
                <button
                    onClick={() => navigate('/cart')}
                    style={goToCartStyle}
                    className="basic go-to-cart-button"
                >
                    Go To Cart
                </button>
                <div
                    className="heading-0"
                    style={{ transform: 'translate(0, -6vw)' }}
                >
                    Menu
                </div>
                <div style={menuStyle}>
                    {menuItems.map((menuItem) => (
                        <ItemOnMenu
                            key={menuItem.number}
                            id={menuItem.number}
                            currentItem={currentItem}
                            setCurrentItem={setCurrentItem}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Home;

/*import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import MenuItems from '/MenuItemsList';
import cartItems from '/CartItems';



function Home() {
    return (
        <>
            <Header />
            <a href="/menu-item">Tonkatsu Ramen</a>
        </>
    );
}

export default Home;*/
