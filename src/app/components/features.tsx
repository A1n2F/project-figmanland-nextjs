import Image from "next/image";
import { FeatureCard } from "./featuresCard";

import featureImg1 from "../../../public/featuresIcon1.svg"
import featureImg2 from "../../../public/featuresIcon2.svg"
import featureImg3 from "../../../public/featuresIcon3.svg"
import play from "../../../public/play.png"

export function Features() {
    return (
        <section className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-5xl">Features</h1>

                <p className="px-1 lg:px-0 text-2xl text-second-text max-w-xl text-center mt-5">
                    Most calendars are designed for teams. Slate is designed for freelancers
                </p>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-14 mt-20">
                <FeatureCard 
                    image={featureImg1}
                    title="OpenType features"
                    description="Slate helps you see how many more days you need to work to reach your financial goal."
                />

                <FeatureCard 
                    image={featureImg2}
                    title="Design with real data"
                    description="Slate helps you see how many more days you need to work to reach your financial goal."
                />

                <FeatureCard 
                    image={featureImg3}
                    title="Fastest way to take action"
                    description="Slate helps you see how many more days you need to work to reach your financial goal."
                />
            </div>

            <div className="mt-20">
                <Image src={play} alt="" />
            </div>
        </section>
    )
}