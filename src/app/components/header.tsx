import Image from "next/image";

import logoImg from "../../../public/logof.png"
import twitter from "../../../public/twitter.svg"
import facebook from "../../../public/facebook.svg"
import link from "../../../public/link.svg"

export function Header() {
    return (
        <section className="bg-[url(/headerimg.png)] bg-no-repeat bg-cover w-full h-screen mb-16">
            <div className="flex flex-col items-center justify-center">
                <div className="px-10 py-10 flex items-center justify-between w-[1400px]">
                    <div>
                        <Image 
                            src={logoImg}
                            alt=""
                        />
                    </div>

                    <div className="hidden px-4 py-2 lg:flex items-center gap-12 text-white bg-white/40 rounded-full">
                        <a href="#" className="hover:bg-purple-400 rounded-full px-3 py-1 transition-colors cursor-pointer">Home</a>
                        <a href="#" className="hover:bg-purple-400 rounded-full px-3 py-1 transition-colors cursor-pointer">Product</a>
                        <a href="#pricing" className="hover:bg-purple-400 rounded-full px-3 py-1 transition-colors cursor-pointer">Pricing</a>
                        <a href="#" className="hover:bg-purple-400 rounded-full px-3 py-1 transition-colors cursor-pointer">About</a>
                        <a href="#" className="hover:bg-purple-400 rounded-full px-3 py-1 transition-colors cursor-pointer">Contact</a>
                    </div>

                    <div className="flex items-center gap-6">
                        <Image src={twitter} alt="" className="hover:scale-120 transition-all cursor-pointer" />
                        <Image src={facebook} alt="" className="hover:scale-120 transition-all cursor-pointer" />
                        <Image src={link} alt="" className="hover:scale-120 transition-all cursor-pointer" />
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center mt-20">
                    <h1 className="px-1 lg:px-0 text-6xl lg:text-7xl/tight font-bold text-white max-w-2xl text-center">
                        The best products start with Figma
                    </h1>

                    <p className="px-1 lg:px-0 text-2xl text-white max-w-3xl text-center mt-4">
                        Most calendars are designed for teams. Slate is designed for freelancers.
                    </p>
                </div>

                <div className="mt-40">
                    <button className="px-18 py-4 bg-primary rounded-full text-xl text-white
                    hover:bg-primary-hover transition-colors cursor-pointer">
                        Try for free
                    </button>
                </div>
            </div>
        </section>
    )
}