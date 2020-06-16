import React, { useState } from 'react'
import Title from './title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'
import './styles.css'

const Services = () => {
  const [services, setServices] = useState([
    {
      icon: <FaCocktail />,
      title: "Free Cocktail",
      info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quibusdam!',
    },
    {
      icon: <FaHiking />,
      title: "Endless Hiking",
      info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quibusdam!',
    },
    {
      icon: <FaShuttleVan />,
      title: "Free Shuttle",
      info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quibusdam!',
    },
    {
      icon: <FaBeer />,
      title: "Strongest Beer",
      info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quibusdam!',
    },
  ]);
  return (
    <section className="services">
      <Title title="Services" />
      <div className="services-center">
        {
          services.map( (item, index) => (
            <article key={index} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          ))
        }
      </div>
    </section>
  )
}

export default Services;