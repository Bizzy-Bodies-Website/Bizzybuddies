import Image from "next/image"
import { Check } from "lucide-react"

export default function PricingSection() {
    return (
        <section className="w-full bg-[#e93323] relative overflow-hidden py-16 md:p-20 bg-[url('/assets/bg1.svg')] bg-cover bg-center bg-no-repeat">
            {/* Background circles */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-[#ef5042] opacity-50 -translate-x-1/2 -translate-y-1/4"></div>
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full bg-[#ef5042] opacity-50 translate-y-1/4"></div>

            <div className="container mx-auto px-4 relative">
                <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-8 items-center">
                    {/* Left column - Pricing content */}
                    <div className="text-white">
                        <div className="flex items-center mb-4">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight">STANDARD PARTY PACKAGE</h2>
                        </div>

                        <p className="text-[14px] mb-8">Get the party started with our standard party package!</p>

                        <div className="flex items-start mb-8 relative px-6">
                            {/* Price Container */}
                            <div className="relative">
                                <span className="text-white text-3xl font-bold absolute top-1 -left-6">£</span>
                                <span className="text-white text-7xl md:text-8xl font-bold">299</span>
                            </div>

                            {/* "All included" text positioned at the bottom */}
                            <span className="text-white text-sm ml-2 self-end">all included*</span>
                        </div>


                        <ul className="space-y-6 max-w-md">
                            <li className="flex items-center">
                                <div className="mr-4 bg-white rounded-full p-1 flex-shrink-0">
                                    <Check className="h-4 w-4 text-[#e93323]" />
                                </div>
                                <div className="flex items-center">
                                    <span className="text-sm">2 specialised party coaches for upto 20 children</span>

                                </div>
                            </li>

                            <li className="flex items-start">
                                <div className="mr-4 bg-white rounded-full p-1 flex-shrink-0">
                                    <Check className="h-4 w-4 text-[#e93323]" />
                                </div>
                                <span className="text-sm">All sports equipment</span>
                            </li>

                            <li className="flex items-start">
                                <div className="mr-4 bg-white rounded-full p-1 flex-shrink-0">
                                    <Check className="h-4 w-4 text-[#e93323]" />
                                </div>
                                <div className="flex items-center">
                                    <span className="text-sm">
                                        2 hour party (1.5 hours of fun and games, plus 30 minutes child supervision for cake presentation
                                        etc)
                                    </span>

                                </div>
                            </li>

                            <li className="flex items-start">
                                <div className="mr-4 bg-white rounded-full p-1 flex-shrink-0">
                                    <Check className="h-4 w-4 text-[#e93323]" />
                                </div>
                                <div className="flex items-center">
                                    <span className="text-sm">
                                        Extra add-ons available upon request (medals, tables, themed costumes and more)
                                    </span>
                                </div>
                            </li>
                        </ul>

                        <div className="mt-20 flex justify-end">
                            <div className="flex items-center">
                                <span className="text-sm italic">*Other extras are subject to additional cost</span>

                            </div>
                        </div>
                    </div>

                    {/* Right column - Image */}
                    <div className="relative">
                        <div className="relative hidden md:block">
                            <div className="relative ml-4 md:ml-8">
                                {/* White background that extends to the right */}
                                <div className="absolute top-5 left-10 w-[calc(85%)] h-full bg-white"></div>

                                {/* Image positioned to the left side of the white background */}
                                <div className="relative w-[90%] h-[350px] md:h-[400px] z-10">
                                    <Image
                                        src={"/assets/bp.png"}
                                        alt="Party coaches with children"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

