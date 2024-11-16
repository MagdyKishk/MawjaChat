// React
import { useEffect, useState } from "react"

// Utils
import { cn } from "@/util/cn"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons"

// Types
interface UsernameInputProps {
    name: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
    className?: string
}

export default function UsernameInput({ 
    name,
    value,
    onChange,
    placeholder,
    className
}: UsernameInputProps)
{
    const [isAvailable, setIsAvailable] = useState(true)
    const [isChecking] = useState(false)

    useEffect(() => {
        setIsAvailable(false)
        if (value.length > 4) {
            setIsAvailable(true)
        }
    }, [value])

    return (
        <div className="flex items-center">
            <input
                name={name}
                value={value}
                onChange={onChange}
                type="text"
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
            <div className={cn(
                // Layout
                "text-sm whitespace-nowrap px-2",
                // Animation
                "transition-all duration-200",
                // State
                isAvailable ? "text-green-500" : value.length > 0 ? "wrongInputAnimation text-red-500" : "text-neutral-500"
            )}>
                {
                    (isAvailable && !isChecking) ? 
                    <p className="text-green-500">Available <FontAwesomeIcon icon={faCheck} /></p> : 
                    isChecking ?
                    <p className="text-neutral-500">Checking...</p> :
                    <p className="text-red-500">Unavailable <FontAwesomeIcon icon={faX} /></p>
                }
            </div>
        </div>
    )
}

