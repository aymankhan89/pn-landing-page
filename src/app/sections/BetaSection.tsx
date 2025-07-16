'use client';

import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import bgPattern from '../assets/pngs/bgPattern.png';
import Avatar1 from '../assets/pngs/avatars/Avatar1.jpg';
import Avatar2 from '../assets/pngs/avatars/Avatar2.jpg';
import Avatar3 from '../assets/pngs/avatars/Avatar3.jpg';
import Avatar4 from '../assets/pngs/avatars/Avatar4.jpg';

gsap.registerPlugin(ScrollTrigger);

const avatars = [
    Avatar1.src,
    Avatar2.src,
    Avatar3.src,
    Avatar4.src,
];

export function BetaSection() {
    const [email, setEmail] = useState('');
    const sectionRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const formRef = useRef<HTMLFormElement>(null);
    const avatarsRef = useRef<HTMLDivElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Signup:', email);
        // TODO: wire up your API
    };

    useEffect(() => {
        if (!sectionRef.current) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
            },
            defaults: { ease: 'power3.out', duration: 0.8 }
        });

        tl
            .from(headerRef.current, { opacity: 0, y: 30 })
            .from(formRef.current, { opacity: 0, y: 30 }, '-=0.4')
            .from(avatarsRef.current, { opacity: 0, y: 30 }, '-=0.4');
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative px-6 py-16 my-[150px] max-w-[1532px] mx-auto overflow-hidden rounded-2xl"
            style={{
                backgroundImage: `
          linear-gradient(
            to right,
            hsl(243, 89%, 72%),
            hsl(240, 27%, 42%)
          )
        `,
            }}
        >
            {/* Very-subtle right PNG */}
            <div
                className="pointer-events-none absolute inset-y-0 right-0 w-1/2 opacity-5 bg-cover bg-right"
                style={{ backgroundImage: `url(${bgPattern.src})` }}
                aria-hidden="true"
            />

            <div className="relative z-10 max-w-2xl mx-auto text-center text-white space-y-6">
                {/* Animated heading + description */}
                <div ref={headerRef}>
                    <h2 className="text-3xl md:text-4xl font-semibold">
                        Join Thousands Already Exploring Hirite
                    </h2>
                    <p className="text-base md:text-lg opacity-90 mt-2">
                        Join our beta list and get early access to the most powerful ATS built for modern
                        recruitment teams. Experience automation, insights, and AI-first features before anyone
                        else.
                    </p>
                </div>

                {/* Animated form */}
                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3"
                >
                    <input
                        type="email"
                        required
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.currentTarget.value)}
                        className="w-full max-w-md px-4 py-3 placeholder:text-[#E1E1E1] text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 border border-[#E1E1E1] rounded-[7px] focus:ring-purple-300"
                    />
                    <button
                        type="submit"
                        className="px-6 py-3 bg-white text-[#7D7BF5] font-[500] font-[gilroy] text-sm rounded-lg shadow hover:bg-purple-50 transition"
                    >
                        Get Beta Access
                    </button>
                </form>

                {/* Animated avatars */}
                <div ref={avatarsRef} className="mt-8 flex gap-3 items-center justify-center">
                    <div className="inline-flex -space-x-3">
                        {avatars.map((src, idx) => (
                            <img
                                key={idx}
                                src={src}
                                alt={`Avatar ${idx + 1}`}
                                className="w-10 h-10 rounded-full"
                            />
                        ))}
                    </div>
                    <p className="text-[13px] font-normal opacity-90">
                        2,000+ recruiters are already exploring Hirite
                    </p>
                </div>
            </div>
        </section>
    );
}
