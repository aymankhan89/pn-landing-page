'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { FeatureSvg } from '../assets/svgs';
import { AuroraTextHeading } from '../components/custom/AuroraTextHeading';
import { TagPill } from '../components/custom/TagPill';
import { FeaturesTabs } from '../components/custom/FeaturesTabs';

gsap.registerPlugin(ScrollTrigger);

const FeatureSection = () => {
    const headerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!headerRef.current) return;

        gsap.from(headerRef.current, {
            scrollTrigger: {
                trigger: headerRef.current,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
            },
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power3.out',
        });
    }, []);

    return (
        <section id="features" className="mt-[120px]">
            <div className="container mx-auto px-4 md:px-10">
                {/* Animated section header */}
                <div ref={headerRef} className="text-left mb-[70px]">
                    <TagPill icon={<FeatureSvg />} label="Explore Features" />
                    <div className="text-3xl mt-[25px] sm:text-4xl lg:text-[30px] font-extrabold text-gray-900">
                        We Know How to{' '}
                        <AuroraTextHeading className="inline mb-2 lg:text-[30px]">
                            Solve These
                        </AuroraTextHeading>
                        <br />
                        <AuroraTextHeading className="inline lg:text-[30px]">
                            Problems
                        </AuroraTextHeading>
                    </div>
                </div>

                {/* Features tabs */}
                <FeaturesTabs />
            </div>
        </section>
    );
};

export default FeatureSection;
