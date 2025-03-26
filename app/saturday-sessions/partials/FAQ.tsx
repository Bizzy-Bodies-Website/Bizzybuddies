"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Info } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FaqSection() {
  const [openItem, setOpenItem] = useState<string | null>("location")

  const handleToggle = (value: string) => {
    setOpenItem(openItem === value ? null : value)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-30 bg-white">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">EXTRA INFORMATION</h1>

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
              <h2 className="text-2xl font-bold">WHAT TO BRING</h2>
             
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
              <h2 className="text-2xl font-bold">PARKING</h2>
             
            </AccordionTrigger>
            <AccordionContent className="pt-4 px-2">
              <p>
                Free parking is available on-site. Please use the main car park entrance and display your session
                confirmation if provided.
              </p>
            </AccordionContent>
          </div>
        </AccordionItem>

        <AccordionItem value="location" className="border-none">
          <div className="bg-[#fdf8f1] p-4 rounded">
            <AccordionTrigger className="py-2 px-2 hover:no-underline">
              <div className="flex items-center">
                <h2 className="text-2xl font-bold mr-2">LOCATION</h2>
                
              </div>
            
            </AccordionTrigger>
            <AccordionContent className="pt-4 px-2">
              <p className="mb-4">Westminster Sports Ground, Cavendish Rd, Chiswick, London, W4 3UH</p>
              <p className="mb-6">
                If you ever have any trouble finding us or need more information on location, please call 02078460099
              </p>

              <div className="w-full h-[300px] relative rounded overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.5463286816373!2d-0.2673891!3d51.4912099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760e2b36a3b0c9%3A0x4a4a577d847a8c8!2sCavendish%20Rd%2C%20Chiswick%2C%20London%20W4%203UH!5e0!3m2!1sen!2suk!4v1648226345678!5m2!1sen!2suk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Westminster Sports Ground Map"
                  className="absolute inset-0"
                />
              </div>
            </AccordionContent>
          </div>
        </AccordionItem>

        <AccordionItem value="cancellations" className="border-none">
          <div className="bg-[#fdf8f1] p-4 rounded">
            <AccordionTrigger className="py-2 px-2 hover:no-underline">
              <h2 className="text-2xl font-bold">CANCELLATIONS</h2>
              
            </AccordionTrigger>
            <AccordionContent className="pt-4 px-2">
              <p>We understand that plans can change. Our cancellation policy is as follows:</p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>Cancellations made more than 48 hours before your session can receive a full refund</li>
                <li>Cancellations within 48 hours may be eligible for session rescheduling</li>
                <li>No-shows are not eligible for refunds or rescheduling</li>
              </ul>
              <p className="mt-4">Please contact our team directly for any cancellation requests.</p>
            </AccordionContent>
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

