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
        border: '12px solid var(--red40)',
        borderRadius: '5vw',
        marginLeft: '10vw',
        marginRight: '10vw',
        padding: '2vw',
        width: '80vw',
    };

    return (
        <>
            <Header />
            <div style={pageStyle}>
                <div className="heading-0">Menu</div>
                <div style={menuStyle}>
                    {menuItems.map((menuItem) => (
                        <ItemOnMenu
                            key={menuItem.id}
                            id={menuItem.id}
                            currentItem={currentItem}
                            setCurrentItem={setCurrentItem}
                        />
                    ))}
                </div>
                <button onClick={() => navigate('/cart')}>Go To Cart</button>
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
