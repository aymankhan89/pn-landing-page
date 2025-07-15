"use client"

import * as React from "react"
import { cn } from "@/app/lib/utils"
import { comparisonData } from "../lib/data/comparisonData"
import { DollarSvg, WithHiriteSvg } from "../assets/svgs"
import { GradientBadge } from "../components/custom/GradientBadge"

export function ComparisonSection() {
    const lastIndex = comparisonData.length - 1

    return (
        <section className="space-y-6 bg-[#271F36] lg:mt-[120px] px-4 py-[100px] md:px-[194px]">
            <div className="flex flex-col gap-[25px] items-center justify-center">
                <GradientBadge icon={<DollarSvg />}>
                    Comparison
                </GradientBadge>
                <h2 className="text-3xl font-[inter] font-semibold text-center mb-[80px]">
                    See Why Recruiters Choose Hirite
                </h2></div>


            <div className="overflow-x-auto">
                <table className="min-w-full text-center">
                    <thead>
                        <tr className="border-b text-[16px] font-[inter] font-semibold border-[#464646]">
                            <th className="py-3" />
                            <th className="py-3">Without Hirite</th>
                            <th
                                className="
                  py-[37px]
                  border-t-[2.5px]
                  border-l-[2.5px]
                  border-r-[2.5px]
                  border-[#7D7BF5]
                  text-center
                "
                            >
                                <div className="inline-flex items-center justify-center gap-2 px-3 py-1 text-primary">
                                    With Hirite
                                    <WithHiriteSvg />
                                </div>
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {comparisonData.map((item, idx) => (
                            <tr
                                key={item.feature}
                                className="border-b border-[#464646] last:border-b-0"
                            >
                                {/* Feature + icon */}
                                <td className="py-[45px] align-middle">
                                    <div className="flex items-center gap-2">
                                        {item.icon}
                                        <span className="font-medium">{item.feature}</span>
                                    </div>
                                </td>

                                {/* Without Hirite */}
                                <td className="py-[45px] align-middle">
                                    <div className="flex h-full w-full items-center justify-center">
                                        {item.without}
                                    </div>
                                </td>

                                {/* With Hirite: side borders always; bottom border only on last row */}
                                <td
                                    className={cn(
                                        "py-[45px] align-middle",
                                        "border-l-[2.5px] border-r-[2.5px]",
                                        "border-l-[#7D7BF5] border-r-[#7D7BF5]",
                                        idx === lastIndex && "border-b-[2.5px] border-b-[#7D7BF5]"
                                    )}
                                >
                                    <div className="flex h-full w-full items-center justify-center">
                                        {item.with}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}
