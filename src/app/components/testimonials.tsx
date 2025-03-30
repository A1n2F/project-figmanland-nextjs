import Image from "next/image";

import ibm from "../../../public/imb.svg"
import personIbm from "../../../public/personibm.png"

export function Testimonials() {
    return (
        <section className="mt-30">
            <div className="flex flex-col items-center justify-content">
                <h1 className="text-5xl text-primary-text mb-20">Testimonials</h1>

                <Image src={ibm} alt="" />

                <p className="text-xl text-second-text max-w-4xl text-center my-14">
                    Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.
                </p>

                <div className="flex items-center gap-3">
                    <Image src={personIbm} alt="" />

                    <span>
                        <h2 className="text-lg text-second-text">Organize across</h2>
                        <p className="text-gray-500">Ui designer</p>
                    </span>
                </div>

                <div>

                <button className="px-16 py-4 bg-primary rounded-full text-white mt-20
                hover:bg-primary-hover transition-colors cursor-pointer">
                    More Testimonials
                </button>
                </div>
            </div>
        </section>
    )
}