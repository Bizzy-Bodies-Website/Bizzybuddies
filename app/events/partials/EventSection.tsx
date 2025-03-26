"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PastEventDetail from "./PastEvents"

type Event = {
    id: number
    title: string
    date: string
    category: string
    description: string
    image: string
}

const eventImages = [
    {
        id: 1,
        src: "/assets/four.svg",
        alt: "Child in pink jersey playing football",
    },
    {
        id: 2,
        src: "/assets/one.svg",
        alt: "Football match in progress",
    },
    {
        id: 3,
        src: "/assets/two.svg",
        alt: "Children playing football",
    },
    {
        id: 4,
        src: "/assets/three.svg",
        alt: "Football training session",
    },
]
export default function EventsSection() {
    const [activeTab, setActiveTab] = useState("current")

    const currentEvents: Event[] = [
        {
            id: 1,
            title: "HALLOWEEN SPECTACULAR",
            date: "20th June 2021",
            category: "EVENT",
            description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
            image: "/assets/a2.svg",
        },
        {
            id: 2,
            title: "SUMMER SPORTS DAY",
            date: "19th July 2021",
            category: "EVENT",
            description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
            image: "/assets/a2.svg",
        },
        {
            id: 3,
            title: "BONFIRE NIGHT",
            date: "1st August 2021",
            category: "FOOTBALL CAMP",
            description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
            image: "/assets/a2.svg",
        },
        {
            id: 4,
            title: "SPOOKY SKILLS",
            date: "20th June 2021",
            category: "EVENT",
            description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
            image: "/assets/a2.svg",
        },
        {
            id: 5,
            title: "EASTER FUNDAY",
            date: "19th July 2021",
            category: "EVENT",
            description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
            image: "/assets/a2.svg",
        },
        {
            id: 6,
            title: "FAMILY SPORTS",
            date: "1st August 2021",
            category: "FOOTBALL CAMP",
            description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
            image: "/assets/a2.svg",
        },
    ]

    const pastEvents: Event[] = [
        {
            id: 7,
            title: "WINTER SPORTS FESTIVAL",
            date: "15th December 2020",
            category: "EVENT",
            description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
            image: "/assets/a2.svg",
        },
        {
            id: 8,
            title: "SPRING TOURNAMENT",
            date: "5th April 2020",
            category: "FOOTBALL CAMP",
            description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
            image: "/assets/a2.svg",
        },
        {
            id: 9,
            title: "SUMMER CAMP 2020",
            date: "10th August 2020",
            category: "FOOTBALL CAMP",
            description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
            image: "/assets/a2.svg",
        },
    ]

    const events = activeTab === "current" ? currentEvents : pastEvents

    return (
        <div className="max-w-6xl mx-auto px-4 py-16">
            <div className="flex justify-center mb-8">
                <Tabs defaultValue="current" className="w-full  bg-white" onValueChange={setActiveTab}>
                    <TabsList className="grid w-full grid-cols-2 bg-white max-w-md items-center justify-center mx-auto">
                        <TabsTrigger
                            value="current"
                            className={`rounded-full py-2 px-6 data-[state=active]:bg-[#FF0000] data-[state=active]:text-white`}
                        >
                            Current Events
                        </TabsTrigger>
                        <TabsTrigger
                            value="past"
                            className={`rounded-full py-2 px-6 data-[state=active]:bg-[#FF0000] data-[state=active]:text-white`}
                        >
                            Past Events
                        </TabsTrigger>
                    </TabsList>

                    <h2 className="text-4xl font-bold text-center my-12">
                        {activeTab === "current" ? "CURRENT EVENTS" : "PAST EVENTS"}
                    </h2>

                    <TabsContent value="current">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {events.map((event) => (
                                <div key={event.id} className="flex flex-col">
                                    <div className="relative h-64 mb-6">
                                        <Image
                                            src={event.image || "/placeholder.svg"}
                                            alt={event.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="text-sm text-gray-500 uppercase mb-6">{event.category}</div>
                                    <h3 className="text-xl font-bold mb-6">{event.title}</h3>
                                    <div className="text-sm text-gray-500 mb-6">{event.date}</div>
                                    <p className="text-gray-700">{event.description}</p>
                                </div>
                            ))}
                        </div>
                    </TabsContent>
                    <TabsContent value="past">
                        <PastEventDetail title="BONFIRE NIGHT" date="1ST AUGUST 2021" images={eventImages} />
                    </TabsContent>
                </Tabs>
            </div>


        </div>
    )
}

