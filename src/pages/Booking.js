import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Booking = () => {
  const { id } = useParams();
  const event = useSelector((state) => state.events.events.find((e) => e.id === parseInt(id)));
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [booked, setBooked] = useState(false);

  const handleBooking = (e) => {
    e.preventDefault();
    setBooked(true);
  };

  if (!event) {
    return <div className="p-6">Event not found.</div>;
  }

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold">Book Event: {event.title}</h2>
      {booked ? (
        <p className="text-green-500 mt-4">Booking Confirmed for {name}!</p>
      ) : (
        <form onSubmit={handleBooking}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="block border p-2 my-2 w-full"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block border p-2 my-2 w-full"
            required
          />
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
            Confirm Booking
          </button>
        </form>
      )}
    </div>
  );
};

export default Booking;
