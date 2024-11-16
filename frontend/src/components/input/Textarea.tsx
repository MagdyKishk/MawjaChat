// Utils
import { cn } from "@/util/cn"

// Types
interface InputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement>{
    name: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    resize?: boolean,
    placeholder?: string
    className?: string
}

export default function Textarea({ 
    name,
    value,
    onChange,
    placeholder,
    className,
    resize = true,
    ...props
}: InputProps)
{
    return <textarea
        name={name}
        value={value}
        onChange={onChange}
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
            // Resize
            !resize && "resize-none",
            className
        )}
        {...props}
    />
}

