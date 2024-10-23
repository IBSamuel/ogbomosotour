import Image from "next/image";
import exploreImage from "/public/destination.svg";
import React from "react";

const Header = () => {
  return (
    <>
      <section
        style={{
          backgroundImage: `url(${exploreImage.src})`,
        }}
        className="bg-center bg-no-repeat bg-gray-100 bg-blend-multiply"
      >
        <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 class="mb-4 mt-10 text-4xl font-bold tracking-tight leading-none text-white md:text-5xl lg:text-8xl">
          Gallery
          </h1>
          <div class="mb-8 lg:w-5/12 w-11/12 mx-auto font-normal text-lg text-gray-300 hidden md:block">
          Ògbómọ̀ṣọ́ is rich in heritage and history. The city is 
          home to hundreds of historically important sites. 
          </div>
      
        </div>
      </section>
    
    </>
  );
};

export default Header;
