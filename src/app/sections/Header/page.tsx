import Image from 'next/image'
import React from 'react'
import {FiMenu} from 'react-icons/fi'
import Buttons from '../ButtonContainer/page'

const Header = () => {
  return (
    <div className="flex justify-between items-center py-1 w-full sticky top-0 backdrop-blur-sm">
  <Image
    src="/Images/mtn_logo.jpeg"
    height={50}
    width={100}
    alt="Catering Logo"
  />
    
    <Buttons/>
  <FiMenu className="h-5 w-5 text-slate-600 cursor-pointer md:hidden" />
</div>
  )
}

export default Header
