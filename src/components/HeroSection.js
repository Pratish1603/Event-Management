import { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const images = [
  "/images/event1.png",
  "/images/event2.jpg",
  "/images/event3.jpg",
  "/images/event4.jpg",
  "/images/event5.jpg",
  "/images/event6.jpg",
  "/images/event7.jpg",
  "/images/event8.jpg",
  "/images/event9.png",
  "/images/event10.png",
];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 10000); // Change image every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Manually Adjusted Image */}
      <img
        src={images[currentImage]}
        alt="Event"
        className="absolute inset-0 w-10 h-10 object-cover"
        style={{ minWidth: "100vw", minHeight: "100vh" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Take a trip into paradise</h1>
        <h2 className="text-3xl md:text-4xl font-semibold">
          Partner with <span className="text-yellow-400">Event Manager</span> in Nagpur
        </h2>
        <p className="text-lg md:text-xl mt-3">Nagpur’s #1 Exclusive Event Company</p>

        {/* Social Media Icons */}
        <div className="flex space-x-6 mt-6 text-3xl">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaTwitter />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            <FaFacebook />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
            <FaYoutube />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
            <FaInstagram />
          </a>
        </div>

        {/* Contact Us Button */}
        <a
          href="/contact"
          className="mt-6 px-6 py-3 bg-yellow-500 text-black font-semibold text-lg rounded-lg hover:bg-yellow-600 transition-all"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
