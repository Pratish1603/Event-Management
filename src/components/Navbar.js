import { useState } from "react"; 
import { Link } from "react-router-dom";
import { 
  FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube, 
  FaPhone, FaBars, FaTimes, FaChevronDown 
} from "react-icons/fa";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [galleryDropdownOpen, setGalleryDropdownOpen] = useState(false);

  return (
    <>
      {/* Top Navbar */}
      <nav className="bg-transparent p-4 text-black flex justify-between items-center absolute w-full z-50">
        {/* Left Side - Hamburger Menu & App Name */}
        <div className="flex items-center space-x-3">
          <button onClick={() => setSidebarOpen(true)} className="text-black text-2xl">
            <FaBars />
          </button>
          <h1 className="text-xl font-bold">Event Manager</h1>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-gray-600">Home</Link>

          {/* About Us Dropdown */}
          <div className="relative group">
            <button
              className="flex items-center hover:text-gray-600"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              About Us <FaChevronDown className="ml-1" />
            </button>
            {aboutDropdownOpen && (
              <div 
                className="absolute left-0 mt-2 w-64 bg-white text-black shadow-lg rounded-md"
                onMouseEnter={() => setAboutDropdownOpen(true)}
                onMouseLeave={() => setAboutDropdownOpen(false)}
              >
                <Link to="/blogs" className="block px-4 py-2 hover:bg-gray-200">Blogs by Event Manager</Link>
                <Link to="/testimonials" className="block px-4 py-2 hover:bg-gray-200">Testimonials</Link>
              </div>
            )}
          </div>

          {/* Services Dropdown */}
          <div className="relative group">
            <button
              className="flex items-center hover:text-gray-600"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              Services <FaChevronDown className="ml-1" />
            </button>
            {servicesDropdownOpen && (
              <div 
                className="absolute left-0 mt-2 w-64 bg-white text-black shadow-lg rounded-md"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <Link to="/corporate-events" className="block px-4 py-2 hover:bg-gray-200">Corporate Event Management</Link>
                <Link to="/wedding-planner" className="block px-4 py-2 hover:bg-gray-200">Wedding Planner</Link>
                <Link to="/photography" className="block px-4 py-2 hover:bg-gray-200">Wedding Photography & Videography</Link>
                <Link to="/catering" className="block px-4 py-2 hover:bg-gray-200">Catering Services</Link>
                <Link to="/beach-wedding" className="block px-4 py-2 hover:bg-gray-200">Beach Wedding</Link>
                <Link to="/music-entertainment" className="block px-4 py-2 hover:bg-gray-200">Music & Entertainment</Link>
                <Link to="/private-parties" className="block px-4 py-2 hover:bg-gray-200">Private Parties</Link>
              </div>
            )}
          </div>

          <Link to="/venues" className="hover:text-gray-600">Wedding Venues</Link>

          {/* Gallery Dropdown */}
          <div className="relative group">
            <button
              className="flex items-center hover:text-gray-600"
              onMouseEnter={() => setGalleryDropdownOpen(true)}
              onMouseLeave={() => setGalleryDropdownOpen(false)}
            >
              Gallery <FaChevronDown className="ml-1" />
            </button>
            {galleryDropdownOpen && (
              <div 
                className="absolute left-0 mt-2 w-64 bg-white text-black shadow-lg rounded-md"
                onMouseEnter={() => setGalleryDropdownOpen(true)}
                onMouseLeave={() => setGalleryDropdownOpen(false)}
              >
                <Link to="/photo-gallery" className="block px-4 py-2 hover:bg-gray-200">Photo Gallery</Link>
                <Link to="/video-gallery" className="block px-4 py-2 hover:bg-gray-200">Video Gallery</Link>
                <Link to="/shorts-gallery" className="block px-4 py-2 hover:bg-gray-200">Shorts Gallery</Link>
                <Link to="/wedding-albums" className="block px-4 py-2 hover:bg-gray-200">Wedding Albums</Link>
              </div>
            )}
          </div>

          <Link to="/contact" className="hover:text-gray-600">Contact Us</Link>
        </div>

        {/* Phone Number Icon */}
        <a href="tel:+1234567890" className="hidden md:flex items-center hover:text-gray-600">
          <FaPhone className="mr-1" /> +123 456 7890
        </a>
      </nav>

      {/* Sidebar Menu */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 z-50`}>
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={() => setSidebarOpen(false)} className="text-2xl">
            <FaTimes />
          </button>
        </div>

        <div className="p-4">
          <Link to="/" className="block py-2 text-black hover:bg-gray-200">Home</Link>
          <Link to="/about" className="block py-2 text-black hover:bg-gray-200">About Us</Link>
          <Link to="/services" className="block py-2 text-black hover:bg-gray-200">Services</Link>
          <Link to="/venues" className="block py-2 text-black hover:bg-gray-200">Wedding Venues</Link>
          <Link to="/gallery" className="block py-2 text-black hover:bg-gray-200">Gallery</Link>
          <Link to="/contact" className="block py-2 text-black hover:bg-gray-200">Contact Us</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
