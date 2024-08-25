import React from 'react'
import hero from "../assets/sinan.png"
const Hero = () => {
  return (
   <section className='h-screen  '>
    <div className="grid grid-cols-1 md:grid-cols-2 container  justify-between lg:grid-cols-2">
        <div className='py-14 ' >
            <h1 className='text-4xl md:text-start text-center text-gray-400'>muhammed sinan nooren</h1>
           
            <p className=' text-center text-gray-500 mt-10'>
            I am a MERN stack developer with expertise in crafting robust and responsive web applications using MongoDB, Express.js, React.js, and Node.js. My passion lies in building seamless user experiences and efficient server-side logic, delivering scalable solutions that meet both user and business needs
                </p>
        
        </div>
        <div className='mb-20 flex  items-center justify-center '>
            <img  className='w-96  lg:w-[400px] rounded-2xl ' src={hero} alt="" />
        </div>
    </div>
   </section>
     )
}

export default Hero

