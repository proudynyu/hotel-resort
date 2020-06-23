import React from 'react';
import { Div, SizeDiv } from './styles';

const RoomSize = () => {
  return (
    <Div>
      <label htmlFor="types">Size</label>
      <SizeDiv>
        <input type="text"/>
        <input type="text"/>
      </SizeDiv>
    </Div>
  );
}

export default RoomSize;