import {
    BrainCircuit,
    FolderGit2,
    FlaskConical,
    Zap,
    Presentation,
    Users,
    Mic2,
    GraduationCap,
    Handshake,
    Briefcase,
    Network,
    Rocket,
} from "lucide-react";

export const NAV_LINKS = [
    { id: "home", label: "Home" },
    { id: "community", label: "Community" },
    { id: "what-we-do", label: "What We Do" },
    { id: "achievements", label: "Achievements" },
    { id: "industry", label: "Industry" },
    { id: "events", label: "Events" },
    { id: "team", label: "Team" },
    { id: "contact", label: "Contact" },
];

export const STATS = [
    { value: 10, suffix: "+", label: "Core Positions" },
    { value: 50, suffix: "+", label: "Active Members" },
    { value: 20, suffix: "+", label: "Projects" },
    { value: 15, suffix: "+", label: "Events" },
];

export const TOPICS = ["AI", "ML", "GEN AI", "DATA", "RESEARCH", "ROBOTICS", "VISION", "NLP"];

export const WHAT_WE_DO = [
    {
        icon: BrainCircuit,
        title: "AI & ML Workshops",
        description: "Hands-on sessions designed to turn concepts into working knowledge.",
    },
    {
        icon: FolderGit2,
        title: "Projects",
        description: "Build practical AI/ML projects solving real-world problems.",
    },
    {
        icon: FlaskConical,
        title: "Research",
        description: "Explore papers, models, emerging technologies and new ideas.",
    },
    {
        icon: Zap,
        title: "Hackathons",
        description: "Turn ideas into prototypes under pressure.",
    },
    {
        icon: Presentation,
        title: "Technical Sessions",
        description: "Learn directly from students, mentors and industry professionals.",
    },
    {
        icon: Users,
        title: "Community",
        description: "Collaborate, discuss, experiment and grow together.",
    },
];

export const ACHIEVEMENTS = [
    {
        title: "[ACHIEVEMENT TITLE]",
        description: "[SHORT DESCRIPTION — replace with the real milestone, result or recognition.]",
        category: "[CATEGORY]",
        year: "[YEAR]",
    },
    {
        title: "[ACHIEVEMENT TITLE]",
        description: "[SHORT DESCRIPTION — hackathon win, competition result, research milestone.]",
        category: "[CATEGORY]",
        year: "[YEAR]",
    },
    {
        title: "[ACHIEVEMENT TITLE]",
        description: "[SHORT DESCRIPTION — project shipped, certification cohort, community milestone.]",
        category: "[CATEGORY]",
        year: "[YEAR]",
    },
    {
        title: "[ACHIEVEMENT TITLE]",
        description: "[SHORT DESCRIPTION — workshop series, participation record, collaboration.]",
        category: "[CATEGORY]",
        year: "[YEAR]",
    },
];

export const INDUSTRY = [
    { icon: Mic2, title: "Industry Talks", description: "[Sessions with professionals working in AI/ML.]" },
    { icon: GraduationCap, title: "Expert Sessions", description: "[Deep-dives led by researchers and alumni.]" },
    { icon: Handshake, title: "Mentorship", description: "[Guidance from mentors across the industry.]" },
    { icon: Briefcase, title: "Internships", description: "[Pathways to real industry experience.]" },
    { icon: Network, title: "Networking", description: "[Connections with startups and tech companies.]" },
    { icon: Rocket, title: "Real-World Projects", description: "[Work on problems that matter beyond the classroom.]" },
];

export const EVENTS = [
    {
        title: "[EVENT TITLE 01]",
        date: "[EVENT DATE]",
        description: "[SHORT DESCRIPTION — e.g. a hands-on workshop exploring generative AI models.]",
        image: "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?w=1200&q=80&auto=format&fit=crop",
        category: "WORKSHOP",
        year: "[YEAR]",
    },
    {
        title: "[EVENT TITLE 02]",
        date: "[EVENT DATE]",
        description: "[SHORT DESCRIPTION — e.g. a 24-hour hackathon building intelligent prototypes.]",
        image: "https://images.pexels.com/photos/6424590/pexels-photo-6424590.jpeg?auto=compress&cs=tinysrgb&w=1200",
        category: "HACKATHON",
        year: "[YEAR]",
    },
    {
        title: "[EVENT TITLE 03]",
        date: "[EVENT DATE]",
        description: "[SHORT DESCRIPTION — e.g. a tech talk on the future of machine learning.]",
        image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=1200&q=80&auto=format&fit=crop",
        category: "TECH TALK",
        year: "[YEAR]",
    },
    {
        title: "[EVENT TITLE 04]",
        date: "[EVENT DATE]",
        description: "[SHORT DESCRIPTION — e.g. a research reading group on transformer architectures.]",
        image: "https://images.pexels.com/photos/5380607/pexels-photo-5380607.jpeg?auto=compress&cs=tinysrgb&w=1200",
        category: "RESEARCH",
        year: "[YEAR]",
    },
    {
        title: "[EVENT TITLE 05]",
        date: "[EVENT DATE]",
        description: "[SHORT DESCRIPTION — e.g. a coding competition across ML tracks.]",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=80&auto=format&fit=crop",
        category: "COMPETITION",
        year: "[YEAR]",
    },
    {
        title: "[EVENT TITLE 06]",
        date: "[EVENT DATE]",
        description: "[SHORT DESCRIPTION — e.g. an industry session with AI practitioners.]",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80&auto=format&fit=crop",
        category: "INDUSTRY",
        year: "[YEAR]",
    },
];

export const TEAM = [
    { name: "[STUDENT NAME]", role: "President", tagline: "Building communities,\nideas and experiences." },
    { name: "[STUDENT NAME]", role: "Vice President", tagline: "[Two-line description\nabout the member.]" },
    { name: "[STUDENT NAME]", role: "General Secretary", tagline: "[Two-line description\nabout the member.]" },
    { name: "[STUDENT NAME]", role: "Joint Secretary", tagline: "[Two-line description\nabout the member.]" },
    { name: "[STUDENT NAME]", role: "Technical Head", tagline: "[Two-line description\nabout the member.]" },
    { name: "[STUDENT NAME]", role: "AI/ML Lead", tagline: "[Two-line description\nabout the member.]" },
    { name: "[STUDENT NAME]", role: "Research Lead", tagline: "[Two-line description\nabout the member.]" },
    { name: "[STUDENT NAME]", role: "Events & Operations Lead", tagline: "[Two-line description\nabout the member.]" },
    { name: "[STUDENT NAME]", role: "Design & Creative Lead", tagline: "[Two-line description\nabout the member.]" },
    { name: "[STUDENT NAME]", role: "Media & Outreach Lead", tagline: "[Two-line description\nabout the member.]" },
];

export const CONTACT_CARDS = [
    { label: "Email", value: "[SOCIETY EMAIL]" },
    { label: "Instagram", value: "[INSTAGRAM LINK]" },
    { label: "LinkedIn", value: "[LINKEDIN LINK]" },
    { label: "Location", value: "ADGIPS, New Delhi" },
];
