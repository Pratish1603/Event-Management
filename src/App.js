import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PhotoGallery from "./pages/PhotoGallery";
import VideoGallery from "./pages/VideoGallery";
import ShortsGallery from "./pages/ShortsGallery";
import WeddingAlbums from "./pages/WeddingAlbums";
import Testimonials from "./pages/Testimonials";
import EventDetails from "./pages/EventDetails";
import Booking from "./pages/Booking";
import Navbar from "./components/Navbar";
import "./index.css";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event/:id" element={<EventDetails />} />
        <Route path="/booking/:id" element={<Booking />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/photo-gallery" element={<PhotoGallery />} />
        <Route path="/video-gallery" element={<VideoGallery />} />
        <Route path="/shorts-gallery" element={<ShortsGallery />} />
        <Route path="/wedding-albums" element={<WeddingAlbums />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
