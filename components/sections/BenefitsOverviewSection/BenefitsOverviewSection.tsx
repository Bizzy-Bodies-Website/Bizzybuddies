import React from "react";

export const BenefitsOverviewSection = () => {
  // Data for benefits divs to enable mapping
  const benefits = [
    {
      title: "FRIENDSHIP",
      description:
        "We bring children together from all walks of life and allow them to form friendships via sport in an organic way.",
    },
    {
      title: "SOCIAL SKILLS",
      description:
        "As we bring children from all walks of life together, your child's social skills will develop and grow with us.",
    },
    {
      title: "CONFIDENCE",
      description:
        "At Bizzy Buddies, our coaches aim to bring your child out of their shell and flourish with the help of sport.",
    },
    {
      title: "COMMUNICATION",
      description:
        "We allow your child to develop new ways to communicate, be that expressing themselves through sports or 1v1 chats.",
    },
  ];

  return (
    <section className="w-full py-16 bg-bb-red bg-cover relative">
      <div className="container mx-auto px-4">
        {/* Header content */}
        <div className="flex flex-col items-center gap-4 mb-24">
          <h2 className="font-desktop-title-headline-2 text-[length:var(--desktop-title-headline-2-font-size)] text-center tracking-[var(--desktop-title-headline-2-letter-spacing)] leading-[var(--desktop-title-headline-2-line-height)] text-white max-w-[861px]">
            WE ARE NOT JUST ANOTHER SPORTS COACHING COMPANY
          </h2>
          <p className="font-desktop-title-subheading-2 text-[length:var(--desktop-title-subheading-2-font-size)] text-center tracking-[var(--desktop-title-subheading-2-letter-spacing)] leading-[var(--desktop-title-subheading-2-line-height)] text-white max-w-[574px]">
            Here at Bizzy Buddies we help children develop vital skills needed
            for all walks of life:
          </p>
        </div>

        {/* Benefits divs */}
        <div className="flex flex-wrap justify-center gap-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-transparent border-none w-64">
              <div className="flex flex-col items-center gap-2.5 p-0">
                <h3 className="font-desktop-title-headline-5 text-[length:var(--desktop-title-headline-5-font-size)] text-center tracking-[var(--desktop-title-headline-5-letter-spacing)] leading-[var(--desktop-title-headline-5-line-height)] text-white whitespace-nowrap">
                  {benefit.title}
                </h3>
                <p className="font-desktop-body-body-copy-1 text-[length:var(--desktop-body-body-copy-1-font-size)] text-center tracking-[var(--desktop-body-body-copy-1-letter-spacing)] leading-[var(--desktop-body-body-copy-1-line-height)] text-white">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
