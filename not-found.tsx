import Image from "next/image"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/404.png"
          alt="Soccer goalkeeper catching a ball"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/20 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-start justify-center h-full max-w-3xl px-6 md:px-12">
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-4">
          OOPS, YOU
          <br />
          MISSED
          <br />
          THE GOAL.
        </h1>

        <p className="text-white text-lg md:text-xl mb-8">
          The page you were looking for seems to have been sent off, please try another page.
        </p>

        <Link
          href="/"
          className="bg-white text-black font-medium px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
        >
          Homepage
        </Link>
      </div>
    </div>
  )
}

