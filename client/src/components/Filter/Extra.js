import React from 'react';
import { Div, InputDiv } from './styles';

const Extra = () => {
  return (
    <Div>
      <InputDiv>
        <input type="checkbox" value="breakfast" />
        <label htmlFor="breakfast">Breakfast</label>
      </InputDiv>

      <InputDiv>
        <input type="checkbox" value="pets" />
        <label htmlFor="pets">Pets</label>
      </InputDiv>
    </Div>
  );
}

export default Extra;