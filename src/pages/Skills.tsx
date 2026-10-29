const skillCategories = [
  {
    title: 'AI Training & Evaluation',
    skills: [
      { name: 'RLHF Annotation', level: 'Expert' },
      { name: 'Response Ranking', level: 'Expert' },
      { name: 'Critique Writing', level: 'Expert' },
      { name: 'Benchmark Design', level: 'Advanced' },
      { name: 'Quality Assessment', level: 'Expert' },
      { name: 'Red Teaming', level: 'Advanced' },
    ],
  },
  {
    title: 'Prompt Engineering',
    skills: [
      { name: 'System Prompts', level: 'Expert' },
      { name: 'Chain-of-Thought', level: 'Expert' },
      { name: 'Few-Shot Design', level: 'Expert' },
      { name: 'Output Formatting', level: 'Expert' },
      { name: 'Template Systems', level: 'Advanced' },
      { name: 'Prompt Testing', level: 'Advanced' },
    ],
  },
  {
    title: 'Model Knowledge',
    skills: [
      { name: 'GPT Family', level: 'Expert' },
      { name: 'Claude Family', level: 'Expert' },
      { name: 'Gemini', level: 'Advanced' },
      { name: 'Llama / Open Source', level: 'Advanced' },
      { name: 'Mistral', level: 'Intermediate' },
      { name: 'Model Architecture', level: 'Intermediate' },
    ],
  },
  {
    title: 'Languages & Domains',
    skills: [
      { name: 'English', level: 'Native' },
      { name: 'Arabic', level: 'Native' },
      { name: 'Technical Writing', level: 'Expert' },
      { name: 'Creative Writing', level: 'Advanced' },
      { name: 'Code (Python)', level: 'Advanced' },
      { name: 'Code (JavaScript)', level: 'Advanced' },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Annotation Platforms', level: 'Expert' },
      { name: 'Evaluation Frameworks', level: 'Advanced' },
      { name: 'Data Analysis', level: 'Advanced' },
      { name: 'Version Control (Git)', level: 'Advanced' },
      { name: 'Documentation', level: 'Expert' },
      { name: 'Project Management', level: 'Advanced' },
    ],
  },
  {
    title: 'Soft Skills',
    skills: [
      { name: 'Analytical Thinking', level: 'Expert' },
      { name: 'Attention to Detail', level: 'Expert' },
      { name: 'Cross-Cultural Communication', level: 'Expert' },
      { name: 'Self-Directed Learning', level: 'Expert' },
      { name: 'Quality Ownership', level: 'Expert' },
      { name: 'Deadline Management', level: 'Advanced' },
    ],
  },
];

export default function Skills() {
  return (
    <div className="py-24 lg:py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <p className="text-sm tracking-[0.2em] uppercase text-[#a0a0a0] mb-4">Skills & Tools</p>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold">
            Capabilities, transparently presented.
          </h1>
          <p className="mt-6 text-lg text-[#a0a0a0] leading-relaxed">
            A comprehensive overview of my technical skills, domain knowledge, and the tools 
            I use to deliver high-quality AI training and evaluation work.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, i) => (
            <div key={i} className="p-8 border border-[#222] bg-[#080808]">
              <h3 className="text-lg font-medium text-white mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, j) => (
                  <div key={j} className="flex items-center justify-between">
                    <span className="text-sm text-[#a0a0a0]">{skill.name}</span>
                    <span className={`text-xs px-2 py-0.5 ${
                      skill.level === 'Expert' || skill.level === 'Native'
                        ? 'text-white bg-[#1a1a1a] border border-[#333]'
                        : skill.level === 'Advanced'
                        ? 'text-[#a0a0a0] bg-[#111] border border-[#222]'
                        : 'text-[#666] bg-[#0a0a0a] border border-[#1a1a1a]'
                    }`}>
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Note */}
        <div className="mt-16 p-8 border border-[#222] bg-[#050505]">
          <h3 className="text-lg font-medium text-white mb-4">Continuous Learning</h3>
          <p className="text-sm text-[#a0a0a0] leading-relaxed">
            The AI landscape evolves rapidly. I actively track developments in model architectures, 
            training methodologies, evaluation frameworks, and safety research. My skill set is 
            continuously updated through hands-on work with new models, engagement with research 
            literature, and participation in the AI training community.
          </p>
        </div>
      </div>
    </div>
  );
}
