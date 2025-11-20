import React from 'react'

const tiers = [
  { name: 'Starter', price: '$49K/yr', desc: 'Single team pilot. One LLM instance, basic vector DB, email support.' },
  { name: 'Professional', price: '$99K/yr', desc: 'Multi‑team deployment, higher GPU quotas, priority support, onboarding.' },
  { name: 'Enterprise', price: 'Contact us', desc: 'Custom GPU clusters, on‑site install, dedicated support, bespoke features.' },
]

export default function Pricing() {
  return (
    <section className="py-24 bg-slate-950/95">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center">Pricing</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-white font-semibold text-lg">{t.name}</h3>
              <div className="mt-2 text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-orange-300">{t.price}</div>
              <p className="mt-3 text-blue-200/80 text-sm leading-relaxed">{t.desc}</p>
              <a href="#contact" className="mt-6 inline-block px-4 py-2 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-400">Contact Sales</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
