import { Card, CardHeader, CardTitle, CardDescription } from "../primitives/shadcn/card"
import { PlatformSvg, ScoringSvg, ProcessingSvg, DatabaseSvg, CapabiliteSvg } from "@/app/assets/svgs"

export const SourcingCards = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
                <CardHeader>
                    <CardTitle icon={<PlatformSvg />} >All-in-One Recruitment Platform</CardTitle>
                    <CardDescription>
                        Stop juggling between multiple tools. Get everything you need in one AI-powered platform that actually works together. From lead generation to placement, manage your entire recruitment lifecycle seamlessly.                    </CardDescription>
                </CardHeader>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle icon={<ScoringSvg />}>Smart Matching &amp; Scoring</CardTitle>
                    <CardDescription>
                        Find perfect candidate instantly with AI-powered matching that goes beyond keywords. Our semantic understanding delivers quality matches that saves hours of manual screening.                    </CardDescription>
                </CardHeader>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle icon={<ProcessingSvg />}>Intelligent Resume Processing</CardTitle>
                    <CardDescription>
                        Transform any resume into structured data instantly with AI-powered parsing. Extract skills, experience, and qualifications automatically from any format - no manual data entry required.                    </CardDescription>
                </CardHeader>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle icon={<DatabaseSvg />}>Extensive Candidate Database</CardTitle>
                    <CardDescription>
                        Build and maintain a rich, searchable database of candidates with automatic profile updates. Never lose track of talent with our intelligent candidate management system.                    </CardDescription>
                </CardHeader>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle icon={<CapabiliteSvg />}>Advanced Search Capabilities</CardTitle>
                    <CardDescription>
                        Search that actually understands what you’re looking for across all your data. Find anyone, anywhere, instantly with our powerful search engine.                    </CardDescription>
                </CardHeader>
            </Card>
            {/* add more cards here */}
        </div>)
}
