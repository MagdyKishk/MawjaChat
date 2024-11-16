// Utils
import { cn } from "@/util/cn";

// Types
interface FormProps {
    formName: string
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
    children: React.ReactNode
}

export default function Form({ formName, onSubmit, children }: FormProps) {
    return (
        <form
            onSubmit={onSubmit}
            className={cn(
                // Layout
                "flex flex-col w-full max-w-xl",
                // Coloring
                "bg-white",
                // Spacing
                "p-8",
                // Edges
                "rounded-lg",
                // Shadows
                "shadow-lg"
            )}
        >
            <h1 className="text-3xl font-bold mb-4 text-center text-neutral-600">{formName}</h1>
            <div className="flex flex-col gap-4">
                {children}
            </div>
        </form>
    )
}
