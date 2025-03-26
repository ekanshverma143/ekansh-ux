import React, { useState } from "react";
import certi1 from "../assets/img/certi1.jpeg";
import certi2 from "../assets/img/certi2.jpeg";
import certi3 from "../assets/img/certi3.jpeg";

const certificateImages = [certi1, certi2, certi3];

export const Certi = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % certificateImages.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + certificateImages.length) % certificateImages.length);
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="certi-container">
      <h2 className="certi-heading">Certificates</h2>
      <div className="certi-carousel">
        <button className="arrow-button" onClick={handlePrevious}>
          &lt;
        </button>

        <div className="certi-images">
          {certificateImages.slice(currentIndex, currentIndex + 3).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Certificate ${index + 1}`}
              className="certi-image"
              onClick={() => openModal(image)}
            />
          ))}
        </div>

        <button className="arrow-button" onClick={handleNext}>
          &gt;
        </button>
      </div>

      {/* Modal with navigation */}
      {isModalOpen && selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            
            <button 
              className="arrow-button" 
              onClick={() => setSelectedImage(certificateImages[(certificateImages.indexOf(selectedImage) - 1 + certificateImages.length) % certificateImages.length])}
            >
              &lt;
            </button>

            <img src={selectedImage} alt="Enlarged Certificate" className="modal-image" />

            <button 
              className="arrow-button" 
              onClick={() => setSelectedImage(certificateImages[(certificateImages.indexOf(selectedImage) + 1) % certificateImages.length])}
            >
              &gt;
            </button>

            <button className="close-button" onClick={closeModal}>X</button>
          </div>
        </div>
      )}
    </div>
  );
};
