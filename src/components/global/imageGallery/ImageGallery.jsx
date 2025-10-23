import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import postImage from '@/images/post_i.png'
import { postImages } from '@/static/data';
import Image from '../Image';
import OneImage from './OneImage';
import TwoImages from './TwoImages';
import ThreeImages from './ThreeImages';
import FourImages from './FourImages';
import MoreThanFiveImages from './MoreThanFiveImages';
import { ImageLayout } from './ImageLayout';

const ImageGallery = ({_images}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = _images.map(img=>img?.url)
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


  return (
    <div className=" midn-h-screen">
      <div className="max-w-6xl mx-auto">
      
        {/* Image Grid */}
          <ImageLayout images={images} openModal={openModal} />
        {/* Modal */}
        {isModalOpen && (
        <div className='fixed inset-0 z-50 bg-black bg-opacity-90'>
            <div 
            className="mt-16 flex items-center justify-center "
            onClick={closeModal}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <div className="relative max-w-4xl max-h-full p-4" onClick={(e) => e.stopPropagation()}>
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute -top-12 right-5 text-white hover:text-gray-300 transition-colors z-10"
              >
                <X size={32} className=' hidden md:block absolute top-0 lg:top-12 right-0 lg:-right-24'/>
              </button>

              {/* Previous Button */}
              <button
                onClick={prevImage}
                className="hidden md:block fixed left-5 top-1/2 transform -translate-y-1/2 text-white
                 hover:text-gray-300 transition-colors bg-black bg-opacity-50 rounded-full p-2 z-10"
              >
                <ChevronLeft size={32} />
              </button>

              {/* Current Image */}
                <div className='h-[300px] md:h-[400px] border-[2pxa] bosrder-red-500 max-w-[700px]'>
                    <img
                        src={images[currentImageIndex]}
                        alt={`Image ${currentImageIndex + 1}`}
                        // className="max-w-full h-[300spx] md:max-h-[80vh] object-contain rounded-lg"
                        className=" w-full    h-full object-contain rounded-lg"
                      />
                </div>

              {/* Next Button */}
              <button type='button'
                onClick={nextImage}
                className="hidden md:block fixed right-5 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black bg-opacity-50 rounded-full p-2 z-10"
              >
                <ChevronRight size={32} />
              </button>

              {/* Thumbnail Navigation */}
              <div className=" mt-7 md:mt-2 max-w-full overflow-x-auto">
                <div className="max-w-[max-content] flex space-x-2  mx-auto">
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
                 {/* Image Counter */}
              <div className="max-w-[max-content] mx-auto  text-white bg-black bg-opacity-50 px-3 py-1 rounded-full">
                {currentImageIndex + 1} / {images.length}
              </div>
            </div>
          
          </div>

          {/* mobile button next,prev and close */}
              <div className='flex justify-between items-center px-6'>
                  <div>
            <button type='button'
                onClick={closeModal}
                className=" text-white hover:text-gray-300 transition-colors bg-black p-2 rounded-full mt-1 bg-opacity-50 z-10"
              >
                <X size={32} className='md:hidden'/>
              </button>
            </div>
                <div className='flex gap-7 mt-x8  md:hidden '>
               <button type='button'
                onClick={prevImage}
                className="  text-white hover:text-gray-400 transition-colors bg-black bg-opacity-50 rounded-full p-2 z-10"
              >
                <ChevronLeft size={32} />
              </button>

               <button type='button'
                onClick={nextImage}
                className="  text-white hover:text-gray-400 transition-colors bg-black bg-opacity-50 rounded-full p-2 z-10"
              >
                <ChevronRight size={32} />
              </button>
            </div>

          
              </div>
        </div>

        )}
  
      </div>
    </div>
  );
};

export default ImageGallery;