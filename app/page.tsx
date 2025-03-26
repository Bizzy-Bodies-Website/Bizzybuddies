"use client";

import Image from "next/image";
import React from "react";
import { IntroductionSection } from "@/components/home/IntroductionSection";
import { OfferingsSection } from "@/components/home/OfferingsSection/OfferingsSection";
import { ServicesOverviewSection } from "@/components/home/ServicesOverviewSection/ServicesOverviewSection";
import { ImageGallerySection } from "@/components/home/ImageGallerySection";
import { KeyFeaturesSection } from "@/components/home/KeyFeaturesSection";
import { ImageDisplaySection } from "@/components/home/ImageDisplaySection";
import { HighlightsSection } from "@/components/home/HighlightsSection";
import { MainContentSection } from "@/components/home/MainContentSection/MainContentSection";
import { BenefitsOverviewSection } from "@/components/home/BenefitsOverviewSection";
import { ContactUsSection } from "@/components/home/ContactUsSection/ContactUsSection";
import { useEffect, useState } from "react";
import client, { urlFor } from "../sanity";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const SectionWrapper = ({ children, className = "", style }: { children: React.ReactNode, className?: string, style?: React.CSSProperties }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);
  
  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={sectionVariants}
      style={style}
      className={className}
    >
      {children}
    </motion.section>
  );
};

export default function Home() {
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
    heroSection: HeroSectionData;
    heroMoreSection: HeroMoreSectionData;
    aboutSection: AboutSectionData;
    offerings: ServicesSectionData[];
    values: any[];
    valuesHeader: valuesHeaderData;
    whatweOfferText: whatweOfferTextData;
  }

  interface whatweOfferTextData {
    title: string;
    subtitle: string;
    description: string;
  }

  const [data, setData] = useState<HomePageData | null>(null);

  console.log("data", data);

  useEffect(() => {
    const fetchData = async () => {
      const query = `{
        "heroSection": *[_type == "heroSection"][0],
        "heroMoreSection": *[_type == "heroMoreSection"][0],
        "aboutSection": *[_type == "aboutSection"][0],
        "offerings": *[_type == "offerings"],
         "values": *[_type == "values"],
         "valuesHeader": *[_type == "valuesHeader"][0],
         "whatweOfferText": *[_type == "whatweOfferText"][0],
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
            <SectionWrapper
              className="w-full relative z-10"
              style={{
                backgroundImage: `url(${urlFor(
                  data?.heroSection?.backgroundImage
                ).url()})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundColor: "#FF0000",
              }}
            >
              <OfferingsSection data={data?.heroSection} />
            </SectionWrapper>

            {/* Introduction Section */}
            <SectionWrapper
              className="w-full relative bg-[#FF0000] mt-[-30px] z-0 py-[50px]"
              style={{
                backgroundImage: "url('/assets/hero2.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <IntroductionSection data={data?.heroMoreSection} />
            </SectionWrapper>

            {/* Services Overview Section */}
            <SectionWrapper className="w-full relative bg-[#F9F9F9]">
              <ServicesOverviewSection data={data?.aboutSection} />
            </SectionWrapper>

            {/* What We Offer Heading */}
            <SectionWrapper className="w-full flex flex-col items-center gap-4 pt-10 pb-5">
              <h2 className="font-desktop-title-headline-2 text-[#111111] text-center text-[72px] leading-[72px] tracking-[-1.44px]">
                {data?.whatweOfferText?.title}
              </h2>
              <p className="w-full md:w-[450px] font-desktop-title-subheading-2 text-[#636362] text-center text-lg leading-8">
                {data?.whatweOfferText?.description}
              </p>
            </SectionWrapper>

            {/* Main Content Section */}
            <SectionWrapper>
              <MainContentSection data={data?.offerings[3] || null} />
            </SectionWrapper>

            {/* Key Features Section */}
            <SectionWrapper>
              {/* @ts-ignore */}
              <KeyFeaturesSection data={data?.offerings[0] || null} />
            </SectionWrapper>

            {/* Image Display Section */}
            <SectionWrapper>
              {/* @ts-ignore */}
              <ImageDisplaySection data={data?.offerings[4] || null} />
            </SectionWrapper>

            {/* Highlights Section */}
            <SectionWrapper>
              {/* @ts-ignore */}
              <HighlightsSection data={data?.offerings[1] || null} />
            </SectionWrapper>

            {/* Image Gallery Section */}
            <SectionWrapper>
              {/* @ts-ignore */}
              <ImageGallerySection data={data?.offerings[2] || null} />
            </SectionWrapper>

            {/* Benefits Overview Section */}
            <SectionWrapper>
              <BenefitsOverviewSection
                data={data?.values}
                text={data?.valuesHeader}
              />
            </SectionWrapper>

            <SectionWrapper className="w-full p-4">
              {/* First Row - Two Images */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <Image
                    className="w-full h-auto sm:h-[300px] md:h-[415px] object-cover rounded-lg"
                    alt="Batman Cosplay"
                    src="/assets/one.svg"
                    width={500}
                    height={415}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <Image
                    className="w-full h-auto sm:h-[300px] md:h-[415px] object-cover rounded-lg"
                    alt="Soccer Goal"
                    src="/assets/four.svg"
                    width={500}
                    height={415}
                  />
                </motion.div>
              </div>

              {/* Second Row - Two Images in a Flexbox */}
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="w-full sm:w-1/4"
                >
                  <Image
                    className="w-full h-auto sm:h-[300px] md:h-[415px] object-cover rounded-lg"
                    alt="Batman and Kid"
                    src="/assets/two.svg"
                    width={500}
                    height={415}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="w-full sm:w-3/4"
                >
                  <Image
                    className="w-full h-auto sm:h-[300px] md:h-[415px] object-cover rounded-lg"
                    alt="Kids in Superhero Masks"
                    src="/assets/three.svg"
                    width={500}
                    height={415}
                  />
                </motion.div>
              </div>
            </SectionWrapper>

            {/* Contact Us Section */}
            <SectionWrapper>
              <ContactUsSection />
            </SectionWrapper>
          </main>
        </div>
      </div>
    </div>
  );
}