'use client';

import Image from 'next/image';
import { RocketSvg } from '../assets/svgs';
import { AnimatedShinyTextDemo } from '../components/custom/AnimatedShinyTextDemo';
import HeroImg from '../assets/pngs/HeroImg.png';
import { AuroraTextHeading } from '../components/custom/AuroraTextHeading';

const Hero = () => {
    const scrollToForm = () => {
        document.getElementById('beta-form')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="flex flex-col mt-[57px] justify-center items-center bg-[linear-gradient(to_top,_#CECDFA_0,_#FFF0FF26_15%25)]">
            {/* Text & CTA */}
            <div className="px-4 md:px-10 text-center">
                <div className="w-[698px] lg:mx-0">
                    {/* Badge */}
                    <AnimatedShinyTextDemo /> {/* Heading */}
                    <h1 className="text-4xl sm:text-5xl lg:text-[45px] font-extrabold text-gray-900 flex flex-col items-center gap-[18px] mb-[35px]">
                        <span className="flex items-center justify-center lg:justify-start gap-2">
                            The Smarter
                            <RocketSvg />
                            Way to
                        </span>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                            <AuroraTextHeading className="mb-8 text-center">
                                Hire, Manage &amp; Grow
                            </AuroraTextHeading>
                        </span>
                    </h1>

                    {/* Subtext */}
                    <p className="text-[#777777] font-[gilroy] font-normal text-sm sm:text-lg mb-8">
                        All-in-one ATS built for recruitment teams — source candidates,
                        manage leads, send mails, automate tasks, and sync everything
                        across platforms. Now with AI-powered intelligence, built-in chat,
                        email campaigns, and smooth data migration.
                    </p>

                    {/* Email form */}
                    <form id="beta-form" className="flex flex-col max-w-[490px] sm:flex-row border mx-auto rounded-[7px] divide-x justify-center lg:justify-center items-center gap-4">
                        <input type="email" placeholder="Enter your email address" className="w-full sm:flex-1 px-4 py-3 border-none placeholder:text-[#A2A2A2] font-[gilroy] font-normal text-[15px] focus:outline-none focus:ring-2 focus:ring-purple-500" />
                        <div className="w-[1px] h-[30px] bg-[#A2A2A2]" />
                        <button type="submit" className="px-6 py-3 text-[#363BC9] font-[gilroy] font-medium transition"
                            onClick={scrollToForm}>
                            Get Beta Access
                        </button>
                    </form>
                </div>
            </div>

            {/* Screenshot */}
            <div className="mt-16">
                <div className="container mx-auto px-4 md:px-10">
                    <Image src={HeroImg}
                        alt="ProficientNow dashboard screenshot"
                        className="w-full  "
                        priority />
                </div>
            </div>
        </section>
    );
};

export default Hero;
