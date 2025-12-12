// pages/Contact.tsx
import React, { useState } from 'react';
import { Mail, Clock, MapPin, Send } from 'lucide-react';
import { PillLabel, SectionHeader, Card, Button, IconWrapper } from '../components/UI';
import SocialGrid from '../components/SocialGrid';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    teamSize: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your interest! In a real app, this would send your data to our CRM.");
    setFormData({ name: '', email: '', company: '', teamSize: '', message: '' });
  };

  return (
    <div className="pt-20 pb-24">
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column: Form */}
          <div>
            <PillLabel>Get in Touch</PillLabel>
            <h1 className="text-4xl font-bold text-white mb-6">Let's explore what AI automation can do for your business.</h1>
            <p className="text-brand-textSoft mb-10 text-lg">
              Fill out the form to schedule a preliminary discovery call. We usually respond within 24 business hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-white">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-brand-bgSoft border border-brand-border rounded-md px-4 py-3 text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-white">Work Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-brand-bgSoft border border-brand-border rounded-md px-4 py-3 text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-white">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-brand-bgSoft border border-brand-border rounded-md px-4 py-3 text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors"
                    placeholder="Acme Inc."
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="teamSize" className="text-sm font-medium text-white">Team Size</label>
                  <select
                    id="teamSize"
                    name="teamSize"
                    value={formData.teamSize}
                    onChange={handleChange}
                    className="w-full bg-brand-bgSoft border border-brand-border rounded-md px-4 py-3 text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors appearance-none"
                  >
                    <option value="" disabled>Select size...</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="200+">200+ employees</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-white">How can we help?</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-brand-bgSoft border border-brand-border rounded-md px-4 py-3 text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors"
                  placeholder="Tell us about your current bottlenecks or automation goals..."
                ></textarea>
              </div>

              <Button type="submit" className="w-full md:w-auto">
                <IconWrapper>
                  <Send size={16} />
                </IconWrapper>
                Send Message
              </Button>
            </form>
          </div>

          {/* Right Column: Info */}
          <div className="space-y-8 lg:mt-20">
            <Card className="bg-gradient-to-br from-brand-card to-brand-bgSoft">
              <h3 className="text-xl font-bold text-white mb-6">Business Hours</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-brand-accent">
                    <IconWrapper>
                      <Clock size={20} />
                    </IconWrapper>
                  </div>
                  <div>
                    <p className="text-white font-medium">Availability</p>
                    <p className="text-brand-textSoft text-sm">24x7</p>
                    <p className="text-brand-textSoft text-sm">we are automation company ,we don't need to rest</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-brand-accent">
                    <IconWrapper>
                      <Mail size={20} />
                    </IconWrapper>
                  </div>
                  <div>
                    <p className="text-white font-medium">Email Us</p>
                    <a href="mailto:magikscill@gmail.com" className="text-brand-textSoft text-sm hover:text-brand-accent transition-colors">
                      magikscill@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-brand-accent">
                    <IconWrapper>
                      <MapPin size={20} />
                    </IconWrapper>
                  </div>
                  <div>
                    <p className="text-white font-medium">Headquarters</p>
                    <p className="text-brand-textSoft text-sm">codes are our headquarters</p>
                  </div>
                </div>
              </div>
            </Card>

            <div className="p-8 border border-dashed border-brand-border rounded-xl text-center">
              <h4 className="text-white font-bold mb-2">Ready for a deeper dive?</h4>
              <p className="text-brand-textSoft text-sm mb-6">Skip the email tag and book a time directly on our calendar.</p>
              <Button variant="outline" fullWidth>View Booking Calendar</Button>
            </div>

            {/* Social Grid Section */}
            <SocialGrid />
          </div>

        </div>
      </section>
    </div>
  );
};