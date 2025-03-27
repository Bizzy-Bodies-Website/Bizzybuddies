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
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Section wrapper with animation
const SectionWrapper = ({
  children,
  className = "",
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) => {
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
  interface HomePageData {
    heroSection: any;
    heroMoreSection: any;
    aboutSection: any;
    offerings: any[];
    values: any[];
    valuesHeader: any;
    whatweOfferText: any;
  }

  const [data, setData] = useState<HomePageData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const query = `{
        "heroSection": *[_type == "heroSection"][0],
        "heroMoreSection": *[_type == "heroMoreSection"][0],
        "aboutSection": *[_type == "aboutSection"][0],
        "offerings": *[_type == "offerings"],
        "values": *[_type == "values"],
        "valuesHeader": *[_type == "valuesHeader"][0],
        "whatweOfferText": *[_type == "whatweOfferText"][0]
      }`;
      const result: HomePageData = await client.fetch(query);
      setData(result);
    };

    fetchData();
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="bg-white flex flex-col items-center w-full">
      <div className="bg-white w-full relative">
        <main className="w-full">
          {/* Hero Section */}
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
          <SectionWrapper className="w-full relative bg-[#FF0000] py-10">
            <IntroductionSection data={data?.heroMoreSection} />
          </SectionWrapper>

          {/* Services Overview Section */}
          <SectionWrapper className="w-full bg-[#F9F9F9] py-10">
            <ServicesOverviewSection data={data?.aboutSection} />
          </SectionWrapper>

          {/* What We Offer Heading */}
          <SectionWrapper className="w-full flex flex-col items-center gap-4 pt-10 pb-5 text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-[#111111]">
              {data?.whatweOfferText?.title}
            </h2>
            <p className="w-full max-w-md text-lg text-[#636362]">
              {data?.whatweOfferText?.description}
            </p>
          </SectionWrapper>

          {/* Main Content Section */}
          <SectionWrapper>
            <MainContentSection data={data?.offerings[3] || null} />
          </SectionWrapper>

          {/* Key Features Section */}
          <SectionWrapper>
            <KeyFeaturesSection data={data?.offerings[0] || null} />
          </SectionWrapper>

          {/* Image Display Section */}
          <SectionWrapper>
            <ImageDisplaySection data={data?.offerings[4] || null} />
          </SectionWrapper>

          {/* Highlights Section */}
          <SectionWrapper>
            <HighlightsSection data={data?.offerings[1] || null} />
          </SectionWrapper>

          {/* Image Gallery Section */}
          <SectionWrapper>
            <ImageGallerySection data={data?.offerings[2] || null} />
          </SectionWrapper>

          {/* Benefits Overview Section */}
          <SectionWrapper>
            <BenefitsOverviewSection
              data={data?.values}
              text={data?.valuesHeader}
            />
          </SectionWrapper>

          {/* Responsive Image Grid */}
          <SectionWrapper className="w-full p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["/assets/one.svg", "/assets/four.svg"].map((src, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <Image
                    className="w-full max-h-[300px] sm:max-h-[415px] object-cover rounded-lg"
                    alt={`Image ${index + 1}`}
                    src={src}
                    width={500}
                    height={415}
                  />
                </motion.div>
              ))}
            </div>
          </SectionWrapper>

          {/* Second Row - Two Images in a Flexbox */}
          <SectionWrapper className="w-full p-4">
            <div className="flex flex-col sm:flex-row gap-4">
              {["/assets/two.svg", "/assets/three.svg"].map((src, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.4 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={index === 0 ? "w-full sm:w-1/4" : "w-full sm:w-3/4"}
                >
                  <Image
                    className="w-full max-h-[300px] sm:max-h-[415px] object-cover rounded-lg"
                    alt={`Image ${index + 3}`}
                    src={src}
                    width={500}
                    height={415}
                  />
                </motion.div>
              ))}
            </div>
          </SectionWrapper>

          {/* Contact Us Section */}
          <SectionWrapper>
            <ContactUsSection />
          </SectionWrapper>
        </main>
      </div>
    </div>
  );
}
