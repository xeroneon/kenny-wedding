import React from "react";
import { FloatingImage } from "./floating-image";
import sunflower from "../assets/sunflower.webp";

const images = [sunflower];

export const Background: React.FC = () => {
  return (
    <div className="fixed bg-gradient-to-r from-blue-500 to-blue-800 -z-10 overflow-hidden w-screen h-screen">
      {[...Array(500)].map((_, index) => (
        <FloatingImage
          key={index}
          src={images[index % images.length]}
          alt={`Floating image ${index + 1}`}
          size={((index % 3) + 1) * 32} // Sizes: 32, 64, 96
        />
      ))}
    </div>
  );
};
