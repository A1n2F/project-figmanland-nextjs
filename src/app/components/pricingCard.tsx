interface PricingCardProps {
    title: string
    description: string
    price: number
    variant: "blue" | "white"
}

export function PricingCard({ title, description, price, variant}: PricingCardProps) {
    return (
        <>
        {variant === "blue" ? (
            <div className="w-[335px] h-[693px] bg-primary px-16 py-10 rounded-2xl">
            <div className="flex flex-col items-center justify-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-2 uppercase">{title}</h2>
                <p className="text-white text-center">{description}</p>
            </div>

            <div className="flex items-center justify-center gap-2.5 text-white">
                <h1 className="text-8xl font-bold">{price}</h1>
                <span>
                    <p className="text-2xl">$</p>
                    <p>Per Month</p>
                </span>
            </div>

            <div className="flex flex-col items-center justify-center gap-8 mt-8 text-white">
                <p>Pricing Feature</p>
                <p>Pricing Feature</p>
                <p>Pricing Feature</p>
                <p>Pricing Feature</p>
                <p>Pricing Feature</p>
            </div>

            <div className="mt-8">
                <button className="px-16 py-4 bg-white rounded-full text-primary
                hover:bg-primary-hover transition-colors cursor-pointer">
                    Order Now
                </button>
            </div>
        </div>
        ) : (
            <div className="w-[335px] h-[607px] bg-white px-16 py-10 rounded-2xl">
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-2xl font-bold text-second-text mb-2 uppercase">{title}</h2>
                <p className="text-second-text text-center">{description}</p>
            </div>

            <div className="flex items-center justify-center gap-2.5 text-second-text">
                <h1 className="text-8xl font-bold">{price}</h1>
                <span>
                    <p className="text-2xl">$</p>
                    <p>Per Month</p>
                </span>
            </div>

            <div className="flex flex-col items-center justify-center gap-8 mt-5 text-second-text">
                <p>Pricing Feature</p>
                <p>Pricing Feature</p>
                <p>Pricing Feature</p>
                <p>Pricing Feature</p>
                <p>Pricing Feature</p>
            </div>

            <div className="mt-8">
                <button className="px-16 py-4 bg-primary rounded-full text-white
                hover:bg-primary-hover transition-colors cursor-pointer">
                    Order Now
                </button>
            </div>
            </div>
        )}
        </>
    )
}