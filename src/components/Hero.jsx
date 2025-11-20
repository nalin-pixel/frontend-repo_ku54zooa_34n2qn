import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden flex items-center">
      {/* 3D Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient aura overlays (non-blocking for pointer) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-950/40 to-slate-950/80" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full opacity-40 blur-3xl bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.55),rgba(59,130,246,0.35),rgba(249,115,22,0.25),transparent_70%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 w-full text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium px-3 py-1 rounded-full bg-white/10 text-blue-100 ring-1 ring-white/20 backdrop-blur">
            Hunu.ai – Human Unified Neural Universe
          </p>
          <h1 className="mt-6 text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            Build Your Own Enterprise LLM. Privately. Securely.
          </h1>
          <p className="mt-5 text-base sm:text-lg md:text-xl text-blue-100/90 max-w-3xl mx-auto">
            Train and run a private large language model on your infrastructure. Keep your proprietary knowledge under your control with end‑to‑end privacy and compliance.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="#contact" className="px-5 py-3 rounded-lg bg-blue-500 hover:bg-blue-400 text-white font-semibold shadow-[0_0_35px_rgba(59,130,246,0.35)] transition">Request Demo</a>
            <a href="#how" className="px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold ring-1 ring-white/15 transition">Start Building</a>
          </div>
          <p className="mt-8 text-blue-200/80 text-sm">An abstract 3D network animates behind the headline, symbolizing connections in a neural universe.</p>
        </motion.div>
      </div>
    </section>
  )
}
