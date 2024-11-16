// Utilities
import { cn } from "@/util/cn"

// Button Props
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    buttonType?: keyof typeof ButtonVariants
    className?: string,
}

const ButtonVariants: Record<string, string> = {
    outline: "border border-neutral-200 bg-white hover:bg-neutral-100 hover:text-neutral-600",
    filled: "bg-neutral-900 text-white hover:bg-neutral-800", // Fixed text color for filled variant
    ghost: "hover:bg-neutral-100 hover:text-neutral-600",
    default: "bg-neutral-100 text-neutral-600 hover:bg-neutral-300 hover:shadow-sm",
}

export default function Button({ children, buttonType, className, ...props }: ButtonProps) {
    return(
        <button
            className={cn(
                // Base styles
                "px-4 py-2 rounded-md",
                // Animation
                "transition-all duration-200",
                // Font
                "font-medium",
                // Focus
                "focus:outline-none focus:ring-2 focus:ring-blue-500",
                // Variants and colors
                ButtonVariants[buttonType ?? "default"],
                className
            )}
            {...props}
        >
            {children}
        </button>
    )
}
