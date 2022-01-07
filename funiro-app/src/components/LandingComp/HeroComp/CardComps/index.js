import React from 'react';
import './Card.css';
import Slider from 'react-slick';
import img1 from '../../../../assets/images/sImage1.svg';
import img2 from '../../../../assets/images/sImage2.svg';
import img3 from '../../../../assets/images/sImage3.svg';

const CardComps = () => {
  const settings = {
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 1,
    speed: 500,
  };

  return (
    <>
      <div className='Cards'>
        <div className='card_c'>
          <h1 className='heading'>High-Quality Furniture Just For You</h1>
          <p className='sub'>
            Our furniture is made from selected and best quality materials that
            are suitable for your dream home
          </p>
          <div className='card_button'>
            <button className='button'>Shop now</button>
          </div>
        </div>

        <div className='card_slider'>
          <div>
            <Slider {...settings}>
              <div className='simage'>
                <img className='slideimage' src={img1} alt='' />
              </div>
              <div className='simage'>
                <img className='slideimage' src={img2} alt='' />
              </div>
              <div className='simage'>
                <img className='slideimage' src={img3} alt='' />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardComps;
