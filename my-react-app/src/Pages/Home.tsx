import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';

import menuItems from '../../public/MenuItemsList';
import ItemOnMenu from '../components/ItemOnMenu';
import GoToCart from '../components/GoToCart';

function Home({ currentItem, setCurrentItem, cartNumber }) {
    const menuStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        border: '0.35vw solid var(--red40)',
        borderRadius: '5vw',
        marginLeft: '10vw',
        marginRight: '10vw',
        marginBottom: '10vw',
        padding: '2vw',
        width: '80vw',
    };

    return (
        <>
            <Header />
            <div className="page" style={{ marginTop: '3vw' }}>
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
            <GoToCart cartNumber={cartNumber} />
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
