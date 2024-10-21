import React from 'react'

const Gridsystem = () => {
  return (
    <>
    <section className='bg-black'>
        

<div class="grid grid-cols-2 md:grid-cols-4 gap-10 mx-10">
    <div class="">
        <div>
        <div className="relative w-80 h-[450px] bg-black rounded-3xl overflow-hidden shadow-lg text-white">
      {/* Background Image */}
      <img 
        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" 
        alt="Hisma Desert"
        layout="fill"
        objectFit="cover"
        className="bg-black h-auto max-w-full  opacity-100 rounded-3xl"
      />

      {/* Overlay Content */}
      <div className="absolute top-6 left-6 z-10">
        <h1 className="text-2xl font-bold">Hisma Desert</h1>
        <p className="text-sm mt-2">The Hisma desert is a true marvel of nature, and several desert oases.</p>
      </div>

    </div>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-3xl" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-3xl" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt=""/>
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-3xl" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-3xl" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-3xl" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt=""/>
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-3xl" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-3xl" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-3xl" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt=""/>
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-3xl" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-3xl" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-3xl" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt=""/>
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

export default Gridsystem