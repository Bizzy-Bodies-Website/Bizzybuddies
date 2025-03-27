"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IntroductionSection } from "@/components/about/IntroductionSection";
import { OfferingsSection } from "@/components/about/OfferingsSection/OfferingsSection";
import { ServicesOverviewSection } from "@/components/about/ServicesOverviewSection/ServicesOverviewSection";
import { ImageGallerySection } from "@/components/about/ImageGallerySection";
import { KeyFeaturesSection } from "@/components/about/KeyFeaturesSection";
import { ContactUsSection } from "@/components/about/ContactUsSection/ContactUsSection";
import client, { urlFor } from "@/sanity";

export default function about() {
  interface HeroSectionData {
    title: string;
    subtitle: string;
    backgroundImage?: {
      asset: {
        _ref: string;
      };
    };
  }

  interface HeroMoreSectionData {
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
    aboutPageHero: HeroSectionData;
    aboutPageMoreSection: HeroMoreSectionData;
    aboutSection: AboutSectionData;
    offerings: ServicesSectionData[];
    values: any[];
    valuesHeader: valuesHeaderData;
    aboutPageFounders: whatweOfferTextData;
    aboutUs: aboutUsData;
    joinaSession: joinaSessionData;
  }

  interface joinaSessionData {
    title: string;
    subtitle: string;
    description: string;
    buttons: any[];
  }

  interface aboutUsData {
    title: string;
    subtitle: string;
    description1: string;
    description2: string;
    label: string;
  }

  interface whatweOfferTextData {
    title: string;
    subtitle: string;
    description: string;
    team: any[];
  }

  const [data, setData] = useState<HomePageData | null>(null);

  // console.log("data", data);

  useEffect(() => {
    const fetchData = async () => {
      const query = `{
        "aboutPageHero": *[_type == "aboutPageHero"][0],
        "aboutPageMoreSection": *[_type == "aboutPageMoreSection"][0],
        "aboutUs": *[_type == "aboutUs"][0],
        "aboutPageFounders": *[_type == "aboutPageFounders"][0],
        "aboutPageFounders": *[_type == "aboutPageFounders"][0],
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
                  data?.aboutPageHero?.backgroundImage
                ).url()})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundColor: "#FF0000",
              }}
            >
              <OfferingsSection data={data?.aboutPageHero} />
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
              <IntroductionSection data={data?.aboutPageMoreSection} />
            </section>

            {/* Services Overview Section */}
            <section className="w-full relative bg-[#F9F9F9] py-16">
              <ServicesOverviewSection data={data?.aboutUs} />
            </section>

            {/* What We Offer Heading */}
            <section className="w-full flex flex-col items-center gap-4 py-16">
              <h2 className="w-full md:w-[450px] font-desktop-title-headline-2 text-[#111111] text-center text-[72px] leading-[72px] tracking-[-1.44px]">
                {data?.aboutPageFounders?.title}
              </h2>
              <p className="w-full md:w-[750px] font-desktop-title-subheading-2 text-[#636362] text-center text-lg leading-8">
                {data?.aboutPageFounders?.description}
              </p>
            </section>

            {/* Image Gallery Section */}
            <ImageGallerySection data={data?.aboutPageFounders?.team[0]} />

            {/* Key Features Section */}
            <KeyFeaturesSection data={data?.aboutPageFounders?.team[1]} />

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
                  src="/assets/a3.svg"
                  width={500}
                  height={415}
                />
              </div>
            </section>

            {/* Contact Us Section */}
            <ContactUsSection data={data?.joinaSession} />
          </main>
        </div>
      </div>
    </div>
  );
}
