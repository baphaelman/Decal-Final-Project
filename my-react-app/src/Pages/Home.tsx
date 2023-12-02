import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Header from '../components/Header';

import menuItems from '../../public/MenuItemsList';
import ItemOnMenu from '../components/ItemOnMenu';

function Home({ currentItem, setCurrentItem, addToCart }) {
    const navigate = useNavigate();
    return (
        <>
            <Header />
            {menuItems.map((menuItem) => (
                <ItemOnMenu
                    key={menuItem.id}
                    id={menuItem.id}
                    currentItem={currentItem}
                    setCurrentItem={setCurrentItem}
                />
            ))}
            <button onClick={() => navigate('/cart')}>Go To Cart</button>
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
