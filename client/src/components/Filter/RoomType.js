import React from 'react';
import { Div, Label, Select } from './styles';

import { useContext } from 'react';
import { RoomContext } from '../../context';

const RoomType = ({ types }) => {
  const { setSorted, rooms } = useContext(RoomContext);

  function handleType(value) {
    const filtered = rooms.filter(item => value === 'all' ? item.type : item.type === value)
    setSorted(filtered)
  }

  return (
    <Div>
      <Label htmlFor="types">Rooms Types</Label>
      <Select onChange={e => handleType(e.target.value)}>
        <option value="all" selected>All</option>
        { types.map( type => 
          <option value={type}>{type}</option>
        )}
      </Select>
    </Div>
  );
}

export default RoomType;