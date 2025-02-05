import React, { useState } from "react";


const certificateImages = [
    require("../assets/img/certi1.jpeg"),
     require("../assets/img/certi2.jpeg"),
     require("../assets/img/certi3.jpeg"),
    // require('./assets/cert4.jpg'),
    // require('./assets/cert5.jpg'),
  ];
export const Certi = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleNext = () => {
    if (currentIndex < certificateImages.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
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
        <button className="arrow-button" onClick={handlePrevious} disabled={currentIndex === 0}>
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
        <button className="arrow-button" onClick={handleNext} disabled={currentIndex >= certificateImages.length - 3}>
          &gt;
        </button>
      </div>

      {/* Modal for enlarged image */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Enlarged Certificate" className="modal-image" />
            <button className="close-button" onClick={closeModal}>X</button>
          </div>
        </div>
      )}
    </div>
  );
};
