import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import menuItems from '../../public/MenuItemsList';

function ItemOnMenu({ id, setCurrentItem, currentItem }) {
    const navigate = useNavigate();

    const handleClick = () => {
        setCurrentItem(menuItems[id]);
        navigate('/menu-item');
    };

    return (
        <div>
            <p>name: {menuItems[id].name}</p>
            <p>price: {menuItems[id].price}</p>
            <img src={menuItems[id].image}></img>
            <button onClick={handleClick}>Add to cart</button>
        </div>
    );
}

export default ItemOnMenu;
