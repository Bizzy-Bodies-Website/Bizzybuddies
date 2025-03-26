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
import { EventIntro } from "./partials/EventIntro";
import EventsSection from "./partials/EventSection";
import ContactSection from "../saturday-sessions/partials/Contact-Form";
import OurEvent from "./partials/OurEvent";
import PastEventDetail from "./partials/PastEvents";

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
                  <h2 className="text-4xl md:text-6xl font-semibold text-center text-uppercase ">BIZZY BUDDIES EVENTS</h2>
                  <p className="mt-4 text-xl text-center max-w-2xl">Explore our various camps and events we put on throughout the year</p>
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
              <EventIntro />
            </section>
            <OurEvent />
            
            <EventsSection />
            <ContactSection />

          </main>
        </div>
      </div>
    </div>
  );
}
