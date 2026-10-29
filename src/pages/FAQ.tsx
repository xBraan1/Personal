import { useState } from 'react';

const faqCategories = [
  {
    category: 'General',
    questions: [
      {
        q: 'What exactly do you do as an AI Trainer?',
        a: 'I create the high-quality data that teaches AI models to be helpful, accurate, and safe. This includes writing preference comparisons (choosing which model response is better and explaining why), crafting detailed critiques and revisions, and designing evaluation frameworks that measure model quality across multiple dimensions.',
      },
      {
        q: 'How is AI training different from data labeling?',
        a: 'Traditional data labeling involves simple classification tasks — tagging images, categorizing text, marking entities. AI training for LLMs requires deep understanding of language, reasoning, context, and nuance. It\'s closer to teaching than labeling: I need to understand what makes a response genuinely helpful, not just technically correct.',
      },
      {
        q: 'What models have you worked with?',
        a: 'I have extensive experience with the GPT family (OpenAI), Claude family (Anthropic), Gemini (Google), Llama (Meta), and Mistral models, among others. My work spans both proprietary and open-source models across various sizes and capabilities.',
      },
    ],
  },
  {
    category: 'Services',
    questions: [
      {
        q: 'What types of projects do you take on?',
        a: 'I specialize in AI training data creation, model evaluation, safety testing (red teaming), and prompt engineering. Projects range from short-term evaluation sprints to ongoing training partnerships. I work best when the work requires expertise and judgment, not just volume.',
      },
      {
        q: 'Do you work with startups or only large companies?',
        a: 'I work with organizations of all sizes — from AI startups building their first product to established companies refining their models. What matters is that the project requires genuine expertise and values quality over quantity.',
      },
      {
        q: 'How do you ensure quality in your work?',
        a: 'Quality is built into my process, not added as an afterthought. I use systematic approaches, clear rubrics, self-review protocols, and continuous calibration. I treat every annotation as if it will directly shape how millions of people experience AI — because it will.',
      },
      {
        q: 'What\'s your typical turnaround time?',
        a: 'It depends on the project scope and complexity. Evaluation projects typically take 1-4 weeks. Training data projects are ongoing partnerships. Prompt engineering work ranges from days to weeks depending on the number of use cases. I\'m transparent about timelines from the start.',
      },
    ],
  },
  {
    category: 'Technical',
    questions: [
      {
        q: 'What is RLHF and why does it matter?',
        a: 'Reinforcement Learning from Human Feedback (RLHF) is the process of teaching AI models what humans consider good responses by providing preference data. When I rank two model responses and explain why one is better, that data trains the model to produce better outputs. It\'s one of the key techniques that made modern AI assistants possible.',
      },
      {
        q: 'What is red teaming in the context of AI?',
        a: 'Red teaming means systematically trying to make an AI system fail — finding vulnerabilities, edge cases, and potential harms before real users encounter them. It\'s like security testing, but for AI behavior. I identify ways models might produce harmful, inaccurate, or misleading outputs so those issues can be fixed before deployment.',
      },
      {
        q: 'How do you evaluate AI model quality?',
        a: 'I use multi-dimensional evaluation frameworks that assess factual accuracy, reasoning quality, instruction following, safety compliance, and output consistency. Each dimension requires different testing approaches and rubrics. The key insight is that "accuracy" alone tells you almost nothing about whether an AI is actually good.',
      },
    ],
  },
  {
    category: 'Working Together',
    questions: [
      {
        q: 'How do we get started?',
        a: 'Reach out through the contact form with a brief description of your project or needs. I\'ll respond within 48 hours to discuss requirements, scope, and feasibility. If we\'re a good fit, I\'ll provide a clear proposal with deliverables, timeline, and pricing.',
      },
      {
        q: 'Do you sign NDAs?',
        a: 'Yes. I understand that AI work often involves proprietary models, unreleased products, and sensitive data. I\'m comfortable signing NDAs and maintaining strict confidentiality. Client privacy and data security are non-negotiable.',
      },
      {
        q: 'What languages do you work in?',
        a: 'I work fluently in English and Arabic, with the ability to evaluate and train models across both languages with deep cultural and linguistic understanding. For other languages, I can contribute to evaluation design and quality frameworks even if I\'m not annotating directly.',
      },
    ],
  },
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (key: string) => {
    setOpenItems(prev => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  return (
    <div className="py-24 lg:py-32 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <p className="text-sm tracking-[0.2em] uppercase text-[#a0a0a0] mb-4">FAQ</p>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold">
            Common questions, clear answers.
          </h1>
          <p className="mt-6 text-lg text-[#a0a0a0] leading-relaxed">
            Everything you need to know about working with me, my services, and the AI training field.
          </p>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-16">
          {faqCategories.map((section, i) => (
            <div key={i}>
              <h2 className="text-sm font-medium text-[#666] uppercase tracking-wider mb-6">
                {section.category}
              </h2>
              <div className="space-y-0">
                {section.questions.map((item, j) => {
                  const key = `${i}-${j}`;
                  const isOpen = openItems.has(key);
                  return (
                    <div key={j} className="border-b border-[#222]">
                      <button
                        onClick={() => toggleItem(key)}
                        className="w-full py-6 text-left flex items-start justify-between gap-4"
                        aria-expanded={isOpen}
                      >
                        <span className="text-base text-white font-medium">{item.q}</span>
                        <span className={`text-[#666] text-lg flex-shrink-0 mt-0.5 transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}>
                          +
                        </span>
                      </button>
                      {isOpen && (
                        <div className="pb-6 animate-fade-in">
                          <p className="text-sm text-[#a0a0a0] leading-relaxed pr-8">{item.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
