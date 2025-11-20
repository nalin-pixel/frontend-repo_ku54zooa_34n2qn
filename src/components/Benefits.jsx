import React from 'react'
import { ShieldCheck, BookCheck, BadgeCheck, Zap, Lock } from 'lucide-react'

const benefits = [
  {
    icon: Lock,
    title: 'Data Privacy – Full Control',
    desc: 'Self‑hosted so sensitive data never leaves your network. Own your data and model.',
  },
  {
    icon: BookCheck,
    title: 'Compliance & Governance',
    desc: 'Meet GDPR, SOC 2, HIPAA with audit logging and strict access controls.',
  },
  {
    icon: BadgeCheck,
    title: 'Accuracy on Domain Knowledge',
    desc: 'Fine‑tuned on your corpus for higher precision on niche topics.',
  },
  {
    icon: Zap,
    title: 'Speed & Low Latency',
    desc: 'Local inference avoids internet round‑trips. Scale GPUs for real‑time responses.',
  },
]

export default function Benefits() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center">Benefits of Self‑Training Your LLM</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-center gap-3 text-blue-300">
                <b.icon className="w-6 h-6" />
                <h3 className="text-white font-semibold">{b.title}</h3>
              </div>
              <p className="mt-3 text-blue-200/80 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
