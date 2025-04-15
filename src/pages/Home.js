import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold">Welcome to Event Manager</h2>
        <p>Find and book amazing events.</p>
        <Link to="/contact" className="bg-blue-500 text-white px-6 py-3 rounded-lg mt-4 inline-block">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Home;

