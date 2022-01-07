import React from 'react';
import './card.css';
import img from '../../../assets/images/Images.jpg';
import CardComponent from '../../../utils/CardComponent';
import { cardData } from '../../../helper/cardData';
const CardP = () => {
  return (
    <>
      <ul class='cards'>
        {cardData.map((items, i) => (
          <li class='cards__item'>
            <CardComponent
              img={items.img}
              title={items.title}
              des={items.des}
              dPrice={items.dPrice}
              cPrice={items.cPrice}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default CardP;
