import { useState, useEffect } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { SiGoogle } from "react-icons/si";

const testimonials = [
  { name: "Alice Johnson", date: "March 2, 2025", rating: 5, text: "Event Manager made our wedding a dream come true!" },
  { name: "Bob Williams", date: "Feb 18, 2025", rating: 4, text: "Excellent service! The team was very professional." },
  { name: "Charlie Davis", date: "Jan 25, 2025", rating: 5, text: "I highly recommend them! They exceeded expectations." },
  { name: "David Smith", date: "Jan 10, 2025", rating: 4, text: "Very well organized. The catering was top-notch." },
  { name: "Emma Brown", date: "Dec 20, 2024", rating: 5, text: "I couldn't have asked for a better event planner!" },
  { name: "Frank Harris", date: "Dec 5, 2024", rating: 4, text: "Great experience! Would book them again." },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const itemsPerPage = 3;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const nextSlide = () => {
    if (index + itemsPerPage < testimonials.length) {
      setIndex(index + itemsPerPage);
    }
  };

  const prevSlide = () => {
    if (index - itemsPerPage >= 0) {
      setIndex(index - itemsPerPage);
    }
  };

  return (
    <div className="relative">
    
      <div
        className="h-screen flex items-center justify-center bg-center bg-cover"
        style={{ backgroundImage: "url('/images/testimonials-bg.jpg')" }}
      >

        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="bg-white py-16">

        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-4xl font-bold text-gray-800">Client Testimonials</h2>
          <p className="text-lg text-gray-600">See What Our Clients Have to Say</p>
          <p className="text-sm text-gray-500 mt-4">
            Clients have praised Melodia Events for their professionalism, attention to detail, and creative approach. They appreciate the stress-free planning experience and recommend Melodia Events as a top-notch event management team.
          </p>
        </div>

        <div className="relative flex justify-center items-center space-x-4">
          <button
            onClick={prevSlide}
            className={`p-3 bg-blue-600 text-white rounded-full ${index === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={index === 0}
          >
            <FaChevronLeft />
          </button>

          <div className="flex space-x-6">
            {testimonials.slice(index, index + itemsPerPage).map((item, i) => (
              <div key={i} className="bg-white shadow-lg rounded-lg p-6 w-80 text-black">

                <div className="flex justify-between items-center mb-4">
                  <div className="flex space-x-1 text-yellow-400">
                    {Array(item.rating).fill().map((_, idx) => (
                      <FaStar key={idx} />
                    ))}
                  </div>
                  <SiGoogle className="text-blue-600 text-2xl" />
                </div>

                <p className="text-gray-700 mb-4">"{item.text}"</p>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white text-xl font-bold rounded-full">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-semibold">{item.name}</h4>
                    <p className="text-gray-500 text-sm">{item.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={nextSlide}
            className={`p-3 bg-blue-600 text-white rounded-full ${
              index + itemsPerPage >= testimonials.length ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={index + itemsPerPage >= testimonials.length}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
