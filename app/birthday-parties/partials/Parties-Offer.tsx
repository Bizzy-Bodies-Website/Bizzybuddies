import React from 'react'
import CardItem from './CardItem'
import { ArrowRightIcon } from 'lucide-react'
import CardItemRight from './CardItem2'

function PartiesOffer() {
    return (
        <div>
            <div className="w-full bg-white py-12 md:pt-16 lg:pt-20 flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 mb-4 text-uppercase">
                    PARTIES WE OFFER
                </h1>
            </div>

            <div className='flex flex-col'>
                <CardItem
                    imageSrc="/assets/Oalh2MojUuk (1).png"
                    altText="Batman and Kid"
                    subtitle="SPORTS PARTIES"
                    title="Sports Parties"
                    description="We offer various sports parties, including: football, rugby, tennis, olympic fun & games, plus more. You can choose one particular sport or mix in a few. Let us know what you'd prefer and we'll provide the most suited coaches for the job. "

                />

               <CardItemRight
               imageSrc="/assets/Oalh2MojUuk (1).png"
               altText="Batman and Kid"
               subtitle="BESPOKE PARTIES"
               title="Themed and Bespoke Parties"
               description="We also host themed and bespoke birthday parties. Whether you'd like a superhero or princess party, we've got it covered. We can source props and any other extras you may need. With specialised party coaches, your child's party will be a day to remember! "
               />
            </div>
        </div>
    )
}

export default PartiesOffer