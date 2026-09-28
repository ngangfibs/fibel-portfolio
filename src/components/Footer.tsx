import { useEffect, useState } from "react";
import { Link } from "react-router";
import { useReveal } from "@/hooks/useReveal";

function useBamendaTime() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Africa/Douala",
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export function FooterCTA() {
  const ref = useReveal<HTMLElement>();
  return (
    <section
      ref={ref}
      className="px-5 pb-40 pt-24 text-center sm:px-10 sm:pb-56 sm:pt-32"
    >
      <p className="font-mark reveal text-2xl text-[var(--ink-faint)]">fibel.</p>
      <h2 className="font-display reveal mx-auto mt-6 max-w-4xl text-[clamp(2.6rem,7.5vw,6rem)] font-semibold leading-[0.98] text-[var(--navy)]">
        Got something worth building? I want to hear it
      </h2>
      <a
        href="mailto:Ngangfibel@gmail.com"
        className="reveal mt-10 inline-block text-lg text-[var(--ink-soft)] underline decoration-[var(--line)] underline-offset-8 transition-colors hover:text-[var(--navy)]"
      >
        Say hi — I actually reply
      </a>
    </section>
  );
}

export function Footer() {
  const time = useBamendaTime();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--line)] px-5 py-6 sm:px-10">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-4 text-sm text-[var(--ink-soft)] md:flex-row">
        <p>© {year} Ngang Fibel Awah</p>

        <nav className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2">
          <Link to="/about" className="transition-opacity hover:opacity-60">
            About
          </Link>
          <Link to="/works" className="transition-opacity hover:opacity-60">
            Works
          </Link>
          <a
            href="https://github.com/ngangfibs"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-60"
          >
            GitHub
          </a>
          <a
            href="https://x.com/NGANGFIBEL"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-60"
          >
            X
          </a>
          <a
            href="https://www.linkedin.com/in/ngang-fibel"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-60"
          >
            LinkedIn
          </a>
        </nav>

        <div className="flex items-center gap-6">
          <span className="tabular-nums">Bamenda {time}</span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex min-h-[44px] items-center transition-opacity hover:opacity-60"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
