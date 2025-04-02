"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { SaturdayIntro } from "./partials/SaturdayIntro";
import CardItem from "../birthday-parties/partials/CardItem";
import SessionSchedule from "./partials/session-schedule";
import BookParty from "../birthday-parties/partials/BookAParty";
import FaqSection from "./partials/FAQ";
import ContactSection from "./partials/Contact-Form";
import client, { urlFor } from "@/sanity";

interface saturdaysHeroTypeData {
  title: string;
  subtitle: string;
  backgroundImage?: {
    asset: {
      _ref: string;
    };
  };
}

interface saturdayMoreSectionData {
  title: string;
  subtitle: string;
  description: string;
  backgroundImage?: { asset: { _ref: string } };
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
  saturdaysHeroType: saturdaysHeroTypeData;
  saturdayMoreSection: saturdayMoreSectionData;
  aboutSaturdaySection: aboutSaturdaySectionData;
  session: ServicesSectionData[];
  values: any[];
  valuesHeader: valuesHeaderData;
  tasterSessionCTA: tasterSessionCTA;
  discounts: discounts;
  extraInformation: extraInformation;
  contactSection: contactSection;
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

  console.log("data", data);

  useEffect(() => {
    const fetchData = async () => {
      const query = `{
        "saturdaysHeroType": *[_type == "saturdaysHeroType"][0],
        "saturdayMoreSection": *[_type == "saturdayMoreSection"][0],
        "aboutSaturdaySection": *[_type == "aboutSaturdaySection"][0],
        "session": *[_type == "session"],
        "tasterSessionCTA": *[_type == "tasterSessionCTA"][0],
        "discounts": *[_type == "discounts"][0],
        "extraInformation": *[_type == "extraInformation"][0],
        "contactSection": *[_type == "contactSection"][0]
      }`;
      const result: HomePageData = await client.fetch(query);
      setData(result);
    };

    fetchData();
  }, []);
  // session
  // tasterSessionCTA
  // "session": *[_type == "session"],
  //  "values": *[_type == "values"],
  //  "valuesHeader": *[_type == "valuesHeader"][0],
  //  "whatweOfferText": *[_type == "whatweOfferText"][0],


  if (!data) return <p>Loading...</p>;
  return (
    <div>
      <div className="bg-white flex flex-col items-center w-full">
        <div className="bg-white w-full relative">
          {/* Main Content */}
          <main className="w-full">
            <section className="relative">
              <div className="h-[680px] w-full relative overflow-hidden">

                {data?.saturdaysHeroType?.backgroundImage?.asset?._ref && (
                  <img
                    src={urlFor(data?.saturdaysHeroType?.backgroundImage).url()}
                    alt="Saturday Party Hero"
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                )}

                <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
                  <h2 className="text-4xl md:text-6xl font-semibold text-center text-uppercase ">{data?.saturdaysHeroType?.title}</h2>
                  <p className="mt-4 text-xl text-center">{data?.saturdaysHeroType?.subtitle}</p>
                </div>
              </div>

              {/* Curved Divider */}
              <div className="relative mt-[-30px]">
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
              <SaturdayIntro data={data?.saturdayMoreSection} />
            </section>

            <CardItem
              imageSrc={data?.aboutSaturdaySection?.image?.asset?._ref
                ? urlFor(data?.aboutSaturdaySection?.image).url()
                : ""}
              altText={data?.aboutSaturdaySection?.title}
              subtitle={data?.aboutSaturdaySection?.subtitle}
              title={data?.aboutSaturdaySection?.title}
              description={data?.aboutSaturdaySection?.description[0]?.children[0]?.text}
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

            <SessionSchedule data={data?.session}/>

            <BookParty
              title={data?.tasterSessionCTA?.title}
              description={data?.tasterSessionCTA?.description}
              buttonText={data?.tasterSessionCTA?.buttonText}
            />

            <div className="bg-[#D8D8D8] flex flex-col md:flex-row justify-center items-center gap-20 py-20">
              <div className="text-center md:text-left">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">{data?.discounts?.title}</h2>
              </div>
              <div className="space-y-6 text-center md:text-left">
               {data?.discounts.discountList?.map((item, index) => <p key={index} className="text-gray-700">{item}</p>)}
                {/* <p className="text-gray-700">- 20% discount applied when making a full-term booking</p>
                <p className="text-gray-700">- FREE trial sessions available for first-time customers</p> */}

                <h3 className="text-2xl font-bold mt-10 mb-6">{data?.discounts?.ctaText}</h3>

                <div>
                  <a
                    href="#contact"
                    className="inline-block font-semibold bg-black text-white py-3 px-8 rounded-full text-center"
                  >
                    {data?.discounts?.ctaButtonText}
                  </a>
                </div>
              </div>
            </div>

            <FaqSection data={data?.extraInformation}/>

            <ContactSection data={data?.contactSection}/>
          </main>
        </div>
      </div>
    </div>
  );
}
