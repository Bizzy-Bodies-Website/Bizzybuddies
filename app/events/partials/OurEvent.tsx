
import React from 'react'
import Image from 'next/image'

function OurEvent() {
    return (
        <div className='w-full py-12'>
            <div className='flex flex-col items-center text-center align-center py-16'>
            <h2 className='text-5xl md:text-7xl font-bold leading-tight'>OUR EVENTS</h2>
                <p className='font-desktop-title-label text-[#636362] tracking-wide text-sm sm:text-base md:text-lg'>Check out some of our sporting events below that you might be interested in</p>
            </div>

            <section className="w-full">
                {/* First Row - Two Images */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Image
                        className="w-full h-auto sm:h-[300px] md:h-[415px] object-cover"
                        alt="Batman Cosplay"
                        src="/assets/one.svg"
                        width={500}
                        height={415}
                    />
                    <Image
                        className="w-full h-auto sm:h-[300px] md:h-[415px] object-cover"
                        alt="Soccer Goal"
                        src="/assets/four.svg"
                        width={500}
                        height={415}
                    />
                </div>

                {/* Second Row - Two Images in a Flexbox */}
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                    <Image
                        className="w-full sm:w-1/4 h-auto sm:h-[300px] md:h-[415px] object-cover"
                        alt="Batman and Kid"
                        src="/assets/two.svg"
                        width={500}
                        height={415}
                    />
                    <Image
                        className="w-full sm:w-3/4 h-auto sm:h-[300px] md:h-[415px] object-cover"
                        alt="Kids in Superhero Masks"
                        src="/assets/three.svg"
                        width={500}
                        height={415}
                    />
                </div>
            </section>
        </div>
    )
}

export default OurEvent