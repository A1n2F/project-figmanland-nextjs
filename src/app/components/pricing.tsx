import { PricingCard } from "./pricingCard";

export function Pricing() {
    return (
        <section id="pricing" className="bg-dark lg:h-[1155px] my-24">
            <div className="flex flex-col items-center justify-center">
                <div className="mt-24 flex flex-col items-center justify-center max-w-lg mb-20">
                    <h1 className="text-5xl text-white">Pricing</h1>

                    <p className="px-1 lg:px-0 text-2xl text-white text-center mt-3">
                        Most calendars are designed for teams. Slate is designed for freelancers
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-14 mb-10 lg:mb-0">
                    <PricingCard 
                        title="free"
                        description="Organize across all apps by hand"
                        price={0}
                        variant="white"
                    />

                    <PricingCard 
                        title="standard"
                        description="Organize across all apps by hand"
                        price={10}
                        variant="blue"
                    />

                    <PricingCard 
                        title="business"
                        description="Organize across all apps by hand"
                        price={99}
                        variant="white"
                    />
                </div>
                </div>
        </section>
    )
}