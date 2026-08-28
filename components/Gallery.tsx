"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "./ui/button";

export interface GalleryItem {
  image: string;
  title: string | null;
  buttonText: string | null;
}

interface GalleryProps {
  data: GalleryItem[];
}

export default function Gallery({ data }: GalleryProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % data.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [data.length]);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="overflow-hidden relative w-full bg-card text-card-foreground">
      <div
        className="flex transition-transform duration-700 ease-in-out py-8"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:px-14 px-5 min-w-full "
          >
            <div className="flex flex-col gap-4">
              <h2 className="md:w-92 w-full md:text-3xl text-xl font-semibold">
                {item.title}
              </h2>
              <Button>{item.buttonText}</Button>
            </div>
            <div className="flex items-center justify-center">
              <Image
                className="md:w-72 w-48 lg:w-96"
                width={300}
                height={300}
                src={item.image}
                alt={`Slide ${index + 1}`}
                loading="eager"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center py-4 gap-1">
        {data.map((_, index) => (
          <div
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`h-2 w-2 rounded-full cursor-pointer ${
              currentSlide === index ? "bg-foreground" : "bg-foreground/25"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
