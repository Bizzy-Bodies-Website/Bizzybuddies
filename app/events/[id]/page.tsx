// import Image from "next/image";
// import React from "react";
// import { IntroductionSection } from "@/components/events/IntroductionSection";
// import { OfferingsSection } from "@/components/events/OfferingsSection/OfferingsSection";
// import { ServicesOverviewSection } from "@/components/events/ServicesOverviewSection/ServicesOverviewSection";
// import { ImageGallerySection } from "@/components/events/ImageGallerySection";
// import { KeyFeaturesSection } from "@/components/events/KeyFeaturesSection";
// import { ImageDisplaySection } from "@/components/events/ImageDisplaySection";
// import { HighlightsSection } from "@/components/events/HighlightsSection";
// import { MainContentSection } from "@/components/events/MainContentSection/MainContentSection";
// import { BenefitsOverviewSection } from "@/components/events/BenefitsOverviewSection";
// // import { ClientTestimonialsSection } from "@/components/events/ClientTestimonialsSection/ClientTestimonialsSection";
// import { ContactUsSection } from "@/components/events/ContactUsSection/ContactUsSection";

// export default function about() {
//   return (
//     <div>
//       <div className="bg-white flex flex-col items-center w-full">
//         <div className="bg-white w-full relative">
//           {/* Main Content */}
//           <main className="w-full">
//             {/* Offerings Section */}
//             <section
//               className="w-full relative z-10"
//               style={{
//                 backgroundImage: "url('/assets/Eventd.svg')",
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 backgroundRepeat: "no-repeat",
//               }}
//             >
//               <OfferingsSection />
//             </section>

//             {/* What We Offer Heading */}
//             <section className="w-full flex flex-col items-center gap-4 py-16">
//               <h2 className="font-desktop-title-headline-2 text-[#111111] text-center text-[72px] leading-[72px] tracking-[-1.44px]">
//                 PREPARE FOR THE SPOOKIEST
//                 <br />
//                 CAMP EVER!
//               </h2>
//               <p className="font-desktop-title-subheading-2 text-[#636362] text-center text-lg leading-8">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
//                 In viverra metus sit amet neque sodales, at sodales ex pretium
//               </p>
//             </section>

//             {/* Image Gallery Section */}
//             <ImageGallerySection />

//             <section className="w-full p-4">
//               <div className="flex flex-col sm:flex-row gap-4 mt-4">
//                 <Image
//                   className="w-full sm:w-1/4 h-auto sm:h-[300px] md:h-[415px] object-cover rounded-lg"
//                   alt="Batman and Kid"
//                   src="/assets/a2.svg"
//                   width={500}
//                   height={415}
//                 />
//                 <Image
//                   className="w-full sm:w-3/4 h-auto sm:h-[300px] md:h-[415px] object-cover rounded-lg"
//                   alt="Kids in Superhero Masks"
//                   src="/assets/a3.svg"
//                   width={500}
//                   height={415}
//                 />
//               </div>
//             </section>

//             {/* Contact Us Section */}
//             <ContactUsSection />
//           </main>
//         </div>
//       </div>
//     </div>
//   );
// }


import Image from "next/image"
import { Info } from "lucide-react"
import JoinUsSection from "../partials/JoinUs"

export default function HalloweenSpectacularPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section with Curved Bottom */}
      <div className="relative w-full h-[600px] overflow-hidden">
        <Image
          src="/assets/one.svg"
          alt="Halloween pumpkin with autumn leaves"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <span className="text-sm md:text-base uppercase tracking-wider mb-2">NEW EVENT</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-2">
            HALLOWEEN
            <br />
            SPECTACULAR
          </h1>
          <p className="text-xl">October 30th 2021</p>
        </div>
        {/* <div className="absolute -top-12 left-0 right-0 h-24 bg-white rounded-t-full"></div> */}

      </div>
      <div className="relative">
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 300">
          <path fill="#FFFFFF" d="M0,160 Q720,320 1440,160 L1440,320 L0,320Z"></path>
        </svg>
      </div>
      {/* Logo/Icon */}


      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            PREPARE FOR THE SPOOKIEST
            <br />
            CAMP EVER!
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra metus sit amet neque sodales, at sodales
            ex pretium
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Description */}
          <div className="md:col-span-2 space-y-6">
            <h3 className="text-2xl font-semibold">
              Join us on the spookiest night of the year. An evening full of spooks and sporting activities
            </h3>

            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra metus sit amet neque sodales, at
              sodales ex pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra metus sit amet
              neque sodales, at sodales ex pretium.
            </p>

            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra metus sit amet neque sodales, at
              sodales ex pretium.
            </p>

            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra metus sit amet neque sodales, at
              sodales ex pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra metus sit amet
              neque sodales, at sodales ex pretium.
            </p>

            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra metus sit amet neque sodales, at
              sodales ex pretium.
            </p>

            {/* Image Gallery Preview */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="h-48 bg-gray-200 rounded-md"></div>
              <div className="h-48 bg-gray-200 rounded-md"></div>
            </div>
          </div>

          {/* Event Details Sidebar */}
          <div className="bg-gray-50 p-6 rounded-lg h-fit">
            <h3 className="text-xl font-semibold mb-4">Event Details</h3>

            <div className="space-y-4">
              <div>
                <p className="font-medium">Event Date:</p>
                <p>Tuesday 27th July 2021</p>
              </div>

              <div>
                <p className="font-medium">Event Start:</p>
                <p>15:00</p>
              </div>

              <div>
                <p className="font-medium">Type of Event:</p>
                <p>Evening event</p>
              </div>

              <div>
                <p className="font-medium">Tickets:</p>
                <p>Contact to reserve a space</p>
              </div>

              <div>
                <p className="font-medium">Ages:</p>
                <p>3 & above</p>
              </div>
            </div>

            <button className="w-full bg-black text-white py-3 px-6 rounded-full mt-6 hover:bg-gray-800 transition-colors">
              Contact Us To Book
            </button>
          </div>
        </div>
      </div>
      <JoinUsSection/>
    </main>
  )
}


