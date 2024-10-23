"use client"; // Enable client-side rendering

import Image from 'next/image';
import React, { useState } from 'react';
import exploreImage from "/public/Soun_of_Ogbomosho_palace.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc); // Set the selected image for modal
  };

  const closeModal = () => {
    setSelectedImage(null); // Clear the selected image to close modal
  };

  return (
    <>
      {/* Modal for viewing selected image */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center">
          <div className="relative">
            <img
              src={selectedImage}
              className="max-w-full max-h-screen rounded-xl"
              alt="Enlarged"
            />
            <button
              className="absolute top-4 right-4 text-white text-3xl"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}

      <section className='bg-black text-white pb-14'>
        <div className='text-center pt-10'>
          <p className='font-semibold text-2xl'>Gallery</p>
          <p className='w-4/12 mx-auto'>
            Explore some notable places within the landscapes of Ògbómọ̀ṣọ́, amazing and also cool.
          </p>
        </div>
      </section>

      <section className='bg-black'>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mx-10 pt-10">
          <div className='grid gap-2'>
            <div onClick={() => openModal(exploreImage.src)} className="cursor-pointer">
              <Image
                width={700}
                height={600}
                className="h-auto max-w-full rounded-3xl"
                src={exploreImage}
                alt="Soun of Ogbomosho Palace"
              />
            </div>
            <div onClick={() => openModal("/image2.jpg")} className="cursor-pointer">
              <Image
                width={700}
                height={600}
                className="h-auto max-w-full rounded-3xl"
                src="/image2.jpg"
                alt=""
              />
            </div>
            <div onClick={() => openModal("/image3.jpg")} className="cursor-pointer">
              <Image
                width={700}
                height={600}
                className="h-auto max-w-full rounded-3xl"
                src="/image3.jpg"
                alt=""
              />
            </div>
            <div onClick={() => openModal("/image6.jpg")} className="cursor-pointer">
              <Image
                width={700}
                height={600}
                className="h-auto max-w-full rounded-3xl"
                src="/image6.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="grid gap-4">
            <div onClick={() => openModal("/image8.jpg")} className="cursor-pointer">
              <Image
                width={1000}
                height={800}
                className="h-auto max-w-full rounded-3xl"
                src="/image8.jpg"
                alt=""
              />
            </div>
            <div onClick={() => openModal("/image9.jpg")} className="cursor-pointer">
              <Image
                width={700}
                height={600}
                className="h-auto max-w-full rounded-3xl"
                src="/image9.jpg"
                alt=""
              />
            </div>
            <div onClick={() => openModal("/image11.jpg")} className="cursor-pointer">
              <Image
                width={700}
                height={600}
                className="h-auto max-w-full rounded-3xl"
                src="/image11.jpg"
                alt=""
              />
            </div>
            <div onClick={() => openModal("/image12.jpg")} className="cursor-pointer">
              <Image
                width={700}
                height={600}
                className="h-auto max-w-full rounded-3xl"
                src="/image12.jpg"
                alt=""
              />
            </div>
            <div onClick={() => openModal("/image10.jpg")} className="cursor-pointer">
              <Image
                width={700}
                height={600}
                className="h-auto max-w-full rounded-3xl"
                src="/image10.jpg"
                alt=""
              />
            </div>
          </div>

          <div className='grid gap-2'>
            <div onClick={() => openModal("/image16.jpg")} className="cursor-pointer">
              <Image
                width={700}
                height={600}
                className="h-auto max-w-full rounded-3xl"
                src="/image16.jpg"
                alt=""
              />
            </div>
            <div onClick={() => openModal("/image13.jpg")} className="cursor-pointer">
              <Image
                width={700}
                height={600}
                className="h-auto max-w-full rounded-3xl"
                src="/image13.jpg"
                alt=""
              />
            </div>
            <div onClick={() => openModal("/image18.jpg_Large")} className="cursor-pointer">
              <Image
                width={700}
                height={600}
                className="h-auto max-w-full rounded-3xl"
                src="/image18.jpg_Large"
                alt=""
              />
            </div>
            <div onClick={() => openModal("/image5.jpg")} className="cursor-pointer">
              <Image
                width={700}
                height={600}
                className="h-auto max-w-full rounded-3xl"
                src="/image5.jpg"
                alt=""
              />
            </div>
            <div onClick={() => openModal("/image17.jpeg")} className="cursor-pointer">
              <Image
                width={700}
                height={600}
                className="h-auto max-w-full rounded-3xl"
                src="/image17.jpeg"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* "See More" Link */}
        <div className="text-end me-6">
          <a href="#" className="text-white underline">See More</a>
        </div>
      </section>
    </>
  );
};

export default Gallery;
