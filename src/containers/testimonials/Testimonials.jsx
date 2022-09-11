import React from 'react';
import './testimonials.css';
import { CardTestimonials } from '../../components';
import imgProfile from '../../assets/img-profile.png';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination } from 'swiper';

const Testimonials = () => {
  return (
    <div className="nuvola__testimonials" id="testimonials">
      <div className="nuvola__testimonials-content section__padding">
        <div className="nuvola__testimonials-content__title h1-title">Testimonials</div>
      </div>
      <div className="nuvola__testimonials-slider section__padding">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="nuvola__testimonials-swiper"
          breakpoints={{
            0: {},
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            991: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <CardTestimonials
              imgProfile={imgProfile}
              name="Name Surname"
              date="June 2020"
              testimony="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Ut enim ad minim, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea consequat."
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardTestimonials
              imgProfile={imgProfile}
              name="Name Surname"
              date="June 2020"
              testimony="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Ut enim ad minim, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea consequat."
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardTestimonials
              imgProfile={imgProfile}
              name="Name Surname"
              date="June 2020"
              testimony="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Ut enim ad minim, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea consequat."
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardTestimonials
              imgProfile={imgProfile}
              name="Name Surname"
              date="June 2020"
              testimony="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Ut enim ad minim, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea consequat."
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
