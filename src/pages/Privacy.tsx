export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose prose-invert max-w-none text-neutral-400">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Information Collection</h2>
        <p>We collect minimal information necessary to operate this website and communicate with visitors.</p>
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Contact Information</h2>
        <p>When you use our contact form, we collect your name, email address, and message content.</p>
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Data Usage</h2>
        <p>We use collected information solely to respond to your inquiries and improve website functionality.</p>
      </div>
    </div>
  )
}
