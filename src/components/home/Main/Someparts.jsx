import Image from 'next/image';

const Someparts = () => {
  return (
    <section className='bg-black'>
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <Image 
        src="/desert.svg" 
        alt="Desert" 
        layout="fill" 
        objectFit="cover" 
        className="z-0"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-100 z-10"></div>

      {/* Text Overlay */}
      <div className="absolute bottom-10 left-10 z-20 text-white">
        <h1 className="text-5xl">Hisma</h1>
        <h2 className="text-6xl font-bold">Desert</h2>
      </div>

      {/* Profile Image */}
      <div className="absolute bottom-10 right-10 z-20 flex items-center space-x-3">
        <img
          src="https://imgs.search.brave.com/R0Y9au5OtW-TL-7pzFqv6H-0CdiaAWhzOu28doLWH3s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2M2L2U1/LzVlL2M2ZTU1ZTEx/OGMwMDQ0YTFmMmQ1/ZmU3NmY2NmNiZjhm/LmpwZw" 
          alt="Wazeem Al Malik" 
          className="rounded-full w-10"
        />
        <div className="text-white">
          <p>Wazeem Al Malik</p>
          <p className="text-sm">Traveler</p>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="absolute bottom-0 left-0 z-30 w-full px-10 pb-10">
      
      </div>
    </div>
    <p className="text-white px-10">
          The Hisma Desert in Saudi Arabia is a realm of ethereal beauty that captivates the senses. Its vast
          expanse of golden sand dunes, sculpted by the winds of time, creates a mesmerizing landscape that
          stretches as far as the eye can see. As the sun sets, painting the sky with vivid hues.
        </p>
        
    </section>
  );
};

export default Someparts;
