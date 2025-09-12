import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PauseIcon,
  PlayIcon,
} from '@heroicons/react/24/outline';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Images
import img1 from '../images/steveJobs.mp4';
import img2 from '../images/Slide-2.webp';
import img3 from '../images/Slide-3.jpeg';
import vid1 from '../images/vid1.mp4';

const slides = [
  {
    id: 1,
    image: img1,
    title: 'Steve Jobs Biography',
    description: "“The people who are crazy enough to think they can change the world are the ones who do.”",
    buttonText: 'Start Reading',
  },
  {
    id: 2,
    image: img2,
    title: 'The Almanac of Naval Ravikant',
    description: '“A fit body, a calm mind, a house full of love. These things cannot be bought they must be earned.”',
    buttonText: 'Start Reading',
  },
  {
    id: 3,
    image: img3,
    title: 'Wings Of Fire',
    description: '“Dreams have to be bigger than the obstacles that come in your way.”',
    buttonText: 'Start Reading',
  },
    {
    id: 4,
    image: vid1,
    title: 'Into The Wild',
    description: '“It is not always necessary to be strong, but to feel strong”',
    buttonText: 'Start Reading',
  },
];

const AdvancedCarousel = () => {
  const swiperRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const handlePrev = () => swiperRef.current?.swiper?.slidePrev();
  const handleNext = () => swiperRef.current?.swiper?.slideNext();
  const toggleAutoplay = () => {
    const swiper = swiperRef.current?.swiper;
    if (!swiper) return;
    if (swiper.autoplay.running) {
      swiper.autoplay.stop();
      setIsPlaying(false);
    } else {
      swiper.autoplay.start();
      setIsPlaying(true);
    }
  };

  return (
    <div className="relative w-full h-[100vh] md:h-[90vh] overflow-hidden bg-black">
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={false}
        loop={true}
        speed={800}
        className="h-full"
      >
{slides.map((slide) => (
  <SwiperSlide key={slide.id}>
    {slide.image.endsWith('.mp4') ? (
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={slide.image}
        autoPlay
        muted
        loop
        playsInline
      />
    ) : (
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${slide.image})` }}
      ></div>
    )}

    {/* Overlay */}
    <div className="absolute inset-0 bg-black/30" />

    {/* Slide Content */}
    <div className="relative z-10 flex flex-col justify-end h-full px-4 sm:px-6 md:px-12 lg:px-20 pb-20 text-white max-w-3xl">
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3">
        {slide.title}
      </h2>
      <p className="text-sm sm:text-base md:text-lg mb-6">
        {slide.description}
      </p>
      <button className="bg-white text-black px-6 py-2 text-sm sm:text-base rounded-full font-medium hover:bg-gray-200 transition w-fit">
        {slide.buttonText}
      </button>
    </div>
  </SwiperSlide>
))}


        {/* Controls */}
        <div className="absolute bottom-6 right-4 sm:right-6 z-20 flex space-x-3">
          <button
            onClick={toggleAutoplay}
            className="p-2 sm:p-3 rounded-full bg-white/20 hover:bg-white/40 transition backdrop-blur"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <PauseIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            ) : (
              <PlayIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            )}
          </button>
          <button
            onClick={handlePrev}
            className="p-2 sm:p-3 rounded-full bg-white/20 hover:bg-white/40 transition backdrop-blur"
            aria-label="Previous"
          >
            <ChevronLeftIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>
          <button
            onClick={handleNext}
            className="p-2 sm:p-3 rounded-full bg-white/20 hover:bg-white/40 transition backdrop-blur"
            aria-label="Next"
          >
            <ChevronRightIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>
        </div>
      </Swiper>
    </div>
  );
};

export default AdvancedCarousel;
