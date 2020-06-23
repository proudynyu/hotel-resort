import React from 'react';
import { Container } from './style';
import './styles.css'

const Hero = ({ children, hero="defaultHero" }) => {
  return (
    <div className={hero}>
      {children}
    </div>
  )
}

const StyledHero = ({ children, img }) => {
  return (
    <Container img={ img }>
      { children }
    </Container>
  )
}

export {
  Hero,
  StyledHero
};