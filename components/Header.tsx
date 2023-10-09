import React, { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { PhoneIcon, Bars3CenterLeftIcon, EnvelopeIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import { SocialIcon } from 'react-social-icons'
import { Collapse } from '@mui/material';
type Props = {}

export default function Header({ }: Props) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsopen] = useState(false);
  const [collapseOpen, setCollapseOpen] = useState(false)
  const toggleSidebar = () => {
    setIsopen(!isOpen);
  }
  const toggleCollapse = () => {
    setCollapseOpen(!collapseOpen)
  }


  
  return (
      <motion.header
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 2,
        }}
        className={`fixed w-screen md:text-lg lg:text-2xl font-sans  ${isScrolled ? 'bg-white' : ' bg-transparent'} top-0 flex p-5 items-start justify-between  mx-auto z-20 xl:items-center`}>

        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className='flex items-center justify-center'
        >
        <Link href={'/'}>
          <h1 className='text-4xl text-blue-1 cursor-pointer font-bold md:text-4xl'>Tours and Travels</h1>
        </Link>
        </motion.div>
        <motion.div
          initial={{
            y: -500,
            opacity: 0,
            scale: 0.5
          }}
          animate={{
            y: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className='text-dark-blue-2 hidden text-xl md:inline-flex flex-row items-center gap-x-10'>
          <Link href={'/#destinations'}>Destinations</Link>
          <Link href={''}>Book Hotels</Link>
          <Link href={''}>Book a Taxi</Link>

        </motion.div>
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className='hidden md:flex flex-row items-center gap-x-5 cursor-pointer'>
          <SocialIcon bgColor='transparent' fgColor='#0A558C' style={{ width: 55, height: 55 }} network='whatsapp' />
          <div className='flex flex-col items-center space-x-1 justify-start'>
            <div className='flex flex-row space-x-2 items-center justify-start'>
              <EnvelopeIcon stroke='#186FAF' fill='#DCEEFB' className='text-secondary h-6 w-6' />
              <p className='text-lg '>qweqwe@gmail.com</p>
            </div>
            <div className='flex flex-row space-x-2 items-center justify-start '>
              <PhoneIcon stroke='#186FAF' fill='#DCEEFB' className='text-secondary h-5 w-5' />
              <p className='text-lg '>+91 6295329947</p>
            </div>
          </div>
        </motion.div>

        {/* <div className='flex md:hidden' >
          <button className='outline-none'>
            <Bars3CenterLeftIcon onClick={toggleSidebar} stroke='#186FAF' fill='white' className='h-10 w-10'
            />
          </button>
          <div className="relative">
            <div
              className="fixed right-0 z-10 bg-white roboto-text mt-[-17px] text-dark-blue-2 h-screen transition-all duration-500 ease-in-out shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)]"
              style={{ width: isOpen ? '300px' : 0 }}
            >
              <AnimatePresence>
                {isOpen === true && (
                  <motion.a
                    href="#"
                    className='absolute top-0 right-0 p-4 text-3xl font-bold cursor-pointer'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ease: 'easeInOut', duration: 0.5 }}
                    onClick={toggleSidebar}
                  >
                    &times;
                  </motion.a>
                )}
              </AnimatePresence>
              <ul
                className="relative text-3xl text-dark-blue-2 m-0 mt-20 space-y-5 list-none px-12"
                data-te-sidenav-menu-ref>
                <li>
                  <Link href={''}> Home</Link>
                </li>
                <li>
                  <>
                  <div className='flex flex-row items-center space-x-1' onClick={toggleCollapse}>
                    <Link className={`${collapseOpen === false ? '' : 'text-xl'} duration-500 transition-all`} href={''}> Destinations </Link>
                    <ChevronDownIcon stroke='#186FAF' fill='white' className={`text-secondary h-6 w-6  transition-transform duration-500 ${collapseOpen === false ? 'rotate-0' : 'rotate-180'}`} />
                  </div>
                  <Collapse in={collapseOpen}>
                    <div className=' py-2  flex flex-col space-y-2'>
                      <li>Sikkim</li>
                      <li>Darjeeling</li>
                    </div>
                  </Collapse>
                  </>
                </li>
                <li>
                  <Link href={''}> Book Hotels</Link>
                </li>
                <li>
                  <Link href={''}> Book a Taxi</Link>
                </li>
                <li>
                  <Link href={''}> Contact Us</Link>
                </li>
                <li>
                  <div className='flex flex-col space-y-2 justify-start'>
                    <div className='flex flex-row space-x-2 items-center'>
                      <EnvelopeIcon stroke='#186FAF' fill='white' className='text-secondary h-6 w-6' />
                      <p className='text-lg text-black '>qweqwe@gmail.com</p>
                    </div>
                    <div className='flex flex-row space-x-2 items-center justify-start '>
                      <PhoneIcon stroke='#186FAF' fill='white' className='text-secondary h-5 w-5' />
                      <p className='text-lg text-black '>+91 6295329947</p>
                    </div>
                  </div>
                </li>
                <li className='flex items-start'>
                  <div className='flex flex-row space-x-2 items-center justify-start'>
                    <SocialIcon style={{ width: 35, height: 35 }} network='whatsapp' />
                    <p className='text-lg text-black '>Contact via Whatsapp</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
      </motion.header>
  )
}