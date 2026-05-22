import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — PDF Page Studio",
  description:
    "PDF Page Studio's privacy policy. We don't operate a server, we don't track you, and your files never leave your device.",
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10 first:mt-0">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
        {title}
      </h2>
      <div className="text-gray-700 leading-relaxed space-y-3 text-[15.5px]">
        {children}
      </div>
    </section>
  );
}

export default function Privacy() {
  const lastUpdated = "May 22, 2026";

  return (
    <div className="py-16 sm:py-20">
      {/* Header */}
      <header className="max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-light text-brand text-xs font-semibold uppercase tracking-wider mb-5">
          Privacy
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
          Privacy Policy
        </h1>
        <p className="mt-5 text-lg text-gray-600">
          Short version: <span className="text-gray-900 font-semibold">we don't operate a server, we don't track you, and your files never leave your device.</span>
        </p>
        <p className="mt-3 text-sm text-gray-500">
          Last updated: {lastUpdated}
        </p>
      </header>

      {/* Quick summary card */}
      <section className="mt-10 max-w-3xl mx-auto rounded-2xl overflow-hidden border border-gray-200/70">
        <div className="brand-gradient-bg p-6 sm:p-8 text-white">
          <h2 className="text-lg font-bold mb-4">At a glance</h2>
          <ul className="grid sm:grid-cols-2 gap-3 text-[15px]">
            {[
              "No accounts, no sign-up",
              "No analytics, no ads, no trackers",
              "We do not run a server",
              "Your PDFs never leave your browser",
              "OpenAI key (optional) is stored locally",
              "All processing happens on your device",
            ].map((line) => (
              <li key={line} className="flex items-start gap-2.5">
                <span className="mt-1 w-4 h-4 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} className="w-2.5 h-2.5 text-yellow-300">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                {line}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Body */}
      <article className="mt-12 max-w-3xl mx-auto">
        <Section title="Who we are">
          <p>
            PDF Page Studio (&ldquo;the extension&rdquo;) is a free Chrome extension that helps you save, print, screenshot, and annotate web pages and local PDF files. This privacy policy explains what data the extension handles and what it doesn&apos;t.
          </p>
        </Section>

        <Section title="What data we collect">
          <p>
            <strong>None.</strong> We do not operate any server, database, or analytics platform that receives data from the extension. We have no way to identify you, count how many people use the extension, or see what you do with it.
          </p>
          <p>
            The extension <em>processes</em> some data locally on your device to do its job — described below — but that data stays in your browser and is not transmitted to us.
          </p>
        </Section>

        <Section title="What the extension does on your device">
          <ul className="list-disc pl-6 space-y-2.5">
            <li>
              <strong>Reader Mode, Print, and Save PDF</strong> read the HTML of the page you are currently viewing (only when you click the extension&apos;s toolbar button) and re-render it as a clean, print-ready view. The cleaned content stays in your browser tab and is only saved when you explicitly choose to save it.
            </li>
            <li>
              <strong>Full-Page Screenshot</strong> scrolls the active tab and captures each viewport using Chrome&apos;s built-in <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">tabs.captureVisibleTab</code> API, stitches them into a single PNG in memory, and saves it to your Downloads folder using Chrome&apos;s <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">downloads</code> API. The image is never sent anywhere.
            </li>
            <li>
              <strong>Edit Local PDF</strong> opens a PDF file you select from your computer, buffers it in your browser&apos;s IndexedDB storage so you can annotate it, and saves the annotated copy back to disk via your browser&apos;s download dialog. Your PDF is never uploaded to any server — not ours, not anyone else&apos;s.
            </li>
            <li>
              <strong>Your settings</strong> (such as your default highlight color or your optional OpenAI API key) are stored in <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">chrome.storage.local</code> on your device only.
            </li>
          </ul>
        </Section>

        <Section title="The optional AI Summary feature">
          <p>
            The extension includes an optional AI Summary feature that is <strong>off by default</strong>. To use it, you must paste your own OpenAI API key into the extension&apos;s Settings.
          </p>
          <p>If you choose to enable it:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Your API key is stored only in <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">chrome.storage.local</code> on your device.</li>
            <li>When you trigger a summary, the cleaned article text is sent directly from your browser to <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">api.openai.com</code> using your key as the Bearer token.</li>
            <li>OpenAI&apos;s privacy policy governs how they handle that data. See <a className="text-brand hover:underline" href="https://openai.com/policies/privacy-policy" target="_blank" rel="noreferrer">openai.com/policies/privacy-policy</a>.</li>
            <li>We never see your API key or your summarized content. The request goes from your browser straight to OpenAI&apos;s servers.</li>
          </ul>
          <p>
            You can remove your key at any time in the extension&apos;s Settings, or by uninstalling the extension.
          </p>
        </Section>

        <Section title="Permissions explained">
          <div className="overflow-x-auto -mx-2 sm:mx-0">
            <table className="w-full text-[14.5px] border-collapse">
              <thead>
                <tr className="text-left border-b border-gray-200">
                  <th className="px-3 py-2.5 font-semibold text-gray-900">Permission</th>
                  <th className="px-3 py-2.5 font-semibold text-gray-900">Why</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                {[
                  ["activeTab", "Inject the reader script into the page when you click the extension's button."],
                  ["scripting", "Programmatically inject Readability.js and the reader script."],
                  ["storage", "Persist your optional OpenAI key and UI preferences in chrome.storage.local."],
                  ["unlimitedStorage", "Let the PDF editor buffer large PDFs in IndexedDB for annotation."],
                  ["tabs", "Read the active tab's title and URL for filenames, and capture viewports for screenshots."],
                  ["downloads", "Save the stitched full-page screenshot to your Downloads folder."],
                  ["<all_urls>", "Allow the above on any site you visit — the extension's purpose is to work on any page."],
                ].map(([perm, why]) => (
                  <tr key={perm}>
                    <td className="px-3 py-3 font-mono text-[13px] text-brand whitespace-nowrap align-top">{perm}</td>
                    <td className="px-3 py-3">{why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section title="Data sharing and selling">
          <p>
            We do not sell, transfer, or share any user data, because we do not collect any user data. The only outbound network request the extension ever makes is the optional AI Summary call to OpenAI, which only happens if you provide your own API key and trigger it manually.
          </p>
        </Section>

        <Section title="Children">
          <p>
            PDF Page Studio is a general-purpose utility and is not directed at children under 13. We do not knowingly collect any information from anyone.
          </p>
        </Section>

        <Section title="Changes to this policy">
          <p>
            If we ever change how the extension handles data, we will update this page and the &ldquo;Last updated&rdquo; date at the top. We will also update the data disclosure on the Chrome Web Store listing. Material changes will be called out in the extension&apos;s release notes.
          </p>
        </Section>

        <Section title="Contact">
          <p>
            Questions, concerns, or data-related requests? Reach us at:
          </p>
          <ul className="list-disc pl-6 space-y-1.5">
            <li>
              Email —{" "}
              <a
                href="mailto:work.sayak@gmail.com?subject=PDF%20Page%20Studio%20—%20Privacy%20question"
                className="text-brand font-medium hover:underline"
              >
                work.sayak@gmail.com
              </a>
            </li>
            <li>
              Phone —{" "}
              <a
                href="tel:+917003391255"
                className="text-brand font-medium hover:underline"
              >
                +91 70033 91255
              </a>
            </li>
          </ul>
          <p>
            You can also reach us via the{" "}
            <Link href="/support" className="text-brand font-medium hover:underline">
              support page
            </Link>
            .
          </p>
        </Section>
      </article>
    </div>
  );
}
