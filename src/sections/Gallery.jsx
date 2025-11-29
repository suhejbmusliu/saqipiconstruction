// src/sections/Gallery.jsx
import { useState, useEffect } from "react";
import { galleryImages } from "../data/content";
import "../styles/sections/gallery.css"

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(null); // null = no modal open

  const openModal = (index) => {
    setActiveIndex(index);
  };

  const closeModal = () => {
    setActiveIndex(null);
  };

  // Allow closing with ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    if (activeIndex !== null) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex]);

  // To make infinite loop, we duplicate the list
  const scrollingList = [...galleryImages, ...galleryImages];

  return (
    <section className="gallery">
      <div className="container">
        <h2 className="gallery__title">NDËRTIMET TONA</h2>
      </div>

      <div className="gallery__viewport">
        <div className="gallery__track">
          {scrollingList.map((image, index) => (
            <button
              key={`${image.id}-${index}`}
              className="gallery__item"
              onClick={() => openModal(index % galleryImages.length)}
              type="button"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="gallery__img"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Modal / Lightbox */}
      {activeIndex !== null && (
        <div className="gallery-modal" onClick={closeModal}>
          <div
            className="gallery-modal__content"
            onClick={(e) => e.stopPropagation()} // don't close when clicking the image
          >
            <button
              className="gallery-modal__close"
              onClick={closeModal}
              type="button"
              aria-label="Mbyll imazhin"
            >
              ✕
            </button>
            <img
              src={galleryImages[activeIndex].src}
              alt={galleryImages[activeIndex].alt}
              className="gallery-modal__img"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
