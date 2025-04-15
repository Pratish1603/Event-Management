import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6">

        <div className="flex justify-center space-x-5 mb-4">
          <a href="#" className="text-gray-400 hover:text-white"><FaFacebook size={24} /></a>
          <a href="#" className="text-gray-400 hover:text-white"><FaInstagram size={24} /></a>
          <a href="#" className="text-gray-400 hover:text-white"><FaLinkedin size={24} /></a>
          <a href="#" className="text-gray-400 hover:text-white"><FaTwitter size={24} /></a>
          <a href="#" className="text-gray-400 hover:text-white"><FaYoutube size={24} /></a>
        </div>

        <div className="text-center">
          <h1 className="text-2xl font-bold">Event Management</h1>
          <p className="text-gray-400 mt-2 px-4 md:px-32">
            Planning a full event has never been easier!Event Management, an ISO Certified Event Management Company based in Nagpur, India, offers a wide range of services to make your events stress-free and memorable. 
            From premium corporate events and destination wedding planning to birthday parties and private gatherings, we have it all covered. Our offices in Mumbai, Pune, Aurangabad, and Kokan specialize in venue selections and hospitality services.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mt-8 text-gray-400 text-sm">
          
          <div>
            <h2 className="text-lg font-bold mb-3 text-white">Quick Links</h2>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/venues" className="hover:text-white">Venues</Link></li>
              <li><Link to="/gallery" className="hover:text-white">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-3 text-white">Services</h2>
            <ul className="space-y-2">
              <li><Link to="/corporate-events" className="hover:text-white">Corporate Events</Link></li>
              <li><Link to="/wedding-planner" className="hover:text-white">Wedding Planner</Link></li>
              <li><Link to="/music-entertainment" className="hover:text-white">Music & Entertainment</Link></li>
              <li><Link to="/private-parties" className="hover:text-white">Private Parties</Link></li>
              <li><Link to="/destination-wedding" className="hover:text-white">Destination Wedding</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-3 text-white">Other Links</h2>
            <ul className="space-y-2">
              <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link to="/testimonials" className="hover:text-white">Testimonials</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/refund-policy" className="hover:text-white">Cancellation & Refund Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-white">Terms of Service</Link></li>
              <li><Link to="/sitemap" className="hover:text-white">Sitemap</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-3 text-white">Location</h2>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2 text-white" />
                Darshan Colony, Nagpur, Maharashtra - 440009
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2 text-white" />
                Bhande Plot, Nagpur, Maharashtra - 440024
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2 text-white" />
                Gurudev Nagar, Nagpur, Maharashtra - 440009
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-6" />

        {/* Contact Info - INLINE CENTERED */}
        <div className="flex justify-center items-center text-gray-400 text-sm space-x-12">
          <div className="flex items-center">
            <FaPhoneAlt className="text-white mr-2" />
            <span>+91-814-942-0570</span>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="text-white mr-2" />
            <span>vipulpaighan.1988@gmail.com</span>
          </div>
        </div>

        {/* Divider Line */}
        <hr className="border-gray-700 my-6" />

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          <p>© 2025 Media Rights - Reserved</p>
          <p>Powered by Vipul Paighan</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
