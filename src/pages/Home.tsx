import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Target, Zap, Shield } from 'lucide-react';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(30,30,30,0.3)_0%,_transparent_70%)]" />
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="animate-fade-in-up opacity-0">
            <p className="text-sm tracking-[0.3em] uppercase text-[#a0a0a0] mb-6">
              AI Trainer · LLM Evaluation · Prompt Engineering
            </p>
          </div>
          <h1 className="animate-fade-in-up opacity-0 stagger-1 font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-tight">
            Precision in every
            <br />
            <span className="text-gradient">interaction.</span>
          </h1>
          <p className="animate-fade-in-up opacity-0 stagger-2 mt-8 text-lg md:text-xl text-[#a0a0a0] max-w-2xl mx-auto leading-relaxed">
            I train, evaluate, and refine large language models to deliver accurate, 
            safe, and aligned AI experiences at scale.
          </p>
          <div className="animate-fade-in-up opacity-0 stagger-3 mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-black text-sm font-medium hover:bg-gray-200 transition-colors duration-200"
            >
              Explore Services
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-[#333] text-white text-sm font-medium hover:border-[#555] hover:bg-[#0a0a0a] transition-colors duration-200"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-[#222] bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '500K+', label: 'Training Interactions' },
              { value: '99.2%', label: 'Evaluation Accuracy' },
              { value: '15+', label: 'Model Families' },
              { value: '3+', label: 'Years Experience' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl md:text-3xl font-semibold text-white">{stat.value}</p>
                <p className="mt-1 text-xs md:text-sm text-[#a0a0a0]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-24 lg:py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16">
            <p className="text-sm tracking-[0.2em] uppercase text-[#a0a0a0] mb-4">Core Services</p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold">
              What I deliver
            </h2>
            <p className="mt-4 text-[#a0a0a0] leading-relaxed">
              Specialized AI training and evaluation services designed for precision, safety, and measurable outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Brain,
                title: 'AI Training & RLHF',
                description: 'High-quality preference data, response ranking, and reinforcement learning from human feedback to align models with human intent.',
                link: '/services',
              },
              {
                icon: Target,
                title: 'LLM Evaluation',
                description: 'Systematic benchmarking, red-teaming, and quality assessment across multiple dimensions of model performance.',
                link: '/services',
              },
              {
                icon: Zap,
                title: 'Prompt Engineering',
                description: 'Crafting optimized prompts, system instructions, and chain-of-thought frameworks for production AI systems.',
                link: '/services',
              },
              {
                icon: Shield,
                title: 'Safety & Alignment',
                description: 'Identifying vulnerabilities, testing edge cases, and ensuring models behave responsibly across diverse scenarios.',
                link: '/services',
              },
            ].map((service, i) => (
              <Link
                key={i}
                to={service.link}
                className="group p-8 border border-[#222] bg-[#080808] hover:border-[#333] hover:bg-[#0a0a0a] transition-all duration-300"
              >
                <service.icon size={24} className="text-[#a0a0a0] group-hover:text-white transition-colors" />
                <h3 className="mt-6 text-lg font-medium text-white">{service.title}</h3>
                <p className="mt-3 text-sm text-[#a0a0a0] leading-relaxed">{service.description}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm text-[#666] group-hover:text-white transition-colors">
                  Learn more <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-8 border-t border-[#222]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm tracking-[0.2em] uppercase text-[#a0a0a0] mb-4">Philosophy</p>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold">
                Quality is not negotiable.
              </h2>
              <div className="mt-8 space-y-6">
                <p className="text-[#a0a0a0] leading-relaxed">
                  Every training interaction shapes how millions of people experience AI. I approach each task with the understanding that precision at the individual level compounds into trust at scale.
                </p>
                <p className="text-[#a0a0a0] leading-relaxed">
                  My methodology combines rigorous evaluation frameworks with nuanced understanding of language, context, and intent — ensuring that models don't just produce text, but produce <em className="text-white not-italic font-medium">correct</em> text.
                </p>
              </div>
              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-2 text-sm text-white hover:text-[#a0a0a0] transition-colors"
              >
                More about my approach <ArrowRight size={14} />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square bg-[#080808] border border-[#222] flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="font-serif text-6xl md:text-7xl text-white/10">x</p>
                  <p className="font-serif text-5xl md:text-6xl text-white font-semibold -mt-4">Braan1</p>
                  <div className="mt-6 w-16 h-px bg-[#333] mx-auto" />
                  <p className="mt-6 text-xs tracking-[0.3em] uppercase text-[#666]">Precision · Safety · Scale</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-8 border-t border-[#222] bg-[#050505]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold">
            Ready to elevate your AI?
          </h2>
          <p className="mt-6 text-[#a0a0a0] leading-relaxed">
            Whether you need model evaluation, training data, or prompt optimization — 
            let's discuss how precision AI work can accelerate your product.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-2 px-8 py-3.5 bg-white text-black text-sm font-medium hover:bg-gray-200 transition-colors duration-200"
          >
            Start a Conversation
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
