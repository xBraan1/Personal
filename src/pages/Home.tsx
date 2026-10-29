import { Link } from 'react-router-dom'
import { ArrowRight, Brain, Target, Shield, Zap } from 'lucide-react'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            Brian Kibet
          </h1>
          <p className="signature text-4xl sm:text-5xl text-neutral-300 mb-8">
            xBraan1
          </p>
          <p className="text-xl sm:text-2xl text-neutral-400 font-light mb-12 max-w-3xl mx-auto">
            AI Trainer & LLM Evaluation Specialist
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black font-medium hover:bg-neutral-200 transition-colors"
            >
              View Services
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 border border-neutral-700 text-white font-medium hover:border-neutral-500 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold mb-2">3+</p>
              <p className="text-sm text-neutral-400">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold mb-2">10K+</p>
              <p className="text-sm text-neutral-400">Data Points</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold mb-2">95%+</p>
              <p className="text-sm text-neutral-400">Quality Score</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold mb-2">3</p>
              <p className="text-sm text-neutral-400">Modalities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Core Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Brain, title: 'AI Training', desc: 'RLHF & SFT data creation' },
              { icon: Target, title: 'LLM Evaluation', desc: 'Quality assessment & benchmarking' },
              { icon: Shield, title: 'AI Safety', desc: 'Red teaming & content moderation' },
              { icon: Zap, title: 'Prompt Engineering', desc: 'Optimized prompt design' },
            ].map((service, i) => (
              <div key={i} className="p-6 border border-neutral-800 hover:border-neutral-600 transition-colors">
                <service.icon size={32} className="mb-4 text-neutral-400" />
                <h3 className="text-lg font-medium mb-2">{service.title}</h3>
                <p className="text-sm text-neutral-400">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-white hover:text-neutral-300 transition-colors"
            >
              View all services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
