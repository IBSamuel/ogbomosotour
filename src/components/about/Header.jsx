import Image from "next/image";
import exploreImage from "/public/Soun_of_Ogbomosho_palace.jpg";
import React from "react";

const Header = () => {
  return (
    <>
      <section
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${exploreImage.src})`,
        }}
        className="bg-center bg-no-repeat bg-cover opacity-100 z-10"
      >
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 mt-10 text-4xl font-bold tracking-tight leading-none text-white md:text-5xl lg:text-8xl">
            About 
          </h1>
          <div className="mb-8 lg:w-5/12 w-11/12 mx-auto font-normal text-lg text-gray-300 hidden md:block">
            Discover the country's hidden gems and breathtaking landscapes
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
