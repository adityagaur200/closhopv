import {
    FaFacebookF,
    FaTwitter,
    FaPinterestP,
    FaVimeoV,
    FaInstagram,
  } from 'react-icons/fa';
  
  export default function Footer() {
    return (
      <footer className="bg-gray-50 pt-16 text-center text-gray-800">
        {/* Newsletter */}
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-2">NEWSLETTER</h2>
          <p className="mb-6 text-sm text-gray-600">
            Get 15% off your first purchase! Plus, be the first to know about sales,
            new product launches and exclusive offers!
          </p>
  
          <form className="flex items-center border-b border-black max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full py-2 px-4 bg-transparent focus:outline-none"
            />
            <button
              type="submit"
              className="text-black text-xl px-2 hover:text-gray-500"
            >
              →
            </button>
          </form>
  
          {/* Social Icons */}
          <div className="flex justify-center space-x-6 mt-6 text-xl">
            <FaFacebookF className="hover:text-gray-500 cursor-pointer" />
            <FaTwitter className="hover:text-gray-500 cursor-pointer" />
            <FaPinterestP className="hover:text-gray-500 cursor-pointer" />
            <FaVimeoV className="hover:text-gray-500 cursor-pointer" />
            <FaInstagram className="hover:text-gray-500 cursor-pointer" />
          </div>
        </div>
  
        {/* Bottom Footer */}
        <div className="bg-black text-white mt-16 py-10 px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 text-sm text-left">
            {/* Contact Info */}
            <div>
              <p>Call Us : +123-456-789</p>
              <p>info@example.com</p>
              <p>Monday till Friday 10 to 6 IST</p>
            </div>
  
            {/* Logo and Copyright */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-2">CloShop</h3>
              <p>Copyright © 2025 CloShop. All rights reserved.</p>
            </div>
  
            
          </div>
        </div>
      </footer>
    );
  }
  