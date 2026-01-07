/* eslint-disable no-useless-escape */
import { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: '/images/banner/banner-talenthub.webp',
      title: 'LEARNING EXCELLENCE',
      subtitle: 'Transform Your Knowledge',
      description: 'Elite Learning Academy provides comprehensive educational programs, connecting passionate learners with expert instructors to foster growth and success.',
      buttonText: 'ENROLL NOW'
    },
    {
      image: '/images/banner/slider2.webp',
      title: 'CAREER ADVANCEMENT',
      subtitle: 'Master New Skills',
      description: 'Our courses are designed to help you advance your career with practical, industry-relevant knowledge and skills.',
      buttonText: 'START LEARNING'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const getTextDelay = (index) => {
    return index * 0.1;
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-indigo-800/70 to-emerald-700/80"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4 max-w-4xl mx-auto">
            <div className="w-full">
              <h1 
                className="text-5xl md:text-7xl font-bold mb-6 slide-in-left"
                style={{ animationDelay: `${getTextDelay(0)}s` }}
              >
                {slide.title}
              </h1>
              <h2 
                className="text-2xl md:text-4xl font-semibold mb-6 slide-in-left" 
                style={{ animationDelay: `${getTextDelay(1)}s` }}
              >
                {slide.subtitle}
              </h2>
              <p 
                className="text-lg md:text-xl mb-8 max-w-2xl mx-auto slide-in-left" 
                style={{ animationDelay: `${getTextDelay(2)}s` }}
              >
                {slide.description}
              </p>
              <button 
                className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 slide-in-left flex items-center mx-auto hover-lift"
                style={{ animationDelay: `${getTextDelay(3)}s` }}
              >
                {slide.buttonText} <ArrowRight className="ml-2" size={20} />
              </button>
              
             
            </div>
          </div>
        </div>
      ))}
      
      {/* Navigation arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-opacity-30 transition-all duration-300 hover-lift"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-opacity-30 transition-all duration-300 hover-lift"
      >
        <ChevronRight size={24} />
      </button>
      
      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            } hover-lift`}
          />
        ))}
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white opacity-70 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;