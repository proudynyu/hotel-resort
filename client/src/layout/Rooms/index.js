import React from 'react';
import { Hero } from '../../components/Hero';
import Title from '../../components/ServicesComp/title';
import RoomContainer from '../../components/RoomContainer'
import Banner from '../../components/Banner';
import { Link } from 'react-router-dom';
import { Container } from './styles';

const Rooms = () => {
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
            <Container>
                <Title title="Our rooms"/>
                <RoomContainer />
            </Container>
        </div>
    )
}

export default Rooms;