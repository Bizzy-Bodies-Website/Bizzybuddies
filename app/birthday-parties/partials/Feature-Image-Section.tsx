import React from 'react'
import Image from 'next/image'
import Building1 from '@/public/assets/b1.png'
import Building2 from '@/public/assets/b2.png'

function FeatureImageSection() {
    return (
        <div>
            <div className="w-full bg-white py-12 md:py-16 lg:py-20 flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 mb-4">
                    PARTIES TAILORED TO YOU
                </h1>
                <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
                    We ensure the party is planned specifically to your needs
                </p>
            </div>

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
        </div>
    )
}

export default FeatureImageSection;