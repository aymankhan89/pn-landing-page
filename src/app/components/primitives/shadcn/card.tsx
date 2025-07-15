// components/ui/card.tsx
"use client"

import * as React from "react"
import { cn } from "@/app/lib/utils"

export function Card({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card"
            className={cn(
                "bg-card text-card-foreground flex flex-col gap-6 rounded-[7px] border py-[25px] ",
                className
            )}
            {...props}
        />
    )
}

export function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-header"
            className={cn(
                "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
                className
            )}
            {...props}
        />
    )
}

export interface CardTitleProps extends React.ComponentProps<"div"> {
    icon?: React.ReactNode
}

export const CardTitle = React.forwardRef<HTMLDivElement, CardTitleProps>(
    ({ className, icon, children, ...props }, ref) => (
        <div
            ref={ref}
            data-slot="card-title"
            className={cn("leading-none text-[18px] text-black font-[500] font-[inter]", className)}
            {...props}
        >
            {icon && (
                <div className="mb-[50px] flex items-center justify-start ">
                    {icon}
                </div>
            )}
            {children}
        </div>
    )
)
CardTitle.displayName = "CardTitle"

export function CardDescription({
    className,
    ...props
}: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-description"
            className={cn("text-[#727272] leading-[30px] font-[inter] text-sm", className)}
            {...props}
        />
    )
}

export function CardAction({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-action"
            className={cn(
                "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
                className
            )}
            {...props}
        />
    )
}

export function CardContent({
    className,
    ...props
}: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-content"
            className={cn("px-6", className)}
            {...props}
        />
    )
}

export function CardFooter({
    className,
    ...props
}: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-footer"
            className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
            {...props}
        />
    )
}
