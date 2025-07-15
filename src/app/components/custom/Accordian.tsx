"use client"

import * as React from "react"
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "../primitives/shadcn/accordian"
import { faqItems } from "@/app/lib/data/faqItems"

export function Accordian() {
    const defaultId = faqItems[0]?.id

    return (
        <Accordion
            type="single"
            collapsible
            className="w-full lg:max-w-[747px] mx-auto"
            defaultValue={defaultId}
        >
            {faqItems.map(({ id, question, answer, icon: Icon }) => (
                <AccordionItem value={id} key={id}>
                    <AccordionTrigger icon={Icon}>
                        {question}
                    </AccordionTrigger>

                    <AccordionContent className="flex flex-col gap-4 text-balance">
                        <p>{answer}</p>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
}
