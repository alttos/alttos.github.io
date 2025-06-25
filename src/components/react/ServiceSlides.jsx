import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import ServiceSlide from './ServiceSlide';
import Arrow from '../../assets/theme-images/icon-arrow.svg?react';

/**
 * @typedef {import('./ServiceSlide').ServiceItem} ServiceItem
 */

/**
 * @param {{ services: ServiceItem[], title?: string }} props
 */
function ServiceSlides({ services, title }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section id='services'>
      {/* Header */}
      <header className='bs-container flex items-center justify-between bs-mt-lg'>
        {title && <h2 className='bs-h2'>{title}</h2>}
        {/* Buttons */}
        <nav className='bs-st-button-wrapper flex justify-center gap-4'>
          {/* Prev */}
          <button
            aria-label='Previous slide'
            ref={prevRef}
            className='group bs-btn rounded-full !p-0 flex items-center justify-center h-10 w-10 md:h-12 md:w-12'
            type='button'
          >
            <Arrow
              className='opacity-60 h-4 w-4 -translate-x-[2px] group-active:translate-y-[1px]'
              height={16}
              width={25}
            />
          </button>
          {/* Next */}
          <button
            aria-label='Next slide'
            ref={nextRef}
            className='group bs-btn rounded-full !p-0 flex items-center justify-center h-10 w-10 md:h-12 md:w-12 -scale-x-100'
            type='button'
          >
            <Arrow
              className='opacity-60 h-4 w-4 -translate-x-[2px] group-active:translate-y-[1px]'
              height={16}
              width={25}
            />
          </button>
        </nav>
      </header>
      {/* Slides */}
      <Swiper
        modules={[Navigation]}
        slidesPerView={1.5}
        spaceBetween={8}
        speed={500}
        loop={true}
        centeredSlides={true}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        onInit={(swiper) => {
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        breakpoints={{
          640: {
            slidesPerView: 1.2,
            spaceBetween: 32,
          },
          1600: {
            slidesPerView: 1.4,
            spaceBetween: 32,
          },
          1900: {
            slidesPerView: 2,
            spaceBetween: 32,
          },
        }}
        className='js-fc-swiper swiper select-none bs-mt-md'
        wrapperClass='swiper-wrapper'
      >
        {services.map((item, idx) => (
          <SwiperSlide key={idx}>
            <ServiceSlide {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default ServiceSlides;
