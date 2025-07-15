"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/app/lib/utils"

export function Accordion(
    props: React.ComponentProps<typeof AccordionPrimitive.Root>
) {
    return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

export function AccordionItem(
    props: React.ComponentProps<typeof AccordionPrimitive.Item>
) {
    const { className, ...rest } = props
    return (
        <AccordionPrimitive.Item
            data-slot="accordion-item"
            className={cn("border-b last:border-b-0", className)}
            {...rest}
        />
    )
}

type AccordionTriggerProps =
    React.ComponentProps<typeof AccordionPrimitive.Trigger> & {
        icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
    }

export function AccordionTrigger({
    icon: Icon,
    className,
    children,
    ...props
}: AccordionTriggerProps) {
    return (
        <AccordionPrimitive.Header className="flex w-full">
            <AccordionPrimitive.Trigger
                data-slot="accordion-trigger"
                className={cn(
                    "relative w-full flex items-center justify-between rounded-md py-[40px] pl-8 text-[18px] font-semibold font-[inter] text-black outline-none transition-all focus-visible:ring-[3px] focus-visible:border-ring disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg:last-child]:rotate-180",
                    className
                )}
                {...props}
            >
                {Icon && (
                    <div className="absolute left-0 border w-[32px] h-[31px] border-[#DBDBDB] rounded-[7px] flex justify-center items-center">
                        <Icon />
                    </div>
                )}

                {/* 32px padding + 15px gap = 47px text-indent */}
                <span className="flex-1 text-left ml-[15px]">{children}</span>

                <ChevronDownIcon className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 pointer-events-none" />
            </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
    )
}

export function AccordionContent(
    props: React.ComponentProps<typeof AccordionPrimitive.Content>
) {
    const { className, children, ...rest } = props
    return (
        <AccordionPrimitive.Content
            data-slot="accordion-content"
            className={cn(
                "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-[14px] text-[#727272] pb-[20px]",
                className
            )}
            {...rest}
        >
            {/* match the trigger’s text-indent of 47px */}
            <div className="pt-0 pb-4 pl-[47px]">{children}</div>
        </AccordionPrimitive.Content>
    )
}
