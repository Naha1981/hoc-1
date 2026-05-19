import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/services')({
  component: Services,
})

function Services() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">We build inclusion into systems. Not around them.</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Diagnose</h3>
          <p>Audit systems</p>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Design</h3>
          <p>Architect SASL integration</p>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Integrate</h3>
          <p>Implement workflows</p>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Scale</h3>
          <p>Measure and expand</p>
        </div>
      </div>
    </div>
  )
}