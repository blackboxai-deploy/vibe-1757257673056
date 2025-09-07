// Portfolio data and constants for Hemanth Ponugothi - DevSecOps & Cloud Engineer

export const PERSONAL_INFO = {
  name: "Hemanth Ponugothi",
  title: "DevSecOps & Cloud Engineer",
  subtitle: "Securing Cloud Infrastructure with Automated DevOps Excellence",
  email: "hemanth.ponugothi@example.com",
  phone: "+91 98765 43210",
  location: "Hyderabad, India",
  linkedin: "https://linkedin.com/in/hemanth-ponugothi",
  github: "https://github.com/hemanth-ponugothi",
  summary: "Passionate DevSecOps & Cloud Engineer with expertise in building secure, scalable cloud infrastructure and implementing automated CI/CD pipelines. Specialized in multi-cloud security, containerization, and infrastructure as code with a strong focus on security automation and compliance.",
  experience_years: "3+",
  projects_completed: "15+",
  certifications: "8+",
  cloud_platforms: "3",
  profile_image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8e0f7aaf-93a6-4016-a86e-0031c4818129.png"
} as const;

export const HERO_TECH_IMAGES = [
  {
    name: "AWS Cloud",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fc7e2131-07dd-4cbe-88b0-db8f1d957f10.png",
    alt: "AWS Cloud Platform"
  },
  {
    name: "Docker",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e0d40235-5640-4b2f-aaea-c5cbe55b0b25.png",
    alt: "Docker Containerization"
  },
  {
    name: "Kubernetes",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fdeb7ba5-b058-45a0-95c8-dc2360bd9e8e.png",
    alt: "Kubernetes Orchestration"
  },
  {
    name: "Jenkins",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7dc7f0dd-d8cc-4358-91f5-18381169f29d.png",
    alt: "Jenkins CI/CD"
  },
  {
    name: "Terraform",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ebdcb757-23f8-4d46-9a9b-0cfc3ecc5de1.png",
    alt: "Terraform IaC"
  },
  {
    name: "Prometheus",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1a24e92a-dc01-4a7b-b0c7-c9b960ecbdff.png",
    alt: "Prometheus Monitoring"
  },
  {
    name: "Linux",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fb2d8af2-29ce-4ff4-887b-b4c1653c5d87.png",
    alt: "Linux Operating System"
  },
  {
    name: "Python",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/432eb52d-128a-4e82-9b05-c5c99e4ebb2a.png",
    alt: "Python Programming"
  },
  {
    name: "DevSecOps",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/407dd350-e729-43b3-8123-34ebc66ae6a8.png",
    alt: "DevSecOps Security"
  },
  {
    name: "Cloud Security",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b8a829d9-3c46-40a2-a739-858b6cfb6cc3.png",
    alt: "Cloud Security"
  }
] as const;

export const SKILLS_BY_CATEGORY = {
  "Operating Systems & Scripting": {
    color: "bg-blue-500",
    skills: ["Linux", "Shell Scripting", "Python"]
  },
  "Version Control & Collaboration": {
    color: "bg-orange-500", 
    skills: ["Git/GitHub", "GitHub Labs", "GitHub Actions"]
  },
  "CI/CD & Automation": {
    color: "bg-green-500",
    skills: ["Jenkins", "Circle CI", "GitHub Actions"]
  },
  "Containerization & Orchestration": {
    color: "bg-purple-500",
    skills: ["Docker", "Kubernetes", "Helm"]
  },
  "Infrastructure as Code": {
    color: "bg-yellow-500",
    skills: ["Terraform", "Ansible"]
  },
  "Monitoring & Observability": {
    color: "bg-red-500",
    skills: ["Prometheus"]
  },
  "Cloud Platforms": {
    color: "bg-cyan-500",
    skills: ["AWS"]
  },
  "Networking & Security": {
    color: "bg-indigo-500",
    skills: ["Networking Fundamentals", "Cloud Security", "DevSecOps Practices"]
  }
} as const;

export const EDUCATION = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "Jawaharlal Nehru Technological University",
    location: "Hyderabad, India",
    year: "2019-2023",
    gpa: "8.2/10",
    description: "Focused on software engineering, system design, and cloud computing fundamentals"
  },
  {
    degree: "Higher Secondary Certificate",
    institution: "Sri Chaitanya Junior College",
    location: "Hyderabad, India", 
    year: "2017-2019",
    gpa: "89%",
    description: "Mathematics, Physics, Chemistry - Strong analytical foundation"
  }
] as const;

export const CERTIFICATIONS = [
  {
    name: "AWS Certified Solutions Architect - Associate",
    issuer: "Amazon Web Services",
    year: "2024",
    badge: "AWS SAA-C03"
  },
  {
    name: "Docker Certified Associate",
    issuer: "Docker Inc.",
    year: "2024",
    badge: "DCA"
  },
  {
    name: "Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    year: "2023",
    badge: "CKA"
  },
  {
    name: "Terraform Associate Certification",
    issuer: "HashiCorp",
    year: "2023",
    badge: "TA-002-P"
  },
  {
    name: "GitHub Actions Certification",
    issuer: "GitHub",
    year: "2023",
    badge: "GHA-001"
  },
  {
    name: "Jenkins Certified Engineer",
    issuer: "CloudBees",
    year: "2023",
    badge: "JCE"
  },
  {
    name: "Prometheus Certified Associate",
    issuer: "Linux Foundation",
    year: "2024",
    badge: "PCA"
  },
  {
    name: "Python Institute Certified Associate",
    issuer: "Python Institute",
    year: "2022",
    badge: "PCAP"
  }
] as const;

export const EXPERIENCE = [
  {
    title: "DevSecOps Engineer",
    company: "TechCorp Solutions",
    location: "Hyderabad, India",
    period: "Jan 2024 - Present",
    type: "Full-time",
    achievements: [
      "Designed and implemented secure CI/CD pipelines using Jenkins and GitHub Actions, reducing deployment time by 60%",
      "Built infrastructure as code using Terraform and Ansible, managing 50+ AWS resources across multiple environments",
      "Containerized 20+ applications using Docker and deployed them on Kubernetes clusters with Helm charts",
      "Implemented comprehensive monitoring solutions with Prometheus, achieving 99.9% system uptime",
      "Automated security scanning and compliance checks, reducing vulnerabilities by 80%",
      "Led DevSecOps best practices adoption across 3 development teams"
    ]
  },
  {
    title: "Cloud Infrastructure Intern",
    company: "CloudTech Innovations",
    location: "Bangalore, India",
    period: "Jun 2023 - Dec 2023",
    type: "Internship",
    achievements: [
      "Developed automated deployment scripts using Shell scripting and Python, improving deployment efficiency by 40%",
      "Assisted in migrating legacy applications to AWS cloud infrastructure using Docker containers",
      "Implemented basic monitoring dashboards using Prometheus and contributed to infrastructure documentation",
      "Participated in incident response and learned DevSecOps practices in production environments",
      "Collaborated with senior engineers on Kubernetes cluster management and maintenance"
    ]
  },
  {
    title: "Junior DevOps Associate",
    company: "StartupHub Tech",
    location: "Hyderabad, India",
    period: "Aug 2022 - May 2023",
    type: "Part-time",
    achievements: [
      "Maintained Git repositories and implemented branching strategies for 10+ development projects",
      "Created and managed Docker images for microservices architecture",
      "Assisted in setting up basic CI/CD pipelines using GitHub Actions and Circle CI",
      "Performed Linux system administration and wrote automation scripts in Shell and Python",
      "Contributed to infrastructure setup and learned cloud security fundamentals"
    ]
  }
] as const;

export const PROJECTS = [
  {
    title: "Multi-Cloud Infrastructure Automation",
    description: "Comprehensive infrastructure as code solution for deploying secure, scalable applications across AWS environments with automated security compliance.",
    technologies: ["Terraform", "AWS", "Docker", "Kubernetes", "Ansible", "Prometheus"],
    features: [
      "Automated AWS resource provisioning with Terraform modules",
      "Kubernetes cluster setup with security hardening",
      "CI/CD pipeline integration with security scanning",
      "Comprehensive monitoring and alerting setup",
      "Infrastructure cost optimization and governance"
    ],
    github: "https://github.com/hemanth-ponugothi/multi-cloud-infrastructure",
    demo: "https://infrastructure-demo.hemanthponugothi.dev",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fdf71a01-67be-4e2b-8fb3-13215d1f8878.png"
  },
  {
    title: "DevSecOps Pipeline Orchestrator",
    description: "End-to-end DevSecOps pipeline with automated security testing, vulnerability scanning, and compliance reporting using Jenkins and GitHub Actions.",
    technologies: ["Jenkins", "GitHub Actions", "Docker", "Python", "Shell Scripting", "AWS"],
    features: [
      "Automated security vulnerability scanning",
      "Docker image security analysis",
      "Compliance reporting and governance",
      "Slack/Email notification integration",
      "Multi-environment deployment automation"
    ],
    github: "https://github.com/hemanth-ponugothi/devsecops-pipeline",
    demo: "https://pipeline-demo.hemanthponugothi.dev",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/18d92171-79c1-4936-8a3a-d8dfab798497.png"
  },
  {
    title: "Kubernetes Security Monitoring Stack",
    description: "Production-ready Kubernetes monitoring and security solution with Prometheus, custom dashboards, and automated alerting for container security.",
    technologies: ["Kubernetes", "Prometheus", "Docker", "Helm", "Python", "Linux"],
    features: [
      "Real-time cluster monitoring and metrics",
      "Security policy enforcement and reporting",
      "Custom Helm charts for easy deployment", 
      "Automated backup and disaster recovery",
      "Resource optimization recommendations"
    ],
    github: "https://github.com/hemanth-ponugothi/k8s-security-monitoring",
    demo: "https://k8s-monitoring.hemanthponugothi.dev",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d45c083e-fe3b-46f8-8cd5-4e23583b4784.png"
  },
  {
    title: "Cloud Cost Optimization Tool",
    description: "Python-based automation tool for AWS cost analysis, resource optimization recommendations, and automated cleanup of unused resources.",
    technologies: ["Python", "AWS", "Shell Scripting", "Terraform", "Linux"],
    features: [
      "Automated cost analysis and reporting",
      "Unused resource identification and cleanup",
      "Right-sizing recommendations for EC2/RDS",
      "Scheduled reports via email/Slack",
      "Terraform integration for resource governance"
    ],
    github: "https://github.com/hemanth-ponugothi/cloud-cost-optimizer",
    demo: "https://cost-optimizer.hemanthponugothi.dev",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/339ed640-528d-4106-a5d0-35e66859898f.png"
  },
  {
    title: "Container Security Scanner",
    description: "Comprehensive Docker container security scanning solution with vulnerability assessment, compliance checking, and automated remediation suggestions.",
    technologies: ["Docker", "Python", "Shell Scripting", "Jenkins", "GitHub Actions"],
    features: [
      "Automated vulnerability scanning for container images",
      "Security best practice compliance checking",
      "Integration with CI/CD pipelines",
      "Detailed security reports and recommendations",
      "Policy-based scanning and governance"
    ],
    github: "https://github.com/hemanth-ponugothi/container-security-scanner",
    demo: "https://security-scanner.hemanthponugothi.dev",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f4af2d72-8983-4014-9781-19b3eece3098.png"
  },
  {
    title: "Infrastructure Monitoring & Alerting",
    description: "Complete monitoring solution using Prometheus with custom metrics, alerting rules, and automated incident response for cloud infrastructure.",
    technologies: ["Prometheus", "Python", "Shell Scripting", "AWS", "Docker", "Ansible"],
    features: [
      "Custom metrics collection and visualization",
      "Intelligent alerting with escalation policies",
      "Automated incident response workflows",
      "Performance trend analysis and capacity planning",
      "Integration with multiple cloud platforms"
    ],
    github: "https://github.com/hemanth-ponugothi/infrastructure-monitoring",
    demo: "https://monitoring.hemanthponugothi.dev",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a6feceaa-9bea-4b5e-a40a-430437c26f61.png"
  }
] as const;

export const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/hemanth-ponugothi",
    username: "@hemanth-ponugothi"
  },
  {
    name: "GitHub", 
    url: "https://github.com/hemanth-ponugothi",
    username: "@hemanth-ponugothi"
  },
  {
    name: "Email",
    url: "mailto:hemanth.ponugothi@example.com",
    username: "hemanth.ponugothi@example.com"
  }
] as const;

export const NAVIGATION_ITEMS = [
  { name: "Home", href: "#home" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" }
] as const;