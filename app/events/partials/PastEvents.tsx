"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

type EventImage = {
  id: number
  src: string
  alt: string
}

type PastEventDetailProps = {
  title: string
  date: string
  images: EventImage[]
}

export default function PastEventDetail({ title, date, images }: PastEventDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  const goToImage = (index: number) => {
    setCurrentImageIndex(index)
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">
        {title}- <span className="font-normal">{date}</span>
      </h1>

      {/* Main image carousel */}
      <div className="relative w-full h-[500px] mb-4">
        <Image
          src={images[currentImageIndex].src || "/placeholder.svg"}
          alt={images[currentImageIndex].alt}
          fill
          className="object-cover"
        />

        {/* Navigation buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center hover:bg-white transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center hover:bg-white transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={image.id}
            onClick={() => goToImage(index)}
            className={`flex-shrink-0 relative w-32 h-24 border-2 ${
              index === currentImageIndex ? "border-[#ee3e33]" : "border-transparent"
            }`}
          >
            <Image src={image.src || "/placeholder.svg"} alt={`Thumbnail ${index + 1}`} fill className="object-cover" />
          </button>
        ))}
      </div>

      {/* Repeat for demonstration purposes as shown in the image */}
      <h1 className="text-3xl font-bold mt-12 mb-6">
        {title}- <span className="font-normal">{date}</span>
      </h1>

      <div className="relative w-full h-[500px]">
        <Image
          src={images[currentImageIndex].src || "/placeholder.svg"}
          alt={images[currentImageIndex].alt}
          fill
          className="object-cover"
        />

        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center hover:bg-white transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center hover:bg-white transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  )
}

