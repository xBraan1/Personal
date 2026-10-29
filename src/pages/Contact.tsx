import { Breadcrumbs, SEO } from '../components/Layout';
import { profile } from '../data/content';
import { useState } from 'react';
import { Send, ExternalLink, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Please provide more detail (at least 20 characters)';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  return (
    <div className="py-28 lg:py-36 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SEO title="Contact — Brian Kibet" description="Get in touch for AI training and evaluation opportunities." />
        <Breadcrumbs items={[{ label: 'Contact' }]} />

        {/* Header */}
        <div className="max-w-3xl mb-20">
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-4">Contact</p>
          <h1 className="font-bold text-4xl md:text-5xl text-white tracking-tight">
            Let's work together.
          </h1>
          <p className="mt-6 text-lg text-neutral-400 leading-relaxed font-light">
            Have a project in mind? Need AI training, evaluation, or prompt engineering expertise? 
            I'd love to hear about it.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Form */}
          <div className="lg:col-span-2">
            {status === 'sent' ? (
              <div className="p-12 border border-white/5 bg-neutral-950 text-center">
                <CheckCircle size={48} className="mx-auto text-white mb-6" strokeWidth={1.5} />
                <h2 className="text-xl font-medium text-white mb-3 tracking-wide">Message received.</h2>
                <p className="text-neutral-400 mb-8 font-light">
                  Thank you for reaching out. I'll review your message and respond within 48 hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-sm text-white hover:text-neutral-400 transition-colors underline underline-offset-4 font-light"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm text-neutral-400 mb-2 font-light">
                      Name <span className="text-neutral-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-neutral-950 border ${errors.name ? 'border-red-900' : 'border-white/5'} text-white text-sm font-light focus:border-white/20 focus:outline-none transition-colors`}
                      placeholder="Your name"
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-neutral-400 mb-2 font-light">
                      Email <span className="text-neutral-600">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-neutral-950 border ${errors.email ? 'border-red-900' : 'border-white/5'} text-white text-sm font-light focus:border-white/20 focus:outline-none transition-colors`}
                      placeholder="your@email.com"
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm text-neutral-400 mb-2 font-light">
                    Subject <span className="text-neutral-600">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-neutral-950 border ${errors.subject ? 'border-red-900' : 'border-white/5'} text-white text-sm font-light focus:border-white/20 focus:outline-none transition-colors`}
                  >
                    <option value="">Select a topic</option>
                    <option value="AI Training">AI Training & RLHF</option>
                    <option value="Evaluation">LLM Evaluation</option>
                    <option value="Safety">Safety & Red Teaming</option>
                    <option value="Prompt Engineering">Prompt Engineering</option>
                    <option value="Consulting">General Consulting</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.subject && <p className="mt-1 text-xs text-red-400">{errors.subject}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-neutral-400 mb-2 font-light">
                    Message <span className="text-neutral-600">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full px-4 py-3 bg-neutral-950 border ${errors.message ? 'border-red-900' : 'border-white/5'} text-white text-sm font-light focus:border-white/20 focus:outline-none transition-colors resize-none`}
                    placeholder="Tell me about your project, timeline, and what you're looking for..."
                  />
                  {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-black text-sm font-medium tracking-wide hover:bg-neutral-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'Sending...' : (
                    <>Send Message <Send size={16} /></>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div className="p-6 border border-white/5 bg-neutral-950">
              <h3 className="text-sm font-medium text-white mb-4">Response Time</h3>
              <p className="text-sm text-neutral-400 font-light">
                I typically respond within 24-48 hours. For urgent matters, please indicate the urgency in your subject line.
              </p>
            </div>

            <div className="p-6 border border-white/5 bg-neutral-950">
              <h3 className="text-sm font-medium text-white mb-4">Connect</h3>
              <div className="space-y-3">
                <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors font-light">
                  LinkedIn <ExternalLink size={12} />
                </a>
                <a href={profile.social.x} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors font-light">
                  X (Twitter) <ExternalLink size={12} />
                </a>
                <a href={profile.social.telegram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors font-light">
                  Telegram <ExternalLink size={12} />
                </a>
              </div>
            </div>

            <div className="p-6 border border-white/5 bg-neutral-950">
              <h3 className="text-sm font-medium text-white mb-4">What to Include</h3>
              <ul className="space-y-2 text-sm text-neutral-400 font-light">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1 h-1 bg-neutral-600 rounded-full flex-shrink-0" />
                  Brief project description
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1 h-1 bg-neutral-600 rounded-full flex-shrink-0" />
                  Timeline and scope
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1 h-1 bg-neutral-600 rounded-full flex-shrink-0" />
                  Budget range (if applicable)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1 h-1 bg-neutral-600 rounded-full flex-shrink-0" />
                  Specific requirements or constraints
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
