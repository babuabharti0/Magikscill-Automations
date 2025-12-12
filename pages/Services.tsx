// pages/Services.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, GitBranch, ShieldCheck, Cpu, LineChart, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PillLabel, SectionHeader, Card, Button, IconWrapper } from '../components/UI';

export const Services: React.FC = () => {
  return (
    <div className="pt-20 pb-24 space-y-24">
      {/* Header */}
      <section className="container mx-auto px-6 text-center">
        <PillLabel>Our Expertise</PillLabel>
        <h1 className="text-5xl font-bold text-white mb-6">Services & Solutions</h1>
        <p className="text-xl text-brand-textSoft max-w-2xl mx-auto">
          We transform manual, repetitive corporate functions into intelligent, autonomous systems.
        </p>
      </section>

      {/* Service 1: AI Agents */}
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="w-14 h-14 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-6">
              <IconWrapper>
                <Bot size={32} />
              </IconWrapper>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Autonomous AI Agents</h2>
            <p className="text-brand-textSoft mb-6 text-lg leading-relaxed">
              Deploy intelligent agents capable of reasoning, tool use, and decision making. Unlike simple chatbots, our agents perform actions across your software stack.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Customer Support Tier 1 & 2 Automation",
                "Internal Knowledge Base & HR Assistants",
                "Data Entry & Document Processing Agents"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-brand-textSoft">
                  <IconWrapper className="text-brand-accent">
                    <CheckCircle2 size={18} />
                  </IconWrapper>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 lg:order-2">
            <Card className="p-0 border-brand-border bg-brand-card overflow-hidden relative h-full min-h-[350px] flex items-center justify-center group">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 to-transparent pointer-events-none"></div>
              
              <svg 
                viewBox="0 0 600 400" 
                className="w-full h-auto object-cover p-8 opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                fill="none" 
                xmlns="http://www.w3.org/2000/svg" 
                role="img" 
                aria-label="Illustration — Autonomous AI agents"
              >
                <defs>
                  <linearGradient id="grid-fade" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#1e293b" stopOpacity="0.3"/>
                    <stop offset="1" stopColor="#1e293b" stopOpacity="0"/>
                  </linearGradient>
                </defs>
                
                {/* Background Tech Grid */}
                <path d="M50 0 V400 M150 0 V400 M250 0 V400 M350 0 V400 M450 0 V400 M550 0 V400" stroke="url(#grid-fade)" strokeWidth="1" />
                <path d="M0 50 H600 M0 150 H600 M0 250 H600 M0 350 H600" stroke="url(#grid-fade)" strokeWidth="1" />

                {/* Central Agent Hub */}
                <g transform="translate(300, 200)">
                  <circle r="60" stroke="#2563eb" strokeWidth="1.5" strokeDasharray="4 4" className="animate-[spin_10s_linear_infinite]" opacity="0.4" />
                  <circle r="45" stroke="#2563eb" strokeWidth="1" opacity="0.6" />
                  <circle r="30" fill="#0f172a" stroke="#3b82f6" strokeWidth="2" />
                  
                  {/* Bot Icon Simplified */}
                  <rect x="-12" y="-8" width="24" height="16" rx="4" fill="#3b82f6" />
                  <circle cx="-6" cy="0" r="2" fill="#fff" />
                  <circle cx="6" cy="0" r="2" fill="#fff" />
                </g>

                {/* Peripheral Nodes (Systems) */}
                <g transform="translate(150, 100)">
                  <circle r="25" fill="#0f172a" stroke="#1e293b" strokeWidth="2" />
                  <path d="M-10 -8 L10 -8 M-10 0 L10 0 M-10 8 L5 8" stroke="#64748b" strokeWidth="2" strokeLinecap="round" />
                  <text x="0" y="40" textAnchor="middle" fill="#64748b" fontSize="12" fontFamily="sans-serif">Docs</text>
                </g>

                <g transform="translate(450, 100)">
                  <circle r="25" fill="#0f172a" stroke="#1e293b" strokeWidth="2" />
                  <path d="M-8 -10 L8 -10 L0 10 Z" stroke="#64748b" strokeWidth="2" fill="none" />
                  <text x="0" y="40" textAnchor="middle" fill="#64748b" fontSize="12" fontFamily="sans-serif">Cloud</text>
                </g>

                <g transform="translate(150, 300)">
                  <circle r="25" fill="#0f172a" stroke="#1e293b" strokeWidth="2" />
                  <rect x="-10" y="-10" width="20" height="20" rx="2" stroke="#64748b" strokeWidth="2" fill="none"/>
                  <text x="0" y="40" textAnchor="middle" fill="#64748b" fontSize="12" fontFamily="sans-serif">CRM</text>
                </g>

                <g transform="translate(450, 300)">
                  <circle r="25" fill="#0f172a" stroke="#1e293b" strokeWidth="2" />
                  <path d="M-10 0 L10 0 M0 -10 L0 10" stroke="#64748b" strokeWidth="2" />
                  <text x="0" y="40" textAnchor="middle" fill="#64748b" fontSize="12" fontFamily="sans-serif">API</text>
                </g>

                {/* Connection Lines */}
                <path d="M265 178 L170 118" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
                <path d="M335 178 L430 118" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
                <path d="M265 222 L170 282" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
                <path d="M335 222 L430 282" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />

                {/* Data Packets (Animated) */}
                <circle r="3" fill="#60a5fa" opacity="0.9">
                  <animateMotion path="M265 178 L170 118" dur="2s" begin="0s" repeatCount="indefinite" />
                </circle>
                <circle r="3" fill="#60a5fa" opacity="0.9">
                  <animateMotion path="M335 178 L430 118" dur="2s" begin="0.5s" repeatCount="indefinite" />
                </circle>
                <circle r="3" fill="#60a5fa" opacity="0.9">
                  <animateMotion path="M265 222 L170 282" dur="2s" begin="1s" repeatCount="indefinite" />
                </circle>
                <circle r="3" fill="#60a5fa" opacity="0.9">
                  <animateMotion path="M335 222 L430 282" dur="2s" begin="1.5s" repeatCount="indefinite" />
                </circle>
              </svg>
            </Card>
          </div>
        </div>
      </section>

      {/* Service 2: Workflow Automation */}
      <section className="bg-brand-bgSoft py-20 border-y border-brand-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
             {/* Text Column (Moved to Left) */}
             <div>
              <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500 mb-6">
                <IconWrapper>
                  <Cpu size={32} />
                </IconWrapper>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Workflow Automation</h2>
              <p className="text-brand-textSoft mb-6 text-lg leading-relaxed">
                Connect your fragmented tech stack. We use n8n, Make, and custom Python scripts to create seamless data pipelines that operate 24/7 without human intervention.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "CRM <-> Marketing Platform Sync",
                  "Automated Invoicing & Financial Reporting",
                  "Lead Qualification & Routing Pipelines"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-brand-textSoft">
                    <IconWrapper className="text-purple-500">
                      <CheckCircle2 size={18} />
                    </IconWrapper>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual Column (Right) - SVG Illustration */}
            <Card className="p-0 border-brand-border bg-brand-card overflow-hidden relative h-full min-h-[350px] flex items-center justify-center group">
               <div className="absolute inset-0 bg-gradient-to-bl from-purple-500/5 to-transparent pointer-events-none"></div>
               <div className="w-14 h-14 rounded-xl flex items-center justify-center text-purple-500 absolute top-4 left-4 z-10 opacity-50">
                <IconWrapper>
                   <GitBranch size={24} />
                </IconWrapper>
               </div>
               <svg 
                viewBox="0 0 600 400" 
                className="w-full h-auto object-cover p-8 opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                fill="none" 
                xmlns="http://www.w3.org/2000/svg" 
                role="img" 
                aria-label="Illustration — Workflow Automation"
              >
                <defs>
                   <linearGradient id="grid-fade-purple" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#1e293b" stopOpacity="0.3"/>
                    <stop offset="1" stopColor="#1e293b" stopOpacity="0"/>
                  </linearGradient>
                </defs>
                {/* Background Grid */}
                <path d="M50 0 V400 M150 0 V400 M250 0 V400 M350 0 V400 M450 0 V400 M550 0 V400" stroke="url(#grid-fade-purple)" strokeWidth="1" />
                <path d="M0 50 H600 M0 150 H600 M0 250 H600 M0 350 H600" stroke="url(#grid-fade-purple)" strokeWidth="1" />

                {/* Workflow Nodes */}
                {/* Source Node */}
                <g transform="translate(120, 200)">
                  <rect x="-30" y="-30" width="60" height="60" rx="8" fill="#0f172a" stroke="#a855f7" strokeWidth="2" />
                  <circle cx="0" cy="0" r="12" fill="#a855f7" opacity="0.5" />
                  <text x="0" y="45" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="sans-serif">TRIGGER</text>
                </g>

                {/* Process Node */}
                <g transform="translate(300, 200)">
                   <rect x="-30" y="-30" width="60" height="60" rx="30" fill="#0f172a" stroke="#a855f7" strokeWidth="2" strokeDasharray="4 2" />
                   <path d="M-10 -10 L10 10 M-10 10 L10 -10" stroke="#a855f7" strokeWidth="2" />
                   <text x="0" y="45" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="sans-serif">PROCESS</text>
                   
                   {/* Orbiting particle */}
                   <circle cx="40" cy="0" r="4" fill="#a855f7" className="animate-[spin_3s_linear_infinite]" style={{transformOrigin: "0 0"}} />
                </g>

                {/* Destination Node */}
                <g transform="translate(480, 200)">
                   <rect x="-30" y="-30" width="60" height="60" rx="8" fill="#0f172a" stroke="#a855f7" strokeWidth="2" />
                   <rect x="-10" y="-12" width="20" height="24" rx="2" stroke="#a855f7" strokeWidth="2" fill="none" />
                   <text x="0" y="45" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="sans-serif">ACTION</text>
                </g>

                {/* Connectors */}
                <path d="M150 200 L270 200" stroke="#475569" strokeWidth="2" />
                <path d="M330 200 L450 200" stroke="#475569" strokeWidth="2" />

                {/* Flowing Data Packets */}
                <circle r="4" fill="#d8b4fe">
                  <animateMotion dur="2s" repeatCount="indefinite" path="M150 200 L270 200" />
                </circle>
                <circle r="4" fill="#d8b4fe">
                   <animateMotion dur="2s" begin="1s" repeatCount="indefinite" path="M330 200 L450 200" />
                </circle>
              </svg>
            </Card>
          </div>
        </div>
      </section>

      {/* Service 3: Advisory */}
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Column (Left) */}
          <div>
            <div className="w-14 h-14 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500 mb-6">
              <IconWrapper>
                <ShieldCheck size={32} />
              </IconWrapper>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">AI Advisory & Governance</h2>
            <p className="text-brand-textSoft mb-6 text-lg leading-relaxed">
              Navigating the AI landscape requires more than just code. We provide the strategic framework to ensure your AI adoption is secure, compliant, and ROI-positive.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "AI Readiness Assessments",
                "Data Privacy & Security Audits",
                "Internal AI Policy Development"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-brand-textSoft">
                  <IconWrapper className="text-green-500">
                    <CheckCircle2 size={18} />
                  </IconWrapper>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Visual Column (Right) - SVG Illustration */}
           <Card className="p-0 border-brand-border bg-brand-card overflow-hidden relative h-full min-h-[350px] flex items-center justify-center group">
             <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent pointer-events-none"></div>
             <div className="w-14 h-14 rounded-xl flex items-center justify-center text-green-500 absolute top-4 left-4 z-10 opacity-50">
               <IconWrapper>
                 <LineChart size={24} />
               </IconWrapper>
             </div>
             <svg 
                viewBox="0 0 600 400" 
                className="w-full h-auto object-cover p-8 opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                fill="none" 
                xmlns="http://www.w3.org/2000/svg" 
                role="img" 
                aria-label="Illustration — AI Advisory & Governance"
              >
                <defs>
                   <linearGradient id="grid-fade-green" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#1e293b" stopOpacity="0.3"/>
                    <stop offset="1" stopColor="#1e293b" stopOpacity="0"/>
                  </linearGradient>
                </defs>
                {/* Background Grid */}
                <path d="M50 0 V400 M150 0 V400 M250 0 V400 M350 0 V400 M450 0 V400 M550 0 V400" stroke="url(#grid-fade-green)" strokeWidth="1" />
                <path d="M0 50 H600 M0 150 H600 M0 250 H600 M0 350 H600" stroke="url(#grid-fade-green)" strokeWidth="1" />

                {/* Connection paths defined for animation */}
                <path id="conn-tl" d="M150 120 L300 200" stroke="none" />
                <path id="conn-tr" d="M450 120 L300 200" stroke="none" />
                <path id="conn-bl" d="M150 280 L300 200" stroke="none" />
                <path id="conn-br" d="M450 280 L300 200" stroke="none" />

                {/* Visible Connection Lines */}
                <line x1="150" y1="120" x2="300" y2="200" stroke="#22c55e" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
                <line x1="450" y1="120" x2="300" y2="200" stroke="#22c55e" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
                <line x1="150" y1="280" x2="300" y2="200" stroke="#22c55e" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
                <line x1="450" y1="280" x2="300" y2="200" stroke="#22c55e" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />

                {/* Data Flow Particles */}
                <circle r="3" fill="#4ade80">
                   <animateMotion dur="3s" repeatCount="indefinite">
                     <mpath href="#conn-tl" />
                   </animateMotion>
                   <animate attributeName="opacity" values="1;0;0" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle r="3" fill="#4ade80">
                   <animateMotion dur="3s" begin="1.5s" repeatCount="indefinite">
                     <mpath href="#conn-tr" />
                   </animateMotion>
                   <animate attributeName="opacity" values="1;0;0" dur="3s" begin="1.5s" repeatCount="indefinite" />
                </circle>
                <circle r="3" fill="#4ade80">
                   <animateMotion dur="3s" begin="0.75s" repeatCount="indefinite">
                     <mpath href="#conn-bl" />
                   </animateMotion>
                   <animate attributeName="opacity" values="1;0;0" dur="3s" begin="0.75s" repeatCount="indefinite" />
                </circle>
                <circle r="3" fill="#4ade80">
                   <animateMotion dur="3s" begin="2.25s" repeatCount="indefinite">
                     <mpath href="#conn-br" />
                   </animateMotion>
                   <animate attributeName="opacity" values="1;0;0" dur="3s" begin="2.25s" repeatCount="indefinite" />
                </circle>

                {/* Center Shield */}
                <g transform="translate(300, 200)">
                   <path d="M-50 -40 C-50 -40 -50 20 0 50 C 50 20 50 -40 50 -40 L 0 -60 L -50 -40 Z" fill="#0f172a" stroke="#22c55e" strokeWidth="2" />
                   <path d="M-20 -10 L0 10 L20 -20" fill="none" stroke="#22c55e" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                   
                   {/* Scanning Effect */}
                   <rect x="-60" y="-70" width="120" height="2" fill="#4ade80" opacity="0.5">
                      <animate attributeName="y" values="-70;60;-70" dur="4s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0;0.8;0" dur="4s" repeatCount="indefinite" />
                   </rect>
                </g>

                {/* Surrounding Elements */}
                {/* Lock (Top Left) */}
                <g transform="translate(150, 120)">
                   <rect x="-15" y="-10" width="30" height="25" rx="2" fill="#0f172a" stroke="#22c55e" strokeWidth="1.5" />
                   <path d="M-8 -10 V-18 A8 8 0 0 1 8 -18 V-10" fill="none" stroke="#22c55e" strokeWidth="1.5" />
                </g>

                {/* Doc (Top Right) */}
                <g transform="translate(450, 120)">
                   <rect x="-12" y="-16" width="24" height="32" rx="1" fill="#0f172a" stroke="#22c55e" strokeWidth="1.5" />
                   <line x1="-6" y1="-8" x2="6" y2="-8" stroke="#22c55e" strokeWidth="1" opacity="0.5" />
                   <line x1="-6" y1="0" x2="6" y2="0" stroke="#22c55e" strokeWidth="1" opacity="0.5" />
                   <line x1="-6" y1="8" x2="6" y2="8" stroke="#22c55e" strokeWidth="1" opacity="0.5" />
                </g>

                {/* Compliance Badge (Bottom Left) */}
                <g transform="translate(150, 280)">
                   <circle r="15" fill="#0f172a" stroke="#22c55e" strokeWidth="1.5" />
                   <path d="M-4 0 L-1 3 L5 -3" stroke="#22c55e" strokeWidth="1.5" fill="none" />
                </g>

                {/* Alert/Monitor (Bottom Right) */}
                <g transform="translate(450, 280)">
                   <rect x="-16" y="-12" width="32" height="24" rx="2" fill="#0f172a" stroke="#22c55e" strokeWidth="1.5" />
                   <circle cx="0" cy="0" r="4" fill="#22c55e">
                      <animate attributeName="opacity" values="1;0.2;1" dur="2s" repeatCount="indefinite" />
                   </circle>
                </g>
             </svg>
          </Card>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="container mx-auto px-6">
        <SectionHeader title="Engagement Models" subtitle="Flexible partnership structures to suit your organization's needs." align="center" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="flex flex-col">
            <h3 className="text-xl font-bold text-white mb-2">Project Based</h3>
            <p className="text-sm text-brand-textSoft mb-6 h-12">Fixed scope, fixed timeline delivery for specific automation needs.</p>
            <div className="mt-auto">
              <p className="text-2xl font-bold text-white mb-4">Best for MVPs</p>
              <Button variant="outline" fullWidth>Select Project</Button>
            </div>
          </Card>
          <Card className="relative flex flex-col border-brand-accent shadow-[0_0_30px_rgba(37,99,235,0.1)]">
            <div className="absolute top-0 right-0 bg-brand-accent text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">POPULAR</div>
            <h3 className="text-xl font-bold text-white mb-2">Retainer</h3>
            <p className="text-sm text-brand-textSoft mb-6 h-12">Ongoing development and maintenance of your automation infrastructure.</p>
            <div className="mt-auto">
              <p className="text-2xl font-bold text-white mb-4">Best for Growth</p>
              <Button fullWidth>Select Retainer</Button>
            </div>
          </Card>
          <Card className="flex flex-col">
            <h3 className="text-xl font-bold text-white mb-2">Strategic Partner</h3>
            <p className="text-sm text-brand-textSoft mb-6 h-12">Embedded engineering team working alongside your internal stakeholders.</p>
            <div className="mt-auto">
              <p className="text-2xl font-bold text-white mb-4">Best for Enterprise</p>
              <Button variant="outline" fullWidth>Contact Sales</Button>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Have a specific project in mind?</h2>
        <Link to="/contact">
          <Button className="px-8">Discuss a Project</Button>
        </Link>
      </section>
    </div>
  );
};