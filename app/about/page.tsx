"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  User,
  Code,
  Server,
  Database,
  Cpu,
  Terminal,
  Layers,
  Cloud,
  GitBranch,
  Globe,
  Rocket,
  Zap,
  Target,
  Brain,
  Shield,
  TrendingUp,
  Users,
  BookOpen,
  MapPin,
  Calendar,
  GraduationCap,
  Building,
  Award,
  Download,
  Mail,
  Linkedin,
  Github,
  ExternalLink,
  ChevronRight,
  CheckCircle,
  Coffee,
  Lightbulb,
  FileCode,
  PanelTop,
  Braces,
  FlaskConical,
  Code2,
  Bot,
  Image as ImageIcon,
  Calculator,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

// Animation variants
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const fadeUpSlow = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

const floatAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

export default function AboutPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const spacing = {
    section: "px-4 sm:px-6 md:px-8 lg:px-12",
    container: "max-w-7xl mx-auto",
    py: {
      section: "py-16 md:py-24 lg:py-32",
    },
  };

  const techStack = [
    {
      name: "React.js",
      icon: Braces,
      color: "#61DAFB",
      category: "Frontend",
      level: 90,
    },
    {
      name: "Next.js",
      icon: PanelTop,
      color: "#000000",
      category: "Full Stack",
      level: 85,
    },
    {
      name: "Node.js",
      icon: Terminal,
      color: "#339933",
      category: "Backend",
      level: 88,
    },
    {
      name: "Express.js",
      icon: Server,
      color: "#000000",
      category: "Backend",
      level: 85,
    },
    {
      name: "MongoDB",
      icon: Database,
      color: "#47A248",
      category: "Database",
      level: 80,
    },
    {
      name: "Tailwind CSS",
      icon: Layers,
      color: "#06B6D4",
      category: "Frontend",
      level: 92,
    },
    {
      name: "JavaScript",
      icon: Code2,
      color: "#F7DF1E",
      category: "Language",
      level: 88,
    },
    {
      name: "TypeScript",
      icon: Code,
      color: "#3178C6",
      category: "Language",
      level: 75,
    },
    {
      name: "Python",
      icon: FileCode,
      color: "#3776AB",
      category: "Backend",
      level: 80,
    },
    {
      name: "Git/GitHub",
      icon: GitBranch,
      color: "#F1502F",
      category: "DevOps",
      level: 85,
    },
    {
      name: "AWS",
      icon: Cloud,
      color: "#FF9900",
      category: "Cloud",
      level: 70,
    },
    {
      name: "Flask",
      icon: FlaskConical,
      color: "#000000",
      category: "Backend",
      level: 75,
    },
  ];

  const developmentPrinciples = [
    {
      title: "Clean Architecture",
      description: "Building scalable systems with separation of concerns",
      icon: Layers,
      color: "text-[#f59e0b]",
      examples: [
        "Modular components",
        "Reusable logic",
        "Maintainable codebase",
      ],
    },
    {
      title: "Performance First",
      description: "Optimizing for speed and efficiency in every layer",
      icon: Zap,
      color: "text-[#3B82F6]",
      examples: ["Lazy loading", "Code splitting", "API optimization"],
    },
    {
      title: "User-Centric Design",
      description: "Creating intuitive experiences that people love",
      icon: Users,
      color: "text-[#10B981]",
      examples: ["Responsive UIs", "Accessibility", "Smooth interactions"],
    },
    {
      title: "Security & Reliability",
      description: "Building systems that users can trust",
      icon: Shield,
      color: "text-[#8B5CF6]",
      examples: ["Input validation", "Error handling", "Secure APIs"],
    },
  ];

  const timeline = [
    {
      year: "2025",
      title: "Full Stack Developer",
      company: "Macksofy Technologies",
      icon: Building,
      achievements: [
        "Built production-ready web applications",
        "Optimized API response times by 40%",
        "Integrated AWS services for OCR systems",
      ],
    },
    {
      year: "2024",
      title: "MERN Stack Specialist",
      company: "Self-Led Projects",
      icon: Code,
      achievements: [
        "Mastered full-stack development",
        "Deployed 3+ live applications",
        "Built AI-powered solutions",
      ],
    },
    {
      year: "2023",
      title: "CS Engineering",
      company: "Data Science Specialization",
      icon: GraduationCap,
      achievements: [
        "Started B.E. Computer Science",
        "CGPA: 7.5/10",
        "Focused on web technologies",
      ],
    },
  ];

  const keyProjects = [
    {
      title: "AI Compliance Checker",
      description: "Automated document analysis with AWS Textract & OpenAI",
      tech: ["MERN", "Flask", "AWS", "OpenAI"],
      status: "Live",
      contribution: "Full-stack architecture & AI integration",
    },
    {
      title: "Plant Scan",
      description: "AI-powered plant disease detection platform",
      tech: ["Node.js", "Express.js", "JavaScript", "AI/ML"],
      status: "Live",
      contribution: "Backend development & AI module integration",
    },
    {
      title: "Utility Tools Suite",
      description: "Collection of productivity applications",
      tech: ["HTML5", "CSS3", "JavaScript"],
      status: "Live",
      contribution: "Frontend development & responsive design",
    },
  ];

  const personalStats = [
    { label: "Projects Completed", value: "3+", icon: Code },
    { label: "Technologies Mastered", value: "12+", icon: Cpu },
    { label: "Years Experience", value: "1+", icon: Calendar },
    { label: "Code Commits", value: "500+", icon: GitBranch },
  ];

  const learningGoals = [
    { skill: "Microservices", progress: 65, color: "bg-[#f59e0b]" },
    { skill: "Docker & Kubernetes", progress: 50, color: "bg-[#3B82F6]" },
    { skill: "GraphQL", progress: 70, color: "bg-[#10B981]" },
    { skill: "React Native", progress: 60, color: "bg-[#8B5CF6]" },
  ];

  if (!mounted) return null;

  return (
    <main className="min-h-screen  text-primary">
      {/* Hero Section */}
      <section className={`relative  ${spacing.section} ${spacing.py.section}`}>
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-[#f59e0b]/10 to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-l from-[#3B82F6]/10 to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={staggerContainer}
          className={`relative z-10 ${spacing.container}`}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp}>
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-3 mb-6"
              >
                <div className="w-8 h-px bg-gradient-to-r from-transparent via-[#f59e0b] to-transparent" />
                <span className="text-sm font-medium tracking-wider text-muted uppercase">
                  About Me
                </span>
                <div className="w-8 h-px bg-gradient-to-l from-transparent via-[#f59e0b] to-transparent" />
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
              >
                Building the Future with{" "}
                <span className="bg-gradient-to-r from-[#f59e0b] via-[#f97316] to-[#f59e0b] bg-clip-text text-transparent">
                  Code
                </span>
              </motion.h1>

              <div className="space-y-4 mb-8">
                <motion.p
                  variants={fadeUpSlow}
                  className="text-lg text-muted-foreground leading-relaxed"
                >
                  I'm a{" "}
                  <span className="text-[#f59e0b] font-semibold">
                    Full Stack Developer
                  </span>{" "}
                  specializing in modern web technologies. With expertise in
                  React, Node.js, and cloud platforms, I build scalable
                  applications that solve real-world problems.
                </motion.p>
                <motion.p
                  variants={fadeUpSlow}
                  className="text-lg text-muted-foreground leading-relaxed"
                >
                  My approach combines{" "}
                  <span className="text-[#3B82F6] font-semibold">
                    technical precision
                  </span>{" "}
                  with{" "}
                  <span className="text-[#10B981] font-semibold">
                    user-centered design
                  </span>{" "}
                  to create solutions that are both powerful and intuitive.
                </motion.p>
              </div>

              {/* Personal Stats */}
              <motion.div
                variants={fadeUp}
                className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8"
              >
                {personalStats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-card rounded-lg p-4 border border-border"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-[#f59e0b]/10">
                          <Icon className="w-5 h-5 text-[#f59e0b]" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold">{stat.value}</div>
                          <div className="text-sm text-muted-foreground">
                            {stat.label}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                <motion.a
                  href="/Shrenik_Full_Stack.pdf"
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#f59e0b] to-[#f97316] text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </motion.a>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-semibold rounded-lg hover:border-[#f59e0b] hover:bg-[#f59e0b]/5 transition-all duration-300"
                  >
                    <Mail className="w-5 h-5" />
                    Get in Touch
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={scaleIn}
              whileHover="animate"
              className="relative"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#f59e0b]/20 to-[#3B82F6]/20 rounded-3xl blur-xl"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <div className="relative p-8 bg-card border border-border h-full rounded-3xl">
                <div className="flex flex-col items-center justify-center h-full text-center p-8">
                  <motion.div
                    variants={floatAnimation}
                    className="relative mb-8"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#f59e0b] to-[#3B82F6] rounded-full blur-lg opacity-50" />
                    <div className="relative w-48 h-48 rounded-full bg-gradient-to-br from-[#f59e0b] to-[#3B82F6] p-1">
                      <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                        <User className="w-24 h-24 text-[#f59e0b]" />
                      </div>
                    </div>
                  </motion.div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">Shrenik Dubal</h3>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f59e0b]/10 text-[#f59e0b] font-medium">
                      <Code className="w-4 h-4" />
                      Full Stack Developer
                    </div>

                    <div className="flex justify-center gap-4 mt-6">
                      {[Github, Linkedin, Mail].map((Icon, index) => (
                        <motion.a
                          key={index}
                          href="#"
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-3 rounded-xl bg-muted hover:bg-accent transition-colors"
                        >
                          <Icon className="w-5 h-5" />
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Development Principles */}
      <section
        className={`${spacing.section} ${spacing.py.section} bg-muted/30`}
      >
        <div className={spacing.container}>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            <div className="text-center mb-16">
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-3 mb-6"
              >
                <div className="w-8 h-px bg-gradient-to-r from-transparent via-[#f59e0b] to-transparent" />
                <span className="text-sm font-medium tracking-wider text-muted uppercase">
                  My Approach
                </span>
                <div className="w-8 h-px bg-gradient-to-l from-transparent via-[#f59e0b] to-transparent" />
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
              >
                Development{" "}
                <span className="bg-gradient-to-r from-[#f59e0b] via-[#f97316] to-[#f59e0b] bg-clip-text text-transparent">
                  Philosophy
                </span>
              </motion.h2>
              <motion.p
                variants={fadeUpSlow}
                className="text-lg text-muted-foreground max-w-2xl mx-auto"
              >
                Building software is more than writing code—it's about creating
                value through thoughtful engineering.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {developmentPrinciples.map((principle, index) => {
                const Icon = principle.icon;
                return (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group"
                  >
                    <div className="card p-8 bg-card border border-border rounded-xl hover:border-[#f59e0b]/30 transition-all duration-300 h-full">
                      <motion.div
                        className={`inline-flex p-3 rounded-xl bg-muted mb-6 group-hover:scale-110 transition-transform duration-300 ${principle.color.replace(
                          "text",
                          "bg"
                        )}/10`}
                        whileHover={{ rotate: 5 }}
                      >
                        <Icon className={`w-6 h-6 ${principle.color}`} />
                      </motion.div>
                      <h3 className="text-xl font-bold mb-3">
                        {principle.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {principle.description}
                      </p>
                      <div className="space-y-2">
                        {principle.examples.map((example, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2"
                          >
                            <ChevronRight className="w-4 h-4 text-[#f59e0b]" />
                            <span className="text-sm text-muted-foreground">
                              {example}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Expertise */}
      <section className={`${spacing.section} ${spacing.py.section}`}>
        <div className={spacing.container}>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            <div className="text-center mb-16">
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-3 mb-6"
              >
                <div className="w-8 h-px bg-gradient-to-r from-transparent via-[#f59e0b] to-transparent" />
                <span className="text-sm font-medium tracking-wider text-muted uppercase">
                  Technical Stack
                </span>
                <div className="w-8 h-px bg-gradient-to-l from-transparent via-[#f59e0b] to-transparent" />
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
              >
                Technologies &{" "}
                <span className="bg-gradient-to-r from-[#f59e0b] via-[#f97316] to-[#f59e0b] bg-clip-text text-transparent">
                  Proficiency
                </span>
              </motion.h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {techStack.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.05,
                      transition: { type: "spring", stiffness: 300 },
                    }}
                    transition={{ delay: index * 0.05 }}
                    className="group"
                  >
                    <div className="card p-6 bg-card border border-border rounded-lg hover:border-[#f59e0b]/50 transition-all duration-300">
                      <div className="flex flex-col items-center text-center">
                        <motion.div
                          className="p-3 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300"
                          style={{ backgroundColor: `${tech.color}15` }}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Icon
                            className="w-8 h-8"
                            style={{ color: tech.color }}
                          />
                        </motion.div>
                        <div className="font-semibold mb-1">{tech.name}</div>
                        <div className="text-xs text-muted-foreground mb-3">
                          {tech.category}
                        </div>
                        <div className="w-full bg-muted rounded-full h-1.5 overflow-hidden">
                          <motion.div
                            className="h-1.5 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${tech.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            style={{
                              backgroundColor: tech.color,
                            }}
                          />
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {tech.level}%
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline & Experience */}
      <section
        className={`${spacing.section} ${spacing.py.section} bg-muted/30`}
      >
        <div className={spacing.container}>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Timeline */}
              <div>
                <motion.div
                  variants={fadeUp}
                  className="flex items-center gap-3 mb-8"
                >
                  <Calendar className="w-8 h-8 text-[#f59e0b]" />
                  <div>
                    <h2 className="text-2xl font-bold">Career Timeline</h2>
                    <p className="text-muted-foreground">
                      My professional journey
                    </p>
                  </div>
                </motion.div>

                <div className="space-y-8">
                  {timeline.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={index}
                        variants={fadeUp}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="relative pl-12"
                      >
                        <motion.div
                          className="absolute left-0 top-1 w-10 h-10 rounded-full bg-[#f59e0b]/10 flex items-center justify-center"
                          whileHover={{ scale: 1.1 }}
                        >
                          <Icon className="w-5 h-5 text-[#f59e0b]" />
                        </motion.div>
                        <div className="pb-8 border-l border-border ml-5 pl-8">
                          <motion.div
                            className="absolute left-[-5px] top-3 w-3 h-3 rounded-full bg-[#f59e0b]"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: index * 0.5,
                            }}
                          />
                          <div className="inline-block px-3 py-1 rounded-full bg-muted text-sm font-medium mb-2">
                            {item.year}
                          </div>
                          <h3 className="text-xl font-bold mb-1">
                            {item.title}
                          </h3>
                          <p className="text-[#3B82F6] font-medium mb-4">
                            {item.company}
                          </p>
                          <ul className="space-y-2">
                            {item.achievements.map((achievement, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-start gap-2"
                              >
                                <CheckCircle className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                                <span className="text-muted-foreground">
                                  {achievement}
                                </span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Key Projects */}
              <div>
                <motion.div
                  variants={fadeUp}
                  className="flex items-center gap-3 mb-8"
                >
                  <Rocket className="w-8 h-8 text-[#f59e0b]" />
                  <div>
                    <h2 className="text-2xl font-bold">Key Projects</h2>
                    <p className="text-muted-foreground">
                      Notable work & contributions
                    </p>
                  </div>
                </motion.div>

                <div className="space-y-6">
                  {keyProjects.map((project, index) => (
                    <motion.div
                      key={index}
                      variants={fadeUp}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="card p-6 bg-card border border-border rounded-lg hover:border-[#f59e0b]/50 transition-all duration-300"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold">{project.title}</h3>
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-muted">
                          {project.status}
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((t, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="px-3 py-1 text-xs bg-muted rounded-lg text-muted-foreground"
                          >
                            {t}
                          </motion.span>
                        ))}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <span className="font-medium">Contribution: </span>
                        {project.contribution}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Learning & Growth */}
      <section className={`${spacing.section} ${spacing.py.section}`}>
        <div className={spacing.container}>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Learning Goals */}
              <div>
                <motion.div
                  variants={fadeUp}
                  className="flex items-center gap-3 mb-8"
                >
                  <Brain className="w-8 h-8 text-[#f59e0b]" />
                  <div>
                    <h2 className="text-2xl font-bold">Currently Learning</h2>
                    <p className="text-muted-foreground">
                      Skills I'm actively developing
                    </p>
                  </div>
                </motion.div>

                <div className="space-y-6">
                  {learningGoals.map((goal, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between">
                        <span className="font-medium">{goal.skill}</span>
                        <span className="text-sm text-muted-foreground">
                          {goal.progress}%
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <motion.div
                          className={`h-2 rounded-full ${goal.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${goal.progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Professional Outlook */}
              <div>
                <motion.div
                  variants={fadeUp}
                  className="flex items-center gap-3 mb-8"
                >
                  <Target className="w-8 h-8 text-[#f59e0b]" />
                  <div>
                    <h2 className="text-2xl font-bold">Professional Focus</h2>
                    <p className="text-muted-foreground">
                      Where I'm heading next
                    </p>
                  </div>
                </motion.div>

                <div className="space-y-4">
                  {[
                    "Building scalable microservices architecture",
                    "Mastering cloud-native development",
                    "Contributing to open-source projects",
                    "Mentoring junior developers",
                    "Exploring Web3 technologies",
                  ].map((focus, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border"
                    >
                      <ChevronRight className="w-5 h-5 text-[#f59e0b]" />
                      <span className="text-muted-foreground">{focus}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={`${spacing.section} pb-32`}>
        <div className={spacing.container}>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.div
              variants={scaleIn}
              className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-card via-card to-muted/20"
            >
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#f59e0b]/5 via-transparent to-[#3B82F6]/5"
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <div className="relative z-10 p-12 lg:p-16">
                <motion.div
                  variants={floatAnimation}
                  className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-[#f59e0b]/10 to-[#3B82F6]/10 mb-8"
                >
                  <Coffee className="w-12 h-12 text-[#f59e0b]" />
                </motion.div>

                <motion.h2
                  variants={fadeUp}
                  className="text-3xl sm:text-4xl font-bold mb-4"
                >
                  Let's Build Something{" "}
                  <span className="bg-gradient-to-r from-[#f59e0b] via-[#f97316] to-[#f59e0b] bg-clip-text text-transparent">
                    Great
                  </span>
                </motion.h2>

                <motion.p
                  variants={fadeUpSlow}
                  className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
                >
                  Whether you're looking to start a new project, need technical
                  expertise, or want to discuss innovative ideas, I'm ready to
                  collaborate.
                </motion.p>

                <motion.div
                  variants={fadeUp}
                  className="flex flex-wrap justify-center gap-4"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-[#f59e0b] to-[#f97316] text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                    >
                      <Mail className="w-5 h-5" />
                      Start a Conversation
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/work"
                      className="inline-flex items-center gap-3 px-8 py-3 border border-border text-foreground font-semibold rounded-lg hover:border-[#f59e0b] hover:bg-[#f59e0b]/5 transition-all duration-300"
                    >
                      <ExternalLink className="w-5 h-5" />
                      View My Work
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
