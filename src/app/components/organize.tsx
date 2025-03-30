import Image from "next/image";

import pc from "../../../public/pc.png"
import pc1 from "../../../public/pc1.png"

export function Organizer() {
    return (
        <section className="lg:px-72 py-30">
            <div className="flex flex-col items-center justify-center gap-14">
                <div className="lg:flex items-center">
                    <div>
                        <h1 className="text-5xl font-semibold text-primary-text max-w-80">Fastest way to organize</h1>
                        
                        <p className="text-xl text-second-text mt-5 max-w-96">Most calendars are designed for teams. Slate is designed for freelancers</p>
                        
                        <button className="px-16 py-4 bg-primary rounded-full text-white mt-20
                        hover:bg-primary-hover transition-colors cursor-pointer">
                            Try for free
                        </button>
                    </div>

                    <div> 
                        <Image src={pc} alt="" className="hidden lg:block"/>
                    </div>
                </div>
            
                <div className="pl-2 lg:pl-0 lg:flex items-center jusitfy-center gap-20 mt-20">
                    <div>
                        <Image src={pc1} alt="" className="hidden lg:block"/>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-primary-text max-w-80 mb-4">Fastest way to organize</h2>
                        <h1 className="text-5xl font-semibold text-primary-text max-w-80">Lightning fast prototyping</h1>
                        
                        <h2 className="text-xl font-semibold text-primary-text max-w-80 mt-8">Subscribe to our Newsletter</h2>
                        <p className="text-xl text-second-text max-w-96">Available exclusivery on Figmaland</p>

                        <div className="flex items-center justify-center gap-3 mt-16">
                            <div  className="px-4 py-4 w-72 bg-gray-100 rounded-full">
                                <input type="text" placeholder="Your email" />
                            </div>
                            <button className="px-8 py-4 bg-primary rounded-full text-white
                            hover:bg-primary-hover transition-colors cursor-pointer">
                                Try for free
                            </button>
                        </div>
                    </div>
                </div>
                </div>
        </section>
    )
}