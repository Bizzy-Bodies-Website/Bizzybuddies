import Image from "next/image";
import React from "react";
import { IntroductionSection } from "@/components/about/IntroductionSection";
import { OfferingsSection } from "@/components/about/OfferingsSection/OfferingsSection";
import { ServicesOverviewSection } from "@/components/about/ServicesOverviewSection/ServicesOverviewSection";
import { ImageGallerySection } from "@/components/about/ImageGallerySection";
import { KeyFeaturesSection } from "@/components/about/KeyFeaturesSection";
import { ImageDisplaySection } from "@/components/about/ImageDisplaySection";
import { HighlightsSection } from "@/components/about/HighlightsSection";
import { MainContentSection } from "@/components/about/MainContentSection/MainContentSection";
import { BenefitsOverviewSection } from "@/components/about/BenefitsOverviewSection";
// import { ClientTestimonialsSection } from "@/components/about/ClientTestimonialsSection/ClientTestimonialsSection";
import { ContactUsSection } from "@/components/about/ContactUsSection/ContactUsSection";
import Img from "@/public/assets/Oalh2MojUuk (2).png";
import { GreetingsSection } from "./partials/Greetings";
import FeatureImageSection from "./partials/Feature-Image-Section";
import PartiesOffer from "./partials/Parties-Offer";
import PricingSection from "./partials/Pricing";
import TestimonialsSection from "./partials/Testimonial-Section";
import BookParty from "./partials/BookAParty";
export default function about() {

  return (
    <div>
      <div className="bg-white flex flex-col items-center w-full">
        <div className="bg-white w-full relative">
          {/* Main Content */}
          <main className="w-full">
          
            <section className="relative">
              <div className="h-[680px] w-full relative overflow-hidden">

                <Image src={'https://images.unsplash.com/photo-1606841466847-544b0c481c98?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJpcnRoZGF5JTIwYm95fGVufDB8fDB8fHww'} alt="Birthday Party Hero" className="absolute inset-0 w-full h-full object-cover" width={1440} height={927} />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
                  <h1 className="text-6xl md:text-8xl font-semibold text-center">BIRTHDAY<br />PARTIES</h1>
                  <p className="mt-4 text-xl text-center">Our weekend football coaching sessions</p>
                </div>
              </div>

              {/* Curved Divider */}
              <div className="relative">
                <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 320">
                  <path fill="#FF0000" d="M0,160 Q720,320 1440,160 L1440,320 L0,320Z"></path>
                </svg>
              </div>
            </section>
            {/* Introduction Section */}
            <section
              className="w-full relative bg-[#FF0000] mt-[0px] z-0 py-20"
              style={{
                backgroundImage: "url('/assets/hero2.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <GreetingsSection />
            </section>

            <FeatureImageSection />
            <PartiesOffer />
            <div className="p-8">
              <PricingSection />
            </div>

            <section className="w-full">
              {/* First Row - Two Images */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Image
                  className="w-full h-auto sm:h-[300px] md:h-[415px] object-cover"
                  alt="Batman Cosplay"
                  src="/assets/one.svg"
                  width={500}
                  height={415}
                />
                <Image
                  className="w-full h-auto sm:h-[300px] md:h-[415px] object-cover"
                  alt="Soccer Goal"
                  src="/assets/four.svg"
                  width={500}
                  height={415}
                />
              </div>

              {/* Second Row - Two Images in a Flexbox */}
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Image
                  className="w-full sm:w-1/4 h-auto sm:h-[300px] md:h-[415px] object-cover"
                  alt="Batman and Kid"
                  src="/assets/two.svg"
                  width={500}
                  height={415}
                />
                <Image
                  className="w-full sm:w-3/4 h-auto sm:h-[300px] md:h-[415px] object-cover"
                  alt="Kids in Superhero Masks"
                  src="/assets/three.svg"
                  width={500}
                  height={415}
                />
              </div>
            </section>

            <TestimonialsSection />
            <BookParty />
          </main>
        </div>
      </div>
    </div>
  );
}
