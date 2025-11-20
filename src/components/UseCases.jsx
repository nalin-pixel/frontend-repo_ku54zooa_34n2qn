import React from 'react'
import { Headset, LineChart, Scale, Cog, ShoppingCart } from 'lucide-react'

const cases = [
  { icon: Headset, title: 'Internal Knowledge Assistant', desc: 'Instant answers for IT/HR from internal wikis, policies, and tickets.' },
  { icon: LineChart, title: 'AI Copilot for Financial Modeling', desc: 'Interpret spreadsheets, generate reports, and draft budgets.' },
  { icon: Scale, title: 'Legal Document Drafting', desc: 'Summarize cases and suggest contract language with your corpus.' },
  { icon: Cog, title: 'Engineering Design Q&A', desc: 'Search manuals and specs to answer complex technical questions.' },
  { icon: ShoppingCart, title: 'Retail Operations Chatbot', desc: 'Query SKUs, inventory, and supply chain data in real time.' },
]

export default function UseCases() {
  return (
    <section className="py-24 bg-slate-950/95">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center">Use Cases for Enterprise LLMs</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div key={c.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-center gap-3 text-blue-300">
                <c.icon className="w-6 h-6" />
                <h3 className="text-white font-semibold">{c.title}</h3>
              </div>
              <p className="mt-3 text-blue-200/80 text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
