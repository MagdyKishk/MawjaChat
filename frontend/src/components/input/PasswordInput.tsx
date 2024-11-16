// Fontawesome
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"

// Utils
import { cn } from "@/util/cn"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// Types
interface PasswordInputProps {
    name: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
    className?: string
}

export default function PasswordInput({ 
    name,
    value,
    onChange,
    placeholder,
    className
}: PasswordInputProps)
{
    const [showPassword, setShowPassword] = useState(false)
    
    
    return (
        <div className="flex items-center">
            <input
                name={name}
                value={value}
                onChange={onChange}
                type={showPassword ? "text" : "password"}
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
            />
            <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} className="text-neutral-400 cursor-pointer mx-4 select-none" onClick={() => setShowPassword(!showPassword)} />
        </div>
    )
}

