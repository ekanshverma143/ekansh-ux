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
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + certificateImages.length) % certificateImages.length
    );
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="certi-container">
      <h2 className="certi-heading">Certificates</h2>
      <p className="certi-description">Ive achived many certificates during my college as was part of various teams, worked as designer , managed people, organised events.Click on certificate to view!</p>

      <div className="certi-carousel">
      <button className="arrow-button" onClick={handlePrevious}>
  <svg className="arcade-icon" viewBox="0 0 24 24" fill="none">
    <path d="M15 6L9 12L15 18" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
</button>

        <div className="certi-images">
          <img
            src={certificateImages[currentIndex]}
            alt={`Certificate ${currentIndex + 1}`}
            className="certi-image"
            onClick={() => openModal(certificateImages[currentIndex])}
          />
        </div>

       
<button className="arrow-button" onClick={handleNext}>
  <svg className="arcade-icon" viewBox="0 0 24 24" fill="none">
    <path d="M9 6L15 12L9 18" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
</button>
      </div>

      {/* Modal Popup */}
      {isModalOpen && selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="arrow-button"
              onClick={() =>
                setSelectedImage(
                  certificateImages[
                    (certificateImages.indexOf(selectedImage) - 1 + certificateImages.length) %
                      certificateImages.length
                  ]
                )
              }
            >
             <svg className="arcade-icon" viewBox="0 0 24 24" fill="none">
    <path d="M15 6L9 12L15 18" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
            </button>

            <img
              src={selectedImage}
              alt="Certificate Zoom"
              className="modal-image"
            />

            <button
              className="arrow-button"
              onClick={() =>
                setSelectedImage(
                  certificateImages[
                    (certificateImages.indexOf(selectedImage) + 1) %
                      certificateImages.length
                  ]
                )
              }
            >
              <svg className="arcade-icon" viewBox="0 0 24 24" fill="none">
    <path d="M9 6L15 12L9 18" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
            </button>

            <button className="close-button" onClick={closeModal}>
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
