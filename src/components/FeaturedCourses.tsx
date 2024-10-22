'use client'
import React from 'react'
import courseData from '../data/music-courses.json'
import { div, p } from 'framer-motion/client';
import { BackgroundGradient } from './ui/background-gradient';
import {Button} from './ui/moving-border'
import Link from 'next/link';

interface Course{
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: true, 
}


const FeaturedCourses = () => {
    const featuredCourses = courseData.courses.filter((course) => course.isFeatured);

  return (
     <div className='py-12 bg-gray-900'>
        <div className='text-center'>
            <h1 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>Featured Courses</h1>
            <p className = 'mt-2 text-3xl lg:font-extrabold md:font-bold sm:font-semibold tracking-tight text-white sm:text-4xl'>Learn With the Best</p>
        </div>
        <div className="mt-6 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
             {featuredCourses.map((course)=>(
                    <BackgroundGradient key={course.id}  //key prop
                       className='p-4 sm:p-6 flex-col rounded-[22px] dark:bg-zinc-900 overflow-hidden h-full'>
                        <div className='items-center text-center flex-grow'>
                            <p className='lg:font-bold md:font-semibold text-lg sm:text-xl mt-2 mb-4 dark:text-neutral-200'>{course.title}</p>
                            <p className='font-extralight text-xl text-neutral-600 dark:text-neutral-400 flex-grow'>{course.description}</p>
                            <div className='mt-10 text-center'>
                                <Link href="/learn"> Learn More </Link>
                            </div>
                        </div>
                    </BackgroundGradient>
                     
             ))}
        </div>
        <div className='mt-10 text-center'>
            <Button >
                Explore More
            </Button>
        </div>
     </div>
  )
}

export default FeaturedCourses