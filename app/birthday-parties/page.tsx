"use client"

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { GreetingsSection } from "./partials/Greetings";
import FeatureImageSection from "./partials/Feature-Image-Section";
import PartiesOffer from "./partials/Parties-Offer";
import PricingSection from "./partials/Pricing";
import TestimonialsSection from "./partials/Testimonial-Section";
import BookParty from "./partials/BookAParty";
import client, { urlFor } from "@/sanity";

interface birthdayHeroTypeData {
  title: string;
  subtitle: string;
  backgroundImage?: {
    asset: {
      _ref: string;
    };
  };
}

interface birthdayMoreSectionData {
  title: string;
  subtitle: string;
  description: string;
  backgroundImage?: { asset: { _ref: string } };
}

interface featuredSectionData {
  title: string;
  description: string;
  images: Array<any>;
}





interface aboutSaturdaySectionData {
  title: string;
  subtitle: string;
  description: any[];
  backgroundImage?: { asset: { _ref: string } };
  image?: { asset: { _ref: string } };
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
  birthdayheroType: birthdayHeroTypeData;
  birthdayMoreSection: birthdayMoreSectionData;
  featuredSection: featuredSectionData;
  servicesSection: ServicesSection;
  partyPackage: any;
  callToAction: any;
  partyImage: any;
  testimonial: any;


  aboutSaturdaySection: aboutSaturdaySectionData;
  session: ServicesSectionData[];
  values: any[];
  valuesHeader: valuesHeaderData;
  tasterSessionCTA: tasterSessionCTA;
  discounts: discounts;
  extraInformation: extraInformation;
  contactSection: contactSection;
}

interface ServicesSection {
  title: string;
  services: any[];
}

interface tasterSessionCTA {
  title: string;
  buttonText: string;
  description: string;
}

interface discounts {
  title: string;
  ctaButtonText: string;
  ctaText: string;
  discountList: Array<string>;
}

interface extraInformation {
  title: string;
  accordionItem: Array<any>;
}

interface contactSection {
  title: string;
  subttile: string;
  description: string;
  buttons: Array<any>;
}

export default function About() {
  const [data, setData] = useState<HomePageData | null>(null);


  useEffect(() => {
    const fetchData = async () => {
      const query = `{
        "birthdayheroType": *[_type == "birthdayheroType"][0],
        "birthdayMoreSection": *[_type == "birthdayMoreSection"][0],
        "featuredSection": *[_type == "featuredSection"][0],
        "servicesSection": *[_type == "servicesSection"][0],
        "partyPackage": *[_type == "partyPackage"][0],
        "callToAction": *[_type == "callToAction"][0],
        "partyImage": *[_type == "partyImage"][0],
        "testimonial": *[_type == "testimonial"],
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

            <section className="relative">
              <div className="h-[680px] w-full relative overflow-hidden">

                {data?.birthdayheroType?.backgroundImage?.asset?._ref && (
                  <img
                    src={urlFor(data?.birthdayheroType?.backgroundImage).url()}
                    alt="Birthday Party Hero"
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                )}

                <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
                <h2 className="text-4xl md:text-6xl font-semibold text-center text-uppercase ">{data?.birthdayheroType?.title}</h2>
                <p className="mt-4 text-xl text-center">{data?.birthdayheroType?.subtitle}</p>
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
              <GreetingsSection data={data.birthdayMoreSection} />
            </section>

            <FeatureImageSection data={data.featuredSection} />
            <PartiesOffer data={data.servicesSection} />
            <div className="p-8">
              <PricingSection data={data.partyPackage}/>
            </div>

            <section className="w-full">
              {/* First Row - Two Images */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <img
                  className="w-full h-auto sm:h-[300px] md:h-[415px] object-cover"
                  alt="Batman Cosplay"
                  src={urlFor(data?.partyImage?.images[0]).url()}
                  width={500}
                  height={415}
                />
                <img
                  className="w-full h-auto sm:h-[300px] md:h-[415px] object-cover"
                  alt="Soccer Goal"
                  src={urlFor(data?.partyImage?.images[1].asset).url()}
                  width={500}
                  height={415}
                />
              </div>

              {/* Second Row - Two Images in a Flexbox */}
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <img
                  className="w-full sm:w-1/4 h-auto sm:h-[300px] md:h-[415px] object-cover"
                  alt="Batman and Kid"
                  src={urlFor(data?.partyImage?.images[2]).url()}
                  width={500}
                  height={415}
                />
                <img
                  className="w-full sm:w-3/4 h-auto sm:h-[300px] md:h-[415px] object-cover"
                  alt="Kids in Superhero Masks"
                  src={urlFor(data?.partyImage?.images[3]).url()}
                  width={500}
                  height={415}
                />
              </div>
            </section>

            <TestimonialsSection data={data.testimonial}/>
            <BookParty data={data.callToAction}/>
          </main>
        </div>
      </div>
    </div>
  );
}
