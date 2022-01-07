import React from 'react';
import CardComps from './CardComps';
import './hero.css';
const HeroComp = () => {
  return (
    <>
      <div className='heroo'>
        <div className='back'>
          <div className='back1'></div>
          <div className='back2'></div>
        </div>
        <CardComps />
      </div>
    </>
  );
};

export default HeroComp;
