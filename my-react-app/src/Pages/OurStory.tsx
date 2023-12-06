import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import sushi from '../components/sushi.png';

function OurStory() {
    const borderStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        border: '0.35vw solid var(--red40)',
        borderRadius: '5vw',
        marginLeft: '10vw',
        marginRight: '10vw',
        padding: '2vw',
        width: '80vw',
        textAlign: 'center',
    };

    return (
        <>
            <Header />
            <div className="page" style={{ marginTop: '3vw' }}>
                <div
                    className="heading-0"
                    style={{ textAlign: 'center', marginBottom: '0' }}
                >
                    Our Story
                </div>
                <div style={borderStyle}>
                    {
                        <h3
                            className="big-basic"
                            style={{ marginLeft: '5vw', marginRight: '5vw' }}
                        >
                            Welcome to Daikichi Sushi Shop, a hidden gem nestled
                            in the heart of our community, where delectable
                            flavors and affordability come together to create an
                            unforgettable dining experience. Step into our cozy
                            haven and embark on a culinary journey that
                            celebrates the art of sushi-making. Daikichi's menu
                            is a testament to the artistry of sushi-making. From
                            classic nigiri to creative maki rolls, each dish is
                            a harmonious blend of flavors and textures. Chef
                            Liu's commitment to affordability means that you can
                            savor the delicate tastes of fresh fish without
                            breaking the bank. Whether you're a sushi aficionado
                            or a first-time diner, our friendly staff is ready
                            to guide you through the menu and ensure you find
                            the perfect combination to tantalize your taste
                            buds.
                        </h3>
                    }
                    <br></br>
                    <div style={{ textAlign: 'center' }}>
                        <img
                            src={sushi}
                            alt="Description of the image"
                            style={{
                                width: '40%',
                                height: 'auto',
                                borderRadius: '20px',
                                border: '0.25vw solid var(--red40)',
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default OurStory;
