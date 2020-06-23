import React from 'react';

import RoomType from './RoomType';
import Guest from './Guest';
import Price from './Price';
import RoomSize from './RoomSize';
import Extra from './Extra';

import { Container } from './styles';

const Filter = ({ rooms }) => {
  const type = rooms.map(room => room.type)
  const size = rooms.map(room => room.size)
  const price = rooms.map(room => room.price)
  const capacity = rooms.map(room => room.capacity)
  const filteredType = [...new Set(type)];
  const filteredSize = [...new Set(size)];
  const filteredCapacity = [...new Set(capacity)];
  const filteredPrice = [...new Set(price)];

  return (
    <Container>
      <RoomType types={filteredType}/>
      <Guest capacity={filteredCapacity}/>
    </Container>
  )
}

export default Filter;