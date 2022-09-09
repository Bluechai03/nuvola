import React, { useState, useEffect } from 'react';
import './benefits.css';
import Card from '../../components/card/Card';
import { RiSettings5Line, RiRocketLine } from 'react-icons/ri';
import { BsCash } from 'react-icons/bs';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination } from 'swiper';

const Cards = () => (
  <div className="nuvola__benefits-content__grid">
    <Card
      title="Lorem ipsum"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
    >
      <RiSettings5Line size="45px" color="#2F3386" />
    </Card>
    <Card
      title="Lorem ipsum"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
    >
      <BsCash size="45px" color="#2F3386" />
    </Card>
    <Card
      title="Lorem ipsum"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
    >
      <RiRocketLine size="45px" color="#2F3386" />
    </Card>
  </div>
);

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

const Benefits = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [toggleSlider, setToggleSlider] = useState(false);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  useEffect(() => {
    windowSize.innerWidth < 834 ? setToggleSlider(true) : setToggleSlider(false);
  }, [setToggleSlider, windowSize]);

  return (
    <div className="nuvola__benefits">
      <div className="nuvola__benefits-content section__padding">
        <div className="nuvola__benefits-content__title h1-title">System Benefits</div>
        <p className="nuvola__benefits-content__description nuvola__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>
        {toggleSlider || <Cards />}
      </div>
      {toggleSlider && (
        <div className="nuvola__benefits-slider">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
            breakpoints={{
              0: {},
              320: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
            }}
          >
            <SwiperSlide>
              <Card
                title="Lorem ipsum"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
              >
                <RiSettings5Line size="45px" color="#2F3386" />
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card
                title="Lorem ipsum"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
              >
                <BsCash size="45px" color="#2F3386" />
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card
                title="Lorem ipsum"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
              >
                <RiRocketLine size="45px" color="#2F3386" />
              </Card>
            </SwiperSlide>
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default Benefits;
