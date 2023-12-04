import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import sushi from '../components/sushi.png';

function HoursAndLocation() {
    const borderStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        border: '6px solid var(--red40)',
        borderRadius: '5vw',
        marginLeft: '10vw',
        marginRight: '10vw',
        padding: '2vw',
        width: '80vw',
    };

    return (
        <>
            <Header />
            <div className="heading-0" style={{ textAlign: 'center'}}>Location and Hours</div>
            <br></br>
            <div style={borderStyle}>
                    {<h2 style= {{fontFamily: 'Varta'}}>Savor the essence of Japan at Daikichi Sushi. Since we began, we've been your go-to destination for authentic, handcrafted sushi. Our skilled chefs blend tradition with innovation, delivering a fresh and flavorful experience in every bite. Welcome to Daikichi, where sushi is an art form.
                    </h2>
                    }
                    <div style={{ textAlign: 'center' }}>
                    <img src={sushi}
                    alt="Description of the image"
                    style={{ width: '50%', height: 'auto', borderRadius: '20px', border: '4px solid var(--red40)'}}
                    />
                    </div>
            </div>
        </>
    );
}

export default HoursAndLocation;
