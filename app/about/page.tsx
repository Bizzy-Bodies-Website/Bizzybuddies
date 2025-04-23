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

export default function ABOUT() {
  const [pageData, setPageData] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `*[_type == "page" && _id == "c3c19ec3-246a-4363-87e2-e556095b661c"][0]`;
        const result = await client.fetch(query);
        setPageData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log("pageData", pageData);

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
  if (!pageData) return <div className="flex justify-center items-center h-screen">Failed to load content</div>;

  // Map the new data structure to match the expected format for the existing components
  const heroBlock = pageData.contentBlocks.find((block: any) => block._type === "heroBlock");
  const homeMoreSectionBlock = pageData.contentBlocks.find((block: any) => block._type === "homeMoreSectionBlock");
  const aboutUsBlock = pageData.contentBlocks.find((block: any) => block._type === "aboutUs");
  const whatWeOfferBlock = pageData.contentBlocks.find((block: any) => block._type === "whatWeOfferBlock");
  const imagesBlock = pageData.contentBlocks.find((block: any) => block._type === "imagesBlock");
  const ctaBlock = pageData.contentBlocks.find((block: any) => block._type === "CTATwoButtons");

  // Create data objects that match what the original components expect
  const data = {
    aboutPageHero: heroBlock,
    aboutPageMoreSection: homeMoreSectionBlock,
    aboutUs: aboutUsBlock,
    aboutPageFounders: {
      title: whatWeOfferBlock?.title,
      description: whatWeOfferBlock?.description,
      team: whatWeOfferBlock?.offers || []
    },
    joinaSession: ctaBlock
  };

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
                backgroundImage: heroBlock?.backgroundImage ? `url(${urlFor(heroBlock.backgroundImage.asset).url()})` : "",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundColor: "#FF0000",
              }}
            >
              <OfferingsSection data={data.aboutPageHero} />
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
              <IntroductionSection data={data.aboutPageMoreSection} />
            </section>

            {/* Services Overview Section */}
            <section className="w-full relative bg-[#F9F9F9] py-16">
              <ServicesOverviewSection data={data.aboutUs} />
            </section>

            {/* What We Offer Heading */}
            <section className="w-full flex flex-col items-center gap-4 py-16">
              <h2 className="w-full md:w-[450px] font-desktop-title-headline-2 text-[#111111] text-center text-[72px] leading-[72px] tracking-[-1.44px]">
                {data.aboutPageFounders?.title}
              </h2>
              <p className="w-full md:w-[750px] font-desktop-title-subheading-2 text-[#636362] text-center text-lg leading-8">
                {data.aboutPageFounders?.description}
              </p>
            </section>

            {/* Image Gallery Section */}
            <ImageGallerySection data={data.aboutPageFounders?.team[0]} />

            {/* Key Features Section */}
            <KeyFeaturesSection data={data.aboutPageFounders?.team[1]} />

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
            <ContactUsSection data={data.joinaSession} />
          </main>
        </div>
      </div>
    </div>
  );
}