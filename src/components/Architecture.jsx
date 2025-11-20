import React from 'react'
import { motion } from 'framer-motion'
import { Server, Database, Cloud, Cpu, Lock, Cable } from 'lucide-react'

export default function Architecture() {
  const items = [
    {
      icon: Cable,
      title: 'Data Connectors',
      desc: 'Connect to data lakes, DBs, and apps (CRM, ERP, SharePoint). Data stays behind your firewall.',
    },
    {
      icon: Cpu,
      title: 'Fine‑Tuning Pipeline',
      desc: 'Tokenizer, preprocessing, embedding generation, transformer training on GPUs using PyTorch & HF.',
    },
    {
      icon: Database,
      title: 'Vector Database',
      desc: 'Index documents and embeddings for semantic search and RAG with FAISS/Weaviate.',
    },
    {
      icon: Server,
      title: 'Compute & Orchestration',
      desc: 'Containerized on Kubernetes with autoscaling. Optimized for NVIDIA CUDA / TPUs.',
    },
    {
      icon: Lock,
      title: 'Secure API Layer',
      desc: 'REST with OAuth2, RBAC, and audit trails. Integrate with your SSO.',
    },
  ]

  return (
    <section className="relative py-24 bg-slate-950/95">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_300px_at_50%_0%,rgba(168,85,247,0.15),transparent_70%)]" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white">Architecture – Self‑Hosted LLM Stack</h2>
          <p className="mt-4 text-blue-200/80 max-w-3xl mx-auto">All components run within your secure network perimeter.</p>
        </div>

        {/* SVG schematic */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <svg className="w-full" height="260" viewBox="0 0 1100 260">
            <defs>
              <linearGradient id="a" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="50%" stopColor="#a78bfa" />
                <stop offset="100%" stopColor="#fb923c" />
              </linearGradient>
            </defs>
            {/* Cloud boundary */}
            <rect x="10" y="10" width="1080" height="240" rx="22" fill="none" stroke="url(#a)" strokeWidth="2" />
            {/* Data sources */}
            <g>
              <rect x="40" y="60" width="160" height="140" rx="14" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.15)" />
              <text x="120" y="140" textAnchor="middle" fill="#cbd5e1" fontSize="12">Enterprise Data Sources</text>
            </g>
            {/* GPU cluster */}
            <g>
              <rect x="430" y="60" width="240" height="140" rx="14" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.15)" />
              <text x="550" y="95" textAnchor="middle" fill="#cbd5e1" fontSize="12">On‑Prem GPU Cluster</text>
              <text x="550" y="120" textAnchor="middle" fill="#cbd5e1" fontSize="12">LLM Training & Inference</text>
            </g>
            {/* Vector DB */}
            <g>
              <rect x="710" y="40" width="160" height="60" rx="12" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.15)" />
              <text x="790" y="75" textAnchor="middle" fill="#cbd5e1" fontSize="12">Vector DB</text>
            </g>
            {/* API */}
            <g>
              <rect x="910" y="60" width="160" height="140" rx="14" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.15)" />
              <text x="990" y="95" textAnchor="middle" fill="#cbd5e1" fontSize="12">Secure API Layer</text>
            </g>
            {/* Arrows */}
            <g stroke="url(#a)" strokeWidth="2" fill="none">
              <path d="M200 130 C 260 130, 380 130, 430 130" />
              <path d="M670 130 C 720 130, 880 130, 910 130" />
              <path d="M790 100 C 820 120, 860 120, 910 120" />
            </g>
          </svg>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-5 gap-4">
            {items.map((it) => (
              <div key={it.title} className="rounded-lg border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-2 text-blue-300">
                  <it.icon className="w-5 h-5" />
                  <h3 className="text-white font-semibold text-sm">{it.title}</h3>
                </div>
                <p className="mt-2 text-xs text-blue-200/80 leading-relaxed">{it.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
