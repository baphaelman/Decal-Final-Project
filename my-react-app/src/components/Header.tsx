import React from 'react';

function Header() {
    const iconStyle = {
        height: '5vw',
        width: '5vw',
        marginRight: '2vw',
    };

    const headerStyle = {
        display: 'flex',
        borderBottom: 'black solid 1vh',
    };

    const headerButtons = {
        textDecoration: 'none',
        textAlign: 'center',
        color: 'var(--black)',
        fontSize: '50px',
        flex: '1',
        fontFamily: 'Sansation',
        margin: '0',
        padding: '1vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    return (
        <div style={headerStyle} className="header">
            <a style={{ ...headerButtons, flex: '3', border: 'none' }} href="/">
                <img src="/sushi_icon.png" style={iconStyle}></img>
                Daikichi Sushi Shop
            </a>
            <a
                style={{
                    ...headerButtons,
                    borderRight: 'var(--red80) solid 0.5vw',
                    borderLeft: 'var(--red80) solid 0.5vw',
                    borderTop: 'none',
                    borderBottom: 'none',
                    flex: '2',
                }}
                href="hours-and-location"
            >
                Hours & Location
            </a>
            <a style={{ ...headerButtons, border: 'none' }} href="our-story">
                Our Story
            </a>
        </div>
    );
}

export default Header;
