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
        width: '33%',
    };

    const imageStyle = {
        width: '5vw',
        height: '5vw',
        border: '0.20vw solid var(--red40)',
        borderRadius: '8%',
    };

    const informationStyle = {
        width: '15vw',
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '1vw',
    };

    const outerButtonStyle = {
        border: 'none',
        margin: '0',
        padding: '1vw',
        borderRadius: '1vw',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    };

    return (
        <div style={containerStyle}>
            <button
                className="add-button"
                onClick={handleClick}
                style={outerButtonStyle}
            >
                <img src={menuItems[id].path} style={imageStyle} />
                <div style={informationStyle} className="basic">
                    <p className="title">{menuItems[id].name}</p>
                    <p>
                        ${menuItems[id].price}
                        {countDecimalDigits(menuItems[id].price) === 1 && '0'}
                    </p>
                </div>
            </button>
        </div>
    );
}

export default ItemOnMenu;
