import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import sushi from '../components/sushi.png';

function OurStory() {
    const menuStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        border: '12px solid var(--red40)',
        borderRadius: '5vw',
        marginLeft: '10vw',
        marginRight: '10vw',
        padding: '2vw',
        width: '80vw',
    };

    return (
        <>
            <Header />
            <div className="heading-0" style={{ textAlign: 'center'}}>Our Story</div>
            <br></br>
            <div style={menuStyle}>
                    {<h2>Savor the essence of Japan at Daikichi Sushi. Since we began, we've been your go-to destination for authentic, handcrafted sushi. Our skilled chefs blend tradition with innovation, delivering a fresh and flavorful experience in every bite. Welcome to Daikichi, where sushi is an art form.
                    </h2>
                    }
                    <div style={{ textAlign: 'center' }}>
                    <img src={sushi}
                    alt="Description of the image"
                    style={{ width: '50%', height: 'auto', borderRadius: '20px', border: '6px solid var(--red40)'}}
                    />
                    </div>
                </div>
        </>
    );
}

export default OurStory;
