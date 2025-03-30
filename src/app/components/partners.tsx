import Image from "next/image";

import google from "../../../public/google.svg"
import amazon from "../../../public/amazon.svg"
import uber from "../../../public/uber1.svg"
import dropbox from "../../../public/dropbox.svg"
import microsoft from "../../../public/microsoft.svg"
import ibm from "../../../public/imb.svg"

export function Partiners() {
    return (
        <section className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-5xl text-primary-text">Partners</h1>
                <p className="text-2xl text-second-text max-w-lg text-center mt-4">
                    Most calendars are designed for teams. Slate is designed for freelancers
                </p>
            </div>

            <div className="flex flex-col lg:grid grid-cols-3 gap-20 mt-20">
                <div className="flex items-center justify-center w-60 h-40 border border-gray-300">
                    <Image src={ibm} alt="" />
                </div>

                <div className="flex items-center justify-center w-60 h-40 border border-gray-300">
                    <Image src={google} alt="" />
                </div>

                <div className="flex items-center justify-center w-60 h-40 border border-gray-300">
                    <Image src={amazon} alt="" />
                </div>

                <div className="hidden lg:flex items-center justify-center w-60 h-40 border border-gray-300">
                    <Image src={uber} alt="" />
                </div>

                <div className="hidden lg:flex items-center justify-center w-60 h-40 border border-gray-300">
                    <Image src={dropbox} alt="" />
                </div>

                
                <div className="hidden lg:flex items-center justify-center w-60 h-40 border border-gray-300">
                    <Image src={microsoft} alt="" />
                </div>
            </div>

            <div>
                <button className="px-16 py-4 bg-primary rounded-full text-white mt-20
                hover:bg-primary-hover transition-colors cursor-pointer">
                    Try for free
                </button>
            </div>
        </section>
    )
}