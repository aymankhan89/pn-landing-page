export interface Plan {
    name: string
    price: string
    description: string
    features: string[]
    popular?: boolean
    buttonText: string
}

export const pricingPlans: Plan[] = [
    {
        name: "Free",
        price: "0",
        description: "Perfect for small teams getting started",
        features: [
            "Up to 3 users",
            "Email sync (up to 100 mails)",
            "Basic sourcing tools",
            "Limited automations",
            "Community support",
        ],
        buttonText: "Get Started for Free",
    },
    {
        name: "Growth",
        price: "25",
        description: "For fast-growing recruitment teams",
        features: [
            "Unlimited users",
            "Full pipeline access",
            "Email campaigns",
            "All integrations",
            "Basic AI tools",
        ],
        popular: true,
        buttonText: "Get Started with Growth",
    },
    {
        name: "Enterprise",
        price: "Custom",
        description: "Perfect for large or bespoke deployments",
        features: [
            "Everything in Growth",
            "Advanced AI features",
            "Custom integrations",
            "Migration support",
        ],
        buttonText: "Talk to Sales",
    },
]
