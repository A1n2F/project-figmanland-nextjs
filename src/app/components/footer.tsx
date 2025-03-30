import Image from "next/image"

import mappin from "../../../public/mappin.svg"
import phonepin from "../../../public/phonepin.svg"
import twitter from "../../../public/twitter.svg"
import facebook from "../../../public/facebook.svg"
import link from "../../../public/link.svg"

const pages = [
    "Home",
    "Product",
    "Pricing",
    "About",
    "Contact",
]

const tomothy = [
    "Eleanor Edwards",
    "Ted Robertson",
    "Annette Russell",
    "Jennie Mckinney",
    "Gloria Richards",
]

const jane = [
    "Philip Jones",
    "Product",
    "Colleen Russell",
    "Marvin Hawkins",
    "Bruce Simmmons",
]

export function Footer() {
    return (
        <section className="bg-dark py-20">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-40">
                <div className="flex flex-col lg:flex-row items-center gap-30">
                    <span className="flex flex-col items-center justify-center space-y-4 text-white">
                        <h2 className="text-2xl font-bold">Pages</h2>
                        {pages.map((item, index) => (
                            <a key={index} href="#" className="text-white">{item}</a>
                        ))}
                    </span>

                    <span className="flex flex-col items-center justify-center space-y-4 text-white">
                        <h2 className="text-2xl font-bold">Tomothy</h2>
                        {tomothy.map((item, index) => (
                            <a key={index} href="#" className="text-white">{item}</a>
                        ))}
                    </span>

                    <span className="flex flex-col items-center justify-center space-y-4 text-white">
                        <h2 className="text-2xl font-bold">Jane Black</h2>
                        {jane.map((item, index) => (
                            <a key={index} href="#" className="text-white">{item}</a>
                        ))}
                    </span>
                </div>

                <div className="space-y-8">
                    <span className="flex items-center gap-3 text-white">
                        <Image src={mappin} alt="" />
                        <p>7480 Mockingbird Hill undefined</p>
                    </span>

                    <span className="flex items-center gap-3 text-white">
                        <Image src={phonepin} alt="" />
                        <p>(239) 555-0108</p>
                    </span>

                    <span className="flex items-center gap-3 text-white">
                        <Image src={twitter} alt="" className="hover:scale-125 transition-all cursor-pointer"/>
                        <Image src={facebook} alt="" className="hover:scale-125 transition-all cursor-pointer"/>
                        <Image src={link} alt="" className="hover:scale-125 transition-all cursor-pointer"/>
                    </span>
                </div>
            </div>
        </section>
    )
}