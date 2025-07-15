"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cn } from "@/app/lib/utils"

function Tabs({
    className,
    ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
    return (
        <TabsPrimitive.Root
            data-slot="tabs"
            className={cn("flex flex-col gap-2", className)}
            {...props}
        />
    )
}

function TabsList({
    className,
    ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
    return (
        <TabsPrimitive.List
            data-slot="tabs-list"
            className={cn(
                "bg-muted border-b py-[29px] border-[#E9E9E9] text-black inline-flex h-9 w-fit items-center justify-center ",
                className
            )}
            {...props}
        />
    )
}

export interface TabsTriggerProps
    extends React.ComponentProps<typeof TabsPrimitive.Trigger> {
    leftIcon?: React.ReactNode
}

const TabsTrigger = React.forwardRef<
    React.ElementRef<typeof TabsPrimitive.Trigger>,
    TabsTriggerProps
>(({ className, leftIcon, children, ...props }, ref) => (
    <TabsPrimitive.Trigger
        ref={ref}
        data-slot="tabs-trigger"
        className={cn(
            "data-[state=active]:bg-background data-[state=active]:py-[29px]  text-black dark:data-[state=active]:font-[500px] " +
            "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring " +
            "dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 " +
            "inline-flex h-[calc(100%-1px)] " +
            "flex-1 items-center justify-center gap-1.5 rounded-none border border-transparent " +
            "mr-[65px] last:mr-1  text-sm font-medium whitespace-nowrap transition-[color,box-shadow] " +
            "focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none " +
            "disabled:opacity-50 data-[state=active]:border-b-[2px] data-[state=active]:border-b-[#2E2EDF] [&_svg]:pointer-events-none " +
            "[&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
            className
        )}
        {...props}
    >
        {leftIcon && <span className="mr-2 flex items-center">{leftIcon}</span>}
        {children}
    </TabsPrimitive.Trigger>
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

function TabsContent({
    className,
    ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
    return (
        <TabsPrimitive.Content
            data-slot="tabs-content"
            className={cn("flex-1 outline-none", className)}
            {...props}
        />
    )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
