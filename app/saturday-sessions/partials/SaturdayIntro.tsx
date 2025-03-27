import React from "react";
// import Image from "next/image";

export const SaturdayIntro = ({ data }: any) => {
    return (
        <section className="w-full mt-[-20px]">
            <div className="w-full bg-bb-red overflow-hidden border-0">
                <div className="p-0 relative">
                    <div className="absolut inset-0 flex items-center justify-center">
                        <div className="flex flex-col items-center gap-4 text-white max-w-3xl">
                            <h2 className="font-desktop-title-headline-2 text-[length:var(--desktop-title-headline-2-font-size)] text-center tracking-[var(--desktop-title-headline-2-letter-spacing)] leading-[var(--desktop-title-headline-2-line-height)] text-3xl md:text-6xl">
                            {data?.title}
                            </h2>

                            <p className="font-desktop-title-subheading-2 text-[length:var(--desktop-title-subheading-2-font-size)] text-center tracking-[var(--desktop-title-subheading-2-letter-spacing)] leading-[var(--desktop-title-subheading-2-line-height)] max-w-[300px]">
                            {data?.subtitle}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
