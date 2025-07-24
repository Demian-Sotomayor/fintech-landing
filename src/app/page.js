import { Benefits, CTA, Hero, ProductShowcase } from "@/components";

export const metadata = {
  title: 'Nipto - Fintech del Futuro',
  description: 'El futuro de las finanzas digitales está aquí'
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Benefits />
      <ProductShowcase />
      <CTA />
    </>
  )
}
