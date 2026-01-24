
import { 
  Cpu, 
  Palette, 
  Layout, 
  Search, 
  BarChart3, 
  Code2 
} from 'lucide-react';

export const philosophyPrinciples = [
  {
    title: "Pure Logic",
    description: "Every pixel and line of code must serve a purpose. We eliminate the redundant to reveal the essential.",
    align: "left" as const
  },
  {
    title: "Elevated Art",
    description: "Technology alone is not enough. We infuse every artifact with a soul through curated aesthetics.",
    align: "right" as const
  },
  {
    title: "Intelligence",
    description: "We don't just build interfaces; we build systems that learn, adapt, and empower.",
    align: "left" as const
  }
];

export const services = [
  {
    icon: Code2,
    title: "Integrated Software",
    description: "Robust, scalable software solutions tailored to your unique business needs.",
    className: "md:col-span-2",
  },
  {
    icon: Cpu,
    title: "AI Solutions",
    description: "Custom AI models and tools to automate and empower your workflow.",
    className: "md:col-span-1",
  },
  {
    icon: Layout,
    title: "Creative Interfaces",
    description: "Stunning, user-centric frontend designs that captivate and convert.",
    className: "md:col-span-1",
  },
  {
    icon: Palette,
    title: "Brand Design",
    description: "Forging memorable brand identities that resonate with your audience.",
    className: "md:col-span-2",
  },
  {
    icon: BarChart3,
    title: "Data Analysis",
    description: "Turning raw data into actionable insights for smarter decision making.",
    className: "md:col-span-1",
  },
  {
    icon: Search,
    title: "R&D",
    description: "Exploring the cutting edge of technology to keep you ahead of the curve.",
    className: "md:col-span-2",
  }
];

export const projects = [
  {
    category: "AI Platform",
    title: "NeuroCore Analytics",
    description: "Enterprise-grade predictive analytics dashboard for financial institutions.",
    year: "2024",
    image: "/images/ai_platform_project_1769192363142.png"
  },
  {
    category: "Mobile App",
    title: "Vantage Health",
    description: "Patient companion app with real-time biometric tracking and AI consultation.",
    year: "2023",
    image: "/images/health_tech_project_1769192377210.png"
  },
  {
    category: "Web Design",
    title: "Lumina Studios",
    description: "Immersive portfolio experience for an award-winning architectural firm.",
    year: "2023",
    image: "/images/architecture_design_project_1769192398877.png"
  },
  {
    category: "Branding",
    title: "Echo Systems",
    description: "Complete brand identity and design system for a robotics startup.",
    year: "2024",
    image: "/images/branding_identity_project_1769192413853.png"
  }
];
