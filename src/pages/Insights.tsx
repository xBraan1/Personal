import { useState } from 'react';
import { Clock, Tag } from 'lucide-react';

const articles = [
  {
    title: 'The Art of Writing Effective RLHF Preferences',
    excerpt: 'What separates useful preference data from noise? A deep dive into the principles that make RLHF annotation actually improve model behavior.',
    date: '2024',
    readTime: '8 min read',
    category: 'AI Training',
    content: `The quality of RLHF training data directly determines model alignment. But what makes preference data "good"?

**Consistency is foundational.** If two annotators would disagree on which response is better, the data introduces noise rather than signal. Clear rubrics and calibration sessions are essential.

**Specificity matters.** Vague preferences ("this is better") provide less training signal than specific ones ("Response A correctly identifies the logical fallacy while Response B misses it entirely").

**Edge cases are where alignment is won or lost.** Easy examples teach the model little. The most valuable training data comes from difficult comparisons where both responses have merits and flaws.

**Context awareness separates expert annotators.** Understanding what the user actually needs — not just what they literally asked — produces preferences that create genuinely helpful models.`,
  },
  {
    title: 'Red Teaming LLMs: A Structured Approach',
    excerpt: 'Moving beyond random adversarial inputs to systematic vulnerability discovery. Framework, methodology, and lessons from production red team operations.',
    date: '2024',
    readTime: '12 min read',
    category: 'Safety',
    content: `Effective red teaming requires structure, not just creativity. Random adversarial inputs find some vulnerabilities, but systematic approaches find more — and more critical ones.

**Categorize your attack vectors.** Jailbreaks, misinformation, harmful content, privacy violations, capability overclaiming — each requires different testing strategies.

**Build on known patterns.** The research community has identified common vulnerability classes. Start there, then extend with domain-specific variants.

**Document everything.** A vulnerability found but not documented is a vulnerability unfound. Clear reproduction steps, severity assessments, and remediation suggestions make red team reports actionable.

**Think like an adversary, defend like an engineer.** The goal isn't just to break things — it's to understand how and why things break, so they can be made more robust.`,
  },
  {
    title: 'Prompt Engineering Beyond Tricks: Building Reliable Systems',
    excerpt: 'Why most prompt engineering advice fails in production, and what actually works when you need consistent, reliable AI outputs at scale.',
    date: '2024',
    readTime: '10 min read',
    category: 'Prompt Engineering',
    content: `The internet is full of "prompt hacks" that work for demos but fail in production. Building reliable prompt systems requires a different mindset.

**Separate structure from content.** System prompts should define behavior, constraints, and format. User prompts should provide specific content. Mixing them creates fragile systems.

**Test systematically, not anecdotally.** A prompt that works for 10 examples might fail on the 11th. Production prompts need test suites with statistical confidence measures.

**Version your prompts like code.** Prompt changes should be tracked, reviewed, and tested before deployment. "It seemed to work better" is not a deployment criterion.

**Design for failure.** Every prompt should have clear fallback behavior when the model produces unexpected output. Graceful degradation is a feature, not an afterthought.`,
  },
  {
    title: 'Evaluating AI: Beyond Accuracy Metrics',
    excerpt: 'Why measuring AI quality requires multiple dimensions, and how to design evaluation frameworks that capture what actually matters to users.',
    date: '2024',
    readTime: '7 min read',
    category: 'Evaluation',
    content: `Accuracy alone tells you almost nothing about whether an AI system is good. A model that's 95% accurate but fails on the 5% that matters most is worse than a 90% accurate model that fails gracefully.

**Multi-dimensional evaluation is essential.** Factual accuracy, reasoning quality, helpfulness, safety, and consistency are all independent dimensions that must be measured separately.

**User-centered metrics beat proxy metrics.** "Did the user get what they needed?" is a better question than "Did the model produce the expected output?" — even though the latter is easier to measure.

**Context changes everything.** An evaluation framework designed for customer support won't work for creative writing. Domain-specific rubrics are not optional.

**Evaluation is iterative.** Your first evaluation framework will have blind spots. Build feedback loops that identify and address them.`,
  },
  {
    title: 'Cross-Cultural AI: What Most Trainers Miss',
    excerpt: 'Language models trained primarily on English data carry assumptions that fail across cultures. Understanding and addressing this gap is critical for global AI.',
    date: '2024',
    readTime: '9 min read',
    category: 'Multilingual AI',
    content: `Most AI training happens in English, with English-speaking annotators, evaluating English cultural norms. This creates models that work well for a narrow slice of humanity.

**Translation is not localization.** A response that's appropriate in English may be culturally inappropriate when translated — or may miss culturally-specific context entirely.

**Idioms carry worldviews.** "Think outside the box" assumes a particular cultural relationship with rules and creativity. Multilingual AI needs to understand these differences.

**Safety standards vary.** What's considered harmful in one culture may be acceptable in another, and vice versa. Universal safety principles exist, but their application requires cultural sensitivity.

**Bilingual annotators are invaluable.** People who think in multiple languages bring unique perspective to AI training — they understand not just what words mean, but how meaning shifts across contexts.`,
  },
];

export default function Insights() {
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);

  return (
    <div className="py-24 lg:py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <p className="text-sm tracking-[0.2em] uppercase text-[#a0a0a0] mb-4">Insights</p>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold">
            Thoughts on AI, training, and quality.
          </h1>
          <p className="mt-6 text-lg text-[#a0a0a0] leading-relaxed">
            Reflections and analysis from the front lines of AI training and evaluation. 
            Practical insights grounded in real-world experience.
          </p>
        </div>

        {/* Articles */}
        <div className="space-y-6">
          {articles.map((article, i) => (
            <article
              key={i}
              className="border border-[#222] bg-[#080808] hover:border-[#333] transition-all duration-300"
            >
              <button
                onClick={() => setSelectedArticle(selectedArticle === i ? null : i)}
                className="w-full p-8 text-left"
                aria-expanded={selectedArticle === i}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="flex items-center gap-1.5 text-xs text-[#666]">
                        <Tag size={12} />
                        {article.category}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-[#666]">
                        <Clock size={12} />
                        {article.readTime}
                      </span>
                      <span className="text-xs text-[#666]">{article.date}</span>
                    </div>
                    <h2 className="text-xl font-medium text-white">{article.title}</h2>
                    <p className="mt-3 text-sm text-[#a0a0a0] leading-relaxed">{article.excerpt}</p>
                  </div>
                  <span className={`text-[#666] text-sm mt-1 transition-transform duration-200 ${selectedArticle === i ? 'rotate-180' : ''}`}>
                    ↓
                  </span>
                </div>
              </button>

              {selectedArticle === i && (
                <div className="px-8 pb-8 border-t border-[#222] pt-6 animate-fade-in">
                  <div className="prose prose-invert max-w-none">
                    {article.content.split('\n\n').map((paragraph, j) => (
                      <p key={j} className="text-sm text-[#a0a0a0] leading-relaxed mb-4">
                        {paragraph.split('**').map((part, k) => 
                          k % 2 === 1 ? <strong key={k} className="text-white font-medium">{part}</strong> : part
                        )}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
