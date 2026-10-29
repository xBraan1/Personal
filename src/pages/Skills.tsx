import { Breadcrumbs, SEO } from '../components/Layout';
import { skills } from '../data/content';

export default function Skills() {
  return (
    <div className="py-28 lg:py-36 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SEO title="Skills & Tools — Brian Kibet" description="Technical skills, tools, and platforms used in AI training work." />
        <Breadcrumbs items={[{ label: 'Skills' }]} />

        {/* Header */}
        <div className="max-w-3xl mb-20">
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-4">Skills & Tools</p>
          <h1 className="font-bold text-4xl md:text-5xl text-white tracking-tight">
            Capabilities, transparently presented.
          </h1>
          <p className="mt-6 text-lg text-neutral-400 leading-relaxed font-light">
            A comprehensive overview of the tools, platforms, and technical skills 
            I use to deliver high-quality AI training and evaluation work.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="p-8 bg-black">
              <h3 className="text-lg font-medium text-white mb-6 tracking-wide">{category}</h3>
              <div className="space-y-4">
                {items.map((skill) => (
                  <div key={skill.name}>
                    <p className="text-sm text-white font-light">{skill.name}</p>
                    <p className="text-xs text-neutral-500 mt-1 font-light leading-relaxed">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Note */}
        <div className="mt-16 p-8 border border-white/5 bg-neutral-950">
          <h3 className="text-lg font-medium text-white mb-4 tracking-wide">Continuous Learning</h3>
          <p className="text-sm text-neutral-400 leading-relaxed font-light">
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
