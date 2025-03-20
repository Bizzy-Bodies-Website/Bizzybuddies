import React from "react";
// import Image from "next/image";

export const IntroductionSection = () => {
  return (
    <section className="w-full py-16">
      <div className="w-full bg-bb-red overflow-hidden border-0">
        <div className="p-0 relative">
          {/* <Image
            className="w-full h-full object-cover"
            alt="Sports coaching background"
            src=""
            width={1440}
            height={583}
          /> */}

          <div className="absolut inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center gap-4 text-white max-w-3xl">
              <h2 className="font-desktop-title-headline-2 text-[length:var(--desktop-title-headline-2-font-size)] text-center tracking-[var(--desktop-title-headline-2-letter-spacing)] leading-[var(--desktop-title-headline-2-line-height)]">
                FOOTBALL COACHING TO SHAPE <br />
                THEIR FUTURE
              </h2>

              <p className="font-desktop-title-subheading-2 text-[length:var(--desktop-title-subheading-2-font-size)] text-center tracking-[var(--desktop-title-subheading-2-letter-spacing)] leading-[var(--desktop-title-subheading-2-line-height)]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br /> In viverra metus sit amet neque sodales, at sodales ex
                pretium
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
