export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      <div className="prose prose-invert max-w-none">
        <p className="text-lg text-neutral-300 mb-6">
          I'm Brian Kibet (xBraan1), an AI Trainer and LLM Evaluation Specialist with over 3 years of experience 
          in reinforcement learning from human feedback (RLHF), supervised fine-tuning (SFT), and model quality assessment.
        </p>
        <p className="text-neutral-400 mb-6">
          My work focuses on making AI systems more helpful, honest, and harmless through rigorous evaluation 
          and high-quality training data creation. I've worked with leading AI companies to improve language 
          models across text, image, and audio modalities.
        </p>
        <h2 className="text-2xl font-semibold mt-12 mb-4">Expertise</h2>
        <ul className="space-y-2 text-neutral-400">
          <li>• RLHF annotation and preference ranking</li>
          <li>• SFT data creation and quality assurance</li>
          <li>• Multi-modal evaluation (text, image, audio)</li>
          <li>• Prompt engineering and optimization</li>
          <li>• AI safety and content moderation</li>
          <li>• Hallucination detection and fact-checking</li>
        </ul>
      </div>
    </div>
  )
}
