"use client";
import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Code,
  Server,
  Database,
  Cpu,
  GitBranch,
  Globe,
  ExternalLink,
  Download,
  Mail,
  Calendar,
  Award,
  ArrowRight,
  Briefcase,
  Zap,
  Layers,
  Shield,
  Terminal,
  Cloud,
  Users,
  Rocket,
  CheckCircle,
  FileCode,
  PanelTop,
  Braces,
  FlaskConical,
  Code2,
  Bot,
  Image as ImageIcon,
  Calculator,
  ChevronRight,
  Sparkles,
  Building,
  GraduationCap,
  Brain,
  Target,
  Clock,
  Coffee,
  MessageSquare,
  TrendingUp,
  Wrench,
  Leaf,
  FileText,
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

const rotateAnimation = {
  hidden: { rotate: 0 },
  show: { rotate: 360, transition: { duration: 0.5, ease: "easeInOut" } },
};

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const stats = [
    { label: "Projects", value: "3+", icon: Code, color: "#F59E0B" },
    { label: "Technologies", value: "12+", icon: Globe, color: "#3B82F6" },
    { label: "Experience", value: "1+ Year", icon: Calendar, color: "#10B981" },
    { label: "Certifications", value: "4", icon: Award, color: "#8B5CF6" },
  ];

  const projects = [
    {
      title: "AI Compliance Checker",
      description:
        "Automated document analysis system using AWS Textract & OpenAI for rule-based compliance validation",
      tags: ["MERN", "Flask", "AWS Textract", "OpenAI"],
      timeline: "October 2025",
      status: "Live",
      icon: Bot,
      iconColor: "#8B5CF6",
      iconBg: "bg-violet-500/10",
      link: "#",
      gradient: "from-violet-500/20 to-purple-500/20",
    },
    {
      title: "Plant Scan",
      description:
        "AI-powered plant disease detection platform with real-time analysis and actionable insights",
      tags: ["Node.js", "Express.js", "JavaScript", "AI/ML"],
      timeline: "July 2025",
      status: "Live",
      icon: Leaf,
      iconColor: "#10B981",
      iconBg: "bg-emerald-500/10",
      link: "#",
      gradient: "from-emerald-500/20 to-green-500/20",
    },
    {
      title: "Utility Tools Suite",
      description:
        "Comprehensive collection of productivity tools featuring calculators, converters, and data processors",
      tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      timeline: "November 2024",
      status: "Live",
      icon: Calculator,
      iconColor: "#3B82F6",
      iconBg: "bg-blue-500/10",
      link: "#",
      gradient: "from-blue-500/20 to-sky-500/20",
    },
  ];

  const techStack = [
    { name: "React.js", icon: Braces, color: "#61DAFB", category: "Frontend" },
    {
      name: "Next.js",
      icon: PanelTop,
      color: "#000000",
      category: "Full Stack",
    },
    { name: "Node.js", icon: Terminal, color: "#339933", category: "Backend" },
    { name: "Express.js", icon: Server, color: "#000000", category: "Backend" },
    { name: "MongoDB", icon: Database, color: "#47A248", category: "Database" },
    { name: "Python", icon: FileCode, color: "#3776AB", category: "Backend" },
    {
      name: "Tailwind CSS",
      icon: Layers,
      color: "#06B6D4",
      category: "Frontend",
    },
    { name: "AWS", icon: Cloud, color: "#FF9900", category: "Cloud" },
    {
      name: "Git/GitHub",
      icon: GitBranch,
      color: "#F1502F",
      category: "DevOps",
    },
    {
      name: "Flask",
      icon: FlaskConical,
      color: "#000000",
      category: "Backend",
    },
    { name: "JavaScript", icon: Code2, color: "#F7DF1E", category: "Language" },
    { name: "TypeScript", icon: Code, color: "#3178C6", category: "Language" },
  ];

  const achievements = [
    {
      title: "API Optimization",
      description:
        "Reduced API response time by 40% through backend logic optimization",
      icon: Zap,
      color: "#F59E0B",
      bg: "bg-amber-500/10",
    },
    {
      title: "AI Integration",
      description:
        "Successfully integrated AWS Textract & OpenAI for automated document analysis",
      icon: Brain,
      color: "#8B5CF6",
      bg: "bg-violet-500/10",
    },
    {
      title: "Agile Development",
      description: "Participated in 15+ sprints with hybrid development teams",
      icon: Users,
      color: "#10B981",
      bg: "bg-emerald-500/10",
    },
    {
      title: "Production Deployment",
      description: "Built and deployed 3+ production-ready web applications",
      icon: Rocket,
      color: "#3B82F6",
      bg: "bg-blue-500/10",
    },
  ];

  const experience = [
    {
      role: "Full Stack Intern",
      company: "Macksofy Technologies Pvt. Ltd.",
      period: "September 2025 – Present",
      location: "Mumbai, India",
      icon: Building,
      highlights: [
        "Developed backend modules using Node.js & Express.js",
        "Integrated AWS Textract for OCR systems",
        "Optimized API performance and response times",
        "Participated in Agile sprints and code reviews",
      ],
    },
    {
      role: "Computer Science Student",
      company: "Saraswati College of Engineering",
      period: "2023 – 2027",
      location: "Kharghar, Navi Mumbai",
      icon: GraduationCap,
      highlights: [
        "Bachelor of Computer Science (Data Science)",
        "Current CGPA: 7.5/10",
        "Specializing in modern web technologies and AI",
      ],
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background Grid */}
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

      {/* ========== HERO SECTION ========== */}
      <section className="relative px-4 sm:px-6 md:px-8 lg:px-12 py-24 md:py-32 lg:py-40">
        {/* Animated Background Elements */}
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-amber-500/20 to-blue-500/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-violet-500/20 to-emerald-500/20 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], rotate: [360, 0, 360] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
            delay: 5,
          }}
        />

        <motion.div
          initial="hidden"
          animate="show"
          variants={staggerContainer}
          className="relative z-10 max-w-7xl mx-auto"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 border border-amber-500/20 backdrop-blur-sm"
            >
              <Sparkles className="w-5 h-5 text-amber-500" />
              <span className="text-sm font-medium tracking-wider text-amber-500 uppercase">
                Full Stack Developer
              </span>
              <Sparkles className="w-5 h-5 text-amber-500" />
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8"
            >
              <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 bg-clip-text text-transparent">
                Shrenik
              </span>
              <br />
              <span className="block mt-4">Dubal</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-2xl md:text-3xl text-muted-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Building{" "}
              <span className="text-amber-500 font-semibold">
                scalable web applications
              </span>{" "}
              with modern technologies and{" "}
              <span className="text-blue-500 font-semibold">
                clean architecture
              </span>
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10"
            >
              Specializing in React.js, Next.js, Node.js. Creating
              production-ready solutions with focus on performance, scalability,
              and user experience.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="group"
                  >
                    <div className="p-6 bg-gradient-to-br from-card via-card/95 to-card/90 backdrop-blur-sm border border-white/10 rounded-2xl">
                      <div className="flex flex-col items-center">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                          className="p-3 rounded-xl mb-4"
                          style={{ backgroundColor: `${stat.color}15` }}
                        >
                          <Icon
                            className="w-6 h-6"
                            style={{ color: stat.color }}
                          />
                        </motion.div>
                        <div className="text-3xl font-bold text-white mb-1">
                          {stat.value}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link
                href="/work"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-xl hover:scale-105 transition-transform"
              >
                View My Work
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-amber-500/30 text-foreground font-semibold rounded-xl hover:scale-105 transition-transform"
              >
                <Mail className="w-5 h-5" />
                Contact Me
              </Link>

              <a
                href="/Shrenik_Full_Stack.pdf"
                download
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-blue-500/30 text-foreground font-semibold rounded-xl hover:scale-105 transition-transform"
              >
                <Download className="w-5 h-5" />
                Resume
              </a>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ========== FEATURED PROJECTS ========== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-32">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
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
              Selected{" "}
              <span className="bg-gradient-to-r from-violet-500 via-purple-500 to-violet-500 bg-clip-text text-transparent">
                Projects
              </span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              A showcase of my recent work, highlighting technical challenges
              and innovative solutions
            </motion.p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <div className="relative bg-gradient-to-br from-card via-card/95 to-card/90 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden h-full">
                    <div
                      className={`p-8 border-b border-white/10 bg-gradient-to-r ${project.gradient}`}
                    >
                      <div className="flex justify-between items-start">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                          className={`p-4 rounded-2xl ${project.iconBg} backdrop-blur-sm`}
                        >
                          <Icon
                            className="w-8 h-8"
                            style={{ color: project.iconColor }}
                          />
                        </motion.div>
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 backdrop-blur-sm text-white">
                          {project.status}
                        </span>
                      </div>
                    </div>

                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-white mb-4">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-sm bg-white/5 rounded-lg text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-6 border-t border-white/10">
                        <span className="text-sm text-muted-foreground">
                          {project.timeline}
                        </span>
                        <ExternalLink className="w-5 h-5 text-violet-500" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* View All Button */}
          <motion.div variants={fadeUp} className="text-center mt-12">
            <Link
              href="/work"
              className="group inline-flex items-center gap-3 px-6 py-3 border border-violet-500/30 text-violet-400 font-semibold rounded-xl hover:scale-105 transition-transform"
            >
              View All Projects
              <ChevronRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ========== TECHNICAL EXPERTISE ========== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-32 bg-gradient-to-b from-transparent via-muted/5 to-transparent">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-20">
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-4 mb-8"
            >
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
              <span className="text-sm font-medium tracking-wider text-blue-500 uppercase">
                Technical Stack
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent via-blue-500 to-transparent" />
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            >
              Technologies &{" "}
              <span className="bg-gradient-to-r from-blue-500 via-sky-500 to-blue-500 bg-clip-text text-transparent">
                Tools
              </span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Modern tools and technologies I use to build exceptional digital
              experiences
            </motion.p>
          </div>

          {/* Tech Stack Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {techStack.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <div className="flex flex-col items-center p-6 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm border border-white/10 rounded-2xl">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="p-3 rounded-xl mb-4"
                      style={{ backgroundColor: `${tech.color}15` }}
                    >
                      <Icon className="w-8 h-8" style={{ color: tech.color }} />
                    </motion.div>
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

      {/* ========== EXPERIENCE & EDUCATION ========== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-32">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
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
                Education
              </span>
            </motion.h2>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto space-y-8">
            {experience.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="relative group"
                >
                  <div className="relative bg-gradient-to-br from-card via-card/95 to-card/90 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                    <div className="flex items-start gap-6">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="p-4 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20"
                      >
                        <Icon className="w-8 h-8 text-amber-500" />
                      </motion.div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold mb-1 text-white">
                              {item.role}
                            </h3>
                            <p className="text-lg text-amber-500/90">
                              {item.company}
                            </p>
                          </div>
                          <div className="mt-2 md:mt-0">
                            <p className="text-sm text-muted-foreground">
                              {item.period}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {item.location}
                            </p>
                          </div>
                        </div>
                        <ul className="space-y-2">
                          {item.highlights.map((highlight, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.1 }}
                              className="flex items-start gap-3"
                            >
                              <motion.div
                                whileHover={{ rotate: 360 }}
                                transition={{
                                  duration: 0.5,
                                  ease: "easeInOut",
                                }}
                              >
                                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                              </motion.div>
                              <span className="text-muted-foreground">
                                {highlight}
                              </span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* ========== ACHIEVEMENTS ========== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-32 bg-gradient-to-b from-transparent via-muted/5 to-transparent">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-20">
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-4 mb-8"
            >
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
              <span className="text-sm font-medium tracking-wider text-emerald-500 uppercase">
                Key Achievements
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent via-emerald-500 to-transparent" />
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            >
              Building with{" "}
              <span className="bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-500 bg-clip-text text-transparent">
                Impact
              </span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Measurable results and significant contributions to projects and
              teams
            </motion.p>
          </div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-card via-card/95 to-card/90 backdrop-blur-sm border border-white/10 rounded-3xl p-8 h-full">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className={`inline-flex p-4 rounded-2xl ${achievement.bg} mb-6`}
                    >
                      <Icon
                        className="w-8 h-8"
                        style={{ color: achievement.color }}
                      />
                    </motion.div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {achievement.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {achievement.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 pb-32">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          <motion.div
            variants={scaleIn}
            className="relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-xl"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-blue-500/5 to-emerald-500/5"
              animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />

            <div className="relative z-10 p-12 lg:p-20 text-center">
              <motion.div
                variants={floatAnimation}
                className="inline-flex p-6 rounded-3xl bg-gradient-to-r from-amber-500/10 via-blue-500/10 to-emerald-500/10 mb-12"
              >
                <MessageSquare className="w-16 h-16 text-amber-500" />
              </motion.div>

              <motion.h2
                variants={fadeUp}
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8"
              >
                Let's Build Something{" "}
                <span className="bg-gradient-to-r from-amber-500 via-blue-500 to-emerald-500 bg-clip-text text-transparent">
                  Amazing
                </span>{" "}
                Together
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="text-xl text-muted-foreground/90 mb-12 max-w-2xl mx-auto leading-relaxed"
              >
                Whether you have a project in mind, need technical consultation,
                or just want to discuss potential opportunities, I'd love to
                hear from you.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="flex flex-wrap justify-center gap-4"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-4 px-10 py-5 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-lg rounded-2xl hover:scale-105 transition-transform"
                >
                  <Mail className="w-6 h-6" />
                  Contact Form
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <a
                  href="mailto:shrenik@example.com"
                  className="inline-flex items-center justify-center gap-4 px-10 py-5 border border-white/20 text-white font-bold text-lg rounded-2xl hover:scale-105 transition-transform"
                >
                  <Coffee className="w-6 h-6" />
                  Schedule Call
                </a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
