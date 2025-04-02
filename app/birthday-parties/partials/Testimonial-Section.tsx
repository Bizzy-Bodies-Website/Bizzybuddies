"use client";

import { Key, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Testimonial data
// const testimonials = [
//   {
//     id: 1,
//     text: "Bizzy Buddies provided a fantastic fun filled dino themed birthday party for our dinosaur obsessed son. The team took the stress out of organising & nothing was too much, from sourcing the dinosaur props to the choice of venue. They all had a fantastic time, there was a wide range of fun activities & games which all the children loved. The team were amazing with the children, engaging, caring and enthusiastic.",
//     author: "Richard",
//   },
//   {
//     id: 2,
//     text: "We had the superhero party for my son's 6th birthday and it was absolutely amazing! The children were engaged from start to finish with fun games and activities. The party hosts were energetic and professional. Would highly recommend to anyone looking for a stress-free party that the kids will love!",
//     author: "Sarah",
//   },
//   {
//     id: 3,
//     text: "The sports party was a huge hit with my daughter and all her friends. The coaches were brilliant at making sure everyone was included and having fun. They adapted activities to suit different abilities and kept the energy high throughout. Will definitely be booking again next year!",
//     author: "Michael",
//   },
// ]

export default function TestimonialsSection({ data }: any) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? data?.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === data?.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <section className="w-full bg-[#FDEFE0] py-16 md:py-20 mt-16 relative overflow-hidden">
      {/* Background quote marks */}
      <div className="absolute top-1/4 left-1/4 text-[300px] font-serif text-[#f5e8d6] opacity-30 leading-none">
        &ldquo;
      </div>
      <div className="absolute bottom-1/4 right-1/4 text-[300px] font-serif text-[#f5e8d6] opacity-30 leading-none">
        &rdquo;
      </div>

      <div className="container mx-auto px-4 relative">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-center mb-8">
          WHAT OUR CLIENTS SAY
        </h2>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-center mb-8">
          Depending on david team lead sanity implementation as blocker
        </h1>

        <div className="max-w-4xl mx-auto relative">
          {/* Navigation buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center bg-white hover:bg-gray-100 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center bg-white hover:bg-gray-100 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Testimonial */}
          <div className="p-8 md:p-12">
            <p className="text-lg md:text-xl text-gray-800 mb-8">
              {data[currentIndex]?.quote}
            </p>
            <p className="text-[#FF0000] font-medium text-center">
              {data[currentIndex]?.name}
            </p>
          </div>
        </div>

        {/* Pagination dots */}
        {/* <div className="flex justify-center mt-2 space-x-2">
          {data?.map((_: any, index: any) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full ${currentIndex === index ? "bg-gray-700" : "bg-gray-300"}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
}
