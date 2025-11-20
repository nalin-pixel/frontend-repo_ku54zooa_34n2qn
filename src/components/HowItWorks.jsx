import React from 'react'
import { motion } from 'framer-motion'
import { MessageSquare, Binary, Database, Files, BrainCircuit, Share2 } from 'lucide-react'

const steps = [
  {
    icon: MessageSquare,
    title: 'User Query',
    desc: 'A user poses a question or prompt via a chat interface or API.',
  },
  {
    icon: Binary,
    title: 'Tokenization',
    desc: 'The query is broken into tokens by the model’s tokenizer for processing.',
  },
  {
    icon: Database,
    title: 'Embeddings',
    desc: 'Tokens are converted into vector embeddings capturing semantic meaning.',
  },
  {
    icon: Files,
    title: 'Context Retrieval (RAG)',
    desc: 'Vector search fetches relevant internal documents from your knowledge base.',
  },
  {
    icon: BrainCircuit,
    title: 'LLM Response Generation',
    desc: 'Fine‑tuned LLM generates an answer using the query plus retrieved context.',
  },
  {
    icon: Share2,
    title: 'Output to Application',
    desc: 'The answer is returned via secure API to your app with citations if provided.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_300px_at_50%_0%,rgba(59,130,246,0.15),transparent_70%)]" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 className="text-center text-3xl md:text-5xl font-bold text-white">How It Works <span className="align-top text-sm md:text-base text-blue-300/70">(RAG‑augmented LLM workflow)</span></h2>
        <p className="mt-4 text-center text-blue-200/80 max-w-3xl mx-auto">Animated flow from left to right, highlighting each stage of the pipeline.</p>

        {/* Animated flow line */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur hover:border-blue-400/40"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-500/20 text-blue-300">
                  <s.icon className="w-6 h-6" />
                </div>
                <h3 className="text-white font-semibold text-base">{i + 1}. {s.title}</h3>
              </div>
              <p className="mt-3 text-blue-200/80 text-sm leading-relaxed">{s.desc}</p>
              {i < steps.length - 1 && (
                <motion.span
                  aria-hidden
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: i * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                  className="absolute top-1/2 -right-3 hidden lg:block h-[2px] w-6 origin-left bg-gradient-to-r from-blue-400/60 to-blue-200/0"
                />
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-6 text-center text-xs text-blue-300/70">
          Icons: user input field, text tokens, vector DB, document stack, GPU/brain, API output.
        </div>

        {/* Animated SVG line under section */}
        <motion.svg
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: 'easeInOut' }}
          className="mt-12 w-full"
          height="40"
        >
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="50%" stopColor="#a78bfa" />
              <stop offset="100%" stopColor="#fb923c" />
            </linearGradient>
          </defs>
          <motion.path
            d="M0 20 C 100 0, 200 40, 300 20 S 500 0, 600 20 S 800 40, 1000 20"
            stroke="url(#grad)"
            strokeWidth="2"
            fill="transparent"
          />
        </motion.svg>
      </div>
    </section>
  )
}
