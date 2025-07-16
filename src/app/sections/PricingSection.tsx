"use client"

import * as React from "react"
import { cn } from "@/app/lib/utils"
import { pricingPlans } from "@/app/lib/data/pricingData"
import { TagPill } from "../components/custom/TagPill"
import { CheckSvg, PricingSvg } from "../assets/svgs"
import { AuroraTextHeading } from "../components/custom/AuroraTextHeading"
import { LitSvg } from "../assets/svgs"

export function PricingSection() {
    return (
        <section id="pricing" className="space-y-6 px-4 py-12 md:px-[194px] bg-white">
            {/* Optional “Pricing” badge above */}
            <div className="text-center mb-[20px]">
                <TagPill icon={<PricingSvg />} label="Pricing" />
                <div className="text-3xl mt-[25px] sm:text-4xl lg:text-[30px] font-extrabold text-gray-900">
                    <AuroraTextHeading className="inline lg:text-[30px]">
                        Affordable Plans
                    </AuroraTextHeading>{" "}
                    for Every Team
                </div>
            </div>

            <div className="grid gap-[46px] pt-8 md:grid-cols-3">
                {pricingPlans.map((plan) => {
                    const isEnterprise = plan.name === "Enterprise"
                    return (
                        <div
                            key={plan.name}
                            className={cn(
                                "flex flex-col h-[559px] rounded-[10px] border p-6 pb-8",
                                isEnterprise
                                    ? "border-[#7D7BF5] bg-gradient-to-b from-white to-[#CECDFA]"
                                    : "border-gray-200 bg-white",
                                plan.popular && "relative z-10"
                            )}
                        >
                            <div className="flex font-[inter] text-black items-center gap-5">
                                <h3 className="text-lg font-semibold">{plan.name}</h3>
                                {plan.popular && (
                                    <span className="inline-flex items-center gap-1 rounded-[7px] bg-[#F5A83ADE] font-[inter] px-[6px] py-2 text-[13px] font-semibold text-white">
                                        <LitSvg /> Popular
                                    </span>
                                )}
                            </div>

                            {/* <-- Updated price logic here --> */}
                            <h4 className="mt-[45px] text-black text-4xl font-[500] font-[inter]">
                                {isEnterprise ? plan.price : `$${plan.price}`}
                            </h4>

                            <p className="mt-[10px] text-sm text-[#727272]">
                                {plan.description}
                            </p>

                            <ul className="mt-[60px] text-[15px] space-y-[28px] text-gray-700">
                                {plan.features.map((feat) => (
                                    <li key={feat} className="flex items-center gap-3">
                                        <CheckSvg />
                                        <span>{feat}</span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={cn(
                                    "mt-auto w-full rounded-md px-4 py-2 text-sm font-medium transition",
                                    isEnterprise
                                        ? "bg-[#7D7BF5] text-white hover:bg-[#6a5fe0]"
                                        : "border border-gray-300 text-gray-900 font-semibold hover:bg-gray-50"
                                )}
                            >
                                {plan.buttonText}
                            </button>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
