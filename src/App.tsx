/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Linkedin, 
  Github,
  TrendingUp, 
  Cpu, 
  Zap, 
  Layout, 
  BarChart3, 
  Globe, 
  CheckCircle2,
  ArrowRight,
  Mail,
  ChevronRight,
  Sparkles,
  Layers,
  Target,
  Users
} from "lucide-react";
import { useState } from "react";

const METRICS = [
  { label: "Incremental Margin", value: "$23M", sub: "Lowe's ML Pricing Platform", icon: TrendingUp, color: "text-emerald-600", bg: "bg-emerald-50" },
  { label: "Manual Review Reduction", value: "65%", sub: "Lowe's Agentic AI Workflow", icon: Zap, color: "text-amber-600", bg: "bg-amber-50" },
  { label: "Setup Time Reduction", value: "24h → 1h", sub: "SquadStack AI Onboarding", icon: BarChart3, color: "text-brand-600", bg: "bg-brand-50" },
];

const CASE_STUDIES = [
  {
    title: "Agentic AI Invoice Reconciliation",
    company: "Lowe's",
    description: "Launched an AI-driven dispute workflow integrating ERP and vendor systems, saving 40,000+ productive hours annually.",
    tags: ["Agentic AI", "Workflow Automation", "Fintech"],
    color: "bg-emerald-500/10 text-emerald-600",
    icon: Layout,
  },
  {
    title: "ML-Powered Pricing Modernization",
    company: "Lowe's",
    description: "Modernized execution platforms supporting $10B annual merchandise value, improving price elasticity modeling.",
    tags: ["ML", "Pricing Strategy", "Retail"],
    color: "bg-blue-500/10 text-blue-600",
    icon: BarChart3,
  },
  {
    title: "AI-First SaaS Sales Workflows",
    company: "SquadStack",
    description: "Built workflows integrating CRM and telephony to automate execution-heavy sales operations, driving 32% conversion lift.",
    tags: ["SaaS", "Voice AI", "Automation"],
    color: "bg-indigo-500/10 text-indigo-600",
    icon: Zap,
  },
  {
    title: "Marketplace Trust & Transparency",
    company: "Ola",
    description: "Shipped fare transparency experiences that increased trip acceptance by 24% and reduced cancellations by 15%.",
    tags: ["Marketplace", "Trust", "Mobility"],
    color: "bg-orange-500/10 text-orange-600",
    icon: Globe,
  },
];

const EXPERIENCE = [
  {
    role: "Senior Product Manager",
    company: "Lowe's",
    period: "May 2023 – Present",
    highlights: [
      "Launched agentic AI-driven invoice reconciliation saving 40,000 hours annually.",
      "Modernized ML pricing platforms supporting $10B annual merchandise value.",
      "Shipped ML-assisted workflows for 1,200+ weekly users, preventing $8-10M margin leakage.",
      "Built real-time competitor pricing pipelines processing millions of events weekly."
    ]
  },
  {
    role: "Product Manager",
    company: "SquadStack",
    period: "Oct 2022 – Apr 2023",
    highlights: [
      "Reduced setup time from 24 hours to under 1 hour using AI-assisted onboarding.",
      "Delivered Voice AI and IVR workflow builders, reducing manual routing costs by ₹1.2Cr.",
      "Increased paid conversions by 32% through data-led iteration and funnel analytics.",
      "Introduced usage-based pricing, improving renewals by 18%."
    ]
  },
  {
    role: "Associate Product Manager",
    company: "Ola",
    period: "Oct 2021 – Oct 2022",
    highlights: [
      "Increased trip acceptance by 24% through fare transparency experiences.",
      "Built payout systems handling ₹8+ crore in weekly settlements.",
      "Reduced impersonation fraud by 36% using ML-based driver verification."
    ]
  },
  {
    role: "Senior Product Analyst",
    company: "Better.com",
    period: "Aug 2020 – Sep 2021",
    highlights: [
      "Improved refinance funnel conversion by 18% with AI document classification.",
      "Reduced underwriting time by 22% via ML-powered credit decisioning.",
      "Built standardized APIs for white-label mortgage platforms."
    ]
  }
];

const SKILLS = [
  "Agentic AI", "ML-Powered Systems", "SaaS Platforms", "LLM Reasoning Workflows", 
  "Product Strategy", "API Integrations", "Data-Driven Decision Making", "SQL", 
  "Monetization Systems", "Cross-Functional Leadership"
];

const EDUCATION = [
  {
    degree: "PMLA",
    school: "University of Washington",
    period: "2026 - 2027"
  },
  {
    degree: "B.E. Production Engineering",
    school: "BIT Mesra",
    period: "2016 - 2020"
  }
];

const AI_TOOLKIT = [
  "Vertex AI", "LLM-based Pricing", "Notion AI", "Midjourney", "ChatGPT", "Prompt Engineering", "SQL", "Python"
];

export default function App() {
  const [activeExp, setActiveExp] = useState(0);

  return (
    <div className="min-h-screen font-sans selection:bg-brand-100 selection:text-brand-900">
      {/* Floating Navigation */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-fit px-4">
        <nav className="glass-card rounded-full px-6 py-3 flex items-center gap-8">
          <span className="font-display font-bold text-lg tracking-tight">SHUBHAM<span className="text-brand-600">.</span></span>
          <div className="hidden md:flex items-center gap-6">
            {["Work", "Experience", "Philosophy"].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="text-sm font-medium text-slate-500 hover:text-brand-600 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="h-4 w-px bg-slate-200" />
          <a 
            href="https://www.linkedin.com/in/shubhamkr0108/" 
            target="_blank" 
            className="text-slate-500 hover:text-brand-600 transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a 
            href="https://github.com/shubhamVanraj" 
            target="_blank" 
            className="text-slate-500 hover:text-brand-600 transition-colors"
          >
            <Github size={18} />
          </a>
        </nav>
      </div>

      <main>
        {/* Split Hero Section */}
        <section className="min-h-screen flex items-center pt-20 overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-50 text-brand-700 rounded-full text-xs font-bold uppercase tracking-widest mb-8">
                <Sparkles size={14} /> Senior Product Manager
              </div>
              <h1 className="font-display text-6xl lg:text-8xl font-bold tracking-tight mb-8 leading-[0.9] text-balance">
                Building the <span className="text-brand-600">Agentic</span> Future.
              </h1>
              <p className="text-xl text-slate-600 max-w-xl mb-12 leading-relaxed">
                5+ years of experience building agentic AI and ML-powered enterprise platforms at <span className="text-slate-900 font-semibold">Lowe's</span>, <span className="text-slate-900 font-semibold">SquadStack</span>, and <span className="text-slate-900 font-semibold">Ola</span>.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="mailto:Shubham.kr013@gmail.com"
                  className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-brand-600 transition-all shadow-xl shadow-slate-200 flex items-center gap-2"
                >
                  <Mail size={18} /> Get in touch
                </a>
                <a 
                  href="#work"
                  className="px-8 py-4 bg-white border border-slate-200 text-slate-900 rounded-2xl font-bold hover:border-brand-600 transition-all flex items-center gap-2"
                >
                  View Work <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="aspect-square glass-card rounded-[3rem] p-12 flex flex-col justify-between relative z-10">
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600">
                      <TrendingUp size={24} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">$23M+</div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Revenue Impact</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600">
                      <Zap size={24} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">40k hrs</div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Efficiency Gained</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-brand-100 rounded-2xl flex items-center justify-center text-brand-600">
                      <Users size={24} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">1,200+</div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Weekly Active Users</div>
                    </div>
                  </div>
                </div>
                <div className="pt-8 border-t border-slate-100">
                  <div className="text-sm font-medium text-slate-500 italic">
                    "Building products that quietly amplify what users already want to do."
                  </div>
                </div>
              </div>
              {/* Decorative Blobs */}
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-brand-200/30 blur-[100px] rounded-full" />
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-emerald-200/20 blur-[100px] rounded-full" />
            </motion.div>
          </div>
        </section>

        {/* Bento Metrics */}
        <section className="py-24 bg-slate-50/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {METRICS.map((metric, idx) => (
                <motion.div
                  key={metric.label}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm"
                >
                  <div className={`w-12 h-12 ${metric.bg} ${metric.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <metric.icon size={24} />
                  </div>
                  <div className="text-4xl font-display font-bold mb-2 tracking-tight">{metric.value}</div>
                  <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">{metric.label}</div>
                  <div className="text-sm text-slate-500 leading-relaxed">{metric.sub}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Selected Work - Horizontal Scroll or Grid */}
        <section id="work" className="py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6 tracking-tight">Selected Case Studies</h2>
                <p className="text-lg text-slate-500">Demonstrating product sense through strategic artifacts and real-world impact.</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {CASE_STUDIES.map((study, idx) => (
                <motion.div
                  key={study.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden hover:border-brand-200 transition-all hover:shadow-2xl hover:shadow-brand-500/5"
                >
                  <div className="p-10 lg:p-12">
                    <div className="flex items-center justify-between mb-8">
                      <div className={`w-14 h-14 ${study.color} rounded-2xl flex items-center justify-center`}>
                        <study.icon size={28} />
                      </div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{study.company}</div>
                    </div>
                    <h3 className="font-display text-2xl lg:text-3xl font-bold mb-4 group-hover:text-brand-600 transition-colors">{study.title}</h3>
                    <p className="text-slate-500 mb-8 leading-relaxed text-lg">
                      {study.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {study.tags.map(tag => (
                        <span key={tag} className="px-4 py-1.5 bg-slate-50 text-slate-500 rounded-full text-xs font-bold uppercase tracking-wide">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Experience - List Style */}
        <section id="experience" className="py-32 bg-slate-900 text-white overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-20 tracking-tight">Professional Journey</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4 space-y-4">
                {EXPERIENCE.map((exp, idx) => (
                  <button
                    key={exp.company}
                    onClick={() => setActiveExp(idx)}
                    className={`w-full text-left p-6 rounded-2xl transition-all flex items-center justify-between group ${
                      activeExp === idx ? "bg-white text-slate-900 shadow-xl" : "hover:bg-white/5 text-slate-400"
                    }`}
                  >
                    <div>
                      <div className="font-bold text-lg">{exp.company}</div>
                      <div className="text-sm opacity-70">{exp.role}</div>
                    </div>
                    <ChevronRight className={`transition-transform ${activeExp === idx ? "rotate-90" : "group-hover:translate-x-1"}`} />
                  </button>
                ))}
              </div>
              
              <div className="lg:col-span-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeExp}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="bg-white/5 backdrop-blur-sm rounded-[2.5rem] p-10 lg:p-12 border border-white/10"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
                      <h3 className="text-3xl font-bold">{EXPERIENCE[activeExp].role}</h3>
                      <span className="px-4 py-1.5 bg-brand-500/20 text-brand-300 rounded-full text-sm font-bold tracking-wide">
                        {EXPERIENCE[activeExp].period}
                      </span>
                    </div>
                    <ul className="space-y-6">
                      {EXPERIENCE[activeExp].highlights.map((item, i) => (
                        <li key={i} className="flex gap-4 text-slate-300 text-lg leading-relaxed">
                          <div className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
          {/* Background Accents */}
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-brand-600/10 blur-[150px] rounded-full -mr-80 -mt-80" />
        </section>

        {/* AI Toolkit - Modern Grid */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-50 text-brand-700 rounded-full text-xs font-bold uppercase tracking-widest mb-8">
                  <Cpu size={14} /> Technical Stack
                </div>
                <h2 className="font-display text-4xl lg:text-5xl font-bold mb-8 tracking-tight">The AI Toolkit.</h2>
                <p className="text-xl text-slate-500 mb-12 leading-relaxed">
                  Leveraging cutting-edge technologies to build products that feel like magic but run on precision.
                </p>
                <div className="flex flex-wrap gap-3">
                  {AI_TOOLKIT.map(tool => (
                    <span key={tool} className="px-6 py-3 bg-white border border-slate-100 rounded-2xl text-sm font-bold text-slate-700 shadow-sm hover:border-brand-300 transition-colors">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="aspect-square bg-slate-50 rounded-[2.5rem] flex flex-col items-center justify-center p-8 text-center border border-slate-100">
                    <Layers className="text-brand-600 mb-4" size={40} />
                    <div className="font-bold">Agentic AI</div>
                  </div>
                  <div className="aspect-square bg-brand-600 rounded-[2.5rem] flex flex-col items-center justify-center p-8 text-center text-white shadow-2xl shadow-brand-500/20">
                    <Target className="mb-4" size={40} />
                    <div className="font-bold">Growth Strategy</div>
                  </div>
                </div>
                <div className="space-y-6 pt-12">
                  <div className="aspect-square bg-slate-900 rounded-[2.5rem] flex flex-col items-center justify-center p-8 text-center text-white">
                    <BarChart3 className="text-brand-400 mb-4" size={40} />
                    <div className="font-bold">ML Pricing</div>
                  </div>
                  <div className="aspect-square bg-slate-50 rounded-[2.5rem] flex flex-col items-center justify-center p-8 text-center border border-slate-100">
                    <Users className="text-slate-400 mb-4" size={40} />
                    <div className="font-bold">User Centric</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy - Editorial Style */}
        <section id="philosophy" className="py-32 bg-slate-50/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6 tracking-tight">Product Philosophy</h2>
              <p className="text-xl text-slate-500">The principles that guide my decision-making and execution.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  id: "01",
                  title: 'UX that "Disappears"',
                  text: "A great user experience is one that guides users naturally to success without them even realizing they're being 'onboarded'."
                },
                {
                  id: "02",
                  title: "Product Sense as a Muscle",
                  text: "Built through weekly user conversations, deconstructing standout products, and running rapid prototypes."
                },
                {
                  id: "03",
                  title: "Data-Driven Prioritization",
                  text: "Balancing business impact, confidence, and effort to choose the 'One' high-impact feature that moves the needle."
                }
              ].map((item) => (
                <div key={item.id} className="relative">
                  <div className="font-display text-8xl font-bold text-brand-100 absolute -top-10 -left-6 -z-10">{item.id}</div>
                  <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                  <p className="text-slate-600 leading-relaxed text-lg">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer - Clean & Bold */}
        <footer className="py-32 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="text-center lg:text-left">
                <h2 className="font-display text-5xl lg:text-7xl font-bold mb-6 tracking-tight">Let's build the <br /><span className="text-brand-600">next big thing.</span></h2>
                <p className="text-xl text-slate-500">Currently open to strategic product opportunities.</p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <a 
                  href="mailto:Shubham.kr013@gmail.com"
                  className="w-full sm:w-auto px-12 py-6 bg-slate-900 text-white rounded-[2rem] font-bold hover:bg-brand-600 transition-all shadow-2xl shadow-slate-200 text-center"
                >
                  Email Me
                </a>
                <a 
                  href="https://www.linkedin.com/in/shubhamkr0108/" 
                  target="_blank"
                  className="w-full sm:w-auto px-12 py-6 bg-white border border-slate-200 text-slate-900 rounded-[2rem] font-bold hover:border-brand-600 transition-all text-center"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/shubhamVanraj" 
                  target="_blank"
                  className="w-full sm:w-auto px-12 py-6 bg-white border border-slate-200 text-slate-900 rounded-[2rem] font-bold hover:border-brand-600 transition-all text-center"
                >
                  GitHub
                </a>
              </div>
            </div>
            <div className="mt-32 pt-12 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6 text-slate-400 text-sm font-medium">
              <div>© 2026 Shubham Kumar. All rights reserved.</div>
              <div className="flex items-center gap-8">
                <span>Built with AI Studio</span>
                <span>Bengaluru, India</span>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
