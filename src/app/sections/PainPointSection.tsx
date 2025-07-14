'use client';


import {PainPointSvg} from '../assets/svgs';
import {AuroraTextHeading} from '../components/custom/AuroraTextHeading';
import {BentoGridDemo} from '../components/custom/BentoGridDemo';
import {TagPill} from '../components/custom/TagPill';

const PainPoints = () => (
    <section className="mt-[120px]">
        <div className="container mx-auto px-4 md:px-10">
            {/* Section header */}
            <div className="text-left mb-12">
                <TagPill icon={<PainPointSvg/>}
                    label="Pain Points"/>
                <h2 className="text-3xl mt-[25px] sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
                    <AuroraTextHeading>
                        What’s Broken
                    </AuroraTextHeading>


                    in Recruitment?
                    <br/>
                    Let’s Break It Down
                </h2>
            </div>

            {/* Grid of pain points */}
            <BentoGridDemo/>
        </div>
    </section>
);

export default PainPoints;
