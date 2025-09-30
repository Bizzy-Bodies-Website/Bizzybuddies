'use client';

import Image from 'next/image';
import React, { useEffect, useState, useRef } from 'react';
import { IntroductionSection } from '@/components/home/IntroductionSection';
import { OfferingsSection } from '@/components/home/OfferingsSection/OfferingsSection';
import { ServicesOverviewSection } from '@/components/home/ServicesOverviewSection/ServicesOverviewSection';
import { ImageGallerySection } from '@/components/home/ImageGallerySection';
import { KeyFeaturesSection } from '@/components/home/KeyFeaturesSection';
import { MainContentSection } from '@/components/home/MainContentSection/MainContentSection';
import { BenefitsOverviewSection } from '@/components/home/BenefitsOverviewSection';
import { ContactUsSection } from '@/components/home/ContactUsSection/ContactUsSection';
import client, { urlFor } from '../sanity';
import { motion, useAnimation, useInView } from 'framer-motion';
import TestimonialsSection from './birthday-parties/partials/Testimonial-Section';
import { BenefitsOverviewSection2 } from '@/components/home/BenefitsOverviewSection2/BenefitsOverviewSection2';

// Animation variants dev team  update
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

export default function Home() {
  const [pageData, setPageData] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `*[_type == "page" && _id == "c92b67c9-1608-40fc-abab-e61b8ea8b61a"][0]`;
        const result = await client.fetch(query);
        setPageData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
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

  // Find blocks by type
  const heroBlock = pageData.contentBlocks.find(
    (block: any) => block._type === 'heroBlock'
  );
  const homeMoreSectionBlock = pageData.contentBlocks.find(
    (block: any) => block._type === 'homeMoreSectionBlock'
  );
  const aboutSectionBlock = pageData.contentBlocks.find(
    (block: any) => block._type === 'aboutSectionBlock'
  );
  const whatWeOfferBlock = pageData.contentBlocks.find(
    (block: any) => block._type === 'whatWeOfferBlock'
  );
  const valuesSectionBlock = pageData.contentBlocks.find(
    (block: any) => block._type === 'valuesSectionBlock'
  );
  const imagesBlock = pageData.contentBlocks.find(
    (block: any) => block._type === 'imagesBlock'
  );
  const testimonialBlock = pageData.contentBlocks.find(
    (block: any) => block._type === 'testimonialBlock'
  );
  const ctaSectionBlock = pageData.contentBlocks.find(
    (block: any) => block._type === 'CTASectionBlock'
  );
  const upcomingDatesBlock = pageData.contentBlocks.find(
    (block: any) => block._type === 'upcomingDatesBlock'
  );
  const CTATwoButtons = pageData.contentBlocks.find(
    (block: any) => block._type === 'CTATwoButtons'
  );

  console.log('homeMoreSectionBlock', homeMoreSectionBlock);
  console.log('pageData bbbb', pageData);

  return (
    <div className="bg-white flex flex-col items-center w-full">
      <div className="bg-white w-full relative">
        <main className="w-full">
          {/* Hero Section */}
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
          {homeMoreSectionBlock && (
            <SectionWrapper
              className="w-full relative bg-[#FF0000] mt-[50px] Z-50"
              style={{
                backgroundImage: "url('/assets/hero2.svg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <IntroductionSection data={homeMoreSectionBlock} />
            </SectionWrapper>
          )}

          {/* About Section    */}
          {aboutSectionBlock && (
            <SectionWrapper className="w-full bg-[#F9F9F9] py-10">
              <ServicesOverviewSection data={aboutSectionBlock} />
            </SectionWrapper>
          )}

          {/* What We Offer Section */}
          {whatWeOfferBlock && (
            <>
              <SectionWrapper className="w-full flex flex-col items-center gap-4 pt-10 pb-5 text-center">
                <h2 className="text-4xl md:text-6xl font-bold text-[#111111]">
                  {whatWeOfferBlock.title}
                </h2>
                <p className="w-full max-w-md text-lg text-[#636362]">
                  {whatWeOfferBlock.description}
                </p>
              </SectionWrapper>

              {/* Offers */}
              {/* {whatWeOfferBlock.offers &&
                whatWeOfferBlock.offers.map((offer: any, index: number) => (
                  <SectionWrapper key={offer._key}>
                    {index === 0 && <KeyFeaturesSection data={offer} />}
                    {index === 1 && <MainContentSection data={offer} />}
                    {index === 2 && <KeyFeaturesSection data={offer} />}
                  </SectionWrapper>
                ))} */}

{whatWeOfferBlock.offers &&
  whatWeOfferBlock.offers.map((offer: any, index: number) => (
    <SectionWrapper key={offer._key}>
      {/* Alternate between the two components that show content properly dev team update */}
      {index % 2 === 0 ? (
        <KeyFeaturesSection data={offer} />
      ) : (
        <MainContentSection data={offer} />
      )}
    </SectionWrapper>
  ))}

                
            </>
          )}

          {/* Values Section */}
          {valuesSectionBlock && (
            <SectionWrapper>
              <BenefitsOverviewSection
                data={valuesSectionBlock.blocks || []}
                text={valuesSectionBlock}
              />
            </SectionWrapper>
          )}

          {/* upcomingDatesBlock */}
          {/* {upcomingDatesBlock && (
            <SectionWrapper>
              <BenefitsOverviewSection2
                data={upcomingDatesBlock.blocks || []}
                text={upcomingDatesBlock}
              />
            </SectionWrapper>
          )} */}

          {/* Images Gallery */}
          {imagesBlock && imagesBlock.images && (
            <>
              {/* First row of images */}
              <SectionWrapper className="w-full p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {imagesBlock.images
                    .slice(0, 2)
                    .map((image: any, index: number) => (
                      <motion.div
                        key={image._key}
                        initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true, margin: '-100px' }}
                      >
                        <div className="w-full max-h-[300px] sm:max-h-[415px] overflow-hidden rounded-lg">
                          <img
                            className="w-full h-full object-cover"
                            alt={`Gallery image ${index + 1}`}
                            src={urlFor(image.asset).url()}
                          />
                        </div>
                      </motion.div>
                    ))}
                </div>
              </SectionWrapper>

              {/* Second row of images */}
              {imagesBlock.images.length > 2 && (
                <SectionWrapper className="w-full p-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    {imagesBlock.images
                      .slice(2, 4)
                      .map((image: any, index: number) => (
                        <motion.div
                          key={image._key}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: index * 0.4 }}
                          viewport={{ once: true, margin: '-100px' }}
                          className={
                            index === 0 ? 'w-full sm:w-1/4' : 'w-full sm:w-3/4'
                          }
                        >
                          <div className="w-full max-h-[300px] sm:max-h-[415px] overflow-hidden rounded-lg">
                            <img
                              className="w-full h-full object-cover"
                              alt={`Gallery image ${index + 3}`}
                              src={urlFor(image.asset).url()}
                            />
                          </div>
                        </motion.div>
                      ))}
                  </div>
                </SectionWrapper>
              )}
            </>
          )}

          {/* Testimonials could be implemented here */}
          {testimonialBlock && <TestimonialsSection data={testimonialBlock} />}
          {/* CTA Section */}
          {ctaSectionBlock && (
            <SectionWrapper>
              <ContactUsSection data={CTATwoButtons} />
            </SectionWrapper>
          )}
        </main>
      </div>
    </div>
  );
}
