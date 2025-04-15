import React, { useEffect, useState } from "react";

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/photos")
      .then((response) => response.json())
      .then((data) => setPhotos(data))
      .catch((error) => console.error("Error fetching photos:", error));
  }, []);

  return (
    <div>
      {/* Background Section */}
      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/images/photo-gallery-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute bottom-16 left-10 text-white">
          <h1 className="text-4xl font-bold">Photo Gallery</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-10">
        <p className="text-lg font-medium text-gray-800 mb-6">
          Welcome to our Photo Gallery! We specialize in capturing unforgettable moments, from weddings to corporate events. Explore our work and relive the memories we help create.
        </p>

        {/* Dynamic Image Grid */}
        <div className="grid grid-cols-3 gap-4">
          {photos.map((photo) => (
            <img
              key={photo.id}
              src={photo.imageUrl}
              alt={photo.description}
              className="w-full h-60 object-cover rounded-lg shadow-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;