import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <h1>Home</h1>
            <a href="/our-story">Our Story</a> <br />
            <a href="/hours-and-location">Hours and Location</a>
        </>
    );
}

export default Home;
