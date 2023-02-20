import React from 'react';
import './header.css';
import CTA from './CTA';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>CrisWO92</h1>
        <h5 className='text-light'>React Developer</h5>
        <CTA />
         {/*Voy por el minuto 50:50*/}
      </div>
    </header>
  )
}

export default Header;