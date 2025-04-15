import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    try {
      const response = await axios.post("http://localhost:8080/api/contacts/submit", formData);
      setResponseMessage("Your message has been sent successfully!");
      setFormData({ fullName: "", phone: "", email: "", message: "" });
    } catch (error) {
      setResponseMessage("Failed to send message. Please try again.");
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  const addresses = [
    {
      location: "Nagpur Office",
      address: "2nd Floor, Plot No.11, Bhande Plot, Nandanvan, Nagpur",
      mapSrc: "https://maps.google.com/maps?q=Nagpur&t=&z=13&ie=UTF8&iwloc=&output=embed",
    },
    {
      location: "Mumbai Office",
      address: "Somewhere in Mumbai, Maharashtra, India",
      mapSrc: "https://maps.google.com/maps?q=Mumbai&t=&z=13&ie=UTF8&iwloc=&output=embed",
    },
    {
      location: "Delhi Office",
      address: "Somewhere in Delhi, India",
      mapSrc: "https://maps.google.com/maps?q=Delhi&t=&z=13&ie=UTF8&iwloc=&output=embed",
    }

  ];

  return (
    <div className="pt-20 p-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center">Set Up New Meeting</h2>
      <div className="mt-4 flex flex-col items-center">
        <img src="/meeting.jpg" alt="Meeting" className="w-full max-w-lg rounded-lg shadow-lg" />
      </div>

      <div className="mt-8 flex flex-col md:flex-row items-center md:items-start">
        <div className="md:w-1/2 p-4">
          <h3 className="text-xl font-semibold">Let's Get in Touch</h3>
          <p>Fill out the form and our team will get back to you shortly.</p>
        </div>

        <form onSubmit={handleSubmit} className="md:w-1/2 p-4 bg-gray-100 rounded-lg shadow-md">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="block w-full p-2 my-2 border rounded"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="block w-full p-2 my-2 border rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email ID"
            value={formData.email}
            onChange={handleChange}
            className="block w-full p-2 my-2 border rounded"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="block w-full p-2 my-2 border rounded"
            rows="4"
            required
          ></textarea>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full" disabled={loading}>
            {loading ? "Sending..." : "Submit"}
          </button>
          {responseMessage && <p className="text-center mt-2">{responseMessage}</p>}
        </form>
      </div>

      <div className="px-6 w-full py-10 text-center">
        <h3 className="text-2xl font-bold mb-6">Our Locations</h3>
        <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {addresses.map((place, index) => (
            <div key={index} className="p-4 border rounded-lg shadow-md">
              <h4 className="text-lg font-semibold">{place.location}</h4>
              <p>{place.address}</p>
              <div className="mt-2">
                <iframe
                  src={place.mapSrc}
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
