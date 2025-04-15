import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const EventDetails = () => {
  const { id } = useParams();
  const event = useSelector((state) => state.events.events.find((e) => e.id === parseInt(id)));

  if (!event) {
    return <div className="p-6">Event not found.</div>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">{event.title}</h2>
      <p className="text-gray-700">{event.description}</p>
      <Link to={`/booking/${event.id}`} className="mt-4 bg-green-500 text-white px-4 py-2 rounded">
        Book Now
      </Link>
    </div>
  );
};

export default EventDetails;
