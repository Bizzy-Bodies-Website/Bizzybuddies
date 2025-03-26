"use client";

import React, { useState } from "react";
import { MapPin, Info, ChevronDown, ChevronUp } from "lucide-react";

interface AccordionItem {
  _key: string;
  title: string;
  content: string;
}

interface BenefitsOverviewProps {
  data?: {
    title: string;
    description?: string;
    accordionItems?: AccordionItem[];
  };
}

export const BenefitsOverviewSection: React.FC<BenefitsOverviewProps> = ({
  data,
}) => {
  console.log("BenefitsOverviewSection", data);

  const sections: AccordionItem[] = data?.accordionItems || [];

  // Generate initial expanded state (default: all expanded)
  const initialExpandedState = sections.reduce((acc, section) => {
    acc[section._key] = true;
    return acc;
  }, {} as { [key: string]: boolean });

  const [expandedSections, setExpandedSections] =
    useState<{ [key: string]: boolean }>(initialExpandedState);

  const toggleSection = (sectionKey: string): void => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }));
  };

  return (
    <div className="max-w-xl mx-auto bg-white rounded-lg overflow-hidden py-10">
      {/* <h2 className="text-xl font-bold text-gray-900 px-4">{data?.title}</h2>
      <p className="text-sm text-gray-600 px-4 mb-6">{data?.description}</p> */}
      {sections.map((section) => (
        <div key={section._key} className="mb-5 bg-[#FDEFE080]">
          <button
            onClick={() => toggleSection(section._key)}
            className="w-full flex items-center p-4 transition-colors text-left"
          >
            <h3 className="font-semibold text-gray-800 flex-grow">
              {section.title}
            </h3>
            {expandedSections[section._key] ? (
              <ChevronUp className="w-5 h-5 text-[#111111] cursor-pointer" />
            ) : (
              <ChevronDown className="w-5 h-5 text-[#111111] cursor-pointer" />
            )}
          </button>
          {expandedSections[section._key] && (
            <div className="px-4 pb-4 text-sm text-gray-600">
              {section.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
