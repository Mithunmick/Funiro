import React from 'react';
import Slider from 'react-slick';
import { cardSliderdata } from '../../helper/cardSlider';
import CardSlidertip from '../../utils/cardSlider';
import './tips.css';

const Tips = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className='tipS'>
        <div className='header'>
          <h1>Tips & Tricks</h1>
        </div>
        <div>
          <div className='tipSlider'>
            <Slider {...settings}>
              {cardSliderdata.map(items => (
                <div class='cards__item'>
                  <CardSlidertip
                    img={items.img}
                    title={items.title}
                    date={items.date}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tips;
