'use client';

import Hero from "./sections/HeroSection";
import PainPoints from "./sections/PainPointSection";
import IntegrationSection from "./sections/IntegrationSection";
import FeatureSection from "./sections/FeatureSection";
import { ComparisonSection } from "./sections/ComparisonSection";
import { PricingSection } from "./sections/PricingSection";
import FaqSection from "./sections/FaqSection";
import { BetaSection } from "./sections/BetaSection";

export default function Home() {
    return (
        <>
            <Hero />
            <PainPoints />
            <FeatureSection />
            <ComparisonSection />
            <IntegrationSection />
            <PricingSection />
            <FaqSection />
            <BetaSection />
        </>
    );
}
