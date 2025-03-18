import Image from "next/image";
import React from "react";
import { IntroductionSection } from "@/components/sections/IntroductionSection";
import { OfferingsSection } from "@/components/sections/OfferingsSection/OfferingsSection";
import { ServicesOverviewSection } from "@/components/sections/ServicesOverviewSection/ServicesOverviewSection";
import { ImageGallerySection } from "@/components/sections/ImageGallerySection";
import { KeyFeaturesSection } from "@/components/sections/KeyFeaturesSection";
import { ImageDisplaySection } from "@/components/sections/ImageDisplaySection";
import { HighlightsSection } from "@/components/sections/HighlightsSection";
import { MainContentSection } from "@/components/sections/MainContentSection/MainContentSection";
import { BenefitsOverviewSection } from "@/components/sections/BenefitsOverviewSection";
import { ClientTestimonialsSection } from "@/components/sections/ClientTestimonialsSection/ClientTestimonialsSection";
import { ContactUsSection } from "@/components/sections/ContactUsSection/ContactUsSection";
import { FeaturedProductSection } from "@/components/sections/FeaturedProductSection/FeaturedProductSection";

// interface NavItem {
//   label: string;
//   href: string;
// }

export default function Home() {
  // Navigation items data
  // const navItems: NavItem[] = [
  //   { label: "Camps", href: "#" },
  //   { label: "Birthday Parties", href: "#" },
  //   { label: "Saturday Sessions", href: "#" },
  //   { label: "Events", href: "#" },
  //   { label: "About Us", href: "#" },
  // ];

  return (
    <div>
      <div className="bg-white flex flex-col items-center w-full">
        <div className="bg-white w-full relative">
          {/* Main Content */}
          <main className="w-full">
            {/* Offerings Section */}
            <section
              className="w-full relative h-[50v]"
              style={{
                backgroundImage: "url('/assets/hero1.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundColor: "#FF0000",
                // backgroundAttachment: "fixed",
              }}
            >
              <OfferingsSection />
            </section>

            {/* Introduction Section */}
            <section
              className="w-full relative h-[80vh] bg-[#FF0000]"
              style={{
                backgroundImage: "url('/assets/hero2.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                // backgroundAttachment: "fixed",
              }}
            >
              <IntroductionSection />
            </section>

            {/* Services Overview Section */}
            <section className="w-full relative bg-grey-5 bg-opacity-15 py-16">
              {/* <Image
                className="w-[200px] h-[141px] mx-auto mb-8"
                alt="Icon"
                src=""
                width={200}
                height={141}
              /> */}
              <ServicesOverviewSection />
            </section>

            {/* What We Offer Heading */}
            <section className="w-full flex flex-col items-center gap-4 py-16">
              <h2 className="font-desktop-title-headline-2 text-black text-center text-[72px] leading-[72px] tracking-[-1.44px]">
                WHAT WE OFFER
              </h2>
              <p className="font-desktop-title-subheading-2 text-grey-2 text-center text-lg leading-8">
                We offer a range of services within Bizzy Buddies. <br />
                There is something for everyone!
              </p>
            </section>

            {/* Image Gallery Section */}
            <ImageGallerySection />

            {/* Key Features Section */}
            <KeyFeaturesSection />

            {/* Image Display Section */}
            <ImageDisplaySection />

            {/* Highlights Section */}
            <HighlightsSection />

            {/* Main Content Section */}
            <MainContentSection />

            {/* Benefits Overview Section */}
            <BenefitsOverviewSection />

            {/* Image Gallery */}
            <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-0">
              {/* <Image
                className="w-full h-[415px] object-cover"
                alt="Kitchen"
                src=""
                width={500}
                height={500}
              /> */}
              {/* <Image
                className="w-full h-[415px] object-cover"
                alt="Photo"
                src=""
                width={500}
                height={500}
              /> */}
              {/* <Image
                className="w-full h-[505px] object-cover md:col-span-1"
                alt="Photo"
                src=""
                width={500}
                height={500}
              /> */}
              {/* <Image
                className="w-full h-[505px] md:col-span-1"
                alt="Mask group"
                src=""
                width={500}
                height={500}
              /> */}
            </section>

            {/* Client Testimonials Section */}
            <ClientTestimonialsSection />

            {/* Contact Us Section */}
            <ContactUsSection />

            {/* Featured Product Section */}
            <FeaturedProductSection />
          </main>
        </div>
      </div>
    </div>
  );
}
