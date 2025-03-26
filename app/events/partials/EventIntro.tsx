import React from "react";
// import Image from "next/image";

export const EventIntro = () => {
    return (
        <section className="w-full mt-[-20px]">
            <div className="w-full bg-bb-red overflow-hidden border-0">
                <div className="p-0 relative">
                    <div className="absolut inset-0 flex items-center justify-center">
                        <div className="flex flex-col items-center gap-4 text-white max-w-3xl">
                            <h2 className="font-desktop-title-headline-2 text-[length:var(--desktop-title-headline-2-font-size)] text-center tracking-[var(--desktop-title-headline-2-letter-spacing)] leading-[var(--desktop-title-headline-2-line-height)] text-3xl md:text-6xl">
                                We don't just do sports coaching, we also host events too!
                            </h2>

                            <p className="font-desktop-title-subheading-2 text-[length:var(--desktop-title-subheading-2-font-size)] text-center tracking-[var(--desktop-title-subheading-2-letter-spacing)] leading-[var(--desktop-title-subheading-2-line-height)] max-w-[300px]">
                                From sports days to sports entertainment,
                                you can hire us for events
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
