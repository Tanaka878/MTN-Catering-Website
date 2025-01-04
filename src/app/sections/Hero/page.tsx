'use client'
import React, { useState, useEffect } from 'react';

const Hero = () => {
  const phrases = [
    'in event planning.',
    'for weddings and parties.',
    'for corporate events.',
    'in making memorable experiences.',
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
        setCurrentColor(colors[(loopIndex + 1) % colors.length]); // Update the color dynamically
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, loopIndex, phrases, colors]);

  return (
    <div className="px-2">
        <div className="flex items-center">
            <h2 className="text-black font-semibold text-sm md:text-2xl">
            Experts In
            </h2>
            <span className={`${currentColor} font-bold ml-1 text-sm md:text-2xl`}>
            {currentPhrase}
            </span>
        </div>
</div>


  );
};

export default Hero;
