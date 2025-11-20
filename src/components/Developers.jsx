import React from 'react'
import { Code2, KeyRound, Layers, FileCode2 } from 'lucide-react'

export default function Developers() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white">Integration for Developers</h2>
          <p className="mt-3 text-blue-200/80">Simple API calls, SDKs, streaming, and RBAC out of the box.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* cURL example */}
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-6">
            <div className="flex items-center gap-2 text-blue-300">
              <Code2 className="w-5 h-5" />
              <h3 className="text-white font-semibold">Simple API Call</h3>
            </div>
            <pre className="mt-4 text-xs md:text-sm text-blue-100/90 overflow-x-auto"><code>{`curl -X POST https://api.hunu.ai/v1/chat \\
  -H "Authorization: Bearer <YOUR_API_KEY>" \\
  -H "Content-Type: application/json" \\
  -d '{"prompt": "Explain our Q3 sales growth", "user": "finance_analyst_01"}'`}</code></pre>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-2 text-blue-300"><KeyRound className="w-5 h-5" /><h4 className="text-white font-semibold text-sm">Auth & Access Control</h4></div>
              <p className="mt-2 text-xs text-blue-200/80">SSO with OAuth2, RBAC, and audit trails. API keys managed securely.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-2 text-blue-300"><Layers className="w-5 h-5" /><h4 className="text-white font-semibold text-sm">Developer Tools</h4></div>
              <p className="mt-2 text-xs text-blue-200/80">OpenAPI spec, Postman collection, streaming responses, batch jobs.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-2 text-blue-300"><FileCode2 className="w-5 h-5" /><h4 className="text-white font-semibold text-sm">Embed Anywhere</h4></div>
              <p className="mt-2 text-xs text-blue-200/80">Drop into portals or chatbots. Examples for dashboards and Slack/Teams.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-2 text-blue-300"><Code2 className="w-5 h-5" /><h4 className="text-white font-semibold text-sm">SDKs</h4></div>
              <p className="mt-2 text-xs text-blue-200/80">Use our Web SDK or language clients for quick integrations.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
