import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ItemOnMenu({ item, font }) {
    const itemStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyConcentLeft: 'space-between',
        width: '100%',
    };

    const rightStyle = {
        display: 'flex',
        flexDirection: 'row',
        flex: '1',
    };

    const leftStyle = {
        display: 'flex',
        flexDirection: 'row',
        flex: '2',
    };

    let priceTotal = item.quantity * item.price;
    if (item.quantity === 0) {
        priceTotal = item.price;
    }

    return (
        <div style={itemStyle}>
            <div style={rightStyle}>
                {item.quantity !== 0 && (
                    <div style={{ width: '1vw' }} className={font}>
                        {item.quantity}
                    </div>
                )}
                <div style={{ width: '15vw' }} className={font}>
                    {item.name}
                </div>
            </div>
            <div style={leftStyle}>
                <div className={font}>${priceTotal.toFixed(2)}</div>
            </div>
        </div>
    );
}

export default ItemOnMenu;
