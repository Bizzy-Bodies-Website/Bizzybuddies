import Image from "next/image";
import React from "react";
import { IntroductionSection } from "@/components/events/IntroductionSection";
import { OfferingsSection } from "@/components/events/OfferingsSection/OfferingsSection";
import { ServicesOverviewSection } from "@/components/events/ServicesOverviewSection/ServicesOverviewSection";
import { ImageGallerySection } from "@/components/events/ImageGallerySection";
import { KeyFeaturesSection } from "@/components/events/KeyFeaturesSection";
import { ImageDisplaySection } from "@/components/events/ImageDisplaySection";
import { HighlightsSection } from "@/components/events/HighlightsSection";
import { MainContentSection } from "@/components/events/MainContentSection/MainContentSection";
import { BenefitsOverviewSection } from "@/components/events/BenefitsOverviewSection";
// import { ClientTestimonialsSection } from "@/components/events/ClientTestimonialsSection/ClientTestimonialsSection";
import { ContactUsSection } from "@/components/events/ContactUsSection/ContactUsSection";

export default function about() {
  return (
    <div>
      <div className="bg-white flex flex-col items-center w-full">
        <div className="bg-white w-full relative">
          {/* Main Content */}
          <main className="w-full">
            {/* Offerings Section */}
            <section
              className="w-full relative z-10"
              style={{
                backgroundImage: "url('/assets/Eventd.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <OfferingsSection />
            </section>

            {/* What We Offer Heading */}
            <section className="w-full flex flex-col items-center gap-4 py-16">
              <h2 className="font-desktop-title-headline-2 text-black text-center text-[72px] leading-[72px] tracking-[-1.44px]">
                PREPARE FOR THE SPOOKIEST
                <br />
                CAMP EVER!
              </h2>
              <p className="font-desktop-title-subheading-2 text-[#636362] text-center text-lg leading-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                In viverra metus sit amet neque sodales, at sodales ex pretium
              </p>
            </section>

            {/* Image Gallery Section */}
            <ImageGallerySection />

            <section className="w-full p-4">
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Image
                  className="w-full sm:w-1/4 h-auto sm:h-[300px] md:h-[415px] object-cover rounded-lg"
                  alt="Batman and Kid"
                  src="/assets/a2.svg"
                  width={500}
                  height={415}
                />
                <Image
                  className="w-full sm:w-3/4 h-auto sm:h-[300px] md:h-[415px] object-cover rounded-lg"
                  alt="Kids in Superhero Masks"
                  src="/assets/a3.svg"
                  width={500}
                  height={415}
                />
              </div>
            </section>

            {/* Contact Us Section */}
            <ContactUsSection />
          </main>
        </div>
      </div>
    </div>
  );
}
