export default function Services() {
  const services = [
    { title: 'AI Training & RLHF', desc: 'High-quality preference data creation and model alignment training' },
    { title: 'LLM Evaluation', desc: 'Comprehensive quality assessment across multiple dimensions' },
    { title: 'Prompt Engineering', desc: 'Optimized prompt design for production AI systems' },
    { title: 'AI Safety & Red Teaming', desc: 'Vulnerability identification and responsible AI development' },
    { title: 'Content Moderation', desc: 'Policy-compliant content review and classification' },
    { title: 'Data Quality Assurance', desc: 'Rigorous quality control for training datasets' },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold mb-12">Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <div key={i} className="p-6 border border-neutral-800 hover:border-neutral-600 transition-colors">
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-neutral-400 text-sm">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
