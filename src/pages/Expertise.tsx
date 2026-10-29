export default function Expertise() {
  const areas = [
    { title: 'RLHF & Preference Ranking', desc: 'Creating high-quality preference data for model alignment' },
    { title: 'SFT Data Creation', desc: 'Supervised fine-tuning data with diverse, high-quality examples' },
    { title: 'LLM Evaluation', desc: 'Multi-dimensional quality assessment across helpfulness, accuracy, and safety' },
    { title: 'Prompt Engineering', desc: 'Crafting optimized prompts for production AI systems' },
    { title: 'AI Safety & Red Teaming', desc: 'Identifying vulnerabilities and ensuring responsible AI behavior' },
    { title: 'Content Moderation', desc: 'Policy-compliant content review and classification' },
    { title: 'Hallucination Detection', desc: 'Systematic identification of fabricated or inaccurate information' },
    { title: 'Multi-Modal Evaluation', desc: 'Quality assessment across text, image, and audio outputs' },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold mb-12">Expertise</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {areas.map((area, i) => (
          <div key={i} className="p-6 border border-neutral-800 hover:border-neutral-600 transition-colors">
            <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
            <p className="text-neutral-400">{area.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
