import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';

function Confirmation({ order, information }) {
    console.log(order);
    return (
        <>
            <Header />
            <p>Thank you for shopping at Daikichi Sushi Shop!</p>
            <p>Please come to our store to pick up!</p>
            <h2>Confirmation #:123456</h2>
            <p>date: {information.date}</p>
            <p>time: {information.time}</p>
        </>
    );
}

export default Confirmation;
