import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Header from '../components/Header';

function Confirmation({ information }) {
    const navigate = useNavigate();
    const [showDate, setShowDate] = useState(false);

    const borderStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        border: '0.35vw solid var(--red40)',
        borderRadius: '2vw',
        padding: '2vw',
        width: '75vw',
        height: '40vw',
        margin: '0',
    };

    const proceedStyle = {
        color: 'var(--white)',
        fontFamily: 'Sansation-bold',
        border: 'none',
        borderRadius: '1.5vw',
        padding: '1.5vw',
    };
    return (
        <>
            <Header />
            <div
                className="page"
                style={{
                    marginTop: '3vw',
                }}
            >
                <div style={borderStyle}>
                    <p className="heading-2">
                        Thank you for shopping at Daikichi Sushi Shop!
                    </p>
                    <p className="heading-2">
                        Please come to our store to pick up!
                    </p>
                    <br />
                    <p className="heading-0">Confirmation #: 230128</p>
                    {showDate && (
                        <div>
                            <p>date: {information.date}</p>
                            <p>time: {information.time}</p>
                        </div>
                    )}
                    <button
                        onClick={() => navigate('/')}
                        style={proceedStyle}
                        className="proceed"
                    >
                        {'BACK TO MENU'}
                    </button>
                </div>
            </div>
        </>
    );
}

export default Confirmation;
