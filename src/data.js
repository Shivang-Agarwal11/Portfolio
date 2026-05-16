export const data = {
    header: {
        name: "Shivang Agarwal",
        role: "Application Engineer (Intelligent Product Recommendation)",
        company: "SAP",
        contact: {
            phone: "+91 9415341629",
            email: "shivangagarwal11.sa@gmail.com",
            location: "Bangalore, India",
        },
        socials: {
            github: "https://github.com/Shivang-Agarwal11",
            linkedin: "https://www.linkedin.com/in/shivang-agarwal-11/",
        },
        resume: require("./assets/resume.pdf"),
    },
    experience: [
        {
            role: "Application Engineer (Intelligent Product Recommendation)",
            company: "SAP",
            location: "Bangalore",
            date: "Jun 2024 – Present",
            points: [
                "Worked as an AI Developer in Forward Deployment Engineering — embedded with enterprise customers to identify AI use cases, architect solutions, and drive end-to-end delivery for customer success.",
                "Proficient in AI-assisted development tools including Claude Code, GitHub Copilot, Cursor, and Cline — leveraging them to accelerate delivery and improve code quality.",
                "Implemented Agentic AI Reflection Design Pattern using autogen in co-innovation with Microsoft, reducing tender analysis time from weeks to hours.",
                "Delivered Retrieval-Augmented Generation (RAG) pipelines using Python, SAP AI Core, and HANA Vector DB for intelligent document processing.",
                "Implemented a secure LLM orchestration service with data masking to prevent personal data exposure during document processing.",
                "Built a multi-target regression model for intelligent product configuration using TensorFlow and Python.",
                "Implemented secure cross-platform back-end services using certificate-based (mTLS) authentication.",
                "Developed a graphical price estimate dashboard with SAP UI5 for enhanced user interaction.",
                "Addressed high-priority security issues and obtained compliance approval for AI-based services.",
                "Implemented metering and token consumption mechanisms with robust error handling for reliable agentic communication.",
            ],
        },
        {
            role: "Scholar (Developer in JIT Team)",
            company: "SAP",
            location: "Bangalore",
            date: "Sep 2023 – Apr 2024",
            points: [
                "Developed ABAP reports, BOPF objects, and performed archiving tasks.",
                "Shifted focus to SAP UI5, building a POC to dynamically render table headers and buttons based on user needs.",
                "Created a complete OData V4 mock server to simulate service interactions.",
            ],
        },
        {
            role: "DevOps Trainee",
            company: "Nagarro",
            location: "Remote",
            date: "Mar 2023 – Jul 2023",
            points: [
                "Built and maintained CI/CD pipelines using Jenkins, Ansible, Terraform, Docker, and Kubernetes on AWS.",
                "Gained hands-on experience in modern DevOps practices, including cloud deployments and IaC.",
            ],
        },
    ],
    projects: [
        {
            title: "Claude Skills Dashboard",
            icon: "🧩",
            techStack: "React, TypeScript, Node.js, Express",
            description:
                "The missing UI for Claude Code. Browse, edit, create, and rename all Claude Code skills and MCP servers from a single web dashboard — without ever touching a YAML file. First-of-its-kind local skill management panel with conflict detection, health checks, and dark mode.",
            link: "https://github.com/Shivang-Agarwal11/claude-skills-dashboard",
        },
        {
            title: "DANA Tool",
            icon: "🤖",
            techStack: "Python, Ollama, NodeJs, ReactJs, MongoDB",
            description:
                "Built an AI-powered platform with Agentic AI automation, real-time monitoring, and low-code pipeline setup. Unified DevOps dashboard with Jenkins, GitHub, and SonarQube integration, creating Github issues by analyzing PR, and generating build scripts directly.",
            link: "https://github.com/Shivang-Agarwal11/DANA-Tool",
        },
        {
            title: "Rent Management",
            icon: "🏘️",
            techStack: "NodeJs, ReactJs, MongoDB",
            description:
                "A full-stack rent management application for landlords and tenants — track properties, manage rent payments, and handle tenant records through a clean dashboard interface.",
            link: "https://github.com/Shivang-Agarwal11/Rent-Management",
        },
        {
            title: "Smart House Device Management",
            icon: "🏠",
            techStack: "NodeJs, ReactJs, MongoDB",
            description:
                "Developed a reusable Smart House Device Management service that integrates with any firmware via APIs. Device analytics, maintenance, and tracking of carbon footprint within a microservice architecture with an API Gateway.",
            link: "https://github.com/Shivang-Agarwal11/smart-house-device-management",
        },
        {
            title: "MailAutomate",
            icon: "📨",
            techStack: "Django, Python, SMTP",
            description:
                "Automated bulk sending of customized emails with attachments.",
            link: "https://github.com/Shivang-Agarwal11/Mail-Automation",
        },
    ],
    education: [
        {
            degree: "M.Tech in Software Engineering",
            institution: "BITS Pilani",
            date: "Aug 2023 – Jul 2025",
            details: "CGPA: 7.93",
        },
    ],
    achievements: [
        "Filed a patent in AI — approved under filing status.",
        "Multiple-time winner of SAP Team Excellence Awards.",
        "Delivered a Tech Talk at SAP DCOM — presented AI innovation to a large internal audience.",
        "Showcased a Demo Pod at SAP DCOM — live demonstration of AI-powered solutions to customers and stakeholders.",
        "Developed a project \"Code Generation for MDO\" in Innvent for Scholar and secured 3rd position in it.",
        "AI Programming with Python Nanodegree by AWS and Udacity.",
        "Amazon ML Summer School 2022.",
    ],
};
