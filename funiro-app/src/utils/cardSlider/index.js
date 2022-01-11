import React from 'react';
import '../../components/Tips/tips.css';

const cardSlidertip = ({ img, title, date }) => {
  return (
    <>
      <div class='cardT'>
        <div class='cardT__content'>
          <img className='cardT__image' src={img} alt='img' />
          <div class='cardT__title'>{title}</div>
          <div className='cardT__number'>
            <div class='cardT__text'>{date}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default cardSlidertip;
