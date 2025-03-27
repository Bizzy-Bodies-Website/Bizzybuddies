export default function ContactSection({ data }: any) {
    return (
      <div className="relative overflow-hidden text-white py-16 md:py-24" style={{ backgroundImage: `url("/assets/bg1.svg")` }}>
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-1/2 h-full bg-[#f05549] opacity-70 -rotate-12 transform origin-top-left"></div>
        <div className="absolute top-0 right-0 w-3/4 h-full rounded-full bg-[#f05549] opacity-60 -translate-x-1/4"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-3/4 rounded-full bg-[#f05549] opacity-50 translate-x-1/4 translate-y-1/4"></div>
  
        <div className="relative max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left column */}
            <div>
              <p className="text-xl mb-2">{data?.subtitle}</p>
              <h2 className="text-5xl md:text-7xl font-bold leading-tight">
                {data?.title}
              </h2>
            </div>
  
            {/* Right column */}
            <div className="space-y-8">
              <p className="text-xl leading-relaxed">
                {data?.description}
              </p>
  
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-block bg-white text-[#ee3e33] font-medium py-3 px-8 rounded-full text-center hover:bg-gray-100 transition-colors"
                >
                  {data?.buttons[0].text}
                </a>
                <a
                  href="#about"
                  className="inline-block border-2 border-white text-white font-medium py-3 px-8 rounded-full text-center hover:bg-white/10 transition-colors"
                >
                  {data?.buttons[1].text}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  