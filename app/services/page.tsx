"use client";
import { motion, Variants } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Code,
  Server,
  Bug,
  Cloud,
  Zap,
  Shield,
  Globe,
  Lock,
  Cpu,
  Database,
  Rocket,
  CheckCircle,
  Clock,
  Users,
  Target,
  FileCode,
  GitBranch,
  Terminal,
  Layers,
  Cctv,
  Sparkles,
  Wrench,
  ArrowRight,
  ExternalLink,
  BarChart,
  Smartphone,
  Palette,
  RefreshCw,
  Settings,
  Workflow,
  Key,
  Link as LinkIcon,
  ShieldCheck,
  TrendingUp,
  Coffee,
  Brain,
  MessageSquare,
  ChevronRight,
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
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const floatAnimation = {
  animate: { y: [-10, 10, -10] },
  transition: { duration: 3, repeat: Infinity, ease: "easeInOut" as const },
};

export default function ServicesPage() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState("web-dev");

  useEffect(() => {
    setMounted(true);
  }, []);

  const spacing = {
    section: "px-4 sm:px-6 md:px-8 lg:px-12",
    container: "max-w-7xl mx-auto",
    py: { section: "py-24 md:py-32 lg:py-40" },
  };

  const services = {
    "web-dev": {
      title: "Web Development",
      tagline: "Modern, Scalable Web Applications",
      description:
        "Building responsive, performant web applications with cutting-edge technologies. From concept to deployment, I create digital experiences that engage users and drive business growth.",
      icon: Code,
      color: "#3B82F6",
      gradient: "from-blue-500 via-sky-500 to-blue-500",
      features: [
        "Custom React/Next.js Applications",
        "Responsive & Mobile-First Design",
        "Performance Optimization",
        "SEO-Friendly Architecture",
        "Progressive Web Apps (PWA)",
        "Real-time Features with WebSockets",
      ],
      technologies: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Redux",
        "GraphQL",
        "Webpack",
      ],
      process: [
        {
          step: "Discovery & Planning",
          desc: "Requirements analysis and project planning",
        },
        { step: "UI/UX Design", desc: "Wireframing and prototyping" },
        { step: "Development", desc: "Agile development with regular updates" },
        { step: "Testing & QA", desc: "Comprehensive testing and bug fixing" },
        { step: "Deployment", desc: "Production deployment with CI/CD" },
        { step: "Maintenance", desc: "Ongoing support and updates" },
      ],
      metrics: [
        { label: "Load Time", value: "< 2s", icon: Zap },
        { label: "Mobile Score", value: "95+", icon: Smartphone },
        { label: "SEO Score", value: "100/100", icon: TrendingUp },
      ],
    },
    "api-dev": {
      title: "API Development",
      tagline: "Robust Backend Systems & Integrations",
      description:
        "Designing and building secure, scalable RESTful APIs and microservices. Creating efficient backend architectures that power your applications and integrate with third-party services.",
      icon: Server,
      color: "#10B981",
      gradient: "from-emerald-500 via-green-500 to-emerald-500",
      features: [
        "RESTful API Design & Development",
        "GraphQL API Implementation",
        "Authentication & Authorization",
        "Database Design & Optimization",
        "Third-party API Integrations",
        "Webhook Implementation",
      ],
      technologies: [
        "Node.js",
        "Express.js",
        "Python",
        "Flask",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "Docker",
      ],
      process: [
        { step: "API Design", desc: "Endpoint planning and documentation" },
        { step: "Database Design", desc: "Schema design and optimization" },
        { step: "Development", desc: "Building core API functionality" },
        { step: "Security", desc: "Implementing auth and validation" },
        { step: "Testing", desc: "Unit, integration, and load testing" },
        { step: "Deployment", desc: "Server setup and monitoring" },
      ],
      metrics: [
        { label: "Response Time", value: "< 100ms", icon: Clock },
        { label: "Uptime", value: "99.9%", icon: ShieldCheck },
        { label: "Requests/sec", value: "1000+", icon: Cpu },
      ],
    },
    "bug-fixes": {
      title: "Bug Fixes & Deployment",
      tagline: "Website Maintenance & Optimization",
      description:
        "Diagnosing and fixing bugs, improving performance, and deploying applications to production. Specializing in rescuing broken websites and optimizing existing codebases for better performance.",
      icon: Bug,
      color: "#F59E0B",
      gradient: "from-amber-500 via-orange-500 to-amber-500",
      features: [
        "Bug Diagnosis & Fixing",
        "Performance Optimization",
        "Code Refactoring",
        "Security Audits & Fixes",
        "CI/CD Pipeline Setup",
        "Production Deployment",
      ],
      technologies: [
        "Git",
        "Docker",
        "Vercel",
        "AWS",
        "Netlify",
        "Jenkins",
        "Webpack",
        "Sentry",
      ],
      process: [
        { step: "Audit", desc: "Comprehensive code and performance audit" },
        { step: "Diagnosis", desc: "Identifying root causes of issues" },
        { step: "Solution", desc: "Implementing fixes and optimizations" },
        { step: "Testing", desc: "Verifying fixes and performance gains" },
        { step: "Deployment", desc: "Safe deployment to production" },
        { step: "Monitoring", desc: "Setting up monitoring and alerts" },
      ],
      metrics: [
        { label: "Bug Resolution", value: "24-48h", icon: Clock },
        { label: "Performance Gain", value: "40-70%", icon: Zap },
        { label: "Cost Reduction", value: "30-50%", icon: TrendingUp },
      ],
    },
  };

  const activeService = services[activeTab as keyof typeof services];

  const caseStudies = [
    {
      service: "automation-ai",
      title: "AI Compliance Checker",
      description:
        "Built an automation system to extract configuration data and validate it against compliance rules.",
      results: [
        "Automated data extraction",
        "Structured compliance reports",
        "Error-handled pipelines",
      ],
      color: "#3B82F6",
    },
    {
      service: "backend-systems",
      title: "E-commerce Backend",
      description:
        "Developed REST APIs for authentication, products, cart, and orders.",
      results: [
        "Clean API design",
        "Secure authentication",
        "Consistent response formats",
      ],
      color: "#10B981",
    },
    {
      service: "maintenance",
      title: "Legacy Project Stabilization",
      description:
        "Debugged and improved an existing project with broken logic and deployment issues.",
      results: ["Bug fixes", "Improved stability", "Cleaner codebase"],
      color: "#F59E0B",
    },
  ];

  const techStack = [
    { name: "React", icon: Code, color: "#61DAFB", category: "Frontend" },
    { name: "Next.js", icon: Layers, color: "#000000", category: "Fullstack" },
    { name: "Node.js", icon: Terminal, color: "#339933", category: "Backend" },
    {
      name: "TypeScript",
      icon: FileCode,
      color: "#3178C6",
      category: "Language",
    },
    { name: "MongoDB", icon: Database, color: "#47A248", category: "Database" },
    { name: "AWS", icon: Cloud, color: "#FF9900", category: "Cloud" },
    { name: "REST APIs", icon: Server, color: "#2496ED", category: "API" },
    { name: "Git", icon: GitBranch, color: "#F1502F", category: "Tools" },
  ];

  if (!mounted) return null;

  return (
    <main className="min-h-screen text-primary overflow-hidden">
      {/* Background */}
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

      {/* Hero Section */}
      <section
        className={`relative ${spacing.section} ${spacing.py.section} overflow-hidden`}
      >
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-amber-500/20 to-violet-500/20 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], rotate: [360, 0, 360] }}
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
              className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 via-emerald-500/10 to-amber-500/10 border border-blue-500/20 backdrop-blur-sm"
            >
              <Sparkles className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-medium tracking-wider text-blue-500 uppercase">
                Services & Expertise
              </span>
              <Sparkles className="w-5 h-5 text-blue-500" />
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8"
            >
              <span className="bg-gradient-to-r from-blue-500 via-emerald-500 to-amber-500 bg-clip-text text-transparent">
                Solutions
              </span>
              <br />
              <span className="block mt-4">That Scale</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-xl text-muted-foreground/80 mb-12 leading-relaxed max-w-2xl mx-auto backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10"
            >
              I build and maintain backend systems, APIs, and AI-assisted
              automation pipelines through hands-on engineering and real-world
              projects.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className={`relative ${spacing.section} pb-16`}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/5 to-transparent" />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className={`relative z-10 ${spacing.container}`}
        >
          <div className="text-center mb-16">
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-4 mb-8"
            >
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
              <span className="text-sm font-medium tracking-wider text-blue-500 uppercase">
                Specialized Services
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent via-blue-500 to-transparent" />
            </motion.div>
          </div>

          {/* Service Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {Object.entries(services).map(([key, service]) => {
              const Icon = service.icon;
              return (
                <motion.button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  variants={scaleIn}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-4 px-8 py-5 rounded-2xl transition-all duration-300 ${
                    activeTab === key
                      ? "bg-muted/60 text-foreground border border-border shadow-sm"
                      : "bg-card border border-border text-muted-foreground hover:bg-muted/40"
                  }`}
                >
                  <Icon className="w-6 h-6" />
                  <span className="text-lg font-semibold">{service.title}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Active Service Details */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative group"
          >
            <div
              className={`absolute -inset-1 bg-gradient-to-r ${activeService.gradient} rounded-3xl blur opacity-[0.06] group-hover:opacity-[0.1] transition duration-500`}
            />

            <div className="relative bg-gradient-to-br from-card via-card/95 to-card/90 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden">
              {/* Header */}
              <div className="p-8 border-b border-white/10 bg-white/5">
                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="relative flex-shrink-0"
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/10 rounded-2xl blur"
                      animate={{ opacity: [0.2, 0.35, 0.2] }}
                    />

                    <div className="relative p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm">
                      <activeService.icon
                        className={`w-12 h-12`}
                        style={{ color: activeService.color }}
                      />
                    </div>
                  </motion.div>

                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div>
                        <h2 className="text-4xl font-bold text-white mb-2">
                          {activeService.title}
                        </h2>
                        <p
                          className="text-xl opacity-90"
                          style={{ color: activeService.color }}
                        >
                          {activeService.tagline}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="px-4 py-2 rounded-full bg-white/10 border border-white/20">
                          <span className="text-sm font-semibold text-white">
                            Custom Solutions
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Left Column */}
                  <div>
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white">
                      <Sparkles
                        className="w-6 h-6"
                        style={{ color: activeService.color }}
                      />
                      Service Overview
                    </h3>
                    <p className="text-muted-foreground/90 mb-8 leading-relaxed">
                      {activeService.description}
                    </p>

                    <div className="space-y-6">
                      <h4 className="text-xl font-bold text-white">
                        Key Features
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {activeService.features.map((feature, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-white/5 to-transparent hover:from-white/10 transition-all"
                          >
                            <CheckCircle
                              className="w-5 h-5"
                              style={{ color: activeService.color }}
                            />
                            <span className="text-muted-foreground">
                              {feature}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div>
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white">
                      <Settings
                        className="w-6 h-6"
                        style={{ color: activeService.color }}
                      />
                      Development Process
                    </h3>

                    <div className="space-y-4">
                      {activeService.process.map((step, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-white/5 to-transparent"
                        >
                          <div
                            className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                            style={{
                              backgroundColor: `${activeService.color}20`,
                            }}
                          >
                            <span
                              className="font-bold text-sm"
                              style={{ color: activeService.color }}
                            >
                              {i + 1}
                            </span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-white mb-1">
                              {step.step}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {step.desc}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-8">
                      <h4 className="text-xl font-bold mb-4 text-white">
                        Performance Metrics
                      </h4>
                      <div className="grid grid-cols-3 gap-4">
                        {activeService.metrics.map((metric, i) => {
                          const MetricIcon = metric.icon;
                          return (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.1 }}
                              className="text-center p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/2 border border-white/10"
                            >
                              <MetricIcon
                                className="w-5 h-5 mx-auto mb-2"
                                style={{ color: activeService.color }}
                              />
                              <div className="text-2xl font-bold text-white">
                                {metric.value}
                              </div>
                              <div className="text-xs text-muted-foreground mt-1">
                                {metric.label}
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mt-12 pt-8 border-t border-white/10">
                  <h3 className="text-2xl font-bold mb-6 text-white">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {activeService.technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="px-4 py-2 rounded-full bg-gradient-to-r from-white/5 to-white/2 border border-white/10 text-muted-foreground hover:text-white transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Case Studies */}
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
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
              <span className="text-sm font-medium tracking-wider text-violet-500 uppercase">
                Success Stories
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent via-violet-500 to-transparent" />
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            >
              Real-World{" "}
              <span className="bg-gradient-to-r from-violet-500 via-purple-500 to-violet-500 bg-clip-text text-transparent">
                Impact
              </span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-500" />
                <div className="relative bg-gradient-to-br from-card via-card/95 to-card/90 backdrop-blur-sm border border-white/10 rounded-3xl p-8 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="p-3 rounded-xl"
                      style={{ backgroundColor: `${study.color}15` }}
                    >
                      {study.service === "web-dev" && (
                        <Globe
                          className="w-6 h-6"
                          style={{ color: study.color }}
                        />
                      )}
                      {study.service === "api-dev" && (
                        <Server
                          className="w-6 h-6"
                          style={{ color: study.color }}
                        />
                      )}
                      {study.service === "bug-fixes" && (
                        <Wrench
                          className="w-6 h-6"
                          style={{ color: study.color }}
                        />
                      )}
                    </div>
                    <span
                      className="text-sm font-medium px-3 py-1 rounded-full border"
                      style={{
                        color: study.color,
                        borderColor: `${study.color}40`,
                      }}
                    >
                      {study.service === "web-dev"
                        ? "Web Dev"
                        : study.service === "api-dev"
                        ? "API Dev"
                        : "Bug Fixes"}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">
                    {study.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {study.description}
                  </p>

                  <div className="space-y-3">
                    {study.results.map((result, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle
                          className="w-5 h-5"
                          style={{ color: study.color }}
                        />
                        <span className="text-sm text-muted-foreground">
                          {result}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Tech Stack */}
      <section className={`relative ${spacing.section} py-32`}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/5 to-transparent" />

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
                Technology Stack
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent via-blue-500 to-transparent" />
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            >
              Tools &{" "}
              <span className="bg-gradient-to-r from-blue-500 via-sky-500 to-blue-500 bg-clip-text text-transparent">
                Technologies
              </span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {techStack.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <div className="flex flex-col items-center p-6 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-white/20 transition-all">
                    <div
                      className="p-3 rounded-xl mb-4 group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: `${tech.color}15` }}
                    >
                      <Icon className="w-8 h-8" style={{ color: tech.color }} />
                    </div>
                    <div className="font-semibold text-white mb-1">
                      {tech.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {tech.category}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
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
                className="inline-flex p-6 rounded-3xl bg-gradient-to-r from-blue-500/10 via-emerald-500/10 to-amber-500/10 mb-12"
              >
                <MessageSquare className="w-16 h-16 text-blue-500" />
              </motion.div>

              <motion.h2
                variants={fadeUp}
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8"
              >
                Ready to{" "}
                <span
                  className="bg-gradient-to-r from-blue-500 via-emerald-500 to-amber-500 bg-clip-text text-transparent"
                  style={{ backgroundSize: "300% 300%" }}
                >
                  Transform
                </span>{" "}
                Your Project?
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="text-xl text-muted-foreground/90 mb-12 max-w-2xl mx-auto leading-relaxed"
              >
                Let's discuss how I can help you build, optimize, or fix your
                web application. Get in touch for a free consultation and
                project assessment.
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
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-emerald-500 to-amber-500" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-emerald-600 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative flex items-center justify-center gap-4 text-white font-bold text-lg">
                    <Coffee className="w-6 h-6" />
                    Schedule Consultation
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </motion.a>

                <motion.a
                  href="/work"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-10 py-5 overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-card/80 to-card/60"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-emerald-500/5 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative flex items-center justify-center gap-4 text-white font-bold text-lg">
                    <ExternalLink className="w-6 h-6" />
                    View Portfolio
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
