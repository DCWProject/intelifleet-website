import { cn } from "@/lib/utils"

export const Container = ({ children, className }) => {
    return (
        <div className={cn("mx-auto max-w-7xl px-4 md:px-6", className)}>
            {children}
        </div>
    )
}