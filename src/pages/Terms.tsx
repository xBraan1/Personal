export default function Terms() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      <div className="prose prose-invert max-w-none text-neutral-400">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Acceptance of Terms</h2>
        <p>By accessing and using this website, you accept and agree to be bound by these Terms of Service.</p>
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Use of Website</h2>
        <p>This website is provided for informational purposes and as a means to contact xBraan1 for professional services.</p>
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Intellectual Property</h2>
        <p>All content on this website is the property of xBraan1 and is protected by applicable intellectual property laws.</p>
      </div>
    </div>
  )
}
