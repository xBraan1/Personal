import { Breadcrumbs, SEO } from '../components/Layout';
import { faqItems } from '../data/content';
import { useState } from 'react';

const categories = [...new Set(faqItems.map(f => f.category))];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleItem = (key: string) => {
    setOpenItems(prev => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const filtered = faqItems.filter(item => {
    const matchesCategory = !activeCategory || item.category === activeCategory;
    const matchesSearch = !searchQuery ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-28 lg:py-36 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <SEO title="FAQ — Brian Kibet" description="Frequently asked questions about AI training and evaluation services." />
        <Breadcrumbs items={[{ label: 'FAQ' }]} />

        {/* Header */}
        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-4">FAQ</p>
          <h1 className="font-bold text-4xl md:text-5xl text-white tracking-tight">
            Common questions, clear answers.
          </h1>
          <p className="mt-6 text-lg text-neutral-400 leading-relaxed font-light">
            Everything you need to know about working with me, my services, and the AI training field.
          </p>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <input
            type="text"
            placeholder="Search questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 px-4 py-3 bg-neutral-950 border border-white/5 text-white text-sm font-light placeholder:text-neutral-600 focus:border-white/20 focus:outline-none transition-colors"
          />
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 text-xs font-light tracking-wider border transition-colors ${
                !activeCategory ? 'border-white text-white' : 'border-white/10 text-neutral-400 hover:border-white/30'
              }`}
            >
              All
            </button>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
                className={`px-4 py-2 text-xs font-light tracking-wider border transition-colors capitalize ${
                  activeCategory === cat ? 'border-white text-white' : 'border-white/10 text-neutral-400 hover:border-white/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-0">
          {filtered.map((item) => {
            const isOpen = openItems.has(item.id);
            return (
              <div key={item.id} className="border-b border-white/5">
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full py-6 text-left flex items-start justify-between gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="text-base text-white font-light">{item.question}</span>
                  <span className={`text-neutral-600 text-lg flex-shrink-0 mt-0.5 transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="pb-6 animate-fade-in">
                    <p className="text-sm text-neutral-400 leading-relaxed pr-8 font-light">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-neutral-500 font-light">No questions match your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}
