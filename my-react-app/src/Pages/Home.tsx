import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';

import menuItems from '../../public/MenuItemsList';
import ItemOnMenu from '../components/ItemOnMenu';
import GoToCart from '../components/GoToCart';

function Home({ currentItem, setCurrentItem }) {
    const menuStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        border: '1vw solid var(--red40)',
        borderRadius: '5vw',
        marginLeft: '10vw',
        marginRight: '10vw',
        marginBottom: '10vw',
        padding: '3vw',
        width: '80vw',
    };

    return (
        <>
            <Header />
            <GoToCart />
            <div className="page">
                <div className="heading-0">Menu</div>
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
