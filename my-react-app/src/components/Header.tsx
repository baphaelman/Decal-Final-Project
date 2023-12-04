import React from 'react';

function Header() {
    const iconStyle = {
        height: '2.5vw',
        width: '2.5vw',
        marginRight: '2vw',
    };

    const headerStyle = {
        display: 'flex',
        borderBottom: 'black solid 0.25vw',
    };

    const headerButtons = {
        textDecoration: 'none',
        textAlign: 'center',
        color: 'var(--black)',
        flex: '1',
        fontFamily: 'Sansation',
        margin: '0',
        padding: '1vw',
        display: 'flex',
        justifyContent: 'end',
        paddingBottom: '0',
    };

    return (
        <div style={headerStyle} className="header">
            <a
                style={{
                    ...headerButtons,
                    flex: '8',
                    border: 'none',
                    justifyContent: 'start',
                }}
                href="/"
                className="heading-1"
            >
                <img src="/sushi_icon.png" style={iconStyle}></img>
                Daikichi Sushi Shop
            </a>
            <a
                className="heading-2"
                style={{
                    ...headerButtons,
                    borderRight: 'var(--red80) solid 0.30vw',
                    borderLeft: 'var(--red80) solid 0.30vw',
                    borderTop: 'none',
                    borderBottom: 'none',
                    flex: '2',
                    paddingBottom: '0',
                }}
                href="hours-and-location"
            >
                Hours & Location
            </a>
            <a
                className="heading-2"
                style={{ ...headerButtons, border: 'none', paddingBottom: '0' }}
                href="our-story"
            >
                Our Story
            </a>
        </div>
    );
}

export default Header;
