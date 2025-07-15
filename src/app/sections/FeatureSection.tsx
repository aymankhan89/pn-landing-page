'use client';


import { FeatureSvg } from '../assets/svgs';
import { AuroraTextHeading } from '../components/custom/AuroraTextHeading';
import { TagPill } from '../components/custom/TagPill';
import { FeaturesTabs } from '../components/custom/FeaturesTabs';

const FeatureSection = () => (
    <section className="mt-[120px]">
        <div className="container mx-auto px-4 md:px-10">
            {/* Section header */}
            <div className="text-left mb-[70px]">
                <TagPill icon={<FeatureSvg />}
                    label="Explore Features" />
                <div className="text-3xl mt-[25px] sm:text-4xl lg:text-[30px] font-extrabold text-gray-900">
                    We Know How to {" "}
                    <AuroraTextHeading className="inline mb-2 lg:text-[30px]">
                        Solve These                     </AuroraTextHeading>
                    <br />
                    <AuroraTextHeading className="inline lg:text-[30px]">
                        Problems                   </AuroraTextHeading>
                </div>

            </div>

            <FeaturesTabs />
        </div>
    </section>
);

export default FeatureSection;
