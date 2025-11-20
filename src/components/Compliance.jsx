import React from 'react'
import { Shield, LockKeyhole, FileCheck2, Eye, ServerCog, Network } from 'lucide-react'

export default function Compliance() {
  const items = [
    { icon: ServerCog, title: '100% On‑Premise', desc: 'Deployed in your VPC or data center. Data never leaves your infrastructure.' },
    { icon: Shield, title: 'Secure by Design', desc: 'SOC 2 Type II and ISO 27001 practices. GDPR/HIPAA‑ready configurations.' },
    { icon: LockKeyhole, title: 'End‑to‑End Encryption', desc: 'AES‑256 at rest, TLS 1.3 in transit. Integrate with your KMS.' },
    { icon: Eye, title: 'Audit Logging', desc: 'Trace every query and action with optional anonymization.' },
    { icon: Network, title: 'Granular Access Control', desc: 'Multi‑tenant and RBAC to isolate models and datasets.' },
  ]

  return (
    <section className="py-24 bg-slate-950/95">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center">Compliance & Security</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-center gap-3 text-blue-300">
                <it.icon className="w-6 h-6" />
                <h3 className="text-white font-semibold">{it.title}</h3>
              </div>
              <p className="mt-3 text-blue-200/80 text-sm leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
