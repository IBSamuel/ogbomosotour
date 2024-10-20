import Image from "next/image";
import exploreImage from "/public/explore.png";
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
        <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-14">
          <h1 class="mb-4 mt-10 text-4xl font-bold tracking-tight leading-none text-white md:text-5xl lg:text-8xl">
            Explore <br /><p className="uppercase mt-2">Ògbómọ̀ṣọ́</p>
          </h1>
          <div class="mb-8 lg:w-5/12 w-11/12 mx-auto font-normal text-lg text-gray-300 hidden md:block">
          Ògbómọ̀ṣọ́, a vibrant city in Oyo State, Nigeria, boasts a rich heritage and history. As a prominent Yoruba town, it has played a significant role in the region's development. 
          </div>
          <div class="hidden md:flex flex-col space-y-4 sm:flex-row sm:justify-between sm:space-y-0 mt-40">
          <div className="text-white className w-4/12 text-start">
              <p className="font-semibold mb-2 text-2xl">History and Heritage</p>
              <p>
              Ògbómọ̀ṣọ́, a pivotal Yoruba town, has long held a significant position within the Yoruba cultural sphere. Its strategic location has made it a crossroads for trade and cultural exchange.
              </p>
            </div>
            <div className="text-white  className w-4/12 text-start">
              <p className="font-semibold mb-2 text-2xl">People and Culture</p>
              <p>
              Ògbómọ̀ṣọ́'s vibrant culture is a reflection of its diverse population. This rich tapestry of traditions, languages, and customs has shaped the city's unique identity.
              </p>
            </div>
          </div>
        </div>
      </section>
      <img 
  className="w-full h-36 object-cover" 
  src="https://img.freepik.com/free-vector/zebra-fabric-maze_1409-8913.jpg?t=st=1729440422~exp=1729444022~hmac=ec0b4075447cf2c9713950ca22b1a446d659d9e5780f553a0333906b85dd22c9&w=900" 
  alt="" 
/>
    </>
  );
};

export default Header;
