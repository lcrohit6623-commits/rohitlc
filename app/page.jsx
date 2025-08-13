
'use client';

import React from "react";
import { motion } from "framer-motion";
import * as Tabs from "@radix-ui/react-tabs";
import { Github, Linkedin, Mail, MapPin, Phone, ExternalLink, GraduationCap, Briefcase, Download, Sparkles } from "lucide-react";
import ThemeToggle from "../components/ThemeToggle";
import Illustration from "../components/Illustration";

const fadeUp = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } };

const Section = ({ id, title, subtitle, children }: any) => (
  <section id={id} className="scroll-mt-24 py-20 sm:py-24">
    <div className="container">
      {title && (
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{title}</h2>
          {subtitle && <p className="text-sm text-gray-400 mt-2 max-w-2xl">{subtitle}</p>}
        </div>
      )}
      {children}
    </div>
  </section>
);

const TimelineItem = ({ icon, title, meta, desc }: any) => (
  <div className="relative pl-10 pb-10 last:pb-0">
    <div className="absolute left-2 top-0 bottom-0 w-px bg-neutral-700" />
    <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-white" />
    <div className="space-y-1">
      <div className="flex items-start gap-2">
        <div className="mt-0.5">{icon}</div>
        <h4 className="font-semibold text-lg leading-tight">{title}</h4>
      </div>
      <p className="text-sm text-gray-400">{meta}</p>
      <p className="text-sm">{desc}</p>
    </div>
  </div>
);

export default function Page() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b bg-black/50 backdrop-blur supports-[backdrop-filter]:bg-black/40">
        <nav className="container flex h-14 items-center justify-between">
          <a href="#home" className="font-bold tracking-tight text-lg">LC Rohith</a>
          <div className="hidden sm:flex items-center gap-1">
            {([["Home","#home"],["About","#about"],["Skills","#skills"],["Projects","#projects"],["Resume","#resume"],["Contact","#contact"]] as const).map(([label, href]) => (
              <a key={href} href={href} className="px-3 py-2 rounded-xl text-sm hover:bg-neutral-800 transition">{label}</a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <a href="mailto:lcrohit6623@gmail.com" className="btn px-3 py-2" aria-label="Email"><Mail size={18} /></a>
            <a href="https://github.com/lcrohit6623-commits" target="_blank" rel="noreferrer" className="btn px-3 py-2" aria-label="GitHub"><Github size={18} /></a>
            <a href="https://www.linkedin.com/in/lc-rohit-4668a6323" target="_blank" rel="noreferrer" className="btn px-3 py-2" aria-label="LinkedIn"><Linkedin size={18} /></a>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      {/* Hero */}
      <Section id="home" title="">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} className="space-y-6">
            <div className="badge">
              <Sparkles size={14} /> Available for work
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">Data Analyst</h1>
            <p className="text-gray-300 max-w-xl">
              Detail-oriented and analytical B.Com graduate with a Data Analyst certification from ExcelR. Proficient in SQL, Excel, Power BI, and Tableau, with hands-on experience in creating dashboards and analyzing financial datasets.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#projects" className="btn">View Projects</a>
              <a href="#resume" className="btn"><Download className="mr-2 h-4 w-4" />Resume</a>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span className="inline-flex items-center gap-1"><MapPin size={16} /> Bangalore, India</span>
              <span className="inline-flex items-center gap-1"><Phone size={16} /> +91 7892903905</span>
            </div>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}>
            <div className="card aspect-[4/3] flex items-center justify-center">
              <Illustration />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* About */}
      <Section id="about" title="About" subtitle="A quick summary of who I am and what I do best.">
        <div className="grid sm:grid-cols-2 gap-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="card">
            <div className="space-y-3 text-sm">
              <p>
                B.Com graduate with experience in data analysis, dashboard design, and reporting. Strong skills in SQL, Excel, Power BI, Tableau.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Power BI","Tableau","Excel","SQL","Dashboard Design","Data Cleaning","Reporting"].map((s) => (
                  <span key={s} className="badge">{s}</span>
                ))}
              </div>
              <div className="text-sm">
                <span className="font-semibold">Languages:</span> Speak & write English; Speak Kannada & Hindi.
              </div>
            </div>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="card">
            <div>
              <h3 className="font-semibold mb-3">Highlights</h3>
              <ul className="space-y-3 text-sm list-disc pl-5">
                <li>Built interactive dashboards in Excel, Power BI, and Tableau.</li>
                <li>Performed data cleaning and analysis for reporting.</li>
                <li>Collaborated with teams to deliver insights on time.</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Skills" subtitle="Tech I use day‑to‑day.">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {["Power BI","Tableau","Excel","SQL","Dashboard Design","Data Cleaning","Reporting","Communication"].map((skill) => (
            <div key={skill} className="card p-5 text-sm flex items-center justify-between">
              <span>{skill}</span>
              <span className="text-xs text-gray-400">Proficient</span>
            </div>
          ))}
        </motion.div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects" subtitle="Selected work I’ve built or contributed to.">
        <div className="grid md:grid-cols-2 gap-6">
          <motion.a variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} href="#" className="card card-hover group overflow-hidden block">
            <div className="pb-2">
              <h3 className="font-semibold text-lg">Bank Loan Analytics Dashboard</h3>
              <p className="text-sm text-gray-300">KPIs and visual reports to analyze loan disbursements, defaults, and demographics.</p>
            </div>
            <div className="aspect-video rounded-xl bg-neutral-900 mb-4 group-hover:scale-[1.01] transition-transform" />
            <div className="flex items-center gap-3 text-sm">
              <span className="inline-flex items-center gap-1">Case Study <ExternalLink size={16} /></span>
              <span className="inline-flex items-center gap-1">Code <Github size={16} /></span>
            </div>
          </motion.a>
        </div>
      </Section>

      {/* Resume */}
      <Section id="resume" title="Resume" subtitle="My experience and education.">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="card p-0 overflow-hidden">
          <div className="p-6">
            <Tabs.Root defaultValue="experience">
              <Tabs.List className="grid grid-cols-2 rounded-xl border p-1 mb-6">
                <Tabs.Trigger value="experience" className="rounded-lg px-3 py-2 data-[state=active]:bg-white data-[state=active]:text-black transition">Experience</Tabs.Trigger>
                <Tabs.Trigger value="education" className="rounded-lg px-3 py-2 data-[state=active]:bg-white data-[state=active]:text-black transition">Education</Tabs.Trigger>
              </Tabs.List>
              <Tabs.Content value="experience" className="mt-2">
                <div className="grid md:grid-cols-2 gap-10">
                  <div>
                    <TimelineItem icon={<Briefcase size={18} />} title="Data Analyst Intern • ExcelR" meta="Bangalore · 3 Months" desc="Developed interactive dashboards using Excel, Power BI, and Tableau. Conducted data cleaning and analysis to support client reporting." />
                  </div>
                </div>
              </Tabs.Content>
              <Tabs.Content value="education" className="mt-2">
                <div className="grid md:grid-cols-2 gap-10">
                  <div>
                    <TimelineItem icon={<GraduationCap size={18} />} title="B.Com • St. Joseph’s College, Bangalore" meta="2020 — 2024" desc="CMA Foundation Cleared. Coursework: Accounting, Finance, Business Statistics." />
                  </div>
                  <div>
                    <TimelineItem icon={<GraduationCap size={18} />} title="Data Analyst Certification • ExcelR" meta="Aug 2024 — Feb 2025" desc="Excel, SQL, Power BI, Tableau, basic Python; capstone projects and hands-on assignments." />
                  </div>
                </div>
              </Tabs.Content>
            </Tabs.Root>
          </div>
          <div className="border-t p-6 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-gray-400">Prefer the PDF? Grab a copy of my latest resume.</p>
            <a href="/resume.pdf" download className="btn">
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </a>
          </div>
        </motion.div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact" subtitle="Have an opportunity or idea? Let’s talk.">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="card">
          <form className="grid sm:grid-cols-2 gap-4">
            <input className="col-span-1 rounded-xl border bg-transparent px-4 py-3" placeholder="Name" />
            <input className="col-span-1 rounded-xl border bg-transparent px-4 py-3" placeholder="Email" />
            <input className="sm:col-span-2 rounded-xl border bg-transparent px-4 py-3" placeholder="Subject" />
            <textarea className="sm:col-span-2 rounded-xl border bg-transparent px-4 py-3 min-h-[140px]" placeholder="Message" />
            <div className="sm:col-span-2">
              <button type="button" className="btn">Send</button>
            </div>
          </form>
        </motion.div>
      </Section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} LC Rohith. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <a href="https://github.com/lcrohit6623-commits" className="inline-flex items-center gap-1 hover:underline"><Github size={16} /> GitHub</a>
            <a href="https://www.linkedin.com/in/lc-rohit-4668a6323" className="inline-flex items-center gap-1 hover:underline"><Linkedin size={16} /> LinkedIn</a>
            <a href="mailto:lcrohit6623@gmail.com" className="inline-flex items-center gap-1 hover:underline"><Mail size={16} /> Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
