import { Breadcrumbs, SEO } from '../components/Layout';
import { expertiseAreas } from '../data/content';
import { useState } from 'react';

const categories = [...new Set(expertiseAreas.map(a => a.category))];

export default function Expertise() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = expertiseAreas.filter(area => {
    const matchesCategory = !activeCategory || area.category === activeCategory;
    const matchesSearch = !searchQuery || 
      area.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      area.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-28 lg:py-36 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SEO title="Expertise — Brian Kibet" description="Core expertise areas in AI training, LLM evaluation, and model quality." />
        <Breadcrumbs items={[{ label: 'Expertise' }]} />

        {/* Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-4">Expertise</p>
          <h1 className="font-bold text-4xl md:text-5xl text-white tracking-tight">
            Deep specialization across the AI training landscape.
          </h1>
          <p className="mt-6 text-lg text-neutral-400 leading-relaxed font-light">
            My expertise spans the full lifecycle of AI model development — from data collection 
            and annotation through evaluation, safety testing, and production optimization.
          </p>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <input
            type="text"
            placeholder="Search expertise areas..."
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
                className={`px-4 py-2 text-xs font-light tracking-wider border transition-colors ${
                  activeCategory === cat ? 'border-white text-white' : 'border-white/10 text-neutral-400 hover:border-white/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {filtered.map((area) => (
            <div
              key={area.id}
              className="p-7 bg-black hover:bg-neutral-950 transition-colors group"
            >
              <span className="text-[10px] font-medium text-neutral-500 uppercase tracking-[0.2em]">{area.category}</span>
              <h3 className="font-medium text-white mt-3 mb-3 tracking-wide group-hover:text-neutral-300 transition-colors">
                {area.title}
              </h3>
              <p className="text-sm text-neutral-500 leading-relaxed font-light mb-4">
                {area.description}
              </p>
              <p className="text-xs text-neutral-600 leading-relaxed font-light italic">
                {area.relevance}
              </p>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-neutral-500 font-light">No expertise areas match your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}
