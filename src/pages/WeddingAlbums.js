import React from "react";

const WeddingAlbums = () => {
    return (
      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/images/wedding-albums-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute bottom-10 left-10 text-white">
          <h1 className="text-4xl font-bold">Wedding Albums</h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-80 p-6 text-center">
          <p className="text-lg font-medium text-gray-800">
            Discover our Wedding Albums! Beautifully curated collections of wedding memories, capturing love, joy, and celebration in every frame.
          </p>
        </div>
      </div>
    );
  };
  
  export default WeddingAlbums;