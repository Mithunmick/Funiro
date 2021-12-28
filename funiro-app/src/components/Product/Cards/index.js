import React from 'react';
import './card.css';
import img from '../../../assets/images/Images.jpg';
import CardComponent from '../../../utils/CardComponent';
const CardP = () => {
  return (
    <>
      <ul class='cards'>
        <li class='cards__item'>
          <CardComponent
            img={img}
            title='Syltherine'
            des='Stylish cafe chair'
            dPrice='2.500.000'
            cPrice='3.500.000'
          />
        </li>
        <li class='cards__item'>
          <CardComponent
            img={img}
            title='Syltherine'
            des='Stylish cafe chair'
            dPrice='2.500.000'
            cPrice='3.500.000'
          />
        </li>
        <li class='cards__item'>
          <CardComponent
            img={img}
            title='Syltherine'
            des='Stylish cafe chair'
            dPrice='2.500.000'
            cPrice='3.500.000'
          />
        </li>
        <li class='cards__item'>
          <CardComponent
            img={img}
            title='Syltherine'
            des='Stylish cafe chair'
            dPrice='2.500.000'
            cPrice='3.500.000'
          />
        </li>
        <li class='cards__item'>
          <CardComponent
            img={img}
            title='Syltherine'
            des='Stylish cafe chair'
            dPrice='2.500.000'
            cPrice='3.500.000'
          />
        </li>
        <li class='cards__item'>
          <CardComponent
            img={img}
            title='Syltherine'
            des='Stylish cafe chair'
            dPrice='2.500.000'
            cPrice='3.500.000'
          />
        </li>
        <li class='cards__item'>
          <CardComponent
            img={img}
            title='Syltherine'
            des='Stylish cafe chair'
            dPrice='2.500.000'
            cPrice='3.500.000'
          />
        </li>
        <li class='cards__item'>
          <CardComponent
            img={img}
            title='Syltherine'
            des='Stylish cafe chair'
            dPrice='2.500.000'
            cPrice='3.500.000'
          />
        </li>
      </ul>
    </>
  );
};

export default CardP;
