import type React from "react";

interface FloatingImageProps {
  src: string;
  alt: string;
  size: number;
}

export const FloatingImage: React.FC<FloatingImageProps> = ({
  src,
  alt,
  size,
}) => {
  const animationDuration = Math.random() * 10 + 20; // Random duration between 20-30s
  const initialX = Math.random() * 100; // Random initial X position
  const initialY = Math.random() * 100; // Random initial Y position

  return (
    <div
      className="absolute"
      style={{
        animation: `float ${animationDuration}s infinite ease-in-out`,
        left: `${initialX}%`,
        top: `${initialY}%`,
      }}
    >
      <img
        src={src || "/placeholder.svg"}
        alt={alt}
        width={size}
        height={size}
        style={{ width: `${size}px`, height: `${size}px` }}
      />
    </div>
  );
};
