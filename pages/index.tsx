import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import cover from '../public/images/5.jpg'
import Destinations from '@/components/Destinations'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Hotels from '@/components/Hotels'
import { NextPage } from 'next'


const inter = Inter({ subsets: ['latin'] })

 const Home: NextPage=()=> {
  return (
    <div className={`flex flex-col h-screen overflow-x-hidden bg-lightest-blue ${styles.cover}`}>
      <Head>
        <title>Travel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <section id='body' className='snap-center'>
        <div className={`h-screen bg-center md:bg-center  flex w-screen   overflow-hidden items-center pt-48 pb-32 justify-center flex-col `}>
          <motion.div animate={{y:[0,6,0]}} transition={{ duration:3,repeat: Infinity,ease:'easeInOut' }}
            className='text-6xl font-bold flex w-full text-center justify-center  mont-text text-white'>Welcome to Tours and Travels!</motion.div>
          <div className='flex flex-col items-center justify-end w-full h-full '>
            <div className='text-2xl ml-4 md:w-[40%] w-2/3 lg:ml-40 align-bottom backdrop-blur-sm lg:backdrop-blur-[1px]  bg-lightest-blue/10 px-6 py-4 rounded-lg font-sans text-white'>
              We offer unforgettable experiences in Sikkim and Darjeeling. <br/>
                <div className='text-lg  md:text-white text-white  mt-2'>Book your cab and hotel with ease and get ready to explore the breathtaking beauty of the Himalayan mountains.</div>
            </div>
            <div className='ml-4 md:ml-0 mt-6 md:mt-2'>
              <Link href={'#destinations'}>
                <button className='bg-blue-1/90 text-xl shadow-md font-semibold text-lightest-blue tracking-wide px-8 py-2 rounded-md hover:bg-dark-blue-2'>
                  Start your adventure now! 
                </button>
              </Link>
            </div>
          </div>
          
        </div>
      </section>
      <section id='destinations'>
        <Destinations/>
      </section>
      <section id='hotels'>
        <Hotels/>
      </section>
      
    </div>
  );
};

export default Home;