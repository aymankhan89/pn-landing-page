"use client"

import * as React from "react"
import { cn } from "@/app/lib/utils"

interface GradientBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    icon?: React.ReactNode
    children: React.ReactNode
}

export function GradientBadge({
    icon,
    children,
    className,
    ...props
}: GradientBadgeProps) {
    return (
        <div
            className={cn(
                "inline-flex p-[1px] rounded-[7px] bg-gradient-to-r from-[#EC00EC] to-[#2E2EDF]",
                className
            )}
            {...props}
        >
            <span className="inline-flex items-center gap-1 rounded-[7px] bg-[#271F36] px-3 py-1 text-sm font-medium text-white">
                {icon && <span className="flex-shrink-0">{icon}</span>}
                {children}
            </span>
        </div>
    )
}
