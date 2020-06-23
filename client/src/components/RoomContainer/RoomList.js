import React from 'react';
import RoomComp from '../RoomComp';

const RoomList = ({ rooms }) => {
  return (
    <div className="room-container">
    { rooms.map(room => (
      <RoomComp 
      key={room.id}
      price={room.price}
      images={room.images}
      name={room.name}
      slug={room.slug}
    />
    ))}
  </div>
  )
}

export default RoomList;