import React from 'react'
import { StickyScroll } from './ui/sticky-scroll-reveal'
import { h1 } from 'framer-motion/client'

const content =[
    {
      "title": "Personalized Playlists Just for You",
      "description": "Our app learns your preferences and curates playlists tailored to your mood and taste. Enjoy a music experience that evolves with you."
    },
    {
      "title": "Offline Listening Anytime, Anywhere",
      "description": "Download your favorite tracks for offline listening. Whether you're on a commute or traveling, your music is always accessible."
    },
    {
      "title": "Ad-Free Listening Experience",
      "description": "Enjoy uninterrupted music with our premium ad-free option. Focus on your favorite tracks without distractions."
    },
    {
      "title": "Exclusive Early Access to New Releases",
      "description": "Get first access to exclusive tracks and albums before they drop anywhere else. Stay ahead of the music scene with early releases."
    },
    {
        "title": "Dynamic Mood Playlists",
        "description": "Let AI recognize your mood and recommend the perfect playlist. Whether you're working out, relaxing, or studying, we’ve got the right vibe."
      },
      {
        "title": "Smart Recommendations Engine",
        "description": "Discover new music tailored just for you. Our smart engine suggests songs, albums, and artists based on your listening habits."
      }
    
  ]
  
const WhyChooseUs = () => {
  return ( 
           
           <div className='bg-gray-900'> 
               <h1 className='items-center font-bold text-3xl text-center '>Why Choose Us</h1>
              <StickyScroll content={content} />
            </div> 

  )
}

export default WhyChooseUs