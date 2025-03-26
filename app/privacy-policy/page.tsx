"use client"

import Image from "next/image"
import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function HalloweenSpectacularPage() {
    const [openItem, setOpenItem] = useState<string | null>("location")

    const handleToggle = (value: string) => {
        setOpenItem(openItem === value ? null : value)
    }
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section with Curved Bottom */}
            <div className="relative w-full h-[600px] overflow-hidden">
                <Image
                    src="/assets/one.svg"
                    alt="Halloween pumpkin with autumn leaves"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-2">
                        THE LEGAL
                        NITTY GRITTY
                    </h1>
                    <p className="text-xl">Privacy policies, cookies policies and all things legal</p>
                </div>
                {/* <div className="absolute -top-12 left-0 right-0 h-24 bg-white rounded-t-full"></div> */}

            </div>
            <div className="relative">
                <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 300">
                    <path fill="#FFFFFF" d="M0,160 Q720,320 1440,160 L1440,320 L0,320Z"></path>
                </svg>
            </div>
            {/* Logo/Icon */}


            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-4 pb-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        PRIVACY POLICIES
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra metus sit amet neque sodales, at sodales ex pretium
                    </p>
                </div>

                <Accordion
                    type="single"
                    collapsible
                    value={openItem || undefined}
                    onValueChange={handleToggle}
                    className="space-y-4"
                >
                    <AccordionItem value="what-to-bring" className="border-none">
                        <div className="bg-[#fdf8f1] p-4 rounded">
                            <AccordionTrigger className="py-2 px-2 hover:no-underline">
                                <h2 className="text-2xl font-bold">PRIVACY</h2>

                            </AccordionTrigger>
                            <AccordionContent className="pt-4 px-2">
                                <ul className="space-y-2">
                                    <li>Comfortable clothing suitable for movement</li>
                                    <li>Water bottle</li>
                                    <li>Indoor shoes or socks</li>
                                    <li>Any required medication</li>
                                </ul>
                            </AccordionContent>
                        </div>
                    </AccordionItem>

                    <AccordionItem value="parking" className="border-none">
                        <div className="bg-[#fdf8f1] p-4 rounded">
                            <AccordionTrigger className="py-2 px-2 hover:no-underline">
                                <h2 className="text-2xl font-bold">CONFIDENTIALITY</h2>

                            </AccordionTrigger>
                            <AccordionContent className="pt-4 px-2">
                                <p>
                                    Free parking is available on-site. Please use the main car park entrance and display your session
                                    confirmation if provided.
                                </p>
                            </AccordionContent>
                        </div>
                    </AccordionItem>

                    <AccordionItem value="cookie" className="border-none">
                        <div className="bg-[#fdf8f1] p-4 rounded">
                            <AccordionTrigger className="py-2 px-2 hover:no-underline">
                                <h2 className="text-2xl font-bold">COOKIES</h2>

                            </AccordionTrigger>
                            <AccordionContent className="pt-4 px-2">
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra metus sit amet neque sodales, at sodales ex pretium Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra metus sit amet neque sodales, at sodales ex pretium
                                </p>
                            </AccordionContent>
                        </div>
                    </AccordionItem>
                </Accordion>

            </div>

        </main>
    )
}
