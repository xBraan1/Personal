export default function Skills() {
  const skills = {
    'AI & ML': ['RLHF', 'SFT', 'LLM Evaluation', 'Prompt Engineering', 'AI Safety'],
    'Platforms': ['Scale AI', 'Label Studio', 'Appen'],
    'Tools': ['Python', 'Microsoft Excel', 'Google Workspace', 'Slack', 'Zoom'],
    'Languages': ['English', 'Swahili'],
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold mb-12">Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-xl font-semibold mb-4">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill, i) => (
                <span key={i} className="px-3 py-1 bg-neutral-900 border border-neutral-800 text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
