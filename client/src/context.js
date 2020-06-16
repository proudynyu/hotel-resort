import React, { createContext, useState, useEffect } from 'react';
import api from './services/api';

const RoomContext = createContext();

const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState([]);
  const [slug, setSlug] = useState('');
  // const [sortedRooms, setSortedRooms] = useState([]);
  const [featuredRooms, setFeaturedRooms] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('api/v1/rooms').then( resp => {
      setRooms(resp.data);
      const featured = resp.data.filter(room => room.name.includes('deluxe'))
      setFeaturedRooms(featured);
    });
  }, []);

  return (
    <RoomContext.Provider value={{ rooms, featuredRooms, setSlug, slug }}>
      { children }
    </RoomContext.Provider>
  );
}

export {
  RoomContext,
  RoomProvider
}