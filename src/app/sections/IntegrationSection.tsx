'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { IntegrationSvg } from '../assets/svgs';
import { AuroraTextHeading } from '../components/custom/AuroraTextHeading';
import { OrbitingCirclesDemo } from '../components/custom/OrbitingCirclesDemo';
import { TagPill } from '../components/custom/TagPill';

gsap.registerPlugin(ScrollTrigger);

const IntegrationSection = () => {
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
        <section className="mt-[120px]">
            <div className="container mx-auto px-4 md:px-10">
                {/* Animated header */}
                <div ref={headerRef} className="text-center mb-[20px]">
                    <TagPill icon={<IntegrationSvg />} label="Integrations" />
                    <div className="text-3xl mt-[25px] sm:text-4xl lg:text-[30px] font-extrabold text-gray-900">
                        <AuroraTextHeading className="inline lg:text-[30px]">
                            Seamless Integrations
                        </AuroraTextHeading>{' '}
                        for
                        <br />
                        a Smarter Workflow
                    </div>
                </div>

                {/* Orbiting circles demo */}
                <OrbitingCirclesDemo />
            </div>
        </section>
    );
};

export default IntegrationSection;
