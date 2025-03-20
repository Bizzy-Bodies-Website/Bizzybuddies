import React from "react";

export const ImageGallerySection = () => {
  return (
    <div className=" bg-white">
      <section className="w-full relative py-16">
        <div className="container mx-auto flex flex-col lg:flex-row px-4 sm:px-6 lg:px-8">
          {/* Left section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="max-w-xl">
              <h2 className="text-3xl font-semibold mb-8">
                Join us on the spookiest night of the year. An evening full of
                spooks and sporting activities
              </h2>
              <div className="space-y-6 text-gray-600">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  viverra metus sit amet neque sodales, at sodales ex pretium.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  viverra metus sit amet neque sodales, at sodales ex pretium.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  viverra metus sit amet neque sodales, at sodales ex pretium.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  viverra metus sit amet neque sodales, at sodales ex pretium.
                </p>
              </div>
            </div>
          </div>

          {/* Right section */}
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
            <div className="bg-[#F7F7F7] p-8 rounded-lg max-w-md mx-auto">
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Event Date:</span>
                    <span className="font-medium">Tuesday 27th July 2021</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Event Start:</span>
                    <span className="font-medium">15:00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Type of Event:</span>
                    <span className="font-medium">Evening event</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tickets:</span>
                    <span className="font-medium">
                      Contact to reserve a space
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Ages:</span>
                    <span className="font-medium">3 & above</span>
                  </div>
                </div>

                <button className="w-full bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 transition-colors">
                  Contact to book
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
