import React from 'react';
import { Target, Lightbulb, Users, Award, Briefcase, Code, Lock, Linkedin } from 'lucide-react';
import { PillLabel, SectionHeader, Card, IconWrapper } from '../components/UI';

export const About: React.FC = () => {
  return (
    <div className="pt-20 pb-24 space-y-24">
      {/* Hero */}
      <section className="container mx-auto px-6 max-w-4xl text-center">
        <PillLabel>About Us</PillLabel>
        <h1 className="text-5xl font-bold text-white mb-8">Bridging operations with applied AI</h1>
        <p className="text-xl text-brand-textSoft leading-relaxed">
          Magikscill Automations is an engineering-driven consultancy focused on building the autonomous enterprise. We don't just advise; we ship production-grade code that transforms how businesses operate.
        </p>
      </section>

      {/* Core Values */}
      <section className="bg-brand-bgSoft py-20 border-y border-brand-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-blue-900/20 flex items-center justify-center text-blue-500 mb-6">
                <IconWrapper>
                  <Briefcase size={32} />
                </IconWrapper>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Business-First</h3>
              <p className="text-brand-textSoft">We focus on ROI and operational metrics, not just hype. Every automation must solve a real business problem.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-purple-900/20 flex items-center justify-center text-purple-500 mb-6">
                <IconWrapper>
                  <Code size={32} />
                </IconWrapper>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Engineering-Driven</h3>
              <p className="text-brand-textSoft">We are developers and systems architects. We build robust, scalable solutions that stand the test of time.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-green-900/20 flex items-center justify-center text-green-500 mb-6">
                <IconWrapper>
                  <Lock size={32} />
                </IconWrapper>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Security-Minded</h3>
              <p className="text-brand-textSoft">Your data is your most valuable asset. We implement enterprise-grade security practices in every workflow.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="container mx-auto px-6">
        <SectionHeader title="Our Principles" subtitle="The standards we hold ourselves to in every engagement." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="flex items-start gap-4">
            <div className="mt-1 text-brand-accent">
              <IconWrapper>
                <Lightbulb size={24} />
              </IconWrapper>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-2">Clarity</h4>
              <p className="text-brand-textSoft text-sm">We speak plain English, not jargon. You will always understand what we are building and why.</p>
            </div>
          </Card>
          <Card className="flex items-start gap-4">
            <div className="mt-1 text-brand-accent">
              <IconWrapper>
                <Target size={24} />
              </IconWrapper>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-2">Accountability</h4>
              <p className="text-brand-textSoft text-sm">We own our outcomes. If an automation breaks, we fix it. We are partners in your success.</p>
            </div>
          </Card>
          <Card className="flex items-start gap-4">
            <div className="mt-1 text-brand-accent">
              <IconWrapper>
                <Users size={24} />
              </IconWrapper>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-2">Partnership</h4>
              <p className="text-brand-textSoft text-sm">We integrate with your team. We are not just a vendor; we are your external automation department.</p>
            </div>
          </Card>
          <Card className="flex items-start gap-4">
            <div className="mt-1 text-brand-accent">
              <IconWrapper>
                <Award size={24} />
              </IconWrapper>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-2">Quality</h4>
              <p className="text-brand-textSoft text-sm">We write clean, documented, and testable code. We build for long-term maintainability. Most of our code is generated with AI, but everything is professionally managed and reviewed by our experts.</p>
            </div>
          </Card>
        </div>
      </section>

      {/* Delivery Process */}
      <section className="container mx-auto px-6">
        <SectionHeader title="Delivery Process" align="center" />
        <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-brand-border before:to-transparent">
          
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-brand-border bg-brand-bg shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 text-brand-accent font-bold">1</div>
            <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6">
              <div className="flex justify-between items-center mb-2">
                 <h4 className="font-bold text-white">Discovery & Roadmap</h4>
                 <span className="text-xs uppercase font-bold text-brand-accent">Phase 1</span>
              </div>
              <p className="text-sm text-brand-textSoft">We map your current processes, identify high-impact automation opportunities, and define the technical architecture.</p>
            </Card>
          </div>

          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-brand-border bg-brand-bg shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 text-brand-accent font-bold">2</div>
            <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6">
              <div className="flex justify-between items-center mb-2">
                 <h4 className="font-bold text-white">Development & Testing</h4>
                 <span className="text-xs uppercase font-bold text-brand-accent">Phase 2</span>
              </div>
              <p className="text-sm text-brand-textSoft">Iterative sprints to build the agents and workflows. Rigorous testing in sandbox environments to ensure reliability.</p>
            </Card>
          </div>

          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-brand-border bg-brand-bg shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 text-brand-accent font-bold">3</div>
            <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6">
               <div className="flex justify-between items-center mb-2">
                 <h4 className="font-bold text-white">Deployment & Handoff</h4>
                 <span className="text-xs uppercase font-bold text-brand-accent">Phase 3</span>
              </div>
              <p className="text-sm text-brand-textSoft">Production rollout with documentation and team training. We ensure your team is ready to own or manage the new systems.</p>
            </Card>
          </div>

        </div>
      </section>

      {/* Leadership Team */}
      <section className="container mx-auto px-6">
        <SectionHeader title="Leadership" subtitle="The team behind the automations." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Profile 1: Founder & CEO */}
            <Card className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-2 border-brand-border bg-brand-bgSoft">
                    <img 
                        src="https://ui-avatars.com/api/?name=Founder&background=020617&color=2563eb&size=256" 
                        alt="Avatar — Dinesh Kumar" 
                        className="w-full h-full object-cover"
                    />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">&lt;&lt;Dinesh Kumar&gt;&gt;</h3>
                <p className="text-xs font-semibold text-brand-textSoft uppercase tracking-wider mb-4">Founder & CEO</p>
                <p className="text-sm text-brand-textSoft leading-relaxed mb-6">
                    Building end-to-end AI automation and managing delivery, engineering, and product.
                </p>
                <div className="mt-auto">
                     <div className="p-2 rounded-full bg-brand-bgSoft text-brand-textSoft hover:text-white transition-colors cursor-default">
                        <IconWrapper>
                          <Linkedin size={18} />
                        </IconWrapper>
                     </div>
                </div>
            </Card>

            {/* Profile 2: CTO */}
            <Card className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-2 border-brand-border bg-brand-bgSoft">
                     <img 
                        src="https://ui-avatars.com/api/?name=CTO&background=020617&color=2563eb&size=256" 
                        alt="Avatar — Disha Bharti" 
                        className="w-full h-full object-cover"
                    />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">&lt;&lt;YOUR_FULL_NAME&gt;&gt;</h3>
                <p className="text-xs font-semibold text-brand-textSoft uppercase tracking-wider mb-4">Chief Technology Officer (Acting)</p>
                <p className="text-sm text-brand-textSoft leading-relaxed mb-6">
                    Building end-to-end AI automation and managing delivery, engineering, and product.
                </p>
                <div className="mt-auto">
                     <div className="p-2 rounded-full bg-brand-bgSoft text-brand-textSoft hover:text-white transition-colors cursor-default">
                        <IconWrapper>
                          <Linkedin size={18} />
                        </IconWrapper>
                     </div>
                </div>
            </Card>

            {/* Profile 3: Lead AI Systems Engineer */}
             <Card className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-2 border-brand-border bg-brand-bgSoft">
                     <img 
                        src="https://ui-avatars.com/api/?name=Engineer&background=020617&color=2563eb&size=256" 
                        alt="Avatar — <<YOUR_FULL_NAME>>" 
                        className="w-full h-full object-cover"
                    />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">&lt;&lt;YOUR_FULL_NAME&gt;&gt;</h3>
                <p className="text-xs font-semibold text-brand-textSoft uppercase tracking-wider mb-4">Lead AI Systems Engineer (Acting)</p>
                <p className="text-sm text-brand-textSoft leading-relaxed mb-6">
                    Building end-to-end AI automation and managing delivery, engineering, and product.
                </p>
                <div className="mt-auto">
                     <div className="p-2 rounded-full bg-brand-bgSoft text-brand-textSoft hover:text-white transition-colors cursor-default">
                        <IconWrapper>
                          <Linkedin size={18} />
                        </IconWrapper>
                     </div>
                </div>
            </Card>
        </div>
      </section>

    </div>
  );
};