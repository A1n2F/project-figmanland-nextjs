import Image from "next/image";

import mappin from "../../../public/mappin.svg"
import phonepin from "../../../public/phonepin.svg"
import emailpin from "../../../public/emailpin.svg"
import map from "../../../public/map.png"

import twitter from "../../../public/twitter.svg"
import facebook from "../../../public/facebook.svg"
import link from "../../../public/link.svg"


export function ContactUs() {
    return (
        <section>
            <div className="flex flex-col items-center justify-center mb-20">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-5xl text-primary-text">Contact Us</h1>
                    <p className="px-1 lg:px-0 text-2xl text-second-text mt-5 max-w-[532px] text-center">
                        Most calendars are designed for teams. Slate is designed for freelancers
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-30 mt-16">
                    <div className="w-[453px] h-[670px] border border-gray-300 rounded-xl px-12 py-12">
                        <div className="flex flex-col items-center justify-center space-y-12">
                            <h1 className="text-2xl font-bold">Contact Us</h1>

                            <input type="text" placeholder="Your Name" className="w-[353px] h-14 bg-gray-200 rounded-full pl-6" />

                            <input type="text" placeholder="Your Email" className="w-[353px] h-14 bg-gray-200 rounded-full pl-6" />

                            <input type="text" placeholder="Your Message" className="w-[353px] h-[193px] bg-gray-200 rounded-xl pl-6 pb-30" />

                            <button className="px-16 py-4 bg-primary rounded-full text-white
                            hover:bg-primary-hover transition-colors cursor-pointer">
                                Send
                            </button>
                        </div>
                    </div>

                    <div>
                        <div className="flex flex-col lg:flex-row items-center justify-center gap-7">
                            <span className="flex flex-col items-center justify-center">
                                <Image src={mappin} alt="" />
                                <p className="text-second-text max-w-72 text-center">6386 Spring St undefined Anchorage, Georgia 12473 United States</p>
                            </span>

                            <span className="flex flex-col items-center justify-center">
                                <Image src={phonepin} alt="" />
                                <p className="text-second-text">(843) 555-0130</p>
                            </span>

                            <span className="flex flex-col items-center justify-center">
                                <Image src={emailpin} alt="" />
                                <p className="text-second-text">willie.jennings@example.com</p>
                            </span>
                        </div>

                        <div className="hidden lg:flex items-center justify-center mt-14">
                            <Image src={map} alt="" />
                        </div>

                        <div className="flex items-center justify-center gap-6 mt-14">
                            <Image src={twitter} alt="" className="hover:scale-125 bg-primary w-12 h-12 rounded-full transition-all cursor-pointer" />
                            <Image src={facebook} alt="" className="hover:scale-125 bg-primary w-12 h-12 rounded-full transition-all cursor-pointer"/>
                            <Image src={link} alt="" className="hover:scale-125 bg-primary w-12 h-12 rounded-full transition-all cursor-pointer"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}