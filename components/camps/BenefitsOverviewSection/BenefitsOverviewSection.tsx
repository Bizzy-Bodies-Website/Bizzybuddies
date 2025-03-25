// import React from "react";

// export const BenefitsOverviewSection = () => {
//   // Data for benefits divs to enable mapping
//   const benefits = [
//     {
//       title: "FRIENDSHIP",
//       description:
//         "We bring children together from all walks of life and allow them to form friendships via sport in an organic way.",
//     },
//     {
//       title: "SOCIAL SKILLS",
//       description:
//         "As we bring children from all walks of life together, your child's social skills will develop and grow with us.",
//     },
//     {
//       title: "CONFIDENCE",
//       description:
//         "At Bizzy Buddies, our coaches aim to bring your child out of their shell and flourish with the help of sport.",
//     },
//     {
//       title: "COMMUNICATION",
//       description:
//         "We allow your child to develop new ways to communicate, be that expressing themselves through sports or 1v1 chats.",
//     },
//   ];

//   return (
//     <section
//     style={{
//       backgroundImage: "url('/assets/bg.svg')",
//       backgroundSize: "cover",
//       backgroundPosition: "center",
//       backgroundRepeat: "no-repeat",
//       backgroundColor: "#FF0000",
//     }}
//      className="w-full py-16 bg-bb-red bg-cover relative">
//       <div className="container mx-auto px-4">
//         {/* Header content */}
//         <div className="flex flex-col items-center gap-4 mb-24">
//           <h2 className="font-desktop-title-headline-2 text-[length:var(--desktop-title-headline-2-font-size)] text-center tracking-[var(--desktop-title-headline-2-letter-spacing)] leading-[var(--desktop-title-headline-2-line-height)] text-white max-w-[861px]">
//             WE ARE NOT JUST ANOTHER SPORTS COACHING COMPANY
//           </h2>
//           <p className="font-desktop-title-subheading-2 text-[length:var(--desktop-title-subheading-2-font-size)] text-center tracking-[var(--desktop-title-subheading-2-letter-spacing)] leading-[var(--desktop-title-subheading-2-line-height)] text-white max-w-[574px]">
//             Here at Bizzy Buddies we help children develop vital skills needed
//             for all walks of life:
//           </p>
//         </div>

//         {/* Benefits divs */}
//         <div className="flex flex-wrap justify-center gap-12">
//           {benefits.map((benefit, index) => (
//             <div key={index} className="bg-transparent border-none w-64">
//               <div className="flex flex-col items-center gap-2.5 p-0">
//                 <h3 className="font-desktop-title-headline-5 text-[length:var(--desktop-title-headline-5-font-size)] text-center tracking-[var(--desktop-title-headline-5-letter-spacing)] leading-[var(--desktop-title-headline-5-line-height)] text-white whitespace-nowrap">
//                   {benefit.title}
//                 </h3>
//                 <p className="font-desktop-body-body-copy-1 text-[length:var(--desktop-body-body-copy-1-font-size)] text-center tracking-[var(--desktop-body-body-copy-1-letter-spacing)] leading-[var(--desktop-body-body-copy-1-line-height)] text-white">
//                   {benefit.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

"use client"

import React, { useState } from 'react';
import { MapPin, Info, ChevronDown, ChevronUp } from "lucide-react";

// Define the structure of a section
interface EventSection {
  key: string;
  title: string;
  icon: React.ReactNode;
  content: string;
}

// Define the type for expanded sections state
type ExpandedSections = {
  [key: string]: boolean;
}

export const BenefitsOverviewSection = () => {
  // Sections data
  const sections: EventSection[] = [
    {
      key: 'location',
      title: 'Location',
      icon: <MapPin className="w-5 h-5 text-purple-600" />,
      content: 'Chiswick House and Gardens, Cricket Ground and Pavilion, Staveley Road, W4 3ES. If you ever have any trouble finding us or need more information on location, please call 02078460099.'
    },
    {
      key: 'whatToBring',
      title: 'What to Bring',
      icon: <Info className="w-5 h-5 text-purple-600" />,
      content: 'You will need to provide snacks and a water bottle (packed lunch if doing a full day).'
    },
    {
      key: 'whatToWear',
      title: 'What to Wear',
      icon: <Info className="w-5 h-5 text-purple-600" />,
      content: 'Please send children in loose clothing and appropriate footwear for sporting activities.'
    },
    {
      key: 'noNutsPolicy',
      title: 'No Nuts Policy',
      icon: <Info className="w-5 h-5 text-purple-600" />,
      content: 'We have a "no nuts" policy, so please ensure any food sent down does not contain nuts.'
    },
    {
      key: 'adverseWeather',
      title: 'Adverse Weather',
      icon: <Info className="w-5 h-5 text-purple-600" />,
      content: 'We have access to indoor facilities should there be adverse weather conditions.'
    }
  ];

  // Dynamically generate initial expanded state
  const initialExpandedState: ExpandedSections = sections.reduce((acc, section) => {
    acc[section.key] = true;
    return acc;
  }, {} as ExpandedSections);

  // State to manage section expansions
  const [expandedSections, setExpandedSections] = useState<ExpandedSections>(initialExpandedState);

  // Toggle section expansion
  const toggleSection = (section: string): void => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="max-w-xl mx-auto bg-white  rounded-lg overflow-hidden py-10">
      {sections.map((section) => (
        <div 
          key={section.key} 
          className="mb-5 bg-[#FDEFE080]"
        >
          <button 
            onClick={() => toggleSection(section.key)}
            className="w-full flex items-cente p-4  transition-colors text-left"
          >
            {/* {section.icon} */}
            <h3 className=" font-desktop-title-headline-3a font-semibold text-gray-800 flex-grow">{section.title}</h3>
            {expandedSections[section.key] ? (
              <ChevronUp className="w-5 h-5 text-black cursor-pointer" />
            ) : (
              <ChevronDown className="w-5 h-5 text-black cursor-pointer" />
            )}
          </button>
          {expandedSections[section.key] && (
            <div className="px-4 pb-4 text-sm text-gray-600">
              {section.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
