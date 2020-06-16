import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { RoomContext } from '../../context';
import './styles.css';

const RoomComp = ({id, price, images, name, slug}) => {
  const { setSlug } = useContext(RoomContext);
  
  function handleClick(slug) {
    setSlug(slug);
  }

  return (
    <article key={ id } className="feature-room">
       <Link to={`/rooms/${slug}`} onClick={() => handleClick(slug)}>
        <div>
          <span id="prices">
            <p>$ { price }</p>
            <p>per night</p>
          </span>
          <img src={ JSON.parse(images)[0] } alt="#"/>
          <p>{ name }</p>
        </div>
      </Link>
    </article>
  )
}

export default RoomComp;