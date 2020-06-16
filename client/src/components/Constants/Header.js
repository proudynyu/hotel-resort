import React, { useState } from 'react';
import { FiAlignRight, FiCoffee } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './styles.css'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle(){
    setIsOpen(!isOpen);
  };

  return (
    <>
    <header>
      <h2>
        <span><FiCoffee size={30} color="#c26727"/></span>
      </h2>
      <nav className="nav-bar">
        <ul className="nav-links">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/rooms">Rooms</Link>
        </ul>
      </nav>
      <button className="nav-icon" onClick={handleToggle}>
        <FiAlignRight size={30} color="#c26727"/>
      </button>
    </header>

    <ul className={ isOpen ? "nav-mobile open" : "nav-mobile"}>
      <Link className="nav-link" to="/">Home</Link>
      <Link className="nav-link" to="/rooms">Rooms</Link>
    </ul>
  </>
  );
}

export default Header;