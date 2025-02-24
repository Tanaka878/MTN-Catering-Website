'use client'
import React from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'

const LogoTicker = () => {
  return (
    <div className='text-black bg-white md:py-3'>
        <div className='container'>
            <div className='flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]'>
                <motion.div className='flex gap-14 flex-none' animate={{
                  translateX: '-50%'
                }}
                transition={{
                  duration:20,
                  repeat:Infinity,
                  ease:'linear',
                  repeatType:'loop'

                }}>
                    <Image src={'/Images/chef.jpeg'} height={130} width={130} alt='Logo Ticker' className='logo-ticker-image'/>
                    <Image src={'/Images/chef.jpeg'} height={130} width={130} alt='Logo Ticker' className='logo-ticker-image'/>
                    <Image src={'/Images/chef.jpeg'} height={130} width={130} alt='Logo Ticker' className='logo-ticker-image'/>
                    <Image src={'/Images/chef.jpeg'} height={130} width={130} alt='Logo Ticker' className='logo-ticker-image'/>
                    <Image src={'/Images/chef.jpeg'} height={130} width={130} alt='Logo Ticker' className='logo-ticker-image'/>
                    <Image src={'/Images/chef.jpeg'} height={130} width={130} alt='Logo Ticker' className='logo-ticker-image'/>

                    {/*Second set of images */}
                    <Image src={'/Images/chef.jpeg'} height={130} width={130} alt='Logo Ticker' className='logo-ticker-image'/>
                    <Image src={'/Images/chef.jpeg'} height={130} width={130} alt='Logo Ticker' className='logo-ticker-image'/>
                    <Image src={'/Images/chef.jpeg'} height={130} width={130} alt='Logo Ticker' className='logo-ticker-image'/>
                    <Image src={'/Images/chef.jpeg'} height={130} width={130} alt='Logo Ticker' className='logo-ticker-image'/>
                    <Image src={'/Images/chef.jpeg'} height={130} width={130} alt='Logo Ticker' className='logo-ticker-image'/>
                    <Image src={'/Images/chef.jpeg'} height={130} width={130} alt='Logo Ticker' className='logo-ticker-image'/>



                </motion.div>
            </div>
            
        </div>


    </div>
  )
}

export default LogoTicker;
