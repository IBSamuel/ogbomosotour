import Image from 'next/image'
import React from 'react'
import exploreImage from "/public/Soun_of_Ogbomosho_palace.jpg";

const Gallery = () => {
  return (
    <>
      <section className='bg-black text-white pb-14'>
       
      </section>

      <section className='bg-black'>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mx-10 pt-10">
          <div className='grid gap-2'>
            <div>
              {/* Adjust the size of the image to match the intended display size */}
              <Image
                width={700}  
                height={600} 
                className="h-auto max-w-full rounded-3xl"
                src={exploreImage}
                alt="Soun of Ogbomosho Palace"
              />
            </div>
            <div>
              <Image
                className="h-auto max-w-full rounded-3xl"
                width={700}  
                height={600} 
                src="/image2.jpg"
                alt=""
              />
            </div>
            <div>
            <Image
                className="h-auto max-w-full rounded-3xl"
                width={700}  
                height={600} 
                src="/image3.jpg"
                alt=""
              />
            </div>
            <div>
            <Image
                className="h-auto max-w-full rounded-3xl"
                width={700}  
                height={600} 
                src="/image6.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="grid gap-4">
            <div>
            <Image
                className="h-auto max-w-full rounded-3xl"
                width={1000}  
                height={800} 
                src="/image8.jpg"
                alt=""
              />
            </div>
            <div>
            <Image
                className="h-auto max-w-full rounded-3xl"
                width={700}  
                height={600} 
                src="/image9.jpg"
                alt=""
              />
            </div>
            <div>
            <Image
                className="h-auto max-w-full rounded-3xl"
                width={700}  
                height={600} 
                src="/image11.jpg"
                alt=""
              />
            </div>
            <div>
            <Image
                className="h-auto max-w-full rounded-3xl"
                width={700}  
                height={600} 
                src="/image12.jpg"
                alt=""
              />
            </div>
            <div>
            <Image
                className="h-auto max-w-full rounded-3xl"
                width={700}  
                height={600} 
                src="/image10.jpg"
                alt=""
              />
            </div>
          </div>
          <div className='grid gap-2'>
            <div>
              {/* Adjust the size of the image to match the intended display size */}
              <Image
                width={700}  
                height={600} 
                className="h-auto max-w-full rounded-3xl"
                src="/image16.jpg"
                alt="Soun of Ogbomosho Palace"
              />
            </div>
            <div>
              <Image
                className="h-auto max-w-full rounded-3xl"
                width={700}  
                height={600} 
                src="/image13.jpg"
                alt=""
              />
            </div>
            <div>
            <Image
                className="h-auto max-w-full rounded-3xl"
                width={700}  
                height={600} 
                src="/image18.jpg_Large"
                alt=""
              />
            </div>
            <div>
            <Image
                className="h-auto max-w-full rounded-3xl"
                width={700}  
                height={600} 
                src="/image5.jpg"
                alt=""
              />
            </div>
            <div>
            <Image
                className="h-auto max-w-full rounded-3xl"
                width={700}  
                height={600} 
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
  )
}

export default Gallery;