import Image from 'next/image'
import React from 'react'

const Culture = () => {
  return (
    <>
    <section className='bg-black text-white p-10'>
        <div className='grid grid-cols-2 gap-4 w-10/12 mx-auto'>
            <div>
        <p className='font-bold text-4xl mb-10'>Culture</p>
        <p>Ògbómọ̀ṣọ́'s rich heritage and traditions have been shaped by its position as a historic trade hub and its deep-rooted cultural identity within the Yoruba kingdom. In recent years, the city has undergone a significant transformation, blending centuries-old customs with modern practices to fit the contemporary world we live in today.</p>

            </div>
            <div>
                <Image width={300} height={400} src="/image13.jpg" alt="" />
            </div>

        </div>
    </section>
    </>
  )
}

export default Culture