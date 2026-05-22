import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support — PDF Page Studio",
  description:
    "Help, FAQs, and contact info for PDF Page Studio. Get answers about Reader Mode, Save PDF, full-page screenshots, the PDF editor, and AI Summary.",
};

const faqs = [
  {
    q: "How do I install PDF Page Studio?",
    a: "Open the Chrome Web Store listing and click Add to Chrome. After installing, click the puzzle icon in your toolbar and pin PDF Page Studio for one-click access on any page.",
  },
  {
    q: "Reader Mode didn't strip the page correctly. Why?",
    a: "Reader Mode uses Mozilla's Readability heuristics. It works well on articles, blog posts, and documentation but struggles with single-page apps, paywalled content, and pages that build their content with heavy JavaScript. If a page looks broken in Reader Mode, the original page is still untouched — just close the reader view.",
  },
  {
    q: "Where does Save PDF save my file?",
    a: "Save PDF uses Chrome's built-in print pipeline with 'Save as PDF' as the destination. Chrome will prompt you to choose a folder. Your file is a real PDF with vector text — searchable, selectable, and crisp at any zoom level.",
  },
  {
    q: "The full-page screenshot is slow on very long pages.",
    a: "Full-page screenshots use chrome.tabs.captureVisibleTab, which is rate-limited to about 2 captures per second by Chrome. Very long pages (10,000+ pixels) can take 10–20 seconds. The extension scrolls the page automatically, captures each viewport, then stitches them into one tall PNG.",
  },
  {
    q: "Where can I get an OpenAI key for AI Summary?",
    a: "AI Summary is optional. To use it, get a key from platform.openai.com/api-keys, open the extension's Settings, paste the key, and pick a model (gpt-4o-mini is the cheapest). Your key is stored only in chrome.storage.local on your device. It is never sent to us — only to api.openai.com when you trigger a summary.",
  },
  {
    q: "Does the PDF editor upload my file?",
    a: "No. The PDF editor runs entirely in your browser. Your file is loaded into memory and IndexedDB locally. We have no server. We do not see, store, or transmit your PDFs anywhere.",
  },
  {
    q: "Why does the extension need access to all websites?",
    a: "The extension's job is to save, clean, screenshot, or annotate whatever page you are currently viewing — so it must be able to run on any URL you click the popup on. It does NOT read pages in the background; scripts are injected on the active tab only when you click a button in the popup.",
  },
  {
    q: "How do I uninstall?",
    a: "Right-click the PDF Page Studio icon in your toolbar and choose 'Remove from Chrome'. All extension data, including any stored API key, is removed automatically.",
  },
];

function Mail() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function Phone() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export default function Support() {
  return (
    <div className="py-16 sm:py-20">
      {/* Header */}
      <header className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-light text-brand text-xs font-semibold uppercase tracking-wider mb-5">
          Support
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
          We're here to help.
        </h1>
        <p className="mt-5 text-lg text-gray-600">
          Browse the FAQ below or get in touch — most replies come back within a business day.
        </p>
      </header>

      {/* Contact cards */}
      <section className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        <a
          href="mailto:work.sayak@gmail.com?subject=PDF%20Page%20Studio%20—%20Support"
          className="group flex items-start gap-4 p-6 rounded-2xl bg-white border border-gray-200/70 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-500/5 transition"
        >
          <div className="w-11 h-11 rounded-lg bg-brand-light text-brand flex items-center justify-center flex-shrink-0">
            <Mail />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Email support</h3>
            <p className="text-sm text-gray-600 mb-2">
              Best for bug reports, feature requests, or questions about your data.
            </p>
            <span className="text-sm font-medium text-brand group-hover:underline break-all">
              work.sayak@gmail.com →
            </span>
          </div>
        </a>

        <a
          href="tel:+917003391255"
          className="group flex items-start gap-4 p-6 rounded-2xl bg-white border border-gray-200/70 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-500/5 transition"
        >
          <div className="w-11 h-11 rounded-lg bg-brand-light text-brand flex items-center justify-center flex-shrink-0">
            <Phone />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Call or WhatsApp</h3>
            <p className="text-sm text-gray-600 mb-2">
              Urgent issues only — please email first for non-urgent questions.
            </p>
            <span className="text-sm font-medium text-brand group-hover:underline">
              +91 70033 91255 →
            </span>
          </div>
        </a>

        <a
          href="https://chrome.google.com/webstore"
          target="_blank"
          rel="noreferrer"
          className="group flex items-start gap-4 p-6 rounded-2xl bg-white border border-gray-200/70 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-500/5 transition"
        >
          <div className="w-11 h-11 rounded-lg bg-brand-light text-brand flex items-center justify-center flex-shrink-0">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <polygon points="12 2 15 8.5 22 9.3 17 14 18.5 21 12 17.8 5.5 21 7 14 2 9.3 9 8.5 12 2" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Rate &amp; review</h3>
            <p className="text-sm text-gray-600 mb-2">
              Love it? Leave a rating on the Chrome Web Store — it helps a lot.
            </p>
            <span className="text-sm font-medium text-brand group-hover:underline">
              Open Web Store listing →
            </span>
          </div>
        </a>
      </section>

      {/* FAQ */}
      <section className="mt-20 max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
          Frequently asked questions
        </h2>
        <div className="space-y-3">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-xl bg-white border border-gray-200/70 overflow-hidden hover:border-gray-300 transition"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-5">
                <span className="font-semibold text-gray-900">{item.q}</span>
                <span className="w-6 h-6 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center transition group-open:rotate-45 group-open:bg-brand-light group-open:text-brand flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-3.5 h-3.5">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 leading-relaxed text-[15px]">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Bug report */}
      <section className="mt-20 max-w-3xl mx-auto rounded-2xl border border-gray-200/70 bg-white p-8 sm:p-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          Reporting a bug?
        </h2>
        <p className="text-gray-600 mb-5">
          Please include the following so we can reproduce it quickly:
        </p>
        <ul className="space-y-2 text-[15px] text-gray-700">
          {[
            "Your Chrome version (chrome://version)",
            "The URL of the page you were on (if it's safe to share)",
            "Which feature was running — Reader Mode, Save PDF, Screenshot, PDF Editor, or AI Summary",
            "What you expected vs. what happened",
            "Any errors from the browser console (right-click → Inspect → Console)",
          ].map((line) => (
            <li key={line} className="flex items-start gap-2.5">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
              {line}
            </li>
          ))}
        </ul>
        <div className="mt-7">
          <a
            href="mailto:work.sayak@gmail.com?subject=PDF%20Page%20Studio%20—%20Bug%20report"
            className="inline-flex items-center gap-2 brand-gradient-bg text-white px-5 py-2.5 rounded-lg font-semibold shadow-sm hover:shadow-md transition"
          >
            <Mail /> Email a bug report
          </a>
        </div>
      </section>

      <div className="mt-16 text-center text-sm text-gray-500">
        See also our{" "}
        <Link href="/privacy" className="text-brand hover:underline">
          privacy policy
        </Link>
        .
      </div>
    </div>
  );
}
