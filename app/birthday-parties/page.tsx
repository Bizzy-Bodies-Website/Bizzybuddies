'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { GreetingsSection } from './partials/Greetings';
import FeatureImageSection from './partials/Feature-Image-Section';
import PartiesOffer from './partials/Parties-Offer';
import PricingSection from './partials/Pricing';
import TestimonialsSection from './partials/Testimonial-Section';
import BookParty from './partials/BookAParty';
import client, { urlFor } from '@/sanity';

interface HeroBlock {
  _type: 'heroBlock';
  _key: string;
  title: string;
  subtitle: string;
  backgroundImage?: {
    _type: 'image';
    asset: {
      _ref: string;
      _type: 'reference';
    };
  };
}

interface HomeMoreSectionBlock {
  _type: 'homeMoreSectionBlock';
  _key: string;
  title: string;
  subtitle: string;
}

interface TwoImagesSectionBlock {
  _type: 'twoImagesSectionBlock';
  _key: string;
  title: string;
  description: string;
  images: Array<{
    _key: string;
    _type: 'image';
    asset: {
      _ref: string;
      _type: 'reference';
    };
  }>;
}

interface OfferItem {
  _key: string;
  _type: 'offerItem';
  title: string;
  label: string;
  description: string;
  image: {
    _type: 'image';
    asset: {
      _ref: string;
      _type: 'reference';
    };
  };
}

interface WhatWeOfferBlock {
  _type: 'whatWeOfferBlock';
  _key: string;
  title: string;
  description: string;
  offers: OfferItem[];
}

interface PartyPackageBlock {
  _type: 'partyPakageBlock';
  _key: string;
  title: string;
  description: string;
  price: number;
  features: string[];
  additionalInfo: string;
  image: {
    _type: 'image';
    asset: {
      _ref: string;
      _type: 'reference';
    };
  };
}

interface ImagesBlock {
  _type: 'imagesBlock';
  _key: string;
  images: Array<{
    _key: string;
    _type: 'image';
    asset: {
      _ref: string;
      _type: 'reference';
    };
  }>;
}

interface TestimonialItem {
  _key: string;
  quote: string;
  clientName: string;
}

interface TestimonialBlock {
  _type: 'testimonialBlock';
  _key: string;
  testimonialsList: TestimonialItem[];
}

interface CTASectionBlock {
  _type: 'CTASectionBlock';
  _key: string;
  title: string;
  description: string;
  buttonText: string;
}

interface PageData {
  _id: string;
  _type: 'page';
  title: string;
  contentBlocks: Array<
    | HeroBlock
    | HomeMoreSectionBlock
    | TwoImagesSectionBlock
    | WhatWeOfferBlock
    | PartyPackageBlock
    | ImagesBlock
    | TestimonialBlock
    | CTASectionBlock
  >;
}

export default function BirthdayPartiesPage() {
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `*[_type == "page" && _id == "09846994-12db-4cd0-a787-5a06c5b12129"][0]`;
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

  // Helper function to find first block of a specific type
  const findBlock = <T extends PageData['contentBlocks'][number]>(
    type: T['_type']
  ): T | undefined => {
    return pageData.contentBlocks.find((block) => block._type === type) as
      | T
      | undefined;
  };

  // Extract specific blocks
  const heroBlock = findBlock<HeroBlock>('heroBlock');
  const homeMoreSection = findBlock<HomeMoreSectionBlock>(
    'homeMoreSectionBlock'
  );
  const twoImagesSection = findBlock<TwoImagesSectionBlock>(
    'twoImagesSectionBlock'
  );
  const whatWeOffer = findBlock<WhatWeOfferBlock>('whatWeOfferBlock');
  const partyPackage = findBlock<PartyPackageBlock>('partyPakageBlock');
  const imagesBlock = findBlock<ImagesBlock>('imagesBlock');
  const testimonialBlock = findBlock<TestimonialBlock>('testimonialBlock');
  const ctaBlock = findBlock<CTASectionBlock>('CTASectionBlock');

  console.log(
    'pageData',
    // pageData,
    // heroBlock,
    // homeMoreSection,
    // twoImagesSection,
    // whatWeOffer,
    // partyPackage,
    // imagesBlock,
    testimonialBlock
    // ctaBlock
  );

  return (
    <div>
      <div className="bg-white flex flex-col items-center w-full">
        <div className="bg-white w-full relative">
          <main className="w-full">
            {/* Hero Section */}
            <section className="relative">
              <div className="h-[680px] w-full relative overflow-hidden">
                {heroBlock?.backgroundImage?.asset?._ref && (
                  <img
                    src={urlFor(heroBlock?.backgroundImage).url()}
                    alt="Birthday Party Hero"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
                  <h2 className="text-4xl md:text-6xl font-semibold text-center text-uppercase">
                    {heroBlock?.title}
                  </h2>
                  <p className="mt-4 text-xl text-center font-semibold">
                    {heroBlock?.subtitle}
                  </p>
                </div>
              </div>
              <div className="relative">
                <svg
                  className="absolute bottom-[-75px] left-0 w-full"
                  viewBox="0 0 1440 320"
                >
                  <path
                    fill="#FFFFFF"
                    d="M0,160 Q720,320 1440,160 L1440,320 L0,320Z"
                  ></path>
                </svg>
              </div>
            </section>

            {/* Introduction Section */}
            {homeMoreSection && (
              <section
                className="w-full relative bg-[#FF0000] mt-[0px] z-0 py-20"
                style={{
                  backgroundImage: "url('/assets/hero2.svg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <GreetingsSection data={homeMoreSection} />
              </section>
            )}

            {/* Two Images Section */}
            {twoImagesSection && (
              <FeatureImageSection data={twoImagesSection} />
            )}

            {/* What We Offer Section */}
            {whatWeOffer && <PartiesOffer data={whatWeOffer} />}

            {/* Pricing Section */}
            {partyPackage && (
              <div className="p-8">
                <PricingSection data={partyPackage} />
              </div>
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

            {/* Testimonials Section */}
            {testimonialBlock && (
              <TestimonialsSection data={testimonialBlock} />
            )}

            {/* CTA Section */}
            {/* {ctaBlock && <BookParty data={ctaBlock} />} */}
          </main>
        </div>
      </div>
    </div>
  );
}
