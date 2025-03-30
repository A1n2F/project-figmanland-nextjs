import Image from "next/image";

interface FeatureCardProps {
    image: HTMLImageElement
    title: string
    description: string
}

export function FeatureCard({ image, title, description }: FeatureCardProps) {
    return (
        <div className="w-3xs h-3xs flex flex-col items-center">
            <Image src={image} alt="" />
            <h2 className="text-xl font-bold text-center text-primary-text mt-8">{title}</h2>
            <p className="text-lg text-second-text text-center mt-8">{description}</p>
        </div>
    )
}