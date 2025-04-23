import React from 'react'
import CardItem from './CardItem'
import { ArrowRightIcon } from 'lucide-react'
import CardItemRight from './CardItem2'
import { urlFor } from '@/sanity'

function PartiesOffer({data}: any) {
    return (
        <div>
            <div className="w-full bg-white py-12 md:pt-16 lg:pt-20 flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 mb-4 text-uppercase">
                    {data?.title}
                </h1>
            </div>

            <div className='flex flex-col'>
                <CardItem
                    imageSrc={urlFor(data?.offers[0]?.image).url()}
                    altText={data?.offers[0]?.title}
                    subtitle={data?.offers[0]?.category}
                    title={data?.offers[0]?.title}
                    description={data?.offers[0]?.description}

                />

               <CardItemRight
               imageSrc={urlFor(data?.offers[1]?.image).url()}
               altText={data?.offers[1]?.title}
               subtitle={data?.offers[1]?.category}
               title={data?.offers[1]?.title}
               description={data?.offers[1]?.description}
               />
            </div>
        </div>
    )
}

export default PartiesOffer