import Image from 'next/image'
import React from 'react'

const Traditions = () => {
  return (
    <>
    <section className='bg-black text-white p-10'>
        <p className='font-semibold text-2xl'>Traditions of Ògbómọ̀ṣọ́</p>
        <div className='grid grid-cols-2 gap-4 mt-10 mx-auto w-10/12'>
            <div className='text-end justify-end ps-5'>
                <Image width={300} height={400} src="/image6.jpg" alt="" className='max-w-md rounded' />
            </div>
            <div>

            <p className='font-bold text-3xl mb-5'>Language</p>
            <p>Yoruba is the official language of Ògbómọ̀ṣọ́ and the primary language used in all dealings and public transactions. English serves as a second language and is widely spoken by a large section of the society, especially in formal settings. All road signs are bilingual, showing information in both Yoruba and English.</p>

            </div>
            <div>
            </div>

        </div>
    </section>
    </>
  )
}

export default Traditions