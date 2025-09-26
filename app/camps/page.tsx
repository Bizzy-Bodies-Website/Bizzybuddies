'use client';

import Image from 'next/image';
import React, { useEffect, useState, useRef } from 'react';
import { IntroductionSection } from '@/components/camps/IntroductionSection';
import { OfferingsSection } from '@/components/camps/OfferingsSection/OfferingsSection';
// import { ServicesOverviewSection } from "@/components/camps/ServicesOverviewSection/ServicesOverviewSection";
import { ImageGallerySection } from '@/components/camps/ImageGallerySection';
import { KeyFeaturesSection } from '@/components/camps/KeyFeaturesSection';
// import { ImageDisplaySection } from "@/components/camps/ImageDisplaySection";
// import { HighlightsSection } from "@/components/camps/HighlightsSection";
// import { MainContentSection } from "@/components/camps/MainContentSection/MainContentSection";
import { BenefitsOverviewSection } from '@/components/camps/BenefitsOverviewSection';
// import { ClientTestimonialsSection } from "@/components/camps/ClientTestimonialsSection/ClientTestimonialsSection";
import { ContactUsSection } from '@/components/camps/ContactUsSection/ContactUsSection';
import client, { urlFor } from '../../sanity';
import { motion, useAnimation, useInView } from 'framer-motion';
import ChiswickCampInfo from './partials/camp-info';

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

// Section wrapper with animation
const SectionWrapper = ({
  children,
  className = '',
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
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
  const [pageData, setPageData] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `*[_type == "page" && _id == "525e4d36-5256-41a2-b1e8-9cdb54f9173d"][0]`;
        const result = await client.fetch(query);
        setPageData(result);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  if (!pageData)
    return (
      <div className="flex justify-center items-center h-screen">
        Failed to load content
      </div>
    );

  // Extract content blocks from pageData
  const contentBlocks = pageData.contentBlocks || [];

  // Find specific block types
  const heroBlock = contentBlocks.find(
    (block: any) => block._type === 'heroBlock'
  );
  const introBlock = contentBlocks.find(
    (block: any) => block._type === 'homeMoreSectionBlock'
  );
  const featuredBlock = contentBlocks.find(
    (block: any) =>
      block._type === 'campFeaturedSection' ||
      block._type === 'featuredSectionBlock'
  );
  const servicesBlock = contentBlocks.find(
    (block: any) =>
      block._type === 'CampServicesSection' ||
      block._type === 'servicesSectionBlock' ||
      block._type === 'whatWeOfferBlock'
  );
  const needToKnowBlock = contentBlocks.find(
    (block: any) => block._type === 'faqBlock'
  );
  const contactBlock = contentBlocks.find(
    (block: any) => block._type === 'CTATwoButtons'
  );

  const imagesBlock = contentBlocks.find(
    (block: any) => block._type === 'imagesBlock'
  );

  console.log('contentBlocks fffggfghhg', contentBlocks);
  console.log('servicesBlock.offers[1]', servicesBlock.offers[1]);

  return (
    <div className="bg-white flex flex-col items-center w-full">
      <div className="bg-white w-full relative">
        {/* Main Content */}
        <main className="w-full">
          {/* Offerings Section */}
          {heroBlock && (
            <SectionWrapper
              className="w-full relative z-10"
              style={{
                backgroundImage: heroBlock.backgroundImage
                  ? `url(${urlFor(heroBlock.backgroundImage).url()})`
                  : undefined,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#FF0000',
              }}
            >
              <OfferingsSection data={heroBlock} />
              <div className="relative">
                <svg
                  className="absolute bottom-[-75px] left-0 w-full"
                  viewBox="0 0 1440 320"
                >
                  <path
                    fill="#FF0000"
                    d="M0,160 Q720,320 1440,160 L1440,320 L0,320Z"
                  ></path>
                </svg>
              </div>
            </SectionWrapper>
          )}

          {/* Introduction Section */}
          {introBlock && (
            <SectionWrapper
              className="w-full relative bg-[#FF0000] mt-[-30px] z-0 py-[50px]"
              style={{
                backgroundImage: "url('/assets/hero2.svg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <IntroductionSection data={introBlock} />
            </SectionWrapper>
          )}

          {/* Featured Section */}
          {/* {featuredBlock && ( */}
          <>
            <SectionWrapper className="w-full flex flex-col items-center gap-4 pt-16 pb-6">
              <h2 className="font-desktop-title-headline-2 text-[#111111] text-center text-[72px] leading-[72px] tracking-[-1.44px]">
                {contentBlocks[2]?.title}
              </h2>
              <p className="font-desktop-title-subheading-2 text-[#636362] text-center text-lg leading-8">
                {contentBlocks[2]?.description}
              </p>
            </SectionWrapper>

            {/* <SectionWrapper className="w-full p-4">
                <div className="flex flex-col sm:flex-row gap-4">
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
              </SectionWrapper> */}
          </>
          {/* )} */}

          {/* Services Section */}
          {servicesBlock && (
            <>
              <SectionWrapper className="w-full flex flex-col items-center gap-4 pt-16 pb-6">
                <h2 className="font-desktop-title-headline-2 text-[#111111] text-center text-[72px] leading-[72px] tracking-[-1.44px]">
                  {servicesBlock.title}
                </h2>
                <p className="font-desktop-title-subheading-2 text-[#636362] text-center text-lg leading-8 w-full md:w-[50%]">
                  {servicesBlock.description}
                </p>
              </SectionWrapper>

              {(servicesBlock.services?.length > 0 ||
                servicesBlock.offers?.length > 0) && (
                <>
                  {(servicesBlock.services || servicesBlock.offers).map(
                    (item: any, index: number) => (
                      <SectionWrapper key={index}>
                        {/* First item uses ImageGallerySection, others use KeyFeaturesSection */}
                        {index === 0 ? (
                          <ImageGallerySection data={item} />
                        ) : (
                          <KeyFeaturesSection data={item} />
                        )}
 
                        {/* Handle ChiswickCampInfo if present (mainly for offers) */}
                        {item.details && (
                          <ChiswickCampInfo
                            data={item.details}
                            campTitle={item.campTitle}
                          />
                        )}

                    
                      </SectionWrapper>
                    )
                  )}
                </>
              )}
            </>
          )}

          {/* Need to Know Section */}
          {needToKnowBlock && (
            <>
              <SectionWrapper className="w-full flex flex-col items-center gap-4 pt-16 pb-6">
                <h2 className="font-desktop-title-headline-2 text-[#111111] text-center text-[72px] leading-[72px] tracking-[-1.44px]">
                  {needToKnowBlock.title}
                </h2>
                <p className="font-desktop-title-subheading-2 text-[#636362] text-center text-lg leading-8">
                  {needToKnowBlock.description}
                </p>
              </SectionWrapper>

              <SectionWrapper>
                <BenefitsOverviewSection data={needToKnowBlock} />
              </SectionWrapper>
            </>
          )}

          {/* Contact Us Section */}
          {contactBlock && (
            <SectionWrapper>
              <ContactUsSection data={contactBlock} />
            </SectionWrapper>
          )}

          {/* Images Gallery Section */}

          {imagesBlock && imagesBlock.images.length >= 4 && (
            <section className="w-full p-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <img
                  className="w-full h-auto sm:h-[300px] md:h-[415px] object-cover rounded-lg"
                  alt="Party image 1"
                  src={urlFor(imagesBlock.images[0].asset).url()}
                />
                <img
                  className="w-full h-auto sm:h-[300px] md:h-[415px] object-cover rounded-lg"
                  alt="Party image 2"
                  src={urlFor(imagesBlock.images[1].asset).url()}
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <img
                  className="w-full sm:w-1/4 h-auto sm:h-[300px] md:h-[415px] object-cover rounded-lg"
                  alt="Party image 3"
                  src={urlFor(imagesBlock.images[2].asset).url()}
                />
                <img
                  className="w-full sm:w-3/4 h-auto sm:h-[300px] md:h-[415px] object-cover rounded-lg"
                  alt="Party image 4"
                  src={urlFor(imagesBlock.images[3].asset).url()}
                />
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}
