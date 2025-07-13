import { cn } from "@/lib/utils";
import { Card } from "./ui/card";

interface FeatureCardProps {
    title: string;
    highlight?: string;
    description: string;
    image: string;
    className?: string;
}

const FeatureCard = ({
    title,
    highlight,
    description,
    image,
    className,
}: FeatureCardProps) => {
    return (
        <Card className={cn(
            " w-full h-full flex flex-col items-center text-center gap-3",
            "rounded-2xl sm:rounded-3xl shadow-md bg-white dark:bg-[#080d32] backdrop-blur-xl",
            className
        )}>
            <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold">
                    {highlight
                        ? title.split(highlight).map((part, i, arr) => (
                            <span key={i}>
                                {part}
                                {i !== arr.length - 1 && (
                                    <span className="text-sky-600 dark:text-sky-400">{highlight}</span>
                                )}
                            </span>
                        ))
                        : title}
                </h3>
                <p className=" sm:text-base text-[#64728F] dark:text-gray-400">
                    {description}
                </p>
            </div>
            <img 
                src={image} 
                alt={title} 
                className="w-full sm:max-w-xs object-contain mt-2" 
            />
        </Card>
    );
};

export default FeatureCard;