import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import postImage from '@/images/post_i.png'

const ImageGallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sample images - replace with your actual image URLs
  const images = [
    'https://picsum.photos/400/300?random=1',
    'https://picsum.photos/400/300?random=2',
    'https://picsum.photos/400/300?random=3',
    'https://picsum.photos/400/300?random=4',
    'https://picsum.photos/400/300?random=5',
    // 'https://picsum.photos/400/300?random=6',
    // 'https://picsum.photos/400/300?random=7',
    // 'https://picsum.photos/400/300?random=8',
    // 'https://picsum.photos/400/300?random=9',
    // postImage,
    // postImage,
    // postImage,
    // postImage,
    // postImage,
    // postImage,
    // postImage,
    // postImage,
    // postImage,
    // postImage,

  ];

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'Escape') closeModal();
  };

  const renderImageLayout = () => {
    const imageCount = images.length;

    if (imageCount === 1) {
      return (
        <div className="w-full max-w-md mx-auto">
          <img
            src={images[0]}
            alt="Single image"
            className="w-full h-64 object-cover rounded-lg shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => openModal(0)}
          />
        </div>
      );
    }

    if (imageCount === 2) {
      return (
        <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Image ${index + 1}`}
              className="w-full h-48 object-cover rounded-lg shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => openModal(index)}
            />
          ))}
        </div>
      );
    }

    if (imageCount === 3) {
      return (
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <img
              src={images[0]}
              alt="Image 1"
              className="w-full h-48 object-cover rounded-lg shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => openModal(0)}
            />
            <img
              src={images[1]}
              alt="Image 2"
              className="w-full h-48 object-cover rounded-lg shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => openModal(1)}
            />
          </div>
          <img
            src={images[2]}
            alt="Image 3"
            className="w-full h-48 object-cover rounded-lg shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => openModal(2)}
          />
        </div>
      );
    }

    // if (imageCount === 4) {
    //   return (
    //     <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
    //       {images.map((img, index) => (
    //         <img
    //           key={index}
    //           src={img}
    //           alt={`Image ${index + 1}`}
    //           className="w-full h-48 object-cover rounded-lg shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
    //           onClick={() => openModal(index)}
    //         />
    //       ))}
    //     </div>
    //   );
    // }

    // For 5 or more images
    return (
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <img
            src={images[0]}
            alt="Image 1"
            className="w-full h-64 object-cover rounded-lg shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => openModal(0)}
          />
          <div className="grid grid-cols-1 gap-4">
            <img
              src={images[1]}
              alt="Image 2"
              className="w-full h-30 object-cover rounded-lg shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => openModal(1)}
            />
            <img
              src={images[2]}
              alt="Image 3"
              className="w-full h-30 object-cover rounded-lg shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => openModal(2)}
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <img
            src={images[3]}
            alt="Image 4"
            className="w-full h-32 object-cover rounded-lg shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => openModal(3)}
          />
          {imageCount > 4 && (
            <div className="relative">
              <img
                src={images[4]}
                alt="Image 5"
                className="w-full h-32 object-cover rounded-lg shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => openModal(4)}
              />
              {imageCount > 5 && (
                <div 
                  className="absolute inset-0 bg-black bg-opacity-60 rounded-lg flex items-center justify-center cursor-pointer hover:bg-opacity-70 transition-all"
                  onClick={() => openModal(4)}
                >
                  <span className="text-white text-2xl font-bold">+{imageCount - 5}</span>
                </div>
              )}
            </div>
          )}
          {imageCount > 5 && (
            <img
              src={images[5]}
              alt="Image 6"
              className="w-full h-32 object-cover rounded-lg shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => openModal(5)}
            />
          )}
        </div>
      </div>
    );
  };

  return (
    <div className=" midn-h-screen">
      <div className="max-w-6xl mx-auto">
      
        {/* Image Grid */}
        <div className="mb-8">
          {renderImageLayout()}
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            onClick={closeModal}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <div className="relative max-w-4xl max-h-full p-4" onClick={(e) => e.stopPropagation()}>
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
              >
                <X size={32} />
              </button>

              {/* Previous Button */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black bg-opacity-50 rounded-full p-2 z-10"
              >
                <ChevronLeft size={32} />
              </button>

              {/* Current Image */}
              <img
                src={images[currentImageIndex]}
                alt={`Image ${currentImageIndex + 1}`}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />

              {/* Next Button */}
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black bg-opacity-50 rounded-full p-2 z-10"
              >
                <ChevronRight size={32} />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-3 py-1 rounded-full">
                {currentImageIndex + 1} / {images.length}
              </div>

              {/* Thumbnail Navigation */}
              <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-2 max-w-full overflow-x-auto">
                {images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className={`w-16 h-12 object-cover rounded cursor-pointer transition-all ${
                      index === currentImageIndex 
                        ? 'opacity-100 ring-2 ring-white' 
                        : 'opacity-60 hover:opacity-80'
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Demo Controls */}
        {/* <div className="text-center">
          <p className="text-gray-600 mb-4">
            Current layout: {images.length} image{images.length !== 1 ? 's' : ''}
          </p>
          <div className="space-x-4">
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              Refresh for Different Layout
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ImageGallery;