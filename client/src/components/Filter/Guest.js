import React, { useContext } from 'react';
import { RoomContext } from '../../context';
import { Div, Label, Select } from './styles';

const Guest = ({ capacity }) => {
  const { setSorted, rooms } = useContext(RoomContext);

  function handleCap(value) {
    const filtered = rooms.filter(item => value === 'all' ? item.capacity : item.capacity === Number(value))
    setSorted(filtered)
  }

  return (
    <Div>
      <Label htmlFor="">Guest</Label>
      <Select onChange={e => handleCap(e.target.value)}>
        <option value="all" selected>Select a room capacity</option>
        { capacity.map(cap =>
          <option value={cap}>{cap}</option>  
        )}
      </Select>
    </Div>
  );
}

export default Guest;