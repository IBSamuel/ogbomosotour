import Image from 'next/image';

const Someparts = () => {
  return (
    <section className='bg-black'>
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <Image 
        src="/Soun_of_Ogbomosho_palace.jpg" 
        alt="Desert" 
        layout="fill" 
        objectFit="cover" 
        className="z-0"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-100 z-10"></div>

      {/* Text Overlay */}
      <div className="absolute bottom-10 left-10 z-20 text-white">
        <h1 className="text-5xl">Ogbomoso</h1>
        <h2 className="text-6xl font-bold">Palace</h2>
      </div>

      {/* Profile Image */}
      <div className="absolute bottom-10 right-10 z-20 flex items-center space-x-3">
        <Image
        width={100}
        height={100}
          src="/desert.svg" 
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
    Ogbomoso's rolling hills and ancient rock formations offer a stunning natural beauty. As the sun sets, the landscape is bathed in warm golden light, painting the sky with vibrant colors.
        </p>
        
    </section>
  );
};

export default Someparts;
