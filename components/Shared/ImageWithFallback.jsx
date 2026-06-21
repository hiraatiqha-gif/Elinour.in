"use client";

import Image from "next/image";
import { useState } from "react";

export default function ImageWithFallback({ src, alt = "", className = "", fill = false, style = {} }) {
  const placeholder = "/placeholder-product.svg";
  const [currentSrc, setCurrentSrc] = useState(src || placeholder);

  return (
    <Image
      src={currentSrc}
      alt={alt}
      fill={fill}
      className={className}
      style={style}
      onError={() => setCurrentSrc(placeholder)}
    />
  );
}
