"use client"
import { travel_packages } from "@/constants/constants"
import { Menu } from "lucide-react";

import Link from "next/link";

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const Safaris = () => {
  const carouselRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  
  // Sample carousel images data
  const carouselImages = [
    {
      src: "/lion.jpg",
      alt: "Lion resting in savanna",
      text: "Discover Nature's Majesty"
    },
    {
      src: "/elephant.jpg",
      alt: "Elephant herd at watering hole",
      text: "Experience Wildlife Up Close"
    },
    {
      src: "/giraffe.jpg",
      alt: "Giraffes against sunset",
      text: "Unforgettable Safari Adventures"
    }
  ];
  
  // Safari parks data
  const safariParks = [
    {
      id: 1,
      name: "Tsavo national park",
      price: "$300",
      image: "/elephant.jpg"
    },
    {
      id: 2,
      name: "Maasai mara game reserve",
      price: "$500",
      image: "/lion.jpg"
    },
    {
      id: 3,
      name: "Aberdare national park",
      price: "$450",
      image: "/waterfall.jpg"
    },
    {
      id: 4,
      name: "Amboseli national park",
      price: "$400",
      image: "/zebras.jpg"
    },
    {
      id: 5,
      name: "Nairobi national park",
      price: "$100",
      image: "/giraffes.jpg"
    },
    {
      id: 6,
      name: "Hells gate national park",
      price: "$450",
      image: "/cyclist.jpg"
    }
  ];

  // Auto scroll functionality for carousel (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current && !isScrolling) {
        carouselRef.current.scrollLeft += 1;
        
        // Reset to beginning when reaching end
        if (carouselRef.current.scrollLeft >= 
            carouselRef.current.scrollWidth - carouselRef.current.clientWidth) {
          carouselRef.current.scrollLeft = 0;
        }
      }
    }, 30);
    
    return () => clearInterval(interval);
  }, [isScrolling]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white p-4 flex items-center justify-between shadow-sm">
        <button className="text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        
        <div className="relative flex-grow max-w-md mx-4">
          <div className="flex items-center bg-gray-100 rounded-md px-3 py-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input type="text" placeholder="Hinted search text" className="bg-transparent border-none focus:outline-none ml-2 w-full" />
          </div>
        </div>
      </header>

      {/* Carousel Section */}
      <div 
        ref={carouselRef}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        onMouseEnter={() => setIsScrolling(true)}
        onMouseLeave={() => setIsScrolling(false)}
      >
        {carouselImages.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-full snap-center relative">
            <div className="relative h-48 md:h-64 w-full">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
              <div 
                className="absolute inset-0 bg-cover bg-center z-0" 
                style={{ backgroundImage: `url(${image.src})` }}
              />
              <div className="absolute bottom-0 left-0 p-6 z-20 text-white">
                <h2 className="text-2xl font-bold">{image.text}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Safari Parks Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {safariParks.map(park => (
          <div key={park.id} className="bg-white rounded shadow overflow-hidden">
            <div className="h-32 overflow-hidden relative">
              <div 
                className="absolute inset-0 bg-cover bg-center" 
                style={{ backgroundImage: `url(${park.image})` }}
              />
            </div>
            <div className="p-3">
              <h3 className="text-sm font-medium text-amber-800">{park.name}</h3>
              <p className="text-sm font-bold">{park.price}</p>
              <p className="text-xs text-gray-500">Body text</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Safaris