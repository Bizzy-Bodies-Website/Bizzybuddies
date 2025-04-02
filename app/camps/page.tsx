"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IntroductionSection } from "@/components/camps/IntroductionSection";
import { OfferingsSection } from "@/components/camps/OfferingsSection/OfferingsSection";
// import { ServicesOverviewSection } from "@/components/camps/ServicesOverviewSection/ServicesOverviewSection";
import { ImageGallerySection } from "@/components/camps/ImageGallerySection";
import { KeyFeaturesSection } from "@/components/camps/KeyFeaturesSection";
// import { ImageDisplaySection } from "@/components/camps/ImageDisplaySection";
// import { HighlightsSection } from "@/components/camps/HighlightsSection";
// import { MainContentSection } from "@/components/camps/MainContentSection/MainContentSection";
import { BenefitsOverviewSection } from "@/components/camps/BenefitsOverviewSection";
// import { ClientTestimonialsSection } from "@/components/camps/ClientTestimonialsSection/ClientTestimonialsSection";
import { ContactUsSection } from "@/components/camps/ContactUsSection/ContactUsSection";
import client, { urlFor } from "../../sanity";
import { title } from "process";

export default function Camps() {
  interface campHeroData {
    title: string;
    subtitle: string;
    backgroundImage?: {
      _upload: {
        previewImage: string;
      };
    };
  }

  interface campMoreSectionData {
    title: string;
    subtitle: string;
    description: string;
    backgroundImage?: { asset: { _ref: string } };
  }

  interface AboutSectionData {
    title: string;
    subtitle: string;
    description: any[];
    backgroundImage?: { asset: { _ref: string } };
  }

  interface ServicesSectionData {
    title: string;
    subtitle: string;
    description: any[];
    services: any[];
  }

  interface valuesHeaderData {
    title: string;
    subtitle: string;
    description: any[];
    services: any[];
  }

  interface HomePageData {
    campHero: campHeroData;
    campMoreSection: campMoreSectionData;
    aboutSection: AboutSectionData;
    offerings: ServicesSectionData[];
    values: any[];
    valuesHeader: valuesHeaderData;
    campFeaturedSection: campFeaturedSectionData;
    campServicesSection: campServicesSectionData;
    campNeedToKnow: campNeedToKnowData;
    joinaSession: joinaSessionData;
  }

  interface joinaSessionData {
    title: string;
    subtitle: string;
    description: string;
    buttons: any[];
  }

  interface campNeedToKnowData {
    description: string;
    services: any[];
    title: string;
  }

  interface campFeaturedSectionData {
    title: string;
    subtitle: string;
    description: string;
  }

  interface campServicesSectionData {
    description: string;
    services: any[];
    title: string;
  }

  const [data, setData] = useState<HomePageData | null>(null);

  console.log("data", data);

  useEffect(() => {
    const fetchData = async () => {
      const query = `{
        "campHero": *[_type == "campHero"][0],
        "campMoreSection": *[_type == "campMoreSection"][0],
        "campFeaturedSection": *[_type == "campFeaturedSection"][0],
        "campServicesSection": *[_type == "CampServicesSection"][0],
        "campNeedToKnow": *[_type == "campNeedToKnow"][0],
        "joinaSession": *[_type == "joinaSession"][0],
      }`;
      const result: HomePageData = await client.fetch(query);
      setData(result);
    };

    fetchData();
  }, []);

  if (!data) return <p>Loading...</p>;

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
                backgroundImage: `url(${urlFor(
                  data?.campHero?.backgroundImage
                ).url()})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundColor: "#FF0000",
              }}
            >
              <OfferingsSection data={data?.campHero} />
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
              <IntroductionSection data={data?.campMoreSection} />
            </section>

            {/* What We Offer Heading */}
            <section className="w-full flex flex-col items-center gap-4 pt-16 pb-6">
              <h2 className="font-desktop-title-headline-2 text-[#111111] text-center text-[72px] leading-[72px] tracking-[-1.44px]">
                {data?.campFeaturedSection?.title}
              </h2>
              <p className="font-desktop-title-subheading-2 text-[#636362] text-center text-lg leading-8">
                {data?.campFeaturedSection?.description}
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
              <h2 className="font-desktop-title-headline-2 text-[#111111] text-center text-[72px] leading-[72px] tracking-[-1.44px]">
                {data?.campServicesSection?.title}
              </h2>
              <p className="font-desktop-title-subheading-2 text-[#636362] text-center text-lg leading-8 w-full md:w-[50%]">
                {data?.campServicesSection?.description}
              </p>
            </section>

            {/* Image Gallery Section */}
            <ImageGallerySection
              data={data?.campServicesSection?.services[0]}
            />

            {/* Key Features Section */}
            <KeyFeaturesSection data={data?.campServicesSection?.services[1]} />

            {/* What We Offer Heading */}
            <section className="w-full flex flex-col items-center gap-4 pt-16 pb-6">
              <h2 className="font-desktop-title-headline-2 text-[#111111] text-center text-[72px] leading-[72px] tracking-[-1.44px]">
                {data?.campNeedToKnow?.title}
              </h2>
              <p className="font-desktop-title-subheading-2 text-[#636362] text-center text-lg leading-8">
                {data?.campNeedToKnow?.description}
              </p>
            </section>

            {/* BenefitsOverviewSection */}
            <BenefitsOverviewSection data={data?.campNeedToKnow} />

            {/* Contact Us Section */}
            <ContactUsSection data={data?.joinaSession}/>
          </main>
        </div>
      </div>
    </div>
  );
}
