import type { ComponentType } from "react";
import type { Project } from "@/data/projects";

/**
 * Code-drawn project "screenshots". Each variant is a tiny UI sketch
 * rendered with divs — no images, nothing to break.
 */

function Chrome({ dark = false }: { dark?: boolean }) {
  return (
    <div className={`mock-bar ${dark ? "!border-white/10" : ""}`}>
      <span className="mock-dot" style={{ background: "#f26d6d" }} />
      <span className="mock-dot" style={{ background: "#f2c14e" }} />
      <span className="mock-dot" style={{ background: "#5fc98e" }} />
      <span
        className={`ml-3 h-4 flex-1 rounded-md ${
          dark ? "bg-white/10" : "bg-black/[0.06]"
        }`}
      />
    </div>
  );
}

function EditorMock() {
  return (
    <div className="mock">
      <Chrome dark />
      <div className="bg-[#101726] p-3 sm:p-4">
        <div className="flex gap-3">
          <div className="hidden w-14 shrink-0 flex-col gap-2 sm:flex">
            {[70, 45, 60, 35].map((w, i) => (
              <div
                key={i}
                className="h-2 rounded-full bg-white/15"
                style={{ width: `${w}%` }}
              />
            ))}
          </div>
          <div className="flex-1">
            <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-[#2b3f6b] via-[#16213a] to-[#0b1220]">
              <div className="absolute inset-x-6 top-5 h-1.5 rounded-full bg-white/10" />
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90">
                <div className="ml-0.5 h-0 w-0 border-y-[6px] border-l-[10px] border-y-transparent border-l-[#101726]" />
              </div>
            </div>
            <div className="mt-3 space-y-2">
              <div className="flex gap-1.5">
                {[30, 22, 40, 28, 18].map((w, i) => (
                  <div
                    key={i}
                    className="h-4 rounded bg-[#3d5a99]"
                    style={{ width: `${w}%`, opacity: 0.55 + i * 0.1 }}
                  />
                ))}
              </div>
              <div className="flex gap-1.5 pl-8">
                {[18, 30, 24].map((w, i) => (
                  <div
                    key={i}
                    className="h-3 rounded bg-[#7a5af8]/50"
                    style={{ width: `${w}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TerminalMock() {
  const lines = [
    { text: "$ bot --watch SOL/USDC", cls: "text-[#8ee3a8]" },
    { text: "\u2713 connected to mainnet-beta", cls: "text-white/50" },
    { text: "\u25B2 BUY 2.4 SOL @ 142.31 — filled", cls: "text-[#8ee3a8]" },
    { text: "signal: momentum +3.2\u03C3 (AI score 0.91)", cls: "text-white/50" },
    { text: "\u25BC SELL 2.4 SOL @ 148.02 — filled", cls: "text-[#f2b56b]" },
    { text: "session pnl: +$13.70  \u00B7  3 trades", cls: "text-[#8ab6f2]" },
  ];
  return (
    <div className="mock">
      <Chrome dark />
      <div className="bg-[#0d1420] p-4 font-mono text-[10px] leading-relaxed sm:text-xs">
        {lines.map((l, i) => (
          <p key={i} className={l.cls}>
            {l.text}
          </p>
        ))}
        <p className="text-[#8ee3a8]">
          $ <span className="inline-block h-3 w-1.5 animate-pulse bg-[#8ee3a8] align-middle" />
        </p>
      </div>
    </div>
  );
}

function ChatMock() {
  return (
    <div className="mock">
      <Chrome />
      <div className="space-y-2.5 bg-[#e8f0f7] p-4">
        <div className="max-w-[75%] rounded-2xl rounded-tl-sm bg-white p-2.5 text-[10px] text-slate-700 shadow-sm sm:text-xs">
          /price SOL
        </div>
        <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-[#1d3766] p-2.5 text-[10px] text-[#f6f3ee] shadow-sm sm:text-xs">
          SOL $148.02 \u25B2 2.1% (24h)
          <br />
          <span className="opacity-70">Want me to set an alert?</span>
        </div>
        <div className="max-w-[75%] rounded-2xl rounded-tl-sm bg-white p-2.5 text-[10px] text-slate-700 shadow-sm sm:text-xs">
          yes — ping me at 155
        </div>
        <div className="ml-auto w-max rounded-2xl rounded-tr-sm bg-[#1d3766] p-2.5 text-[10px] text-[#f6f3ee] shadow-sm sm:text-xs">
          \u2713 alert set
        </div>
      </div>
    </div>
  );
}

function ComicMock() {
  return (
    <div className="mock">
      <Chrome dark />
      <div className="bg-[#141414] p-4">
        <div className="grid grid-cols-3 gap-2">
          <div className="col-span-2 aspect-[4/3] rounded-md bg-gradient-to-br from-[#e2574c] to-[#8e2f27]" />
          <div className="aspect-[4/3] rounded-md bg-gradient-to-br from-[#f2c14e] to-[#b97f1e]" />
          <div className="aspect-[4/3] rounded-md bg-gradient-to-br from-[#3d5a99] to-[#1d3766]" />
          <div className="col-span-2 aspect-[16/7] rounded-md bg-gradient-to-br from-[#5fc98e] to-[#2c7a52]" />
        </div>
        <div className="mt-3 flex items-center justify-between">
          <div className="h-2 w-20 rounded-full bg-white/25" />
          <div className="h-2 w-10 rounded-full bg-white/15" />
        </div>
      </div>
    </div>
  );
}

function AudioMock() {
  return (
    <div className="mock">
      <Chrome />
      <div className="bg-[#fbf8f2] p-4">
        <div className="mx-auto aspect-square w-2/5 rounded-xl bg-gradient-to-br from-[#b98a4e] via-[#8a6234] to-[#5c3f1f]" />
        <div className="mx-auto mt-3 h-2 w-1/2 rounded-full bg-black/15" />
        <div className="mx-auto mt-1.5 h-1.5 w-1/3 rounded-full bg-black/10" />
        <div className="mt-3 flex items-center gap-1 px-2">
          {Array.from({ length: 24 }).map((_, i) => (
            <div
              key={i}
              className="w-full rounded-full bg-[#8a6234]/60"
              style={{ height: `${6 + Math.abs(Math.sin(i * 1.7)) * 16}px` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function AstroMock() {
  return (
    <div className="mock">
      <Chrome dark />
      <div className="relative overflow-hidden bg-[#0b1026] p-4">
        {Array.from({ length: 26 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-white"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
              opacity: 0.25 + ((i * 13) % 60) / 100,
            }}
          />
        ))}
        <div className="relative mx-auto w-4/5 rounded-xl border border-white/15 bg-white/5 p-3 text-center backdrop-blur-sm">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#b8a9f2] sm:text-[10px]">
            Vibe report
          </p>
          <p className="mt-1.5 font-display text-sm font-semibold text-white sm:text-base">
            Cosmically aligned
          </p>
          <div className="mx-auto mt-2 h-1.5 w-3/4 rounded-full bg-gradient-to-r from-[#7a5af8] to-[#f2b56b]" />
          <p className="mt-2 text-[9px] text-white/50 sm:text-[10px]">
            Mercury is not the problem today.
          </p>
        </div>
      </div>
    </div>
  );
}

function NgoMock() {
  return (
    <div className="mock">
      <Chrome />
      <div className="bg-white p-4">
        <div className="flex items-center justify-between">
          <div className="h-2.5 w-14 rounded-full bg-[#2c7a52]" />
          <div className="flex gap-2">
            {[24, 30, 22].map((w, i) => (
              <div
                key={i}
                className="h-1.5 rounded-full bg-black/20"
                style={{ width: w }}
              />
            ))}
          </div>
        </div>
        <div className="mt-4 space-y-1.5">
          <div className="h-3.5 w-4/5 rounded-md bg-[#16305a]" />
          <div className="h-3.5 w-3/5 rounded-md bg-[#16305a]/80" />
          <div className="h-2 w-1/2 rounded-full bg-black/15" />
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2">
          {["#2c7a52", "#e9b44c", "#3d5a99"].map((c, i) => (
            <div key={i} className="rounded-lg p-2" style={{ background: `${c}1f` }}>
              <div className="h-6 w-6 rounded-full" style={{ background: c }} />
              <div className="mt-2 h-1.5 w-4/5 rounded-full bg-black/20" />
              <div className="mt-1 h-1.5 w-3/5 rounded-full bg-black/10" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SiteMock() {
  return (
    <div className="mock">
      <Chrome />
      <div className="bg-[#f2efe9] p-4">
        <div className="h-2 w-16 rounded-full bg-black/25" />
        <div className="mt-3 h-4 w-3/4 rounded-md bg-[#1d3766]" />
        <div className="mt-1.5 h-4 w-1/2 rounded-md bg-[#1d3766]/85" />
        <div className="mt-3 flex gap-2">
          <div className="h-6 w-16 rounded-full bg-[#1d3766]" />
          <div className="h-6 w-16 rounded-full bg-black/10" />
        </div>
        <div className="mt-4 grid grid-cols-4 gap-1.5">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="aspect-square rounded-md bg-black/[0.07]" />
          ))}
        </div>
      </div>
    </div>
  );
}

const variants: Record<Project["mock"], ComponentType> = {
  editor: EditorMock,
  terminal: TerminalMock,
  chat: ChatMock,
  comic: ComicMock,
  audio: AudioMock,
  astro: AstroMock,
  ngo: NgoMock,
  site: SiteMock,
};

export function Mock({ kind }: { kind: Project["mock"] }) {
  const V = variants[kind];
  return <V />;
}

export function MockFor({ project }: { project: Project }) {
  return <Mock kind={project.mock} />;
}
