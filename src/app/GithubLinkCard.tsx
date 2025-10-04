import * as React from "react";

// A polished, accessible card that mirrors the look & feel in your screenshot
// and links out to a GitHub repository (or any external URL).
// TailwindCSS is assumed to be configured in your Next.js project.
// Usage:
//   <GithubLinkCard
//      title="About Me"
//      description="A self-directed, ambitious and focused IT professional with a broad knowledge..."
//      href="https://github.com/yourname/yourrepo"
//   />

export type GithubLinkCardProps = {
  title: string;
  description: string;
  href: string; // GitHub (or external) link
  className?: string;
};

export default function GithubLinkCard({ title, description, href, className }: GithubLinkCardProps) {
  return (
    <div
      className={[
        "motion-preset-expand mx-auto max-w-md overflow-hidden bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5 @sm:items-center @sm:space-y-0 @sm:gap-x-6 @sm:py-4 box  md:max-w-2xl ",
        "transition-transform duration-200 ease-out hover:scale-[1.01] flex flex-col",
        className ?? "",
      ].join(" ")}
      role="region"
      aria-label={title} style={{ marginTop: "1rem"}}
    >
      {/* Top-left icon tile
      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 shadow">
        <EditIcon className="h-5 w-5 text-white" />
      </div> */}

      {/* Title */}
      <h3 className="mb-2 text-xl font-semibold tracking-tight text-slate-50">{title}</h3>

      {/* Description */}
      <p className="mb-6 leading-relaxed text-slate-300">{description}</p>

      {/* Footer: GitHub CTA */}
      <div className="flex items-center gap-3">
        <a
          href={href}
          target="_blank"
          rel="noreferrer noopener"
          className="group inline-flex items-center gap-2 rounded-xl border border-slate-700 px-4 py-2 text-sm font-medium text-slate-100 transition-colors hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
          aria-label="View on GitHub"
        >
          <GithubIcon className="h-5 w-5 transition-transform group-hover:scale-110" />
          <span>View on GitHub</span>
        </a>

        {/* Optional subtle permalink to encourage exploration */}
        <a
          href={href}
          target="_blank"
          rel="noreferrer noopener"
          className="text-sm text-slate-400 underline-offset-4 hover:text-slate-200 hover:underline"
        >
          {cleanUrl(href)}
        </a>
      </div>

      {/* Decorative corner glow */}
      <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 [background:radial-gradient(60%_60%_at_10%_10%,rgba(59,130,246,0.25),transparent)] transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  );
}

function cleanUrl(url: string) {
  try {
    const u = new URL(url);
    return `${u.hostname}${u.pathname}`.replace(/\/$/, "");
  } catch {
    return url;
  }
}

// --- Minimal inline SVG icons (no external deps) ---
function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      role="img"
    >
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.42c.58.11.8-.25.8-.56v-2c-3.27.71-3.96-1.58-3.96-1.58-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.21 1.78 1.21 1.04 1.78 2.72 1.27 3.38.97.11-.76.41-1.27.74-1.56-2.61-.3-5.36-1.31-5.36-5.84 0-1.29.46-2.34 1.21-3.16-.12-.3-.52-1.52.11-3.17 0 0 .99-.32 3.25 1.2a11.2 11.2 0 0 1 5.92 0c2.26-1.52 3.25-1.2 3.25-1.2.63 1.65.23 2.87.11 3.17.75.82 1.21 1.87 1.21 3.16 0 4.54-2.75 5.53-5.37 5.83.42.37.79 1.11.79 2.24v3.32c0 .31.21.68.81.56A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}
