import React, { useEffect, useState, useContext} from 'react';
import RoomFilter from './RoomFilter'
import RoomList from './RoomList';
import RoomComp from '../RoomComp';
import { RoomContext } from '../../context';

const RoomContainer = () => {
  const { rooms } = useContext(RoomContext);
  const [sorted, setSorted] = useState([]);

  return (
    <div>
      <RoomFilter />
      <RoomList rooms={rooms}/>
    </div>
  )
}

export default RoomContainer;