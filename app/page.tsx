import Link from "next/link";

const features = [
  {
    title: "Clean Reader Mode",
    body: "Strip ads, sidebars, and popups so only the article remains. Powered by Mozilla's Readability — the same engine Firefox uses.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M2 4h7a4 4 0 0 1 4 4v12a3 3 0 0 0-3-3H2z" />
        <path d="M22 4h-7a4 4 0 0 0-4 4v12a3 3 0 0 1 3-3h8z" />
      </svg>
    ),
  },
  {
    title: "Save as PDF",
    body: "One click and the current page is saved as a real PDF — vector text, searchable, selectable, crisp at any zoom.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="12" y1="18" x2="12" y2="12" />
        <polyline points="9 15 12 12 15 15" />
      </svg>
    ),
  },
  {
    title: "Full-Page Screenshot",
    body: "Capture the entire page, top to bottom, even content below the fold. Saved as one tall PNG, straight to Downloads.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    ),
  },
  {
    title: "Print",
    body: "Send the cleaned-up page directly to your printer using the system print dialog. No more wasting paper on ad banners.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <polyline points="6 9 6 2 18 2 18 9" />
        <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
        <rect x="6" y="14" width="12" height="8" />
      </svg>
    ),
  },
  {
    title: "Edit Local PDFs",
    body: "Open any PDF from your computer, highlight, draw, add sticky notes, and save it back to disk. Your file never leaves your device.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="9" y1="13" x2="15" y2="13" />
        <line x1="9" y1="17" x2="15" y2="17" />
      </svg>
    ),
  },
  {
    title: "AI Summary (opt-in)",
    body: "Get a quick TL;DR of any article using your own OpenAI key. Stored locally, sent only to OpenAI, never to us.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 2L9 9l-7 1 5 5-1 7 6-3 6 3-1-7 5-5-7-1z" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <div className="py-16 sm:py-24">
      {/* Hero */}
      <section className="text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-light text-brand text-xs font-semibold uppercase tracking-wider mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-brand" />
          Chrome Extension · v0.1
        </div>
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.05]">
          Save the web as <span className="gradient-text">clean PDFs</span>.
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Print, screenshot, annotate, and summarize any page — all from one tiny browser button.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://chrome.google.com/webstore"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 brand-gradient-bg text-white px-6 py-3 rounded-lg font-semibold shadow-lg shadow-indigo-500/20 hover:shadow-xl hover:shadow-indigo-500/30 transition"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.5 6.5L13 7.5l4 6.5h-4l-2.5-5.5z" />
            </svg>
            Add to Chrome — Free
          </a>
          <Link
            href="/support"
            className="inline-flex items-center gap-2 bg-white text-gray-800 border border-gray-200 px-6 py-3 rounded-lg font-semibold hover:border-gray-300 hover:bg-gray-50 transition"
          >
            Get Support
          </Link>
        </div>
        <p className="mt-6 text-sm text-gray-500">
          Works in Chrome, Edge, Brave, and other Chromium browsers.
        </p>
      </section>

      {/* Feature grid */}
      <section className="mt-24">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-3">
          Everything you need to <span className="gradient-text">save the web</span>.
        </h2>
        <p className="text-center text-gray-600 max-w-xl mx-auto mb-14">
          Six tools in one extension — no accounts, no trackers, no subscriptions.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl bg-white border border-gray-200/70 p-6 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-500/5 transition"
            >
              <div className="w-11 h-11 rounded-lg bg-brand-light text-brand flex items-center justify-center mb-4">
                {f.icon}
              </div>
              <h3 className="font-semibold text-gray-900 text-base mb-1.5">
                {f.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Privacy callout */}
      <section className="mt-24 rounded-3xl overflow-hidden border border-gray-200/70">
        <div className="grid md:grid-cols-2">
          <div className="p-10 sm:p-12 bg-white">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-semibold uppercase tracking-wider mb-5">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-3.5 h-3.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              Private by default
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Your files never leave your device.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              The PDF editor runs entirely in your browser. Reader Mode and screenshots stay local. We don't have a server, we don't have analytics, and we never see what you save.
            </p>
            <Link
              href="/privacy"
              className="inline-flex items-center gap-1.5 text-brand font-semibold hover:underline"
            >
              Read the privacy policy
              <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="brand-gradient-bg p-10 sm:p-12 text-white flex flex-col justify-center">
            <ul className="space-y-3.5 text-[15px]">
              {[
                "No accounts, no sign-up",
                "No tracking, no analytics, no ads",
                "All processing happens locally in Chrome",
                "Optional AI key is yours and yours alone",
              ].map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} className="w-3 h-3 text-yellow-300">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Save your first PDF in <span className="gradient-text">under a minute</span>.
        </h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Install the extension, pin it to your toolbar, and click the icon on any page.
        </p>
        <a
          href="https://chrome.google.com/webstore"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 brand-gradient-bg text-white px-6 py-3 rounded-lg font-semibold shadow-lg shadow-indigo-500/20 hover:shadow-xl hover:shadow-indigo-500/30 transition"
        >
          Add to Chrome — Free
        </a>
      </section>
    </div>
  );
}
