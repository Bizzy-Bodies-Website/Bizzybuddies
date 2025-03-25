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
export default function about() {

  return (
    <div>
      <div className="bg-white flex flex-col items-center w-full">
        <div className="bg-white w-full relative">
          {/* Main Content */}
          <main className="w-full">
            {/* Offerings Section */}
            {/* <section
              className="w-full relative z-10"
              style={{
                backgroundImage: "url('/assets/Oalh2MojUuk (2).png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundColor: "#FF0000",
              }}
            >
              <OfferingsSection />
            </section> */}

            {/* <section className="relative">
              <div className="h-[500px] bg-cover bg-center" style={{backgroundImage: "url('/assets/Oalh2MojUuk (2).png')"}}>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <h1 className="text-6xl md:text-8xl font-bold text-center">BIRTHDAY<br/>PARTIES</h1>
                  <p className="mt-4 text-xl text-center">Our weekend football coaching sessions</p>
                </div>
              </div>
            
              <div className="relative h-24">
                <div className="absolute -top-24 w-full overflow-hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-24">
                    <path fill="#EF4444" d="M0,96L80,106.7C160,117,320,139,480,144C640,149,800,139,960,122.7C1120,107,1280,85,1360,74.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                  </svg>
                </div>
              </div>
            </section> */}

            <section className="relative">
              <div className="h-[680px] w-full relative overflow-hidden">

                <Image src={'https://images.unsplash.com/photo-1606841466847-544b0c481c98?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJpcnRoZGF5JTIwYm95fGVufDB8fDB8fHww'} alt="Birthday Party Hero" className="absolute inset-0 w-full h-full object-cover" width={1440} height={927}/>
                  
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
                    <h1 className="text-6xl md:text-8xl font-bold text-center">BIRTHDAY<br/>PARTIES</h1>
                    <p className="mt-4 text-xl text-center">Our weekend football coaching sessions</p>
                  </div>
              </div>
             
              <div className="relative h-24">
                <div className="absolute -top-24 w-full overflow-hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-24">
                    <path fill="#FF0000" d="M0,96L80,106.7C160,117,320,139,480,144C640,149,800,139,960,122.7C1120,107,1280,85,1360,74.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                  </svg>
                </div>
              </div>
            </section>
            {/* Introduction Section */}
            <section
              className="w-full relative bg-[#FF0000] mt-[-120px] z-0 py-20"
              style={{
                backgroundImage: "url('/assets/hero2.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <GreetingsSection />
            </section>

            {/* Services Overview Section */}
            <section className="w-full relative bg-[#F9F9F9] py-16">
              <ServicesOverviewSection />
            </section>

            {/* What We Offer Heading */}
            <section className="w-full flex flex-col items-center gap-4 py-16">
              <h2 className="font-desktop-title-headline-2 text-black text-center text-[72px] leading-[72px] tracking-[-1.44px]">
              SAY HELLO TO OUR BIZZY BUDDIES
                <br />
                BIRTHDAY PARTIES
              </h2>
              <p className="font-desktop-title-subheading-2 text-[#636362] text-center text-lg leading-8">
              We do parties for children of any age, run off energy, enjoy games, and provide a full party service
              </p>
            </section>

            {/* Image Gallery Section */}
            {/* <ImageGallerySection /> */}

            {/* Key Features Section */}
            {/* <KeyFeaturesSection /> */}

            {/* Image Display Section */}
            {/* <ImageDisplaySection /> */}

            {/* Highlights Section */}
            {/* <HighlightsSection /> */}

            {/* Main Content Section */}
            {/* <MainContentSection /> */}

            {/* Benefits Overview Section */}
            {/* <BenefitsOverviewSection /> */}

            {/* <section className="w-full p-4">
           
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
                  src="/assets/a3.svg" width={500}
                  height={415}
                />
              </div>
            </section> */}
            {/* <ContactUsSection /> */}
          </main>
        </div>
      </div>
    </div>
  );
}
