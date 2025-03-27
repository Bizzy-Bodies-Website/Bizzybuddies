"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Info } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FaqSection({ data }: any) {
  const [openItem, setOpenItem] = useState<string | null>("location")

  const handleToggle = (value: string) => {
    setOpenItem(openItem === value ? null : value)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-30 bg-white">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">{data?.title}</h1>

      <Accordion
        type="single"
        collapsible
        value={openItem || undefined}
        onValueChange={handleToggle}
        className="space-y-4"
      >
        {data?.accordionItems?.map((item: any) => (
          <AccordionItem key={item._key} value={item.title.toLowerCase().replace(/\s+/g, "-")} className="border-none">
            <div className="bg-[#fdf8f1] p-4 rounded">
              <AccordionTrigger className="py-2 px-2 hover:no-underline">
                <h2 className="text-2xl font-bold">{item.title.toUpperCase()}</h2>
              </AccordionTrigger>
              <AccordionContent className="pt-4 px-2">
                {item.mapEmbedUrl ? (
                  <>
                    <p className="mb-4">{item.content}</p>
                    <div className="w-full h-[300px] relative rounded overflow-hidden">
                      <iframe
                        src={item.mapEmbedUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={item.title}
                        className="absolute inset-0"
                      />
                    </div>
                  </>
                ) : (
                  <p>{item.content}</p>
                )}
              </AccordionContent>
            </div>
          </AccordionItem>
        ))}
      </Accordion>

    </div>
  )
}

