'use client';


import { IntegrationSvg } from '../assets/svgs';
import { AuroraTextHeading } from '../components/custom/AuroraTextHeading';
import { OrbitingCirclesDemo } from '../components/custom/OrbitingCirclesDemo';
import { TagPill } from '../components/custom/TagPill';

const IntegrationSection = () => (
    <section className="mt-[120px]">
        <div className="container mx-auto px-4 md:px-10">
            {/* Section header */}
            <div className="text-center mb-[20px]">
                <TagPill icon={<IntegrationSvg />}
                    label="Integrations" />
                <div className="text-3xl mt-[25px] sm:text-4xl lg:text-[30px] font-extrabold text-gray-900">
                    <AuroraTextHeading className="inline lg:text-[30px]">
                        Seamless Integrations                    </AuroraTextHeading>{" "}
                    for
                    <br />
                    a Smarter Workflow                </div>

            </div>

            {/* Grid of pain points */}
            <OrbitingCirclesDemo />
        </div>
    </section>
);

export default IntegrationSection;
