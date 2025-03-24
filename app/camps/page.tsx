import Image from "next/image";
import React from "react";
import { IntroductionSection } from "@/components/camps/IntroductionSection";
import { OfferingsSection } from "@/components/camps/OfferingsSection/OfferingsSection";
import { ServicesOverviewSection } from "@/components/camps/ServicesOverviewSection/ServicesOverviewSection";
import { ImageGallerySection } from "@/components/camps/ImageGallerySection";
import { KeyFeaturesSection } from "@/components/camps/KeyFeaturesSection";
import { ImageDisplaySection } from "@/components/camps/ImageDisplaySection";
import { HighlightsSection } from "@/components/camps/HighlightsSection";
import { MainContentSection } from "@/components/camps/MainContentSection/MainContentSection";
import { BenefitsOverviewSection } from "@/components/camps/BenefitsOverviewSection";
// import { ClientTestimonialsSection } from "@/components/camps/ClientTestimonialsSection/ClientTestimonialsSection";
import { ContactUsSection } from "@/components/camps/ContactUsSection/ContactUsSection";

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
                backgroundImage: "url('/assets/about1.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundColor: "#FF0000",
              }}
            >
              <OfferingsSection />
            </section>

            {/* Introduction Section */}
            <section
              className="w-full relative bg-[#FF0000] mt-[-30px] z-0 py-[50px]"
              style={{
                backgroundImage: "url('/assets/hero2.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <IntroductionSection />
            </section>

            {/* What We Offer Heading */}
            <section className="w-full flex flex-col items-center gap-4 pt-16 pb-6">
              <h2 className="font-desktop-title-headline-2 text-black text-center text-[72px] leading-[72px] tracking-[-1.44px]">
                Come & join IN the fun!
              </h2>
              <p className="font-desktop-title-subheading-2 text-[#636362] text-center text-lg leading-8">
                We offer full week, full day and half day options starting from
                £25.{" "}
              </p>
            </section>

            <section className="w-full p-4">
              {/* Second Row - Two Images in a Flexbox */}
              <div className="flex flex-col sm:flex-row gap-4 mt-">
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

            <section className="w-full flex flex-col items-center gap-4 pt-16 pb-6">
              <h2 className="font-desktop-title-headline-2 text-black text-center text-[72px] leading-[72px] tracking-[-1.44px]">
                OUR CAMPS
              </h2>
              <p className="font-desktop-title-subheading-2 text-[#636362] text-center text-lg leading-8 w-full md:w-[50%]">
                The kids won't get bored with us, playing various sports such as
                football, tennis, dodgeball, tag rugby& more! With lots of
                throwing, running, catching and jumping, we provide a fun-filled
                day of sporting activities.
              </p>
            </section>

            {/* Image Gallery Section */}
            <ImageGallerySection />

            {/* Key Features Section */}
            <KeyFeaturesSection />

            {/* What We Offer Heading */}
            <section className="w-full flex flex-col items-center gap-4 pt-16 pb-6">
              <h2 className="font-desktop-title-headline-2 text-black text-center text-[72px] leading-[72px] tracking-[-1.44px]">
                WHAT YOU NEED TO KNOW
              </h2>
              <p className="font-desktop-title-subheading-2 text-[#636362] text-center text-lg leading-8">
                Everything you need to know for your first visit.
              </p>
            </section>

            {/* BenefitsOverviewSection */}
            <BenefitsOverviewSection />

            {/* Contact Us Section */}
            <ContactUsSection />
          </main>
        </div>
      </div>
    </div>
  );
}
