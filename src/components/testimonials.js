import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay, Navigation } from 'swiper/modules';

function Testimonials() {
  return (
    <div className='w-100 padding social-feed'>
      <div className='container'>
        <h2 className="mb-0 pb-4 text-center">GLIMPSE OF OUR WORK</h2>
        <div className='row'>
          <Swiper
            spaceBetween={50}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation]}
            pagination={{ clickable: true }}
            navigation={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
          >
            <SwiperSlide>
              <div className='vdo-social'>
                <video src='https://ecis.in/pachaouli-landing-page/assets/social-vdo/video1.mp4' autoPlay muted loop style={{ width: '100%', height: 'auto' }} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='vdo-social'>
                <video src='https://ecis.in/pachaouli-landing-page/assets/social-vdo/video2.mp4' autoPlay muted loop style={{ width: '100%', height: 'auto' }} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='vdo-social'>
                <video src='https://ecis.in/pachaouli-landing-page/assets/social-vdo/video1.mp4' autoPlay muted loop style={{ width: '100%', height: 'auto' }} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='vdo-social'>
                <video src='https://ecis.in/pachaouli-landing-page/assets/social-vdo/video2.mp4' autoPlay muted loop style={{ width: '100%', height: 'auto' }} />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
