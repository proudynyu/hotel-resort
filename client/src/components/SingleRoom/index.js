import React, { useContext, useEffect, useState } from 'react';
import { RoomContext } from '../../context';
import { Link } from 'react-router-dom';
import Error from '../Error';
import Hero from '../Hero'
import Banner from '../Banner';

const SingleRoom = () => {
    const { rooms, slug } = useContext(RoomContext);
    const [single, setSingle] = useState({});

    useEffect(() => {
        const filteredRoom = rooms.filter( item => item.slug === slug)
        setSingle(filteredRoom[0]);
    }, []);

    return (
        <div>
        { slug === '' ?
            <Error /> :
            <Hero hero="roomsHero">
                <Banner title={single.name} >
                    <Link to="/rooms" className="btn-primary">
                        Back to rooms
                    </Link>
                </Banner>
            </Hero>
        }
        </div>
    )
}

export default SingleRoom;