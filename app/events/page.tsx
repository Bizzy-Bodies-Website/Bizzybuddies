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

            {/* Services Overview Section */}
            <section className="w-full relative bg-[#F9F9F9] py-16">
              <ServicesOverviewSection />
            </section>

            {/* What We Offer Heading */}
            <section className="w-full flex flex-col items-center gap-4 py-16">
              <h2 className="font-desktop-title-headline-2 text-black text-center text-[72px] leading-[72px] tracking-[-1.44px]">
              MEET THE TEAM 
              <br />
              BEHIND THE MAGIC
              </h2>
              <p className="font-desktop-title-subheading-2 text-grey-2 text-center text-lg leading-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.  <br />
              In viverra metus sit amet neque sodales, at sodales ex pretium
              </p>
            </section>

            {/* Image Gallery Section */}
            <ImageGallerySection />

            {/* Key Features Section */}
            <KeyFeaturesSection />

            {/* Image Display Section */}
            {/* <ImageDisplaySection /> */}

            {/* Highlights Section */}
            {/* <HighlightsSection /> */}

            {/* Main Content Section */}
            {/* <MainContentSection /> */}

            {/* Benefits Overview Section */}
            {/* <BenefitsOverviewSection /> */}

            <section className="w-full p-4">
              {/* First Row - Two Images */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Image
                  className="w-full h-auto sm:h-[300px] md:h-[415px] object-cover rounded-lg"
                  alt="Batman Cosplay"
                  src="/assets/a1.svg"
                  width={500}
                  height={415}
                />
                <Image
                  className="w-full h-auto sm:h-[300px] md:h-[415px] object-cover rounded-lg"
                  alt="Soccer Goal"
                  src="/assets/a4.png"
                  width={500}
                  height={415}
                />
              </div>

              {/* Second Row - Two Images in a Flexbox */}
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
                  src="/assets/a3.svg"                  width={500}
                  height={415}
                />
              </div>
            </section>

            {/* Client Testimonials Section */}
            {/* <ClientTestimonialsSection /> */}

            {/* Contact Us Section */}
            <ContactUsSection />
          </main>
        </div>
      </div>
    </div>
  );
}
