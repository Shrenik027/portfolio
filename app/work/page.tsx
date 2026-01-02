"use client";
import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Briefcase,
  Calendar,
  Building,
  Code,
  Database,
  ExternalLink,
  FileCode,
  FlaskConical,
  GitBranch,
  Globe,
  Layers,
  PanelTop,
  Rocket,
  Server,
  Terminal,
  Users,
  Zap,
  ChevronRight,
  CheckCircle,
  Link as LinkIcon,
  Braces,
  Cloud,
  Code2,
  FileText,
  Bot,
  Calculator,
  Eye,
  Sparkles,
  Target,
  Clock,
  Brain,
  Leaf,
  Cpu,
  Shield,
  Wrench,
} from "lucide-react";
import Link from "next/link";
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// NOT a variant
const floatAnimation = {
  animate: { y: [-12, 12, -12] },
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

export default function WorkPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const spacing = {
    section: "px-4 sm:px-6 md:px-8 lg:px-12",
    container: "max-w-7xl mx-auto",
    py: { section: "py-24 md:py-32 lg:py-40" },
  };

  const experiences = [
    {
      role: "Full Stack Intern",
      company: "Macksofy Technologies Pvt. Ltd.",
      location: "Mumbai, India",
      duration: "September 2025 – Present",
      icon: Building,
      color: "#F59E0B",
      achievements: [
        "Built production-ready web applications with modern tech stack",
        "Optimized API response times by 40% through backend optimization",
        "Integrated AWS Textract for OCR processing in compliance systems",
        "Participated in Agile sprints with hybrid development teams",
        "Developed scalable backend modules with Node.js & Express.js",
      ],
      technologies: [
        "React.js",
        "Next.js",
        "Node.js",
        "Express.js",
        "Flask",
        "AWS Textract",
        "MongoDB",
        "REST APIs",
      ],
      stats: [
        { label: "API Optimization", value: "40%", icon: Zap },
        { label: "Projects", value: "3+", icon: Code },
        { label: "Team Size", value: "8", icon: Users },
      ],
    },
  ];

  const projects = [
    {
      title: "AI-Powered Compliance Checker",
      tagline: "Intelligent Document Analysis Platform",
      description:
        "A comprehensive solution for automated rule-based document validation using AWS Textract and OpenAI models. Processes configuration files and generates structured compliance reports.",
      period: "October 2025",
      status: "Live",
      icon: Bot,
      color: "#8B5CF6",
      technologies: [
        "Next.js",
        "React",
        "Node.js",
        "AWS Textract",
        "OpenAI",
        "MongoDB",
        "Flask",
      ],
      features: [
        "AWS Textract document extraction",
        "OpenAI-powered analysis",
        "Real-time rule validation",
        "Automated report generation",
        "Dashboard with analytics",
      ],
      metrics: [
        { label: "Accuracy", value: "98%", icon: Target },
        { label: "Processing Time", value: "< 30s", icon: Clock },
        { label: "Documents Processed", value: "500+", icon: FileText },
      ],
      links: { live: "#", code: "#" },
    },
    {
      title: "Plant Scan",
      tagline: "AI-Powered Plant Health Detection",
      description:
        "Web application for identifying plant diseases using AI/ML models. Provides actionable insights and treatment recommendations for farmers and gardeners.",
      period: "July 2025",
      status: "Live",
      icon: Leaf,
      color: "#10B981",
      technologies: [
        "Node.js",
        "Express.js",
        "TensorFlow.js",
        "JavaScript",
        "Chart.js",
      ],
      features: [
        "Image-based disease detection",
        "Real-time analysis",
        "Treatment recommendations",
        "Growth monitoring",
        "Community features",
      ],
      metrics: [
        { label: "Detection Accuracy", value: "95%", icon: Brain },
        { label: "Response Time", value: "< 2s", icon: Zap },
        { label: "Users", value: "1000+", icon: Users },
      ],
      links: { live: "#", code: "#" },
    },
    {
      title: "Utility Tools Suite",
      tagline: "Productivity Toolkit Collection",
      description:
        "A collection of practical web tools including calculators, converters, and productivity applications. Built with vanilla JavaScript for maximum performance.",
      period: "November 2024",
      status: "Live",
      icon: Calculator,
      color: "#3B82F6",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "LocalStorage",
        "Service Workers",
      ],
      features: [
        "12+ different tools",
        "Offline functionality",
        "Dark/Light mode",
        "Export capabilities",
        "Responsive design",
      ],
      metrics: [
        { label: "Tools", value: "12+", icon: Wrench },
        { label: "Page Load", value: "< 1s", icon: Rocket },
        { label: "Platforms", value: "All", icon: Globe },
      ],
      links: { live: "#", code: "#" },
    },
  ];

  const techCategories = [
    {
      category: "Frontend",
      icon: Layers,
      color: "#EC4899",
      technologies: [
        { name: "React.js", icon: Braces, color: "#61DAFB", level: 90 },
        { name: "Next.js", icon: PanelTop, color: "#000000", level: 85 },
        { name: "TypeScript", icon: Code, color: "#3178C6", level: 75 },
        { name: "Tailwind CSS", icon: Layers, color: "#06B6D4", level: 92 },
      ],
    },
    {
      category: "Backend",
      icon: Server,
      color: "#F59E0B",
      technologies: [
        { name: "Node.js", icon: Terminal, color: "#339933", level: 88 },
        { name: "Express.js", icon: Server, color: "#000000", level: 85 },
        { name: "Python", icon: FileCode, color: "#3776AB", level: 80 },
        { name: "Flask", icon: FlaskConical, color: "#000000", level: 75 },
      ],
    },
    {
      category: "Infrastructure",
      icon: Cloud,
      color: "#3B82F6",
      technologies: [
        { name: "AWS", icon: Cloud, color: "#FF9900", level: 70 },
        { name: "MongoDB", icon: Database, color: "#47A248", level: 80 },
        { name: "Git/GitHub", icon: GitBranch, color: "#F1502F", level: 85 },
        { name: "Docker", icon: Cpu, color: "#2496ED", level: 65 },
      ],
    },
  ];

  if (!mounted) return null;

  return (
    <main className="min-h-screen text-primary overflow-hidden">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--muted-foreground)) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <section
        className={`relative ${spacing.section} ${spacing.py.section} overflow-hidden`}
      >
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-amber-500/20 to-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-violet-500/20 to-emerald-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -100, 0],
            rotate: [360, 0, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
            delay: 5,
          }}
        />

        <div className={`relative z-10 ${spacing.container}`}>
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 border border-amber-500/20 backdrop-blur-sm"
            >
              <Sparkles className="w-5 h-5 text-amber-500" />
              <span className="text-sm font-medium tracking-wider text-amber-500 uppercase">
                Professional Portfolio
              </span>
              <Sparkles className="w-5 h-5 text-amber-500" />
            </motion.div>

            <motion.h1
              initial="initial"
              animate="animate"
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8"
              style={{
                background:
                  "linear-gradient(90deg, #F59E0B, #3B82F6, #8B5CF6, #10B981, #F59E0B)",
                backgroundSize: "300% 300%",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Crafting Digital
              <br />
              <span className="block mt-4">Experiences</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-xl text-muted-foreground/80 mb-12 leading-relaxed max-w-2xl mx-auto backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10"
            >
              Transforming ideas into performant, scalable web applications.
              Each project represents a unique journey in problem-solving and
              technical innovation.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap justify-center gap-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 overflow-hidden rounded-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative flex items-center gap-3 text-white font-semibold">
                  <Rocket className="w-5 h-5" />
                  Explore Projects
                </span>
              </motion.a>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group"
              >
                <Link
                  href="/contact"
                  className="relative px-8 py-4 border border-amber-500/30 text-foreground font-semibold rounded-xl overflow-hidden group-hover:border-amber-500/50 transition-all"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative flex items-center gap-3">
                    <Briefcase className="w-5 h-5" />
                    Start Collaboration
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className={`relative ${spacing.section} py-32`}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/5 to-transparent" />
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className={`relative z-10 ${spacing.container}`}
        >
          <div className="text-center mb-20">
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-4 mb-8"
            >
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
              <span className="text-sm font-medium tracking-wider text-amber-500 uppercase">
                Professional Journey
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent via-amber-500 to-transparent" />
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            >
              Experience &{" "}
              <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 bg-clip-text text-transparent">
                Impact
              </span>
            </motion.h2>
          </div>

          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={index}
                variants={scaleIn}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-700 via-orange-500 to-amber-500 rounded-3xl blur opacity-0 group-hover:opacity-5 transition duration-500" />
                <div className="relative bg-gradient-to-br from-card via-card/95 to-card/90 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden">
                  <div className=" border-b border-white/10 p-8">
                    <div className="flex flex-col md:flex-row md:items-start gap-8">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="relative"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl blur" />
                        <div className="relative p-6 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 backdrop-blur-sm">
                          <Icon className="w-10 h-10 text-amber-500" />
                        </div>
                      </motion.div>
                      <div className="flex-1">
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                          <div>
                            <h3 className="text-3xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                              {exp.role}
                            </h3>
                            <p className="text-xl text-amber-500/90 font-medium">
                              {exp.company}
                              <span className="text-muted-foreground ml-2">
                                • {exp.location}
                              </span>
                            </p>
                          </div>
                          <div className="px-6 py-3 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-xl border border-amber-500/20">
                            <div className="flex items-center gap-3">
                              <Calendar className="w-5 h-5 text-amber-500" />
                              <span className="font-semibold text-amber-500">
                                {exp.duration}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-2">
                        <h4 className="text-xl font-bold mb-6 flex items-center gap-3">
                          <GitBranch className="w-6 h-6 text-amber-500" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-4">
                          {exp.achievements.map((achievement, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.1 }}
                              className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-amber-500/5 to-transparent hover:from-amber-500/10 transition-all"
                            >
                              <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                              <span className="text-muted-foreground">
                                {achievement}
                              </span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-6 flex items-center gap-3">
                          <Zap className="w-6 h-6 text-amber-500" />
                          Performance Metrics
                        </h4>
                        <div className="space-y-4">
                          {exp.stats.map((stat, i) => {
                            const StatIcon = stat.icon;
                            return (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-4 rounded-xl bg-gradient-to-br from-muted to-muted/50 border border-white/10"
                              >
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-amber-500/10">
                                      <StatIcon className="w-5 h-5 text-amber-500" />
                                    </div>
                                    <span className="text-sm text-muted-foreground">
                                      {stat.label}
                                    </span>
                                  </div>
                                  <span className="text-2xl font-bold text-amber-500">
                                    {stat.value}
                                  </span>
                                </div>
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-white/10">
                      <h4 className="text-xl font-bold mb-6 flex items-center gap-3">
                        <Code className="w-6 h-6 text-amber-500" />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {exp.technologies.map((tech, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="px-4 py-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10 text-amber-500 font-medium rounded-full border border-amber-500/20 hover:border-amber-500/40 transition-all hover:scale-105"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      <section id="projects" className={`relative ${spacing.section} py-32`}>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className={`relative z-10 ${spacing.container}`}
        >
          <div className="text-center mb-20">
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-4 mb-8"
            >
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
              <span className="text-sm font-medium tracking-wider text-violet-500 uppercase">
                Featured Work
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent via-violet-500 to-transparent" />
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            >
              Projects &{" "}
              <span className="bg-gradient-to-r from-violet-500 via-purple-500 to-violet-500 bg-clip-text text-transparent">
                Innovations
              </span>
            </motion.h2>
          </div>

          <div className="space-y-24">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="relative group"
                >
                  <div
                    className="absolute inset-0 rounded-3xl blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                    style={{ backgroundColor: `${project.color}20` }}
                  />
                  <div className="relative bg-gradient-to-br from-card via-card/95 to-card/90 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden">
                    <div className="p-8 border-b border-white/10">
                      <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                        <motion.div
                          whileHover="animate"
                          variants={floatAnimation}
                          className="relative flex-shrink-0"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl blur" />
                          <div className="relative p-6 rounded-2xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 backdrop-blur-sm">
                            <Icon className="w-12 h-12 text-white" />
                          </div>
                        </motion.div>
                        <div className="flex-1">
                          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                            <div>
                              <h3 className="text-3xl font-bold text-white mb-2">
                                {project.title}
                              </h3>
                              <p className="text-xl text-violet-400 font-medium">
                                {project.tagline}
                              </p>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="px-4 py-2 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-full border border-violet-500/30">
                                <span className="text-violet-400 font-semibold">
                                  {project.period}
                                </span>
                              </div>
                              <div className="px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-full border border-emerald-500/30">
                                <span className="text-emerald-400 font-semibold">
                                  {project.status}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="grid lg:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-xl font-bold mb-6 flex items-center gap-3 text-white">
                            <FileText className="w-6 h-6 text-violet-500" />
                            Project Overview
                          </h4>
                          <p className="text-muted-foreground/90 mb-6 leading-relaxed">
                            {project.description}
                          </p>
                          <div className="space-y-4">
                            <h5 className="font-semibold text-white flex items-center gap-2">
                              <Sparkles className="w-5 h-5 text-violet-500" />
                              Key Features
                            </h5>
                            <div className="space-y-2">
                              {project.features.map((feature, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: i * 0.1 }}
                                  className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-violet-500/5 to-transparent hover:from-violet-500/10 transition-all"
                                >
                                  <ChevronRight className="w-4 h-4 text-violet-500" />
                                  <span className="text-muted-foreground">
                                    {feature}
                                  </span>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="mb-8">
                            <h4 className="text-xl font-bold mb-6 flex items-center gap-3 text-white">
                              <Target className="w-6 h-6 text-violet-500" />
                              Performance Metrics
                            </h4>
                            <div className="grid grid-cols-3 gap-4">
                              {project.metrics.map((metric, i) => {
                                const MetricIcon = metric.icon;
                                return (
                                  <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="text-center p-4 rounded-xl bg-gradient-to-br from-muted to-muted/50 border border-white/10"
                                  >
                                    <div className="flex justify-center mb-2">
                                      <div className="p-2 rounded-lg bg-violet-500/10">
                                        <MetricIcon className="w-5 h-5 text-violet-500" />
                                      </div>
                                    </div>
                                    <div className="text-2xl font-bold text-white mb-1">
                                      {metric.value}
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                      {metric.label}
                                    </div>
                                  </motion.div>
                                );
                              })}
                            </div>
                          </div>
                          <div>
                            <h4 className="text-xl font-bold mb-4 flex items-center gap-3 text-white">
                              <Code className="w-6 h-6 text-violet-500" />
                              Tech Stack
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech, i) => (
                                <motion.span
                                  key={i}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: i * 0.05 }}
                                  className="px-3 py-1.5 bg-gradient-to-r from-violet-500/10 to-purple-500/10 text-violet-400 text-sm font-medium rounded-lg border border-violet-500/20 hover:border-violet-500/40 transition-all"
                                >
                                  {tech}
                                </motion.span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-8 border-t border-white/10 bg-gradient-to-r from-violet-500/5 to-purple-500/5">
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <Globe className="w-5 h-5 text-violet-500" />
                          <span className="text-muted-foreground">
                            Available for demo
                          </span>
                        </div>
                        <div className="flex gap-4">
                          <motion.a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative px-6 py-3 overflow-hidden rounded-xl"
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-500" />
                            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <span className="relative flex items-center gap-2 text-white font-semibold">
                              <ExternalLink className="w-4 h-4" />
                              Live Demo
                            </span>
                          </motion.a>
                          <motion.a
                            href={project.links.code}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 border border-violet-500/30 text-violet-400 font-semibold rounded-xl hover:border-violet-500/50 hover:bg-violet-500/10 transition-all"
                          >
                            View Source
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      <section className={`relative ${spacing.section} py-32`}>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className={`relative z-10 ${spacing.container}`}
        >
          <div className="text-center mb-20">
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-4 mb-8"
            >
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
              <span className="text-sm font-medium tracking-wider text-blue-500 uppercase">
                Technical Arsenal
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent via-blue-500 to-transparent" />
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            >
              Technology{" "}
              <span className="bg-gradient-to-r from-blue-500 via-sky-500 to-blue-500 bg-clip-text text-transparent">
                Stack
              </span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {techCategories.map((category, index) => {
              const CategoryIcon = category.icon;
              return (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="relative group"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-sky-500 to-blue-500 rounded-3xl blur opacity-0 group-hover:opacity-20 transition duration-500" />
                  <div className="relative bg-gradient-to-br from-card via-card/95 to-card/90 backdrop-blur-sm border border-white/10 rounded-3xl p-8 h-full">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-sky-500/20">
                        <CategoryIcon className="w-8 h-8 text-blue-500" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        {category.category}
                      </h3>
                    </div>
                    <div className="space-y-6">
                      {category.technologies.map((tech, i) => {
                        const TechIcon = tech.icon;
                        return (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group/item"
                          >
                            <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-muted/50 to-transparent hover:from-blue-500/10 transition-all">
                              <div className="flex items-center gap-4">
                                <motion.div
                                  className="p-2 rounded-lg"
                                  style={{ backgroundColor: `${tech.color}15` }}
                                  whileHover={{ rotate: 360 }}
                                  transition={{ duration: 0.5 }}
                                >
                                  <TechIcon
                                    className="w-6 h-6"
                                    style={{ color: tech.color }}
                                  />
                                </motion.div>
                                <div>
                                  <div className="font-semibold text-white">
                                    {tech.name}
                                  </div>
                                  <div className="text-xs text-muted-foreground mt-1">
                                    Expertise Level
                                  </div>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-2xl font-bold text-blue-500">
                                  {tech.level}%
                                </div>
                                <div className="w-24 h-1.5 bg-muted rounded-full overflow-hidden mt-1">
                                  <motion.div
                                    className="h-full rounded-full"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${tech.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: i * 0.2 }}
                                    style={{ backgroundColor: tech.color }}
                                  />
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      <section className={`relative ${spacing.section} pb-32`}>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className={`relative z-10 ${spacing.container}`}
        >
          <motion.div
            variants={scaleIn}
            className="relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-xl"
          >
            <div className="relative z-10 p-12 lg:p-20 text-center">
              <motion.div
                variants={floatAnimation}
                className="inline-flex p-6 rounded-3xl bg-gradient-to-r from-blue-500/10 via-violet-500/10 to-emerald-500/10 mb-12"
              >
                <Rocket className="w-16 h-16 text-blue-500" />
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8"
              >
                Ready to{" "}
                <span
                  className="bg-gradient-to-r from-blue-500 via-violet-500 to-emerald-500 bg-clip-text text-transparent"
                  style={{ backgroundSize: "300% 300%" }}
                >
                  Elevate
                </span>{" "}
                Your Digital Presence?
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-xl text-muted-foreground/90 mb-12 max-w-2xl mx-auto leading-relaxed"
              >
                Let's collaborate to build something extraordinary. From concept
                to deployment, I'll help you create web experiences that users
                love and businesses thrive on.
              </motion.p>
              <motion.div
                variants={fadeUp}
                className="flex flex-col sm:flex-row justify-center gap-6"
              >
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-10 py-5 overflow-hidden rounded-2xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-violet-500 to-emerald-500" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-violet-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative flex items-center justify-center gap-4 text-white font-bold text-lg">
                    <Briefcase className="w-6 h-6" />
                    Start a Project
                    <ExternalLink className="w-5 h-5" />
                  </span>
                </motion.a>
                <motion.a
                  href="/about"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-10 py-5 overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-card/80 to-card/60"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-violet-500/5 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative flex items-center justify-center gap-4 text-white font-bold text-lg">
                    <Users className="w-6 h-6" />
                    Learn More About Me
                    <ChevronRight className="w-5 h-5" />
                  </span>
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
