'use client'
import React, { useState, useEffect } from 'react';
import HeroImage from '../HeroImage/page';
const Hero = () => {
  const phrases = [
    'Hiring.',
    'Private Chef.',
    'corporate events.',
    'Weddings.',
  ];
  const colors = ['text-blue-500', 'text-red-500', 'text-green-500', 'text-purple-500'];

  const [currentPhrase, setCurrentPhrase] = useState('');
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 150;
    const delayAfterComplete = 1500;

    const handleTyping = () => {
      const phrase = phrases[loopIndex % phrases.length];
      if (!isDeleting && charIndex < phrase.length) {
        setCurrentPhrase((prev) => prev + phrase.charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setCurrentPhrase((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === phrase.length) {
        setTimeout(() => setIsDeleting(true), delayAfterComplete);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setLoopIndex((prev) => prev + 1);
        setCurrentColor(colors[(loopIndex + 1) % colors.length]); 
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, loopIndex, phrases, colors]);

  return (
    <div className="px-1 mt-2 pb-20 mb-2 "> 
           <h1 className='flex justify-center p-2 sm:text-7xl md:text-5xl font-bold text-black bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text tracking-tighter mb-4'>MTN Catering</h1>

        <nav className=''>
            <div className='border border-[#222]/10 rounded-lg p-2'>
              <div className="justify-center px-1 tracking-tight flex ">
                
              <h2 className="font-semibold text-sm md:text-2xl text-blue-600">For </h2>
              <span className={`${currentColor} font-bold ml-1 text-sm md:text-2xl inline-flex`}>
                        {currentPhrase}
                        </span>
              </div>

            </div>

            <nav className=''>
                <HeroImage />
            </nav>

            


        </nav>
       
       
</div>


  );
};

export default Hero;
