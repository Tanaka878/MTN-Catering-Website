import React from 'react';
import { FaLinkedin, FaFacebook, FaWhatsapp, FaTwitter, FaPhone, FaMailBulk } from "react-icons/fa";
import { FaLocationDot } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className="bg-slate-800 text-white py-6 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Us Section */}
        <div>
          <h3 className="text-xl font-bold mb-2">About Us</h3>
          <p className="text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quis
            tempore laudantium nihil. Laudantium, rem!
          </p>
        </div>

        {/* Social Links Section */}
        <div>
          <h3 className="text-xl font-bold mb-2">Follow Us</h3>
          <div className="flex gap-4">
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

        {/* Contact Information Section */}
        <div>
          <h3 className="text-xl font-bold mb-2">Contact Us</h3>
          {/* Location */}
          <div className="flex items-center gap-2 mb-2">
            <FaLocationDot className="text-red-600 text-2xl" />
            <p>St Dema Phase 3</p>
          </div>
          {/* Phone */}
          <div className="flex items-center gap-2 mb-2">
            <FaPhone className="text-blue-500 text-2xl" />
            <p>+263 7800 1324</p>
          </div>
          {/* Email */}
          <div className="flex items-center gap-2">
            <FaMailBulk className="text-yellow-500 text-2xl" />
            <p>mtncatering@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="text-center text-sm mt-6">
        © {new Date().getFullYear()} Your Company Name. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
