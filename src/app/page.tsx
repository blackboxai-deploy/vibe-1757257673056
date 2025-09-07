"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { 
  PERSONAL_INFO, 
  HERO_TECH_IMAGES,
  SKILLS_BY_CATEGORY, 
  EDUCATION, 
  CERTIFICATIONS, 
  EXPERIENCE, 
  PROJECTS, 
  SOCIAL_LINKS,
  NAVIGATION_ITEMS 
} from "@/lib/constants";

export default function Portfolio() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ["home", "education", "experience", "projects", "contact"];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      {/* Navigation Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-slate-950/90 backdrop-blur-md border-b border-slate-800" 
          : "bg-transparent"
      }`}>
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Hemanth Ponugothi
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {NAVIGATION_ITEMS.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href.substring(1))}
                  className={`text-sm font-medium transition-colors hover:text-cyan-400 ${
                    activeSection === item.href.substring(1)
                      ? "text-cyan-400"
                      : "text-slate-300"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="container mx-auto text-center max-w-6xl">
          {/* Profile Photo Section */}
          <div className="mb-12">
            <div className="relative inline-block">
              <div className="w-48 h-48 md:w-56 md:h-56 mx-auto mb-6 relative">
                <img 
                  src={PERSONAL_INFO.profile_image}
                  alt={`${PERSONAL_INFO.name} - DevSecOps Engineer`}
                  className="w-full h-full rounded-full object-cover border-4 border-gradient-to-r from-cyan-500 to-blue-500 shadow-2xl shadow-cyan-500/20"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 animate-pulse"></div>
              </div>
              
              {/* Floating Tech Icons Around Photo */}
              <div className="absolute inset-0 w-full h-full pointer-events-none">
                {HERO_TECH_IMAGES.slice(0, 8).map((tech, index) => {
                  const angle = (index * 45) * (Math.PI / 180); // 45 degrees apart
                  const radius = 140; // Distance from center
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  
                  return (
                    <div
                      key={tech.name}
                      className="absolute w-12 h-12 md:w-16 md:h-16 rounded-xl bg-slate-900/80 border border-slate-700 p-2 md:p-3 backdrop-blur-sm hover:scale-110 transition-all duration-300 hover:border-cyan-400/50"
                      style={{
                        left: `calc(50% + ${x}px - 24px)`,
                        top: `calc(50% + ${y}px - 24px)`,
                        animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
                        animationDelay: `${index * 0.2}s`
                      }}
                    >
                      <img 
                        src={tech.image} 
                        alt={tech.alt}
                        className="w-full h-full object-contain rounded-lg"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                {PERSONAL_INFO.name}
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl text-slate-300 mb-4 font-light">
              {PERSONAL_INFO.title}
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              {PERSONAL_INFO.subtitle}
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-1">
                {PERSONAL_INFO.experience_years}
              </div>
              <div className="text-sm text-slate-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-1">
                {PERSONAL_INFO.projects_completed}
              </div>
              <div className="text-sm text-slate-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-1">
                {PERSONAL_INFO.certifications}
              </div>
              <div className="text-sm text-slate-400">Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-green-400 mb-1">
                {PERSONAL_INFO.cloud_platforms}
              </div>
              <div className="text-sm text-slate-400">Cloud Platforms</div>
            </div>
          </div>

          {/* Skills Overview */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-8 text-slate-100">Core Technologies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(SKILLS_BY_CATEGORY).map(([category, data]) => (
                <Card key={category} className="bg-slate-900/50 border-slate-800 hover:border-cyan-500/50 transition-all duration-300 group">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-sm font-medium text-slate-200 group-hover:text-cyan-400 transition-colors">
                      {category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-2">
                      {data.skills.map((skill) => (
                        <Badge 
                          key={skill} 
                          variant="secondary"
                          className={`${data.color} text-white text-xs px-2 py-1 hover:scale-105 transition-transform`}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Additional Tech Showcase */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6 text-slate-200">Technology Stack</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {HERO_TECH_IMAGES.map((tech) => (
                <div key={tech.name} className="group relative">
                  <div className="w-16 h-16 bg-slate-900/50 border border-slate-700 rounded-lg p-3 hover:border-cyan-400/50 hover:scale-110 transition-all duration-300">
                    <img 
                      src={tech.image} 
                      alt={tech.alt}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {tech.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection("projects")}
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium px-8 py-3 rounded-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            >
              View My Work
            </Button>
            <Button 
              onClick={() => scrollToSection("contact")}
              variant="outline"
              size="lg"
              className="border-slate-600 text-slate-200 hover:bg-slate-800 hover:border-cyan-400 font-medium px-8 py-3 rounded-lg transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Education & Certifications
            </span>
          </h2>

          {/* Education */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-slate-200">Academic Background</h3>
            <div className="grid gap-6">
              {EDUCATION.map((edu, index) => (
                <Card key={index} className="bg-slate-900/50 border-slate-800 hover:border-blue-500/50 transition-all duration-300">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <CardTitle className="text-lg text-slate-100 mb-2">
                          {edu.degree}
                        </CardTitle>
                        <CardDescription className="text-cyan-400 font-medium">
                          {edu.institution}
                        </CardDescription>
                      </div>
                      <div className="text-right mt-4 md:mt-0">
                        <div className="text-slate-400">{edu.year}</div>
                        <div className="text-green-400 font-medium">{edu.gpa}</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300">{edu.description}</p>
                    <div className="text-sm text-slate-400 mt-2">{edu.location}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-slate-200">Professional Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CERTIFICATIONS.map((cert, index) => (
                <Card key={index} className="bg-slate-900/50 border-slate-800 hover:border-green-500/50 transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="text-lg text-slate-100 mb-2">
                      {cert.name}
                    </CardTitle>
                    <CardDescription className="text-green-400 font-medium">
                      {cert.issuer}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                        {cert.badge}
                      </Badge>
                      <span className="text-slate-400 text-sm">{cert.year}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-slate-900/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h2>

          <div className="space-y-8">
            {EXPERIENCE.map((exp, index) => (
              <Card key={index} className="bg-slate-900/50 border-slate-800 hover:border-purple-500/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                    <div>
                      <CardTitle className="text-xl text-slate-100 mb-2">
                        {exp.title}
                      </CardTitle>
                      <CardDescription className="text-purple-400 font-medium text-lg">
                        {exp.company}
                      </CardDescription>
                      <div className="text-slate-400 mt-1">{exp.location}</div>
                    </div>
                    <div className="text-right mt-4 md:mt-0">
                      <div className="text-cyan-400 font-medium">{exp.period}</div>
                      <Badge variant="outline" className="border-slate-600 text-slate-300 mt-2">
                        {exp.type}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-slate-300 leading-relaxed">{achievement}</p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((project, index) => (
              <Card key={index} className="bg-slate-900/50 border-slate-800 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl text-slate-100 mb-2">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-slate-300 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-slate-800 text-slate-300 hover:bg-cyan-500/20 hover:text-cyan-400 transition-colors">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-slate-200 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-slate-400">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button 
                      size="sm"
                      className="bg-slate-800 hover:bg-cyan-600 text-white border-slate-600 hover:border-cyan-500 transition-all duration-300 flex-1"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      View Code
                    </Button>
                    <Button 
                      size="sm"
                      variant="outline"
                      className="border-slate-600 text-slate-300 hover:bg-blue-600 hover:border-blue-500 hover:text-white transition-all duration-300 flex-1"
                      onClick={() => window.open(project.demo, "_blank")}
                    >
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-900/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-slate-200">Get In Touch</h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                Ready to discuss DevSecOps solutions, cloud infrastructure, or potential collaborations? 
                I'm always excited to connect with fellow engineers and explore new opportunities.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-cyan-400 rounded-full"></div>
                  </div>
                  <div>
                    <div className="text-slate-200 font-medium">Email</div>
                    <div className="text-slate-400">{PERSONAL_INFO.email}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                  </div>
                  <div>
                    <div className="text-slate-200 font-medium">Phone</div>
                    <div className="text-slate-400">{PERSONAL_INFO.phone}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
                  </div>
                  <div>
                    <div className="text-slate-200 font-medium">Location</div>
                    <div className="text-slate-400">{PERSONAL_INFO.location}</div>
                  </div>
                </div>
              </div>

              <Separator className="my-8 bg-slate-700" />

              <div>
                <h4 className="text-lg font-medium mb-4 text-slate-200">Follow Me</h4>
                <div className="flex gap-4">
                  {SOCIAL_LINKS.map((social) => (
                    <Button
                      key={social.name}
                      variant="outline"
                      size="sm"
                      className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
                      onClick={() => window.open(social.url, "_blank")}
                    >
                      {social.name}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="bg-slate-900/50 border-slate-800">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-100">Send Message</CardTitle>
                  <CardDescription className="text-slate-400">
                    Fill out the form below and I'll get back to you soon.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-slate-200">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        className="mt-2 bg-slate-800 border-slate-700 text-slate-100 focus:border-cyan-400 focus:ring-cyan-400/20"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-slate-200">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="mt-2 bg-slate-800 border-slate-700 text-slate-100 focus:border-cyan-400 focus:ring-cyan-400/20"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-slate-200">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        className="mt-2 bg-slate-800 border-slate-700 text-slate-100 focus:border-cyan-400 focus:ring-cyan-400/20"
                        placeholder="Tell me about your project or how I can help..."
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium py-3 rounded-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 disabled:opacity-50"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                    {submitStatus === "success" && (
                      <p className="text-green-400 text-sm">Message sent successfully! I'll get back to you soon.</p>
                    )}
                    {submitStatus === "error" && (
                      <p className="text-red-400 text-sm">Failed to send message. Please try again or email me directly.</p>
                    )}
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-800">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-slate-400 text-sm mb-4 md:mb-0">
              © 2024 {PERSONAL_INFO.name}. All rights reserved.
            </div>
            <div className="text-slate-400 text-sm">
              Built with Next.js, TypeScript & Tailwind CSS
            </div>
          </div>
        </div>
      </footer>

      {/* CSS for floating animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
      `}</style>
    </div>
  );
}