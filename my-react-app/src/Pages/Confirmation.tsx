import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';

function Confirmation({ information }) {
    const [showDate, setShowDate] = useState(false);
    useEffect(() => {
        if (information.time !== 'asap') {
            setShowDate(true);
        }
    }),
        [];
    return (
        <>
            <Header />
            <p>Thank you for shopping at Daikichi Sushi Shop!</p>
            <p>Please come to our store to pick up!</p>
            <h2>Confirmation #: 123456</h2>
            {showDate && (
                <div>
                    <p>date: {information.date}</p>
                    <p>time: {information.time}</p>
                </div>
            )}
        </>
    );
}

export default Confirmation;
