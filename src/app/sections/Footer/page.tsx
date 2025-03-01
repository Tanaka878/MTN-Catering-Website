import React from 'react'
import { FaLinkedin, FaFacebook, FaWhatsapp, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div>
        <div>
            <div>About Us</div>
            <p>Lorem ipsum dolor sit, amet consectetur 
                adipisicing elit. Unde quis tempore 
                laudantium nihil. Laudantium, rem!</p>

           </div>

           <div className='flex'>
              {/* LinkedIn */}
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-blue-600 text-2xl hover:text-blue-800" />
      </a>

      {/* Facebook */}
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook className="text-blue-700 text-2xl hover:text-blue-900" />
      </a>

      {/* WhatsApp */}
      <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp className="text-green-500 text-2xl hover:text-green-700" />
      </a>

      {/* Twitter */}
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="text-blue-400 text-2xl hover:text-blue-600" />
      </a>

           </div>
        </div>

        <div>
            {/**Contains Adresses and  */}

            
        </div>
      
    </div>
  )
}

export default Footer
