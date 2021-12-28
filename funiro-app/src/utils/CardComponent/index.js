import React from 'react';
import '../../components/Product/Cards/card.css';

const CardComponent = ({ img, title, des, cPrice, dPrice }) => {
  return (
    <>
      <div class='card'>
        <div class='card__content'>
          <img src={img} alt='img' />
          <div class='card__title'>{title}</div>
          <p class='card__text'>{des}</p>
          <div className='card__number'>
            <div class='card__title'>Rp {dPrice}</div>
            <div class='card__line'>Rp {cPrice}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardComponent;
