// Utils
import { cn } from "@/util/cn"

// Types
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    name: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    type?: string
    placeholder?: string
    className?: string
}

export default function Input({ 
    name,
    value,
    onChange,
    type = "text",
    placeholder,
    className,
    ...props
}: InputProps)
{
    return <input
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        className={cn(
            // Layout
            "w-full",
            // Coloring
            "bg-white",
            // Spacing
            "p-4",
            // Edges
            "border-b border-neutral-200",
            // Focus
            "focus:outline-none focus:border-blue-500",
            className
        )}
        {...props}
    />
}

