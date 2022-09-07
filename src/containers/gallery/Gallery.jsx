import React from 'react';
import './gallery.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper';
import {
  gallery01,
  gallery02,
  gallery03,
  gallery04,
  gallery05,
  gallery06,
} from './imports';

const Gallery = () => {
  return (
    <div className="nuvola__gallery">
      <div className="nuvola__gallery-content section__padding">
        <div className="nuvola__gallery-content__title h1-title">
          Lorem ipsum dolor sit amet
        </div>
        <p className="nuvola__gallery-content__description nuvola__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>
      </div>
      <div className="nuvola__gallery-slider">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            0: {},
            320: {
              slidesPerView: 1,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 2,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <img src={gallery02} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={gallery04} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={gallery06} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Gallery;
