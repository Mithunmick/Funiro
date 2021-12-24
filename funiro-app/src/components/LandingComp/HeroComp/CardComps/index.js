import React from 'react';
import './Card.css';

const CardComps = () => {
  return (
    <>
      <div className='card'>
        <div className='card_b'>
          <div className='card_d'>
            <div className='card_c'>
              <h1 className='heading'>High-Quality Furniture Just For You</h1>
              <p className='sub'>
                Our furniture is made from selected and best quality materials
                that are suitable for your dream home
              </p>
              <div className='card_button'>
                <button className='button'>Shop now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardComps;
