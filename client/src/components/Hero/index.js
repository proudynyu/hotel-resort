import React from 'react';
import './styles.css'

const Hero = ({ children, hero="defaultHero" }) => {
  return (
    <div className={hero}>
      {children}
    </div>
  )
}


export default Hero;