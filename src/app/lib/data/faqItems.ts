
import { TimerSvg, FreeSvg, DifferentSvg, ImportSvg, ThunderSvg } from "@/app/assets/svgs"
import type { ComponentType, SVGProps } from "react"
  
  export interface FaqItem {
    id: string
    question: string
    answer: string
    icon: ComponentType<SVGProps<SVGSVGElement>>
  }
  
  export const faqItems: FaqItem[] = [
    {
      id: "item-1",
      question: "When will Hirite be available?",
      answer:
        "We’re currently in the final stages of development. You can request early access to the beta version by entering your email above. We’ll notify you as soon as it’s ready.",
      icon: TimerSvg,
    },
    {
      id: "item-2",
      question: "Is Hirite free to try?",
      answer:
        "Yes! We offer a free tier so you can explore the core features of Hirite without any commitment. Upgrade anytime for more advanced capabilities.",
      icon: FreeSvg,
    },
    {
      id: "item-3",
      question: "What makes Hirite different from other ATS platforms?",
      answer:
        "Hirite leverages AI-powered candidate sourcing, real-time collaboration, and visual workflows to streamline your hiring—no more clunky, disjointed tools.",
      icon: DifferentSvg,
    },
    {
      id: "item-4",
      question: "Can I import data from my existing ATS?",
      answer:
        "Absolutely. We’ll provide migration tools (and support) to bring your candidates, companies, and notes over so you don’t lose any history.",
      icon: ImportSvg,
    },
    {
      id: "item-5",
      question: "What integrations will Hirite support at launch?",
      answer:
        "At launch we’ll have first-class integrations with popular email providers, Slack, LinkedIn, and major calendar apps—more to come!",
      icon: ThunderSvg,
    },
  ]
  