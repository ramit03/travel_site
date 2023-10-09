import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { duration } from '@mui/material'
import Link from 'next/link'
type Props = {}

export default function Destinations(){
  return (
    <div className='w-screen flex flex-col bg-lightest-blue items-center text-center lg:text-start h-full md:h-screen pt-32 px-8 lg:px-24 pb-6'>
      
        <motion.div 
          initial={{
            y:15,opacity:0
          }}
          whileInView={{
            y:0,opacity:1
          }}
          transition={{
            ease:'easeInOut',
            duration:1.5
          }}
          className='flex items-center md:items-start w-full flex-col mb-8'>
          <h1 className='text-5xl mont-text text-dark-blue-1 font-mont  font-bold'> Explore Our Destinations</h1>
          <p className='mt-8  sans-text text-blue-1 text-xl'>Discover the unique beauty of Sikkim and Darjeeling with our carefully curated tour packages.
            <br /> Browse through our selection of destinations to plan your next adventure.</p>
        </motion.div>
      <motion.div 
        initial={{
          y:15,opacity:0
        }}
        whileInView={{
          y:0,opacity:1
        }}
        transition={{
          ease:'easeInOut',
          duration:2
        }}
      className='flex w-3/4 h-full mt-20 mb-4 md:mb-0 lg:mt-0 space-y-8 md:space-y-0  items-center justify-center flex-col md:flex-row space-x-4'>
      
        <div className='w-full h-[600px] md:h-full flex items-center flex-col bg-[url(../public/images/4.jpg)] bg-cover drop-shadow-md rounded-md'>
        <Link href={'/sikkim'} className="absolute inset-0">
          <div className='w-full cursor-pointer flex flex-col h-full space-y-4 group justify-center  items-center p-6 hover:backdrop-blur-md transition-all duration-300 ease-in-out group'>
            <h1 className='text-4xl font-sans text-lightest-blue mt-20 transition-all ease-in-out duration-500 group-hover:mt-0'>Sikkim</h1>
            <p className='opacity-0 group-hover:opacity-100 text-lg text-light-blue transition-all duration-500'>
              Sikkim is a state in northeast India known for its stunning mountain landscapes. Home to the Himalayan mountain range, 
              Sikkim boasts of numerous trekking trails, hot springs, 
              and beautiful monasteries. With a unique blend of traditional 
              and modern culture, Sikkim is a must-visit destination for any traveler.
            </p>
          </div>
          </Link>
        </div>
      
      <div className='w-full h-[600px] md:h-full flex items-center flex-col bg-[url(../public/images/darj1.jpg)] bg-cover drop-shadow-md rounded-md'>
        <div className='w-full cursor-pointer flex flex-col h-full space-y-4 group justify-center  items-center p-6 hover:backdrop-blur-md transition-all duration-300 ease-in-out group'>
          <h1 className='text-4xl font-sans text-lightest-blue mt-20 transition-all ease-in-out duration-500 group-hover:mt-0'> Darjeeling </h1>
          <p className='opacity-0 group-hover:opacity-100 text-lg text-light-blue transition-all duration-500'>
            Darjeeling is a charming hill station located in West Bengal
          , India. It is famous for its breathtaking views of the Himalayas, lush tea gardens,
           and colonial-era architecture. Visitors can take a ride on the famous Darjeeling 
           Himalayan Railway, also known as the  `&quot;`Toy Train`&quot;` and visit attractions such as the 
          Tiger Hill viewpoint and the Padmaja Naidu Himalayan Zoological Park.</p>
        </div>
      </div>
      

      </motion.div>
      
    </div>
  )
}