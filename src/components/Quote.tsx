import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'
import { div } from 'framer-motion/client'
 
const quotes = [
    {
        "quote": "Music is the divine way to tell beautiful, poetic things to the heart. It transcends the boundaries of language and speaks directly to the soul. Every note has the power to heal, inspire, and transform.",
        "name": "Pablo Casals",
        "title": "Cellist and Composer"
    },
    {
        "quote": "Without music, life would be a mistake. It is the rhythm that drives our hearts and the melody that colors our emotions. Music turns the ordinary into something extraordinary.",
        "name": "Friedrich Nietzsche",
        "title": "Philosopher"
    },
    {
        "quote": "Where words fail, music speaks. It communicates the inexpressible and reaches deep into the human experience, bridging gaps and uniting hearts in a universal language.",
        "name": "Hans Christian Andersen",
        "title": "Author"
    },
    {
        "quote": "Music can change the world because it can change people. It inspires revolutions, brings about peace, and has the unique ability to move humanity toward a greater purpose.",
        "name": "Bono",
        "title": "Lead Vocalist of U2"
    },
    {
        "quote": "One good thing about music, when it hits you, you feel no pain. Instead, it lifts your spirits, awakens your soul, and creates a world where only the harmony of life exists.",
        "name": "Bob Marley",
        "title": "Musician"
    },
    {
        "quote": "Music is the soundtrack of your life. It is with you in moments of joy, sorrow, love, and reflection, serving as a constant companion that amplifies every emotion and memory.",
        "name": "Dick Clark",
        "title": "Television Personality"
    },
    {
        "quote": "Music gives a soul to the universe, wings to the mind, flight to the imagination, and life to everything. It is the very essence of creativity, breathing life into the mundane.",
        "name": "Plato",
        "title": "Philosopher"
    },
    {
        "quote": "The only truth is music. It cuts through illusions and reveals the raw beauty of existence, reminding us of what it truly means to be human, vulnerable, and alive.",
        "name": "Jack Kerouac",
        "title": "Writer"
    }
] 


const Quote = () => {
  return ( 
          
        <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-dot-white/[0.3] items-center justify-center relative overflow-hidden">
            <h2 className='text-4xl font-bold text-center mb-8 mt-5 z-10'>Hear our Harmony : Voices of Success</h2>
             <div className='w-full'> 
                  <InfiniteMovingCards items={quotes} direction="right" speed="slow" />
             </div>
        </div> 
  )
}

export default Quote