"use client";

import { useState } from "react";
import styles from "./product.module.css";
import ImageWithFallback from "@/components/Shared/ImageWithFallback";

export default function ProductGallery({ images = [], productName }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const placeholder = "/placeholder-product.svg";
  const mainSrc = images && images.length > 0 ? images[selectedImage] : placeholder;

  return (
    <div className={styles.gallery}>
      <div className={styles.mainImageWrapper}>
        <div className={styles.mainImagePlaceholder}>
          <ImageWithFallback
            src={mainSrc}
            alt={productName}
            fill
            className={styles.mainImage}
            priority
          />
        </div>
      </div>

      {images && images.length > 1 && (
        <div className={styles.thumbnails}>
          {images.map((image, index) => (
            <button
              key={index}
              className={`${styles.thumbnail} ${
                selectedImage === index ? styles.active : ""
              }`}
              onClick={() => setSelectedImage(index)}
              aria-label={`Show image ${index + 1}`}
            >
              <ImageWithFallback
                src={image}
                alt={`${productName} - Image ${index + 1}`}
                fill
                className={styles.thumbnailImage}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
