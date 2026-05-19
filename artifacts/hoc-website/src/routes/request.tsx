import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/request')({
  component: RequestReview,
})

function RequestReview() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">This is not a contact form. We work with organisations ready to integrate inclusion into their systems — not those exploring ideas.</h1>
      <p className="text-lg mb-8">"Request received. We review every submission carefully. If your organisation aligns with our approach, you'll hear back within 24–48 hours."</p>
      {/* Add form here if needed */}
    </div>
  )
}