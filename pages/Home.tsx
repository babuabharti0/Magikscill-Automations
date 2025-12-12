import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, GitBranch, ShieldCheck, Zap, Activity, Clock, BarChart3, Search, Code2, Rocket } from 'lucide-react';
import { PillLabel, Button, Card, SectionHeader, IconWrapper } from '../components/UI';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-accent/10 via-brand-bg to-brand-bg -z-10"></div>
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Hero Content */}
          <div className="space-y-8">
            <PillLabel>AI Automation Studio</PillLabel>
            <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight text-white">
              Deploy AI agents that <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-purple-500">work like employees.</span>
            </h1>
            <p className="text-xl text-brand-textSoft leading-relaxed max-w-lg">
              Automations that scale like software. Enterprise-focused AI workflow & agent automation for forward-thinking organizations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button className="w-full sm:w-auto">
                  Book AI Strategy Call
                  <IconWrapper>
                    <ArrowRight size={16} />
                  </IconWrapper>
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" className="w-full sm:w-auto">View Solutions</Button>
              </Link>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-brand-border">
              <div>
                <h4 className="text-2xl font-bold text-white mb-1">70%</h4>
                <p className="text-xs text-brand-textSoft uppercase tracking-wide">Workload Reduction</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white mb-1">24/7</h4>
                <p className="text-xs text-brand-textSoft uppercase tracking-wide">Active Agents</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white mb-1">&lt;6wks</h4>
                <p className="text-xs text-brand-textSoft uppercase tracking-wide">Avg Deployment</p>
              </div>
            </div>
          </div>

          {/* Hero Automation Card Visualization */}
          <div className="relative hidden lg:block">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-accent to-purple-600 rounded-2xl blur opacity-20"></div>
            <Card className="relative bg-brand-bgSoft/90 backdrop-blur-xl border-brand-border/50">
              <div className="flex justify-between items-center mb-6 border-b border-brand-border pb-4">
                <span className="text-sm font-medium text-brand-textSoft flex items-center gap-2">
                  <IconWrapper className="text-green-500">
                    <Activity size={16} />
                  </IconWrapper> Live Workflow
                </span>
                <span className="text-xs px-2 py-1 bg-green-500/10 text-green-500 rounded border border-green-500/20">Active</span>
              </div>
              
              <div className="space-y-4">
                {/* Step 1 */}
                <div className="flex gap-4 items-center p-4 rounded-lg bg-brand-bg border border-brand-border">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                    <IconWrapper>
                      <Zap size={20} />
                    </IconWrapper>
                  </div>
                  <div>
                    <h5 className="font-semibold text-white">Inbound Lead Capture</h5>
                    <p className="text-xs text-brand-textSoft">Webhook Trigger • 0.2s Latency</p>
                  </div>
                </div>

                <div className="flex justify-center -my-2">
                  <div className="h-6 w-0.5 bg-brand-border"></div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4 items-center p-4 rounded-lg bg-brand-bg border border-brand-border shadow-[0_0_15px_rgba(37,99,235,0.1)] border-brand-accent/30">
                  <div className="w-10 h-10 rounded-full bg-brand-accent flex items-center justify-center text-white">
                    <IconWrapper>
                      <Bot size={20} />
                    </IconWrapper>
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between">
                      <h5 className="font-semibold text-white">AI Agent Qualification</h5>
                      <span className="text-xs text-brand-accent">Processing</span>
                    </div>
                    <div className="w-full bg-brand-border h-1.5 mt-2 rounded-full overflow-hidden">
                      <div className="bg-brand-accent h-full w-2/3"></div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center -my-2">
                  <div className="h-6 w-0.5 bg-brand-border"></div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4 items-center p-4 rounded-lg bg-brand-bg border border-brand-border opacity-60">
                  <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500">
                    <IconWrapper>
                      <GitBranch size={20} />
                    </IconWrapper>
                  </div>
                  <div>
                    <h5 className="font-semibold text-white">CRM Routing</h5>
                    <p className="text-xs text-brand-textSoft">Salesforce / HubSpot Integ.</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-brand-border flex justify-between text-xs text-brand-textSoft">
                <span>Total Runtime: 1.4s</span>
                <span>Success Rate: 99.9%</span>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="container mx-auto px-6">
        <SectionHeader 
          title="Enterprise Solutions" 
          subtitle="Comprehensive automation infrastructure for modern businesses."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card hoverEffect className="group">
            <div className="w-12 h-12 rounded-lg bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-6 group-hover:bg-brand-accent group-hover:text-white transition-colors">
              <IconWrapper>
                <Bot size={24} />
              </IconWrapper>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">AI Agents</h3>
            <p className="text-brand-textSoft text-sm mb-6 leading-relaxed">
              Custom-trained LLM agents that handle customer support, internal queries, and data retrieval with human-like reasoning.
            </p>
            <Link to="/services" className="text-brand-accent text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
              Explore Agents <IconWrapper><ArrowRight size={14} /></IconWrapper>
            </Link>
          </Card>

          <Card hoverEffect className="group">
            <div className="w-12 h-12 rounded-lg bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-6 group-hover:bg-brand-accent group-hover:text-white transition-colors">
              <IconWrapper>
                <GitBranch size={24} />
              </IconWrapper>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Workflow Automation</h3>
            <p className="text-brand-textSoft text-sm mb-6 leading-relaxed">
              End-to-end orchestration of complex business processes. Connect disparate apps and data sources into unified pipelines.
            </p>
            <Link to="/services" className="text-brand-accent text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
              View Workflows <IconWrapper><ArrowRight size={14} /></IconWrapper>
            </Link>
          </Card>

          <Card hoverEffect className="group">
            <div className="w-12 h-12 rounded-lg bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-6 group-hover:bg-brand-accent group-hover:text-white transition-colors">
              <IconWrapper>
                <ShieldCheck size={24} />
              </IconWrapper>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">AI Advisory & Governance</h3>
            <p className="text-brand-textSoft text-sm mb-6 leading-relaxed">
              Strategic consulting on AI roadmap, security compliance, and architecture. Build with confidence and control.
            </p>
            <Link to="/services" className="text-brand-accent text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
              Advisory Details <IconWrapper><ArrowRight size={14} /></IconWrapper>
            </Link>
          </Card>
        </div>
      </section>

      {/* Why Magikscill */}
      <section className="bg-brand-bgSoft py-24 border-y border-brand-border">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <PillLabel>Why Magikscill</PillLabel>
            <h2 className="text-4xl font-bold text-white mb-6">Enterprise discipline.<br/>Startup speed.</h2>
            <p className="text-brand-textSoft text-lg mb-8">
              We bridge the gap between proof-of-concept excitement and production-grade reliability.
            </p>
            <ul className="space-y-6">
              {[
                "Security-first architecture compliant with SOC2 standards.",
                "Custom model fine-tuning on your proprietary data.",
                "Ongoing maintenance and optimization SLAs."
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <div className="mt-1 min-w-[20px] h-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                    <IconWrapper>
                      <Zap size={12} />
                    </IconWrapper>
                  </div>
                  <span className="text-brand-textSoft">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <Card className="border-l-4 border-l-brand-accent">
              <div className="flex items-center gap-2 mb-2">
                <IconWrapper className="text-brand-accent">
                  <Search size={20} />
                </IconWrapper>
                <span className="text-brand-accent font-bold text-sm uppercase tracking-wider">Phase 1</span>
                <div className="h-px bg-brand-border flex-grow"></div>
              </div>
              <h4 className="text-xl font-bold text-white mb-1">Audit & Strategy</h4>
              <p className="text-sm text-brand-textSoft">Deep dive into operational bottlenecks.</p>
            </Card>
            <Card className="border-l-4 border-l-brand-accent opacity-80">
              <div className="flex items-center gap-2 mb-2">
                <IconWrapper className="text-brand-accent">
                  <Code2 size={20} />
                </IconWrapper>
                <span className="text-brand-accent font-bold text-sm uppercase tracking-wider">Phase 2</span>
                <div className="h-px bg-brand-border flex-grow"></div>
              </div>
              <h4 className="text-xl font-bold text-white mb-1">Development & Integration</h4>
              <p className="text-sm text-brand-textSoft">Agile build sprints with bi-weekly demos.</p>
            </Card>
            <Card className="border-l-4 border-l-brand-accent opacity-60">
              <div className="flex items-center gap-2 mb-2">
                <IconWrapper className="text-brand-accent">
                  <Rocket size={20} />
                </IconWrapper>
                <span className="text-brand-accent font-bold text-sm uppercase tracking-wider">Phase 3</span>
                <div className="h-px bg-brand-border flex-grow"></div>
              </div>
              <h4 className="text-xl font-bold text-white mb-1">Scale & Support</h4>
              <p className="text-sm text-brand-textSoft">24/7 monitoring and iterative improvements.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-brand-card to-brand-bg border border-brand-border rounded-2xl p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to automate your operations?</h2>
          <p className="text-xl text-brand-textSoft mb-10 max-w-2xl mx-auto">
            Start with a no-cost AI automation assessment to identify high-ROI opportunities.
          </p>
          <div className="flex justify-center">
            <Link to="/contact">
              <Button className="px-10 py-4 text-lg">
                Get Your Assessment
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};