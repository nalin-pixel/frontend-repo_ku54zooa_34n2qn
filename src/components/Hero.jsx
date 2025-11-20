import React, { useMemo, useRef, useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  const containerRef = useRef(null)

  // Cursor-following glow
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 20 })
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 20 })

  // Parallax transforms
  const parallaxX = useTransform(smoothX, [0, 1], [-15, 15])
  const parallaxY = useTransform(smoothY, [0, 1], [-10, 10])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height
      mouseX.set(x)
      mouseY.set(y)
    }
    const onLeave = () => {
      mouseX.set(0.5)
      mouseY.set(0.5)
    }

    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    onLeave()
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [mouseX, mouseY])

  // Floating orbs positions (pseudo-3D parallax)
  const orbs = useMemo(() => (
    [
      { size: 120, hue: 220, x: '10%', y: '20%', depth: 0.2 },
      { size: 80, hue: 280, x: '80%', y: '35%', depth: 0.5 },
      { size: 160, hue: 20, x: '65%', y: '75%', depth: 0.35 },
      { size: 100, hue: 160, x: '22%', y: '70%', depth: 0.65 },
    ]
  ), [])

  return (
    <section ref={containerRef} className="relative min-h-[92vh] overflow-hidden flex items-center">
      {/* 3D Spline background (interactive) */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Cursor reactive glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: smoothX && smoothY ? undefined : undefined,
        }}
      >
        <motion.div
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-40"
          style={{
            left: useTransform(smoothX, v => `${v * 100}%`),
            top: useTransform(smoothY, v => `${v * 100}%`),
            width: 600,
            height: 600,
            background:
              'radial-gradient(circle at center, rgba(59,130,246,0.45), rgba(147,51,234,0.35), rgba(251,146,60,0.25) 60%, transparent 70%)',
          }}
        />
        {/* Darkening gradient mask */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/35 to-slate-950/85" />
      </motion.div>

      {/* Floating orbs (depth parallax) */}
      <div className="pointer-events-none absolute inset-0">
        {orbs.map((o, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full mix-blend-screen"
            style={{
              width: o.size,
              height: o.size,
              left: o.x,
              top: o.y,
              background: `radial-gradient(circle at 30% 30%, hsla(${o.hue}, 90%, 60%, 0.8), hsla(${o.hue}, 90%, 60%, 0.15) 60%, transparent 70%)`,
              x: useTransform(parallaxX, v => v * (1 - o.depth)),
              y: useTransform(parallaxY, v => v * (1 - o.depth)),
              filter: 'blur(0.5px)'
            }}
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ duration: 6 + i, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      {/* Content with subtle parallax and 3D tilt */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{
            x: useTransform(parallaxX, v => v * 0.5),
            y: useTransform(parallaxY, v => v * 0.5),
          }}
        >
          <p className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium px-3 py-1 rounded-full bg-white/10 text-blue-100 ring-1 ring-white/20 backdrop-blur">
            Hunu.ai – Human Unified Neural Universe
          </p>
          <h1 className="mt-6 text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            Build Your Own Enterprise LLM. Privately. Securely.
          </h1>
          <p className="mt-5 text-base sm:text-lg md:text-xl text-blue-100/90 max-w-3xl mx-auto">
            Train and run a private large language model on your infrastructure. Keep your proprietary knowledge under your control with end‑to‑end privacy and compliance.
          </p>

          {/* CTA with 3D hover tilt */}
          <div className="mt-8 flex items-center justify-center gap-4 perspective-[1200px]">
            {[{ label: 'Request Demo', primary: true, href: '#contact' }, { label: 'Start Building', primary: false, href: '#how' }].map((btn, i) => (
              <TiltButton key={i} primary={btn.primary} href={btn.href}>
                {btn.label}
              </TiltButton>
            ))}
          </div>

          <div className="mt-6 flex justify-center">
            <span className="text-blue-200/80 text-xs sm:text-sm inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/20 ring-1 ring-white/10 backdrop-blur">
              Drag or move your cursor to interact with the scene
              <span className="inline-block w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function TiltButton({ children, primary, href }) {
  const ref = useRef(null)
  const rx = useMotionValue(0)
  const ry = useMotionValue(0)
  const tz = useMotionValue(0)

  const springX = useSpring(rx, { stiffness: 200, damping: 20 })
  const springY = useSpring(ry, { stiffness: 200, damping: 20 })
  const springZ = useSpring(tz, { stiffness: 200, damping: 20 })

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const px = (e.clientX - rect.left) / rect.width
      const py = (e.clientY - rect.top) / rect.height
      rx.set((py - 0.5) * -12) // rotateX
      ry.set((px - 0.5) * 12)  // rotateY
      tz.set(8)                // pop out
    }
    const onLeave = () => {
      rx.set(0); ry.set(0); tz.set(0)
    }
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [rx, ry, tz])

  return (
    <motion.a
      ref={ref}
      href={href}
      className={[
        'relative inline-flex items-center justify-center px-5 py-3 rounded-xl font-semibold shadow-lg transition will-change-transform',
        'ring-1 ring-white/15 backdrop-blur-md',
        primary ? 'bg-blue-500 text-white hover:bg-blue-400' : 'bg-white/10 text-white hover:bg-white/20',
      ].join(' ')}
      style={{
        transformStyle: 'preserve-3d',
        rotateX: springX,
        rotateY: springY,
        translateZ: useTransform(springZ, v => `${v}px`),
      }}
      whileTap={{ scale: 0.98 }}
    >
      {/* shiny highlight */}
      <span className="pointer-events-none absolute inset-0 rounded-xl overflow-hidden">
        <span className="absolute inset-0 opacity-30" style={{ background: 'linear-gradient(120deg, rgba(255,255,255,0.2), transparent 40%)' }} />
      </span>
      {children}
    </motion.a>
  )
}
