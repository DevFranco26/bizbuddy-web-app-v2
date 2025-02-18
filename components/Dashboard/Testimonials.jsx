// biz-web-app/components/Dashboard/Testimonials.jsx

"use client";

import { useState, useRef, useEffect } from "react";
import { testimonials } from "@/lib/data";
import { Star } from "lucide-react";

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const [swipeDistance, setSwipeDistance] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
    setIsSwiping(true);
  };

  const handleTouchMove = (e) => {
    if (!isSwiping) return;
    const currentX = e.touches[0].clientX;
    const distance = currentX - startX;
    setSwipeDistance(distance);
  };

  const handleTouchEnd = () => {
    setIsSwiping(false);
    if (Math.abs(swipeDistance) > 50) {
      if (swipeDistance > 0) {
        setCurrentIndex(
          (prevIndex) =>
            (prevIndex - 1 + testimonials.length) % testimonials.length
        );
      } else {
        goToNext();
      }
    }
    setSwipeDistance(0);
  };

  const handleMouseDown = (e) => {
    setStartX(e.clientX);
    setIsSwiping(true);
  };

  const handleMouseMove = (e) => {
    if (!isSwiping) return;
    const currentX = e.clientX;
    const distance = currentX - startX;
    setSwipeDistance(distance);
  };

  const handleMouseUp = () => {
    handleTouchEnd();
  };

  const handleMouseLeave = () => {
    if (isSwiping) {
      handleTouchEnd();
    }
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto bg-gradient-to-b from-white dark:from-black via-orange-400 dark:via-orange-400 to-red-600 dark:to-red-600 min-h-[400px] sm:min-h-[450px] md:min-h-[500px] py-8 sm:py-12 md:py-16">
      <h2 className="text-center border-b border-gray-400 pb-2 max-w-7xl mx-auto text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6 sm:mb-8 md:mb-10">
        Testimonials
      </h2>
      <div
        className="max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto relative overflow-hidden"
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="flex transition-transform duration-300 ease-out cursor-grab active:cursor-grabbing"
          style={{
            transform: `translateX(calc(-${
              currentIndex * 100
            }% + ${swipeDistance}px))`,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 px-2 sm:px-4 text-gray-950"
            >
              <div className="rounded-lg p-4 sm:p-6 md:p-8 transition-all duration-300">
                <div className="flex justify-center mb-3 sm:mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-orange-500 fill-current"
                    />
                  ))}
                </div>
                <p className="mb-4 sm:mb-6 text-center text-sm sm:text-base md:text-lg">
                  {testimonial.testimonial}
                </p>
                <div className="text-center">
                  <p className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl">
                    {testimonial.name}
                  </p>
                  <p className="text-xs sm:text-sm md:text-base">
                    {testimonial.occupation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4 sm:mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 mx-1 rounded-full transition-colors duration-300 ${
              index === currentIndex ? "bg-orange-600" : "bg-orange-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
