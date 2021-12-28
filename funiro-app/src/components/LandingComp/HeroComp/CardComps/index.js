import React from 'react';
import './Card.css';
import Slider from 'react-slick';
import img from '../../../../assets/images/Images.jpg';

const CardComps = () => {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '160px',
    slidesToShow: 3,
    speed: 500,
    dots: true,
  };

  return (
    <>
      <div className='Cards'>
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
        <div className='card_slider'>
          <div>
            <Slider {...settings}>
              <div>
                <div className='simage'>
                  <img className='slideimage' src={img} alt='' />
                </div>
              </div>
              <div>
                <div className='simage'>
                  <img className='slideimage' src={img} alt='' />
                </div>
              </div>
              <div>
                <div className='simage'>
                  <img className='slideimage' src={img} alt='' />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardComps;
