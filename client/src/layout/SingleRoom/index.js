import React, { useContext, useEffect, useState } from 'react';
import { RoomContext } from '../../context';
import { Link } from 'react-router-dom';
import Error from '../Error';
import { StyledHero } from '../../components/Hero'
import Banner from '../../components/Banner';

const SingleRoom = () => {
    const { rooms, slug } = useContext(RoomContext);
    const [single, setSingle] = useState({});
    const [images, setImages] = useState([]);

    useEffect(() => {
        if (slug !== ''){
            const filteredRoom = rooms.filter( item => item.slug === slug)
            setSingle(filteredRoom[0]);
            const images = JSON.parse(filteredRoom[0].images)
            setImages(images);
        }
    }, []);

    return (
        <div>
        { slug === '' ?
            <Error /> :
            <div>
                <StyledHero img={images[0]}>
                    <Banner title={single.name} >
                        <Link to="/rooms" className="btn-primary">
                            Back to rooms
                        </Link>
                    </Banner>
                </StyledHero>
                <section className="single-room">
                    <div className="single-room-images">
                        { images.map(img => (
                            <img src={img} />
                        ))}
                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>Details</h3>
                            <p>{single.description}</p>
                        </article>
                        <article className="info">
                            <h3>Info</h3>
                            <h6>Price: ${single.price}</h6>
                            <h6>Size: {single.size}</h6>
                            <h6>Max capacity: {single.capacity} {single.capacity === 1 ? 'Person' : 'People'}</h6>
                            <h6>{single.pets === 0 ? 'No pets allowed' : 'Pets allowed'}</h6>
                            <h6>{single.breakfast === 0 ? 'No breakfast' : 'With breakfast'}</h6>
                        </article>
                    </div>
                </section>
            </div>
        }
        </div>
    )
}

export default SingleRoom;