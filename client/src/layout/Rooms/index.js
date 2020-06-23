import React, { useContext, useEffect } from 'react';
import { RoomContext } from '../../context';
import { Hero } from '../../components/Hero';
import Title from '../../components/ServicesComp/title';
import RoomContainer from '../../components/RoomContainer'
import Banner from '../../components/Banner';
import { Link } from 'react-router-dom';

const Rooms = () => {
    const { rooms } = useContext(RoomContext);

    useEffect(() => {

    })

    return (
        <div>
            <Hero hero="roomsHero">
                <Banner 
                    title="Our rooms">
                    <Link to="/" className="btn-primary">
                        Return to home
                    </Link>
                </Banner>
            </Hero>
            <section className="rooms">
                <Title title="Our rooms"/>
                <RoomContainer />
            </section>
        </div>
    )
}

export default Rooms;