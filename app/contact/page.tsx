"use client";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Zap,
  Calendar,
  Github,
  Linkedin,
  Twitter,
  FileText,
  Briefcase,
  Code,
  Cpu,
  Terminal,
  ExternalLink,
  CheckCircle,
  Loader2,
  Building,
  Coffee,
} from "lucide-react";
import Link from "next/link";

import {
  staggerContainer,
  fadeUp,
  fadeUpSlow,
  scaleIn,
} from "@/lib/animations";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1200));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 4 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        projectType: "",
        message: "",
      });
    }, 4000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const spacing = {
    section: "px-4 sm:px-6 md:px-8 lg:px-12",
    container: "max-w-7xl mx-auto",
    py: {
      section: "py-16 md:py-24 lg:py-32",
    },
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "shrenik9477@gmail.com",
      link: "mailto:shrenik9477@gmail.com",
      description: "For project inquiries and collaborations",
      color: "text-brand",
      bg: "bg-brand/10",
      border: "border-brand/20",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 8928609477",
      link: "tel:+918928609477",
      description: "Available Mon-Fri, 10AM-6PM IST",
      color: "text-[#10B981]",
      bg: "bg-[#10B981]/10",
      border: "border-[#10B981]/20",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Mumbai, India",
      link: "#",
      description: "Open to remote & hybrid opportunities",
      color: "text-[#3B82F6]",
      bg: "bg-[#3B82F6]/10",
      border: "border-[#3B82F6]/20",
    },
  ];

  const projectTypes = [
    { value: "web-dev", label: "Web Development", icon: Code },
    { value: "full-stack", label: "Full Stack Project", icon: Terminal },
    { value: "api-integration", label: "API Integration", icon: Cpu },
    { value: "consultation", label: "Technical Consultation", icon: Briefcase },
    { value: "freelance", label: "Freelance Work", icon: Building },
    { value: "other", label: "Other", icon: FileText },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Shrenik027",
      stats: "10+ repos",
      color: "hover:bg-gray-900 hover:text-white",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/shrenik-dubal-b1692029a/",
      stats: "250+ connections",
      color: "hover:bg-[#0077B5] hover:text-white",
    },
  ];

  const quickActions = [
    {
      title: "View Portfolio",
      description: "Check out my recent projects",
      icon: Briefcase,
      link: "/work",
      color: "from-brand to-brand/80",
    },
    {
      title: "Download CV",
      description: "Get my professional resume",
      icon: FileText,
      link: "https://drive.google.com/file/d/1bN6YOwanf2ElOXnppvha_o5jR3xN66pP/view?usp=sharing",
      color: "from-[#3B82F6] to-[#3B82F6]/80",
    },
  ];

  return (
    <main className="relative">
      {/* Subtle Tech Background */}
      {/* Subtle Tech Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background-secondary" />

        {/* Circuit-like patterns */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,0 L100,0 L100,100 L0,100 Z' fill='none' stroke='%23000' stroke-width='1'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      {/* Hero Section */}
      <section
        className={`relative mt-20 ${spacing.section} ${spacing.py.section}`}
      >
        <motion.div
          initial="hidden"
          animate="show"
          variants={staggerContainer}
          className={`relative z-10 ${spacing.container}`}
        >
          <div className="text-center mb-16">
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-3 mb-6"
            >
              <div className="w-8 h-px bg-gradient-to-r from-transparent via-brand to-transparent" />
              <span className="text-sm font-medium tracking-wider text-muted uppercase">
                Get in Touch
              </span>
              <div className="w-8 h-px bg-gradient-to-l from-transparent via-brand to-transparent" />
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-primary"
            >
              Let's Build <span className="gradient-text">Together</span>
            </motion.h1>

            <motion.p
              variants={fadeUpSlow}
              className="text-lg sm:text-xl text-secondary mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Have a project in mind? Let's discuss how we can bring your ideas
              to life with clean code and modern architecture.
            </motion.p>
          </div>

          {/* Contact Info Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6 mb-16"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={index}
                  href={info.link}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  className={`card p-6 border ${info.border} bg-background-secondary hover:bg-background-tertiary transition-all duration-300`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl ${info.bg}`}>
                      <Icon className={`w-6 h-6 ${info.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-1 text-primary">
                        {info.title}
                      </h3>
                      <p className="text-secondary text-sm mb-2">
                        {info.description}
                      </p>
                      <p className="font-medium text-primary">{info.value}</p>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className={`${spacing.section} ${spacing.py.section}`}>
        <div className={spacing.container}>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              variants={staggerContainer}
            >
              <div className="card p-8 bg-background-secondary border border-theme">
                <div className="flex items-center gap-3 mb-8">
                  <MessageSquare className="w-8 h-8 text-brand" />
                  <div>
                    <h2 className="text-2xl font-bold text-primary">
                      Project Inquiry
                    </h2>
                    <p className="text-secondary text-sm">
                      Fill out the form below to get started
                    </p>
                  </div>
                </div>

                {isSubmitted ? (
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-12"
                  >
                    <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 mb-6">
                      <CheckCircle className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-primary">
                      Message Sent Successfully
                    </h3>
                    <p className="text-secondary mb-6 max-w-md mx-auto">
                      Thank you for reaching out. I'll review your inquiry and
                      get back to you within 24 hours.
                    </p>
                    <div className="inline-flex items-center gap-2 text-sm text-muted">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Auto-refreshing form...
                    </div>
                  </motion.div>
                ) : (
                  <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-primary">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-background-tertiary border border-theme rounded-lg focus:border-brand focus:ring-1 focus:ring-brand/30 outline-none transition-all text-primary placeholder:text-muted"
                          placeholder="Enter your name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2 text-primary">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-background-tertiary border border-theme rounded-lg focus:border-brand focus:ring-1 focus:ring-brand/30 outline-none transition-all text-primary placeholder:text-muted"
                          placeholder="your.email@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-primary">
                          Company / Organization
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-background-tertiary border border-theme rounded-lg focus:border-brand focus:ring-1 focus:ring-brand/30 outline-none transition-all text-primary placeholder:text-muted"
                          placeholder="Optional"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2 text-primary">
                          Project Type *
                        </label>
                        <select
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-background-tertiary border border-theme rounded-lg focus:border-brand focus:ring-1 focus:ring-brand/30 outline-none transition-all text-primary appearance-none"
                        >
                          <option value="">Select project type</option>
                          {projectTypes.map((type) => (
                            <option key={type.value} value={type.value}>
                              {type.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-primary">
                        Project Details *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-background-tertiary border border-theme rounded-lg focus:border-brand focus:ring-1 focus:ring-brand/30 outline-none transition-all resize-none text-primary placeholder:text-muted"
                        placeholder="Describe your project, timeline, budget, and any specific requirements..."
                      />
                    </div>

                    <div className="flex items-center justify-between pt-4">
                      <div className="text-sm text-secondary">
                        * Required fields
                      </div>
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-brand to-brand/90 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Processing...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Send Message
                          </>
                        )}
                      </motion.button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Right: Info & Quick Actions */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              variants={staggerContainer}
              className="space-y-8"
            >
              {/* Quick Actions */}
              <div className="card p-8 bg-gradient-to-br from-background-secondary to-background-tertiary border border-theme">
                <div className="flex items-center gap-3 mb-6">
                  <Zap className="w-8 h-8 text-brand" />
                  <h2 className="text-2xl font-bold text-primary">
                    Quick Actions
                  </h2>
                </div>
                <div className="space-y-4">
                  {quickActions.map((action, index) => {
                    const Icon = action.icon;
                    return (
                      <motion.a
                        key={index}
                        href={action.link}
                        variants={fadeUp}
                        whileHover={{ x: 4 }}
                        className={`flex items-center justify-between p-4 rounded-xl bg-background-tertiary hover:bg-background-secondary border border-theme transition-all duration-300 group`}
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className={`p-2 rounded-lg bg-gradient-to-r ${action.color}`}
                          >
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-primary">
                              {action.title}
                            </h3>
                            <p className="text-sm text-secondary">
                              {action.description}
                            </p>
                          </div>
                        </div>
                        <ExternalLink className="w-5 h-5 text-muted group-hover:text-brand transition-colors" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* Social Links */}
              <div className="card p-8 bg-background-secondary border border-theme">
                <h2 className="text-2xl font-bold mb-6 text-primary">
                  Connect Professionally
                </h2>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={scaleIn}
                        whileHover={{ scale: 1.02 }}
                        className={`flex items-center justify-between p-4 rounded-xl bg-background-tertiary hover:bg-background-secondary border border-theme transition-all duration-300 ${social.color}`}
                      >
                        <div className="flex items-center gap-4">
                          <div className="p-2 rounded-lg bg-background">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-primary">
                              {social.label}
                            </h3>
                            <p className="text-sm text-secondary">
                              {social.stats}
                            </p>
                          </div>
                        </div>
                        <ExternalLink className="w-5 h-5 text-muted" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* Process Info */}
              <div className="card p-8 bg-gradient-to-br from-background-tertiary to-background-secondary border border-theme">
                <div className="flex items-center gap-3 mb-6">
                  <Cpu className="w-8 h-8 text-[#3B82F6]" />
                  <div>
                    <h2 className="text-2xl font-bold text-primary">
                      My Process
                    </h2>
                    <p className="text-sm text-secondary">
                      How I approach new projects
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    {
                      step: "01",
                      title: "Discovery",
                      desc: "Understanding your requirements",
                    },
                    {
                      step: "02",
                      title: "Planning",
                      desc: "Architecture & tech stack discussion",
                    },
                    {
                      step: "03",
                      title: "Development",
                      desc: "Iterative building with feedback",
                    },
                    {
                      step: "04",
                      title: "Delivery",
                      desc: "Testing, deployment & support",
                    },
                  ].map((step, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-3 rounded-lg bg-background-secondary/50"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center">
                        <span className="font-bold text-brand">
                          {step.step}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary">
                          {step.title}
                        </h3>
                        <p className="text-sm text-secondary">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`${spacing.section} pb-32`}>
        <div className={spacing.container}>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="text-center"
          >
            <div className="relative overflow-hidden rounded-2xl border border-theme bg-gradient-to-br from-background-secondary via-background-secondary to-background-tertiary">
              {/* Subtle grid pattern */}
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='none'/%3E%3Cpath d='M0 0h2v60H0zM20 0h2v60h-2zM40 0h2v60h-2zM58 0h2v60h-2zM0 0v2h60V0zM0 20v2h60v-2zM0 40v2h60v-2zM0 58v2h60v-2z' stroke='%23f59e0b' stroke-width='0.5'/%3E%3C/svg%3E\")",
                }}
              />

              <div className="relative z-10 p-12 lg:p-16">
                <motion.div
                  variants={fadeUp}
                  className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-brand/10 to-[#3B82F6]/10 mb-8"
                >
                  <Coffee className="w-12 h-12 text-brand" />
                </motion.div>

                <motion.h2
                  variants={fadeUp}
                  className="text-3xl sm:text-4xl font-bold mb-4 text-primary"
                >
                  Let's Discuss Your Project
                </motion.h2>

                <motion.p
                  variants={fadeUpSlow}
                  className="text-lg text-secondary mb-8 max-w-2xl mx-auto"
                >
                  Whether you're looking to build a new application, optimize an
                  existing system, or need technical consultation, I'm here to
                  help.
                </motion.p>

                <motion.div
                  variants={fadeUp}
                  className="flex flex-wrap justify-center gap-4"
                >
                  <a
                    href="mailto:contact@shrenikdubal.com"
                    className="inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-brand to-brand/90 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    <Mail className="w-5 h-5" />
                    Email Directly
                  </a>
                  <Link
                    href="/work"
                    className="inline-flex items-center gap-3 px-8 py-3 border border-theme text-primary font-semibold rounded-lg hover:border-brand hover:bg-brand/5 transition-all duration-300"
                  >
                    <Briefcase className="w-5 h-5" />
                    View Portfolio
                  </Link>
                </motion.div>

                <motion.p
                  variants={fadeUpSlow}
                  className="text-sm text-muted mt-8"
                >
                  Typical response time:{" "}
                  <span className="text-[#10B981] font-medium">
                    Within 24 hours
                  </span>
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
