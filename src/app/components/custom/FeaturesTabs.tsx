import { Tabs, TabsList, TabsTrigger, TabsContent } from "../primitives/shadcn/tabs"
import { FeatureSvg, CollabrationSvg, CustomizationSvg, SecuritySvg } from "@/app/assets/svgs"
import { SourcingCards } from "./FeaturesCards"

export function FeaturesTabs() {
    return (
        <Tabs defaultValue="sourcing" className="w-full">
            <TabsList>
                <TabsTrigger className="" leftIcon={<FeatureSvg />} value="sourcing">Sourcing &amp; Intelligence</TabsTrigger>
                <TabsTrigger leftIcon={<CollabrationSvg />} value="communication">Communication &amp; Collaboration</TabsTrigger>
                <TabsTrigger leftIcon={<CustomizationSvg />} value="workflow">Workflow &amp; Customization</TabsTrigger>
                <TabsTrigger leftIcon={<SecuritySvg />} value="security">Security &amp; Reliability</TabsTrigger>
            </TabsList>

            <TabsContent value="sourcing" className="pt-6">
                <SourcingCards />
            </TabsContent>

            <TabsContent value="communication" className="pt-6">
                <SourcingCards />
            </TabsContent>

            <TabsContent value="workflow" className="pt-6">
                <SourcingCards />
            </TabsContent>

            <TabsContent value="security" className="pt-6">
                <SourcingCards />
            </TabsContent>
        </Tabs>
    )
}
