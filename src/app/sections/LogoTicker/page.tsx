import React from 'react'
import Image from 'next/image'

const LogoTicker = () => {
  return (
    <div className='text-black bg-white py-3'>
        <div className='container'>
            <div className='flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]'>
                <div className='flex gap-14 flex-none'>
                    <Image src={'/Images/chef.jpeg'} height={130} width={130} alt='Logo Ticker' className='logo-ticker-image'/>
                    <Image src={'/Images/chef.jpeg'} height={130} width={130} alt='Logo Ticker' className='logo-ticker-image'/>
                    <Image src={'/Images/chef.jpeg'} height={130} width={130} alt='Logo Ticker' className='logo-ticker-image'/>
                    <Image src={'/Images/chef.jpeg'} height={130} width={130} alt='Logo Ticker' className='logo-ticker-image'/>
                    <Image src={'/Images/chef.jpeg'} height={130} width={130} alt='Logo Ticker' className='logo-ticker-image'/>
                    <Image src={'/Images/chef.jpeg'} height={130} width={130} alt='Logo Ticker' className='logo-ticker-image'/>


                </div>
            </div>
            
        </div>


    </div>
  )
}

export default LogoTicker;
