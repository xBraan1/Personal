import { Breadcrumbs, SEO } from '../components/Layout';
import { insights } from '../data/content';
import { useState } from 'react';
import { Clock, Tag } from 'lucide-react';

export default function Insights() {
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);

  return (
    <div className="py-28 lg:py-36 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SEO title="Insights — Brian Kibet" description="Thoughts on AI training, evaluation, and quality." />
        <Breadcrumbs items={[{ label: 'Insights' }]} />

        {/* Header */}
        <div className="max-w-3xl mb-20">
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-4">Insights</p>
          <h1 className="font-bold text-4xl md:text-5xl text-white tracking-tight">
            Thoughts on AI, training, and quality.
          </h1>
          <p className="mt-6 text-lg text-neutral-400 leading-relaxed font-light">
            Reflections and analysis from the front lines of AI training and evaluation. 
            Practical insights grounded in real-world experience.
          </p>
        </div>

        {/* Articles */}
        <div className="space-y-6">
          {insights.map((article) => (
            <article
              key={article.id}
              className="border border-white/5 bg-neutral-950 hover:border-white/10 transition-all"
            >
              <button
                onClick={() => setSelectedArticle(selectedArticle === article.id ? null : article.id)}
                className="w-full p-8 text-left"
                aria-expanded={selectedArticle === article.id}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3 flex-wrap">
                      <span className="flex items-center gap-1.5 text-xs text-neutral-500 font-light">
                        <Tag size={12} />
                        {article.tags[0]}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-neutral-500 font-light">
                        <Clock size={12} />
                        {article.readTime}
                      </span>
                      <span className="text-xs text-neutral-600 font-light">{article.date}</span>
                      {article.draft && (
                        <span className="px-2 py-0.5 border border-white/10 text-neutral-500 text-[10px] uppercase tracking-wider">Draft</span>
                      )}
                    </div>
                    <h2 className="text-xl font-medium text-white tracking-wide">{article.title}</h2>
                    <p className="mt-3 text-sm text-neutral-500 leading-relaxed font-light">{article.excerpt}</p>
                  </div>
                  <span className={`text-neutral-600 text-sm mt-1 transition-transform duration-200 flex-shrink-0 ${selectedArticle === article.id ? 'rotate-180' : ''}`}>
                    ↓
                  </span>
                </div>
              </button>

              {selectedArticle === article.id && (
                <div className="px-8 pb-8 border-t border-white/5 pt-6 animate-fade-in">
                  <div className="prose max-w-none">
                    {article.content.split('\n\n').map((paragraph, j) => {
                      if (paragraph.startsWith('## ')) {
                        return <h2 key={j} className="text-xl font-bold text-white mt-6 mb-3">{paragraph.replace('## ', '')}</h2>;
                      }
                      if (paragraph.startsWith('### ')) {
                        return <h3 key={j} className="text-lg font-medium text-white mt-5 mb-2">{paragraph.replace('### ', '')}</h3>;
                      }
                      if (paragraph.startsWith('- ')) {
                        const items = paragraph.split('\n');
                        return (
                          <ul key={j} className="space-y-2 mb-4">
                            {items.map((item, k) => (
                              <li key={k} className="flex items-start gap-2 text-sm text-neutral-400 font-light">
                                <span className="mt-2 w-1 h-1 bg-neutral-600 rounded-full flex-shrink-0" />
                                <span>{item.replace('- ', '').split('**').map((part, m) => 
                                  m % 2 === 1 ? <strong key={m} className="text-white font-medium">{part}</strong> : part
                                )}</span>
                              </li>
                            ))}
                          </ul>
                        );
                      }
                      if (/^\d+\./.test(paragraph)) {
                        const items = paragraph.split('\n');
                        return (
                          <ol key={j} className="space-y-2 mb-4 list-decimal list-inside">
                            {items.map((item, k) => (
                              <li key={k} className="text-sm text-neutral-400 font-light">
                                {item.replace(/^\d+\.\s*/, '').split('**').map((part, m) => 
                                  m % 2 === 1 ? <strong key={m} className="text-white font-medium">{part}</strong> : part
                                )}
                              </li>
                            ))}
                          </ol>
                        );
                      }
                      return (
                        <p key={j} className="text-sm text-neutral-400 leading-relaxed mb-4 font-light">
                          {paragraph.split('**').map((part, k) => 
                            k % 2 === 1 ? <strong key={k} className="text-white font-medium">{part}</strong> : part
                          )}
                        </p>
                      );
                    })}
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
