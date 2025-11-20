import React from 'react'

export default function Footer() {
  return (
    <footer className="py-12 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-blue-300/80 text-sm">
          <nav className="flex items-center gap-4">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#privacy" className="hover:text-white">Privacy Policy</a>
            <a href="#terms" className="hover:text-white">Terms of Use</a>
          </nav>
          <div className="text-center">Contact: <a href="mailto:sales@hunu.ai" className="underline">sales@hunu.ai</a> • <a href="#" className="hover:text-white">LinkedIn</a> • <a href="#" className="hover:text-white">GitHub</a></div>
          <div className="text-center">© 2025 Hunu.ai. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}
