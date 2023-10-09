import React from 'react'
import { Card } from 'flowbite-react'
import Image from 'next/image'
import cardImage from '../../public/images/9.jpg'
type Props = {}

export default function SwiperCard({ }: Props) {
    return (
        <div className='w-[450px] h-full'>
            <Card imgSrc='https://images.unsplash.com/photo-1573398643956-2b9e6ade3456?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'>
                <div className='px-10'>
                    <p className='text-teal-1 font-semibold'>03 N/ 04 D</p>
                    <h5 className="text-2xl mt-2 font-bold tracking-tight text-gray-900 dark:text-white">
                       Gangtok Tour
                    </h5>
                    <button className='bg-white border-2 border-blue-1/90 text-xl mt-4 font-medium text-blue-1/90 tracking-wide px-8 py-2 rounded-md hover:bg-blue-1/90 hover:text-white'>
                        More Details 
                    </button>
                </div>   
            </Card>

        </div>
    )
}