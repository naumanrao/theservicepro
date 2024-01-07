
import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/swiper.min.css';
import { SliderBox}  from './styles';


function AutoSlider() {




   
    const  images= [
        '1.webp',
        '2.webp',
        '3.webp',
        '4.webp',
        '5.webp',
        '6.webp',
        '7.png',
        '8.png',
        '9.png',
        '10.png',
        '11.webp',
        '12.webp',
      ]
 
      // Swiper config object
      const params = {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: false,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        
      };
    
      return (
        <>
      
        <Swiper {...params} >
          {images.map((image, index) => (
            
            <SliderBox  key={index} >
             
              <img src={process.env.PUBLIC_URL + '/' + image} alt={`Img ${index}`} />
              </SliderBox>
           
            
          ))}
        
        </Swiper>
        </>
      );
    
    }
  
  

  export default AutoSlider