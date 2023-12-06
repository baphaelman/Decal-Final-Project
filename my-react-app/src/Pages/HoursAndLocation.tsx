import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import sushi from '../components/sushi.png';

function HoursAndLocation() {
    const itemStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        border: '0.35vw solid var(--red40)',
        borderRadius: '5vw',
        marginLeft: '10vw',
        marginRight: '10vw',
        paddingTop: '2vw',
        paddingBottom: '2vw',
        width: '80vw',
    };

    const hoursAndContactStyle = {
        width: '39.75vw',
        height: '40vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    const textStyle = {
        marginTop: '0.25vw',
        marginBottom: '0',
    };

    const locationStyle = {
        width: '40vw',
        height: '40vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    const imageStyle = {
        width: '30vw',
        height: '30vw',
        borderRadius: '3vw',
        margin: '0',
    };

    return (
        <>
            <Header />
            <div className="page" style={{ marginTop: '3vw' }}>
                <div style={itemStyle}>
                    <div style={hoursAndContactStyle}>
                        <p
                            className="heading-0"
                            style={{ marginBottom: '1vw' }}
                        >
                            Hours
                        </p>
                        <p style={textStyle} className="big-basic">
                            Monday: 11am - 9:30pm
                        </p>
                        <p style={textStyle} className="big-basic">
                            Tuesday: CLOSED
                        </p>
                        <p style={textStyle} className="big-basic">
                            Wednesday: 11am - 9:30pm
                        </p>
                        <p style={textStyle} className="big-basic">
                            Thursday: 11am - 9:30pm
                        </p>
                        <p style={textStyle} className="big-basic">
                            Friday: 11am - 9:30pm
                        </p>
                        <p style={textStyle} className="big-basic">
                            Saturday: 11am - 9:30pm
                        </p>
                        <p style={textStyle} className="big-basic">
                            Sunday: 11am - 9:30pm
                        </p>
                        <p
                            className="heading-0"
                            style={{ marginBottom: '1vw', marginTop: '5vw' }}
                        >
                            Store Phone
                        </p>
                        <p style={textStyle} className="big-basic">
                            (604) 688-2033
                        </p>
                    </div>
                    <div
                        style={{
                            backgroundColor: 'var(--red20)',
                            width: '0.25vw',
                            height: '40vw',
                            margin: '0',
                            borderRadius: '100vw',
                        }}
                    ></div>
                    <div style={locationStyle}>
                        <p
                            className="heading-0"
                            style={{ marginBottom: '1vw' }}
                        >
                            Location
                        </p>
                        <p style={textStyle} className="big-basic">
                            1346 Burrard St, Vancouver, BC V6Z 2B7
                        </p>
                        <a
                            className="map-link"
                            style={{ padding: '0' }}
                            href="https://www.google.com/maps/dir//Daikichi+Sushi+Shop,+1346+Burrard+St,+Vancouver,+BC+V6Z+2B7,+Canada/@49.2773733,-123.1322217,18z/data=!3m1!5s0x548673d464708f3f:0xc176af2342be16c8!4m8!4m7!1m0!1m5!1m1!1s0x548673d30c5fee03:0x8a0e5c3aff998d5f!2m2!1d-123.1312914!2d49.2774349?entry=ttu"
                        >
                            <img
                                style={imageStyle}
                                src="/DaikichiLocation.png"
                            ></img>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HoursAndLocation;
