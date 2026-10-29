export default function Experience() {
  const jobs = [
    {
      role: 'AI Trainer & Prompt Engineer',
      company: 'Scale AI',
      period: '2022 – Present',
      desc: 'Comprehensive AI model training and evaluation across multiple modalities',
    },
    {
      role: 'IT Support & Data Specialist',
      company: 'Self-Employed',
      period: '2019 – 2022',
      desc: 'Data management, technical support, and documentation services',
    },
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold mb-12">Experience</h1>
      <div className="space-y-8">
        {jobs.map((job, i) => (
          <div key={i} className="border-l-2 border-neutral-800 pl-6">
            <p className="text-sm text-neutral-500 mb-1">{job.period}</p>
            <h3 className="text-xl font-semibold mb-1">{job.role}</h3>
            <p className="text-neutral-400 mb-2">{job.company}</p>
            <p className="text-neutral-500 text-sm">{job.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
