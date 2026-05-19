import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/case-study')({
  component: CaseStudy,
})

function CaseStudy() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Hands On Kidz</h1>
      <p className="text-lg mb-8">Building a Deaf-first learning system at scale.</p>
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>AI Reading Engine (word-level tokenization)</li>
            <li>SASL Animation System (Reader and Comprehension modes)</li>
            <li>Inclusive Interaction Design</li>
          </ul>
        </div>
      </div>
    </div>
  )
}