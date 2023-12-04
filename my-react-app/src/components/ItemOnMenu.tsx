import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import menuItems from '../../public/MenuItemsList';

function ItemOnMenu({ id, setCurrentItem, currentItem }) {
    const navigate = useNavigate();

    const handleClick = () => {
        setCurrentItem(menuItems[id]);
        navigate('/menu-item');
    };

    function countDecimalDigits(number) {
        const decimalPart = number.toString().split('.')[1];
        return decimalPart.length;
    }

    const containerStyle = {
        display: 'flex',
        alignItems: 'center',
        margin: '3vw',
    };

    const imageStyle = {
        width: '15vw',
        height: '15vw',
        border: '4px solid var(--red40)',
        borderRadius: '8%',
    };

    const informationStyle = {
        width: '15vw',
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
            <img src={menuItems[id].path} style={imageStyle} />
            <div style={informationStyle} className="basic">
                <p>{menuItems[id].name}</p>
                <p>
                    ${menuItems[id].price}
                    {countDecimalDigits(menuItems[id].price) === 1 && '0'}
                </p>
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
