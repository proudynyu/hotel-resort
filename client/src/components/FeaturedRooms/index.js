import React, { useContext } from 'react';
import Title from '../ServicesComp/title';
import RoomComp from '../RoomComp';
import { RoomContext } from '../../context';
import Loading from '../loadingScreen';
import './styles.css';

const FeaturedRooms = () => {
  const { featuredRooms } = useContext(RoomContext);

  return(
    <section className="features-center">
      <Title title="Featured Rooms" />
      <div  className="features-rooms">
      { featuredRooms.map(room => (
        <RoomComp 
          key={room.id}
          price={room.price}
          images={room.images}
          name={room.name}
          slug={room.slug}
        /> 
      ))}
      </div>
    </section>
  )
}

export default FeaturedRooms;