export default function SessionSchedule() {
    return (
      <div className="max-w-5xl mx-auto px-4 py-20 bg-white">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">OUR LATEST SESSION DATES</h1>
  
        <div className="bg-black text-white p-4 text-center mb-6">
          <p className="text-lg">CURRENT DATES- Saturday 17th April - Saturday 17th July</p>
        </div>
  
        <div className="grid grid-cols-3 text-center font-medium mb-2">
          <div className="p-4 bg-gray-50">TIME</div>
          <div className="p-4 bg-gray-50">AGE GROUP</div>
          <div className="p-4 bg-gray-50">PRICE</div>
        </div>
  
        {/* Mini Buddies */}
        <div className="grid grid-cols-3 text-center">
          <div className="p-4 bg-white">9am - 9:45am</div>
          <div className="p-4 bg-white">
            <div className="font-medium">MINI BUDDIES</div>
            <div>18 months - 2.5 years</div>
          </div>
          <div className="p-4 bg-white">£10 per session</div>
        </div>
  
        {/* Little Buddies */}
        <div className="grid grid-cols-3 text-center bg-gray-50">
          <div className="p-4">9am - 10:00 am</div>
          <div className="p-4 relative">
            <div className="font-medium">LITTLE BUDDIES</div>
            <div>
              3.5 years <span className="text-sm">(Nursery & Reception)</span>
            </div>
            
          </div>
          <div className="p-4">£12 per session</div>
        </div>
  
        {/* Junior Buddies */}
        <div className="grid grid-cols-3 text-center">
          <div className="p-4 bg-white">
            TBC <span className="text-sm text-gray-500">(enquire without team)</span>
          </div>
          <div className="p-4 bg-white">
            <div className="font-medium">JUNIOUR BUDDIES</div>
            <div>
              5-6 years <span className="text-sm">(year 1)</span>
            </div>
          </div>
          <div className="p-4 bg-white">N/A</div>
        </div>
  
        {/* Big Buddies */}
        <div className="grid grid-cols-3 text-center bg-gray-50">
          <div className="p-4">
            TBC <span className="text-sm text-gray-500">(enquire without team)</span>
          </div>
          <div className="p-4">
            <div className="font-medium">BIG BUDDIES</div>
            <div>
              6-8 years <span className="text-sm">(Years 2 & 3)</span>
            </div>
          </div>
          <div className="p-4">N/A</div>
        </div>

      </div>
    )
  }
  
  