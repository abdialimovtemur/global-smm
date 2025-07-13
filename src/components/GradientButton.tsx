import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface GradientButtonProps {
    icon: ReactNode
    label: string
    className?: string
    onClick?: () => void
    variant?: "blue" | "gray"
}

export const GradientButton = ({
    icon,
    label,
    className,
    onClick,
    variant = "blue",
}: GradientButtonProps) => {
    const isBlue = variant === "blue"
    const baseShadow = isBlue ? "shadow-[#0066FF]" : "shadow-[#606F85]"
    const bg = isBlue ? "bg-gradient-primary" : "bg-[#606F85]"

    return (
        <button
            onClick={onClick}
            className={cn(
                "flex items-center gap-2 p-2 rounded-2xl",
                "w-full max-w-full sm:max-w-64 md:max-w-72", // More flexible width
                "hover:shadow-lg sm:hover:shadow-xl",
                "transition-all duration-300 ease-in-out",
                "transform hover:scale-[1.02] active:scale-95",
                baseShadow,
                bg,
                className
            )}

        >
            <div className="bg-white p-1.5 sm:p-2 rounded-2xl"> {/* Responsive icon padding */}
                {icon}
            </div>
            <p className="text-white font-medium text-sm sm:text-base"> {/* Responsive text */}
                {label}
            </p>
        </button>
    )
}