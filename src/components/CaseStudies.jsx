import React from 'react'

const items = [
  {
    title: 'Samsung (2023)',
    quote: 'Banned employees from using ChatGPT after a sensitive source code leak.',
    link: 'https://techcrunch.com/2023/05/02/samsung-bans-use-of-generative-ai-tools-like-chatgpt-after-april-internal-data-leak/',
  },
  {
    title: 'Apple (2023)',
    quote: 'Restricted staff from using external generative AI tools over confidentiality concerns.',
    link: 'https://www.theverge.com/2023/5/19/23729619/apple-bans-chatgpt-openai-fears-data-leak',
  },
  {
    title: 'Amazon (2023)',
    quote: 'Warned employees not to share confidential data with ChatGPT after close output matches.',
    link: 'https://www.indiatoday.in/technology/news/story/amazon-warns-employees-chatgpt-do-not-share-sensitive-info-with-chatbot-2327014-2023-01-27',
  },
  {
    title: 'JPMorgan (2023)',
    quote: 'Restricted ChatGPT usage to prevent inadvertent financial data leaks.',
    link: 'https://www.cnbc.com/2023/02/22/jpmorgan-chase-restricts-chatgpt-use-amid-privacy-concerns.html',
  },
]

export default function CaseStudies() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center">Case Studies & News</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((c) => (
            <a key={c.title} href={c.link} target="_blank" rel="noreferrer" className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:border-blue-400/40 transition">
              <h3 className="text-white font-semibold">{c.title}</h3>
              <p className="mt-2 text-blue-200/80 text-sm">“{c.quote}”</p>
              <span className="mt-3 inline-block text-xs text-blue-300/80">Read more →</span>
            </a>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-blue-300/70">If you have proprietary data to protect, you need a secure internal solution.</p>
      </div>
    </section>
  )
}
