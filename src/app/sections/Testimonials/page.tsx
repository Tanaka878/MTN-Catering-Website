'use client'
import React from 'react';
import Image from 'next/image';

const Testimonials = () => {
  const testimonials = [
    {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Repellendus earum vel at illum minus. Necessitatibus eum sapiente, modi delectus consequatur repellat natus vel id ducimus rerum ratione excepturi optio beatae',
      image: '/Images/chef.jpeg',
      name: 'Arnold1',
      username: 'NazzyBwoi'
    },
    {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Repellendus earum vel at illum minus. Necessitatibus eum sapiente, modi delectus consequatur repellat natus vel id ducimus rerum ratione excepturi optio beatae',
      image: '/Images/chef.jpeg',
      name: 'Arnold',
      username: 'NazzyBwoi'
    },
    {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Repellendus earum vel at illum minus. Necessitatibus eum sapiente, modi delectus consequatur repellat natus vel id ducimus rerum ratione excepturi optio beatae',
      image: '/Images/chef.jpeg',
      name: 'Arnold2',
      username: 'NazzyBwoi'
    },
    {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Repellendus earum vel at illum minus. Necessitatibus eum sapiente, modi delectus consequatur repellat natus vel id ducimus rerum ratione excepturi optio beatae',
      image: '/Images/chef.jpeg',
      name: 'Arnold4',
      username: 'NazzyBwoi'
    },
    {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Repellendus earum vel at illum minus. Necessitatibus eum sapiente, modi delectus consequatur repellat natus vel id ducimus rerum ratione excepturi optio beatae',
      image: '/Images/chef.jpeg',
      name: 'Arnold6',
      username: 'NazzyBwoi'
    }
  ];

  // Triple the testimonials to ensure smooth infinite scroll
  const displayTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <div className="bg-white py-16 relative overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-black mb-4">Testimonials</h2>
        <div className="text-xl mb-2">What Our Users Say</div>
        <p className="text-gray-600">
          From our delicious recipes, our catering services has become the top most booked catering group
        </p>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-33.33%);
          }
        }
        .scroll-container {
          mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
        }
        .infinite-scroll-1 {
          animation: scroll 30s linear infinite;
        }
        .infinite-scroll-2 {
          animation: scroll 40s linear infinite;
        }
        .infinite-scroll-3 {
          animation: scroll 35s linear infinite;
        }
        
        @media (min-width: 768px) {
          .testimonials-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }
        }
        
        @media (min-width: 1024px) {
          .testimonials-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>

      <div className="relative h-[500px] overflow-hidden scroll-container">
        <div className="testimonials-grid">
          {/* Column 1 */}
          <div className="infinite-scroll-1 px-2">
            {displayTestimonials.map((testimonial, index) => (
              <div 
                key={`col1-${testimonial.name}-${index}`} 
                className="card bg-white p-6 rounded-lg shadow-md mx-auto mb-6"
              >
                <p className="text-gray-700 mb-4 line-clamp-3">{testimonial.text}</p>
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      height={40}
                      width={40}
                      className="rounded-full h-10 w-10 object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600">{testimonial.username}</div>
                  </div>
                </div>
                <hr className="mt-4" />
              </div>
            ))}
          </div>

          {/* Column 2 - Only visible on md and larger screens */}
          <div className="hidden md:block infinite-scroll-2 px-2">
            {displayTestimonials.map((testimonial, index) => (
              <div 
                key={`col2-${testimonial.name}-${index}`} 
                className="card bg-white p-6 rounded-lg shadow-md mx-auto mb-6"
              >
                <p className="text-gray-700 mb-4 line-clamp-3">{testimonial.text}</p>
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      height={40}
                      width={40}
                      className="rounded-full h-10 w-10 object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600">{testimonial.username}</div>
                  </div>
                </div>
                <hr className="mt-4" />
              </div>
            ))}
          </div>

          {/* Column 3 - Only visible on lg and larger screens */}
          <div className="hidden lg:block infinite-scroll-3 px-2">
            {displayTestimonials.map((testimonial, index) => (
              <div 
                key={`col3-${testimonial.name}-${index}`} 
                className="card bg-white p-6 rounded-lg shadow-md mx-auto mb-6"
              >
                <p className="text-gray-700 mb-4 line-clamp-3">{testimonial.text}</p>
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      height={40}
                      width={40}
                      className="rounded-full h-10 w-10 object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600">{testimonial.username}</div>
                  </div>
                </div>
                <hr className="mt-4" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;