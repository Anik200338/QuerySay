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
          delay: 2500,
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
              className="hero min-h-80 lg:h-[600px]  rounded-3xl "
              style={{
                backgroundImage: `url(${house.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="hero-overlay bg-opacity-30 rounded-3xl"></div>
              <div className="hero-content text-center  text-neutral-content">
                <div className="max-w-md ">
                  <h1 className="mb-5 text-4xl font-bold">
                    <span className="text-info">
                      Discover{' '}
                      <span>
                        <Typewriter
                          words={[
                            'Artistic Masterpieces',
                            'Artistic Expression',
                            'Creative Innovation',
                            'Visual Storytelling',
                          ]}
                          loop={5}
                          cursor
                          cursorStyle="_"
                          typeSpeed={70}
                          deleteSpeed={50}
                          delaySpeed={1000}
                        />
                      </span>
                    </span>
                  </h1>
                  <Fade direction="left">
                    <p className="mb-5 text-xl">
                      Immerse yourself in the world of artistry and
                      craftsmanship with our curated collection. From
                      intricately designed interiors to meticulously crafted
                      exteriors, explore unparalleled creativity in every
                      detail.
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
