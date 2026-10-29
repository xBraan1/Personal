import { Brain, Target, Shield, Zap, MessageSquare, Code, BarChart3, Globe } from 'lucide-react';

const expertiseAreas = [
  {
    icon: Brain,
    title: 'Reinforcement Learning from Human Feedback (RLHF)',
    description: 'Creating high-quality preference datasets that teach models to generate helpful, honest, and harmless responses. Expert in pairwise comparison, response ranking, and detailed critique annotation.',
    tags: ['Preference Data', 'Response Ranking', 'Critique Writing', 'Constitutional AI'],
  },
  {
    icon: Target,
    title: 'LLM Evaluation & Benchmarking',
    description: 'Designing and executing comprehensive evaluation frameworks across factual accuracy, reasoning quality, instruction following, safety compliance, and output consistency.',
    tags: ['Benchmarking', 'Red Teaming', 'Quality Metrics', 'Error Analysis'],
  },
  {
    icon: Shield,
    title: 'AI Safety & Alignment',
    description: 'Identifying model vulnerabilities, testing adversarial inputs, and ensuring AI systems behave responsibly across edge cases, cultural contexts, and sensitive domains.',
    tags: ['Red Teaming', 'Jailbreak Testing', 'Bias Detection', 'Content Safety'],
  },
  {
    icon: Zap,
    title: 'Prompt Engineering & Optimization',
    description: 'Crafting production-grade prompts, system instructions, and chain-of-thought frameworks that maximize model capability while maintaining reliability and consistency.',
    tags: ['System Prompts', 'Chain-of-Thought', 'Few-Shot Design', 'Template Engineering'],
  },
  {
    icon: MessageSquare,
    title: 'Conversational AI Design',
    description: 'Designing dialogue flows, persona consistency frameworks, and multi-turn interaction patterns that create natural, helpful, and contextually aware conversations.',
    tags: ['Dialogue Design', 'Persona Systems', 'Multi-Turn', 'Context Management'],
  },
  {
    icon: Code,
    title: 'Code Generation & Review',
    description: 'Training and evaluating models on code generation tasks across multiple programming languages, with focus on correctness, security, documentation, and best practices.',
    tags: ['Python', 'JavaScript', 'Code Review', 'Debugging'],
  },
  {
    icon: BarChart3,
    title: 'Data Quality & Annotation',
    description: 'Establishing annotation guidelines, quality control frameworks, and inter-annotator agreement metrics for large-scale training data production.',
    tags: ['Annotation Guidelines', 'QA Frameworks', 'IAA Metrics', 'Data Curation'],
  },
  {
    icon: Globe,
    title: 'Multilingual AI',
    description: 'Evaluating and training models across languages with deep understanding of cultural context, idiomatic expression, and linguistic nuance in both English and Arabic.',
    tags: ['English', 'Arabic', 'Cross-Lingual', 'Cultural Context'],
  },
];

export default function Expertise() {
  return (
    <div className="py-24 lg:py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <p className="text-sm tracking-[0.2em] uppercase text-[#a0a0a0] mb-4">Expertise</p>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold">
            Deep specialization across the AI training landscape.
          </h1>
          <p className="mt-6 text-lg text-[#a0a0a0] leading-relaxed">
            My expertise spans the full lifecycle of AI model development — from data collection 
            and annotation through evaluation, safety testing, and production optimization.
          </p>
        </div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {expertiseAreas.map((area, i) => (
            <div
              key={i}
              className="group p-8 border border-[#222] bg-[#080808] hover:border-[#333] transition-all duration-300"
            >
              <area.icon size={24} className="text-[#666] group-hover:text-white transition-colors" />
              <h3 className="mt-6 text-lg font-medium text-white">{area.title}</h3>
              <p className="mt-3 text-sm text-[#a0a0a0] leading-relaxed">{area.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {area.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="px-3 py-1 text-xs text-[#a0a0a0] border border-[#222] bg-[#0a0a0a]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
