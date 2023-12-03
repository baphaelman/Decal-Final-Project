import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ItemOnMenu({ item }) {
    return (
        <div>
            <p>name: {item.name}</p>
            <p>quantity: {item.quantity}</p>
        </div>
    );
}

export default ItemOnMenu;
