import React from "react";
import Image from "next/image";

export const ClientTestimonialsSection = () => {
  // Testimonial data for carousel
  const testimonials = [
    {
      id: 1,
      text: "Bizzy Buddies are absolutely amazing. My son wanted a Batman party and the team from Bizzy Buddies made everything possible for him to have an unforgettable day. Both entertainers dressed up, brought medals for the kids and all the equipment for a brilliant day. Thank you so much again for making Oliver's birthday party a really special and memorable day.",
      author: "Richard",
    },
    // Additional testimonials would be added here
  ];

  return (
    <section className="w-full bg-light-cream bg-opacity-50 py-16">
      <div className="container mx-auto relative">
        <h2 className="font-desktop-title-headline-2 text-[#111111] text-center mb-12">
          WHAT OUR CLIENTS SAY
        </h2>

        <div className="w-full">
          <div className="flex items-center justify-between">
            <button
              // variant="outline"
              // size="icon"
              className="rounded-[20px] border-2 border-solid border-[#111111] rotate-180 h-10 w-10"
            >
              {/* <Image
                className="w-[13px] h-3 rotate-180"
                alt="Previous"
                src=""
                width={13}
                height={3}
              /> */}
            </button>

            <div>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id}>
                  <div className="border-none bg-transparent">
                    <div className="flex flex-col items-center p-6">
                      {/* <Image
                        className="w-[959px] max-w-full h-auto mb-6"
                        alt="Testimonial decoration"
                        src=""
                        width={959}
                        height={200}
                      /> */}
                      <p className="font-desktop-body-testimonial text-[#111111] text-center max-w-[924px] mx-auto">
                        {testimonial.text}
                      </p>
                      <p className="font-medium text-bb-red text-xl text-center mt-6 font-['Poppins',Helvetica]">
                        {testimonial.author}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              // variant="outline"
              // size="icon"
              className="rounded-[20px] border-2 border-solid border-[#111111] h-10 w-10"
            >
              {/* <Image
                className="w-[13px] h-3"
                alt="Next"
                src=""
                width={13}
                height={3}
              /> */}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mt-8">
          <div className="w-2 h-2 bg-grey-5 rounded-full"></div>
          <div className="w-2 h-2 bg-grey-5 rounded-full"></div>
          <div className="w-2 h-2 bg-grey-2 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};
