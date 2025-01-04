import Image from 'next/image'
import React from 'react'
import {FiMenu} from 'react-icons/fi'

const Header = () => {
  return (
    <div className="flex justify-between items-center py-1 w-full sticky top-0">
  <Image
    src="/Images/catering.png"
    height={50}
    width={70}
    alt="Catering Logo"
  />

  <FiMenu className="h-5 w-5 text-slate-600 cursor-pointer md:hidden" />
</div>
  )
}

export default Header
