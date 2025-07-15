import React from "react"
import {
    SearchIcon,
    MessageSquareIcon,
    BarChart2Icon,
    ZapIcon,
    DatabaseIcon,
    UsersIcon,
    PuzzleIcon,
    MonitorIcon,
    RocketIcon,
    XIcon,
} from "lucide-react"

export interface ComparisonItem {
    icon: React.ReactNode
    feature: string
    without: React.ReactNode
    with: React.ReactNode
}

export const comparisonData: ComparisonItem[] = [
    {
        icon: <SearchIcon className="h-5 w-5" />,
        feature: "AI-Powered Candidate Sourcing",
        without: "Limited or None",
        with: "Yes",
    },
    {
        icon: <MessageSquareIcon className="h-5 w-5" />,
        feature: "Unified Email + Chat Communication",
        without: <XIcon className="h-[25px] w-[25px]" />,
        with: "Built-in",
    },
    {
        icon: <BarChart2Icon className="h-5 w-5" />,
        feature: "Company + Candidate Tracking",
        without: <XIcon className="h-[25px] w-[25px]" />,
        with: "Seamlessly Connected",
    },
    {
        icon: <ZapIcon className="h-5 w-5" />,
        feature: "Automation & Workflows",
        without: "Rigid & Complex",
        with: "Visual & Flexible",
    },
    {
        icon: <DatabaseIcon className="h-5 w-5" />,
        feature: "Data Migration Support",
        without: "Not Offered or Paid Extra",
        with: "Included",
    },
    {
        icon: <UsersIcon className="h-5 w-5" />,
        feature: "Real-time Collaboration",
        without: <XIcon className="h-[25px] w-[25px] " />,
        with: "Comments, Tags, Tasks",
    },
    {
        icon: <PuzzleIcon className="h-5 w-5" />,
        feature: "Integrations",
        without: "Manual Setup Required",
        with: "Popular Tools Pre-Integrated",
    },
    {
        icon: <MonitorIcon className="h-5 w-5" />,
        feature: "Modern UI/UX",
        without: "Outdated & Clunky",
        with: "Fast, Clean & Intuitive",
    },
]
