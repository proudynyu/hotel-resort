import React, { useContext }from 'react';
import { RoomContext } from '../../context';
import RoomComp from '../RoomComp';
import Filter from '../Filter';
import { Grid, Container } from './styles';

const RoomContainer = () => {
  const { rooms, sorted } = useContext(RoomContext);
  return (
    <Container>
      <Filter rooms={rooms}/>

      <Grid>
      { sorted.map(room => (
        <RoomComp 
        key={room.id}
        price={room.price}
        images={room.images}
        name={room.name}
        slug={room.slug}
      />
      ))}
    </Grid>

  </Container>
  )
}

export default RoomContainer;