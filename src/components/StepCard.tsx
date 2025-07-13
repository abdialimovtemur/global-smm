// src/components/StepCard.tsx
import { cn } from "@/lib/utils";

interface StepCardProps {
    step: number;
    title: string;
    description: string;
    icon: string;
    className?: string;
}

const StepCard = ({ step, title, description, icon, className }: StepCardProps) => {
    return (
        <div className={cn(
            "flex flex-col items-center gap-4 text-center p-4",
            "w-full sm:w-[calc(50%-1rem)] md:w-[calc(25%-1.5rem)]",
            className
        )}>
            {/* Icon with fixed size */}
            <div className="md:w-28 flex items-center justify-center">
                <img
                    src={icon}
                    alt={title}
                    className="w-full h-full object-contain"
                />
            </div>

            <p className="text-[#606F85] text-sm md:text-base">{`STEP ${step}`}</p>
            <h3 className="font-bold text-xl md:text-2xl">{title}</h3>
            <p className="text-[#606F85] text-sm md:text-base">{description}</p>
        </div>
    );
};

export default StepCard;