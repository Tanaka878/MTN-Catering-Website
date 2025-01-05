import React from 'react'
import Image from 'next/image'

const HeroImage = () => {
  return (
    
      
    <section>
        <nav className="h-auto w-full flex justify-center items-center bg-gray-100 my-6 p-4">
        <Image 
          src="/Images/burger.png" 
          alt="Image" 
          layout="responsive" 
          width={400} 
          height={400} 
          className="object-contain rounded-lg shadow-lg max-w-xs sm:max-w-md"
        />
      </nav>
    </section>
  )
}

export default HeroImage
