// import React from "react";

// const BookParty = () => {
//   return (
//     <section className="relative flex flex-col items-center justify-center text-center px-6 py-30 bg-red-500 bg-[url('/assets/bg1.svg')] ">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 bg-[url('/path-to-pattern.png')] bg-cover bg-center opacity-30"></div>

//       {/* Content */}
//       <div className="relative z-10 max-w-3xl text-center">
//         <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight">
//           Book a Party Today!
//         </h2>
//         <p className="text-white text-lg mt-4 text-center">
//           To enquire about booking a birthday party with us or if you require
//           more information, please click below.
//         </p>

//         <button className="mt-6 px-16 py-3 text-[#FF0000] bg-white font-bold text-lg rounded-full shadow-lg transition duration-300 hover:bg-gray-100">
//           Contact Us
//         </button>
//       </div>
//     </section>
//   );
// };

// export default BookParty;

import React from "react";

const BookParty = ({
  data
}: any) => {
 
  const dataArr = {
    // title: "Book a Party Today!",
    // description: "To enquire about booking a birthday party with us or if you require more information, please click below.",
    // buttonText: "Contact Us",
    // buttonLink: "#",
    backgroundImage: "/assets/bg1.svg",
    overlayPattern: "/path-to-pattern.png",
  }
  return (
    <section
      className="relative flex flex-col items-center justify-center text-center px-6 py-30 bg-red-500 bg-cover bg-center"
      style={{ backgroundImage: `url(${dataArr?.backgroundImage})` }}
    >
      {/* Background Pattern */}
      {dataArr?.overlayPattern && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${dataArr?.overlayPattern})` }}
        ></div>
      )}

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-center">
        <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight">
          {data?.title}
        </h2>
        <p className="text-white text-lg mt-4 text-center">{data?.description}</p>

        <button
          // href={buttonLink} 
          className="mt-6 inline-block px-16 py-3 text-[#FF0000] bg-white font-bold text-lg rounded-full shadow-lg transition duration-300 hover:bg-gray-100"
        >
          {data?.buttonText}
        </button>
      </div>
    </section>
  );
};

export default BookParty;
