import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import menuItems from '../../public/MenuItemsList';

function ItemOnMenu({ id, setCurrentItem, currentItem }) {
    const navigate = useNavigate();

    const handleClick = () => {
        setCurrentItem(menuItems[id]);
        navigate('/menu-item');
    };

    const containerStyle = {
        display: 'flex',
        alignItems: 'center',
        marginTop: '3vw',
        marginBottom: '3vw',
    };

    const imageStyle = {
        width: '15vw',
        height: '15vw',
        border: '4px solid var(--red40)',
        borderRadius: '8%',
    };

    const informationStyle = {
        width: '20vw',
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '1vw',
    };

    const buttonStyle = {
        width: '10vw',
        height: '4vw',
        border: 'none',
        borderRadius: '1.5vw',
    };

    const nameStyle = {
        margin: '0',
        padding: '0',
        transform: 'translate(0, 0.25vw)',
    };

    return (
        <div style={containerStyle}>
            <img src={menuItems[id].image} style={imageStyle} />
            <div style={informationStyle} className="basic">
                <p>{menuItems[id].name}</p>
                <p>{menuItems[id].price}</p>
                <button
                    className="basic add-button"
                    onClick={handleClick}
                    style={buttonStyle}
                >
                    <p style={nameStyle}>Add to Cart</p>
                </button>
            </div>
        </div>
    );
}

export default ItemOnMenu;
