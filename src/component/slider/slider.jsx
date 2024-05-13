import { Swiper, SwiperSlide } from 'swiper/react';
import { Typewriter } from 'react-simple-typewriter';
import { Fade } from 'react-awesome-reveal';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import '../../styles.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useLoaderData } from 'react-router-dom';

const Slider = () => {
  const { fakeData } = useLoaderData(); // Destructure 'estates' from the data fetched
  console.log(fakeData);
  return (
    <div data-aos="flip-left">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {fakeData.map(house => (
          <SwiperSlide house={house} key={house.id}>
            <div
              className="hero min-h-80 h-[500px] lg:h-[600px]   "
              style={{
                backgroundImage: `url(${house.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="hero-overlay bg-opacity-30 "></div>
              <div className="hero-content text-center  text-neutral-content">
                <div className="max-w-md ">
                  <h1 className="mb-5 text-4xl font-bold">
                    <span className="text-info">
                      Welcome to Our Website:{' '}
                      <span>
                        <Typewriter
                          words={['Where Every Query Finds Its Answer']}
                          loop={5}
                          cursor
                          cursorStyle="_"
                          typeSpeed={80}
                          deleteSpeed={50}
                          delaySpeed={1000}
                        />
                      </span>
                    </span>
                  </h1>
                  <Fade direction="left">
                    <p className="mb-5 text-xl text-black">
                      Discover Your Perfect Match: Explore a World of
                      Alternatives! From innovative gadgets to unique solutions,
                      find the perfect fit for your needs. Start your
                      exploration journey now!
                    </p>
                  </Fade>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
