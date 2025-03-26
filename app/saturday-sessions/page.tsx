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
import { SaturdayIntro } from "./partials/SaturdayIntro";
import CardItem from "../birthday-parties/partials/CardItem";
import SessionSchedule from "./partials/session-schedule";
import BookParty from "../birthday-parties/partials/BookAParty";
import FaqSection from "./partials/FAQ";
import ContactSection from "./partials/Contact-Form";

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
                  <h2 className="text-4xl md:text-6xl font-semibold text-center text-uppercase ">Saturday Multisport Sessions</h2>
                  <p className="mt-4 text-xl text-center">At Westminster Sports Ground</p>
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
              className="w-full relative bg-[#FF0000] mt-[-30px] z-0 py-[50px]"
              style={{
                backgroundImage: "url('/assets/hero2.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <SaturdayIntro />
            </section>

            <CardItem
              imageSrc="/assets/Oalh2MojUuk (5).png"
              altText="SATURDAY SESSIONS AT WESTMINSTER SPORTS GROUND"
              subtitle="SATURDAY SESSIONS"
              title="SATURDAY SESSIONS AT WESTMINSTER SPORTS GROUND"
              description="On Saturday morning we run multisport programme for girls and boys aged between 18months – 8 years Including - football, tennis, tag-rugby, dodgeball and more..."
              bgColor="#FFFFFF"

            />

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

            <SessionSchedule />

            <BookParty
              title="BOOK A TASTER SESSION TODAY!"
              description="Come and try out our sessions to see if they are right for you. Contact us today to book your free session!"
            />

            <div className="bg-[#D8D8D8] flex flex-col md:flex-row justify-center items-center gap-20 py-20">
              <div className="text-center md:text-left">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">OUR DISCOUNTS</h2>
              </div>
              <div className="space-y-6 text-center md:text-left">
                <p className="text-gray-700">- 10% sibling discount</p>
                <p className="text-gray-700">- 20% discount applied when making a full-term booking</p>
                <p className="text-gray-700">- FREE trial sessions available for first-time customers</p>

                <h3 className="text-2xl font-bold mt-10 mb-6">SPEAK TO OUR TEAM FOR MORE INFORMATION</h3>

                <div>
                  <a
                    href="#contact"
                    className="inline-block font-semibold bg-black text-white py-3 px-8 rounded-full text-center"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>

            <FaqSection />

            <ContactSection />
          </main>
        </div>
      </div>
    </div>
  );
}
