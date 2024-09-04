"use client";
import React, { useState, useEffect, ReactNode, Children, isValidElement } from 'react';
import { ChevronLeft, ChevronRight } from "react-feather";

interface CarouselProps {
  children: ReactNode;
  autoSlide?: boolean;
  autoSlideInterval?: number;
}

export default function Carousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}: CarouselProps) {
  const validSlides = Children.toArray(slides).filter(isValidElement);
  const [curr, setCurr] = useState(0);

  useEffect(() => {
    if (!autoSlide) return;

    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, curr]);

  const prev = () => {
    setCurr((curr) => (curr === 0 ? validSlides.length - 1 : curr - 1));
  };

  const next = () => {
    setCurr((curr) => (curr === validSlides.length - 1 ? 0 : curr + 1));
  };

  if (validSlides.length === 0) {
    return null;
  }

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {validSlides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-6">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronRight size={40} />
        </button>
      </div>
    </div>
  );
}
