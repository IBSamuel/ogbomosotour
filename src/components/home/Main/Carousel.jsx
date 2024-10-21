"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { IoMdArrowForward } from "react-icons/io";

const Carousel = () => {
  const images = [
    {
      src: '/carousel-1.png',
      alt: 'Explore Saudi Arabia 1',
      text: { heading: "Explore", subheading: "Ògbómọ̀ṣọ́" }
    },
    {
      src: '/carousel-1.png',
      alt: 'Explore Saudi Arabia 2',
      text: { heading: "Discover", subheading: "The Kingdom" }
    },
    {
      src: '/carousel-1.png',
      alt: 'Explore Saudi Arabia 3',
      text: { heading: "Adventure", subheading: "Awaits" }
    },
    {
      src: '/carousel-1.png',
      alt: 'Explore Saudi Arabia 4',
      text: { heading: "Uncover", subheading: "Mysteries" }
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 5000); // Slide every 5 seconds

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, []);

  // Go to the next slide (loops back after last slide)
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className='bg-black py-10 px-14'>
    <div className="relative w-full h-[60vh] overflow-hidden">
      {/* Images */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />

          {/* Text Overlay */}
          {index === currentIndex && (
            <div className="absolute bottom-20 left-10 z-20 text-white">
              <h1 className="text-5xl font-bold">{image.text.heading}</h1>
              <h2 className="text-3xl">{image.text.subheading}</h2>
            </div>
          )}
        </div>
      ))}

      {/* Next Slide Button */}
      <button
        onClick={goToNextSlide}
        className="absolute bottom-40 right-10 border-2 text-white p-3 rounded-full"
      >
        <IoMdArrowForward className='text-2xl'/>
      </button>

      {/* Slide Indicator */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full bg-white ${
              index === currentIndex ? 'opacity-100' : 'opacity-50'
            }`}
          ></div>
        ))}
      </div>
    </div>
     </section>
  );
};

export default Carousel;
