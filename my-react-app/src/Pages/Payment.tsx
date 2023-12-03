import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';

function Payment({ order }) {
    console.log(order);
    return (
        <>
            <Header />
        </>
    );
}

export default Payment;
