import React from 'react';
import { Hero } from '../Hero';
import Banner from '../Banner';
import { Link } from 'react-router-dom';

const Rooms = () => {
    return (
        <Hero hero="roomsHero">
            <Banner 
                title="Our rooms">
                <Link to="/" className="btn-primary">
                    Return to home
                </Link>
            </Banner>
        </Hero>
    )
}

export default Rooms;