"use client";

import { useEffect, useRef } from "react";

export default function BackgroundNoise() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size to fill viewport
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    updateCanvasSize();

    // Generate subtle noise that won't interfere with text
    const generateNoise = () => {
      // Guard against zero dimensions
      if (canvas.width === 0 || canvas.height === 0) return;
      
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        // Generate white noise - decreased amount by adding probability
        if (Math.random() > 0.7) {
          // Only generate noise for 30% of pixels (decreased amount)
          const noise = Math.random() * 500;

          // Apply white noise
          data[i] = noise; // Red
          data[i + 1] = noise; // Green
          data[i + 2] = noise; // Blue
          data[i + 3] = 100; // Alpha (less visible - 38/255 ≈ 15% opacity)
        }
      }

      ctx.putImageData(imageData, 0, 0);
    };

    // Generate initial noise
    generateNoise();

    const interval = setInterval(generateNoise, 100);

    // Handle window resize
    const handleResize = () => {
      updateCanvasSize();
      generateNoise();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(interval);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{
        zIndex: 9999,
        mixBlendMode: "screen", // Screen blend mode makes white pixels appear white
        opacity: 0.2, // Decreased opacity for more subtle effect
      }}
    />
  );
}
