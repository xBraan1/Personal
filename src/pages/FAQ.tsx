export default function FAQ() {
  const faqs = [
    { q: 'What is RLHF?', a: 'Reinforcement Learning from Human Feedback is a technique where human evaluators provide preference signals to help align language models with human values.' },
    { q: 'How do you ensure quality?', a: 'I maintain quality through systematic self-review, regular calibration exercises, and adherence to established evaluation rubrics.' },
    { q: 'What modalities do you work with?', a: 'I evaluate model outputs across text, image, and audio modalities.' },
    { q: 'Are you available for remote work?', a: 'Yes, I have 3+ years of experience working remotely and am available for contract opportunities.' },
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold mb-12">FAQ</h1>
      <div className="space-y-6">
        {faqs.map((faq, i) => (
          <div key={i} className="border-b border-neutral-800 pb-6">
            <h3 className="text-lg font-semibold mb-2">{faq.q}</h3>
            <p className="text-neutral-400">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
