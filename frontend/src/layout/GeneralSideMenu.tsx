import { cn } from "@/util/cn";

export default function GeneralSideMenu({children}: {children: React.ReactNode}) {
    return (
        <div className={cn(
            // Layout
            "lg:min-w-96 md:min-w-64 h-full w-full md:w-96 flex flex-col",
            // Coloring
            "bg-white",
            // Border
            "border-r border-neutral-200",
        )}>
            {children}
        </div>
    )
}