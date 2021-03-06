import React, { useContext } from 'react';
import { Hero } from '../../components/Hero';
import Banner from '../../components/Banner';
import Services from '../../components/ServicesComp';
import FeaturedRooms from '../../components/FeaturedRooms';

import { Link } from 'react-router-dom'
import { RoomContext } from '../../context'

const Home = () => {
    const rooms = useContext(RoomContext);
    console.log(rooms);
    return (
        <div>
            <Hero>
                <Banner 
                    title="Luxurious Rooms" 
                    subtitle="Delux rooms starting at $299"
                >
                    <Link to="/rooms" className="btn-primary">
                        our rooms
                    </Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms />
        </div>
    )
}

export default Home;