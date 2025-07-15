'use client';


import FaqSvg from '../assets/svgs/FaqSvg';
import { Accordian } from '../components/custom/Accordian';
import { AuroraTextHeading } from '../components/custom/AuroraTextHeading';
import { TagPill } from '../components/custom/TagPill';

const FaqSection = () => (
    <section className="mt-[120px]">
        <div className="container mx-auto px-4 md:px-10">
            {/* Section header */}
            <div className="text-center mb-[20px]">
                <TagPill icon={<FaqSvg />}
                    label="FAQs" />
                <div className="text-3xl mt-[25px] sm:text-4xl lg:text-[30px] font-extrabold text-gray-900">
                    Got Questions? {" "}
                    <AuroraTextHeading className="inline lg:text-[30px]">
                        We’ve Got Answers                  </AuroraTextHeading>{" "}
                </div>

            </div>

            <Accordian />
        </div>
    </section>
);

export default FaqSection;
