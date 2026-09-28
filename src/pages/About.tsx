import type { ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";
import { Mock } from "@/components/Mock";

const experience = [
  {
    year: "Now",
    org: "NG Motors Ltd",
    role: "Software Engineer & IT Engineer",
  },
  {
    year: "2025",
    org: "ETS MUMA",
    role: "IT Manager",
  },
  {
    year: "2024",
    org: "AFRITECH",
    role: "Software Engineering Intern",
  },
  {
    year: "2023 —",
    org: "Independent",
    role: "Freelance Web Developer, remote worldwide",
  },
];

const credentials = [
  {
    year: "2025",
    org: "Catholic University of Cameroon, Bamenda",
    role: "B.Sc. Computer Science — Second Class Upper",
  },
  {
    year: "2025",
    org: "Google Cloud",
    role: "Cloud Certificate — deployment & maintenance",
  },
];

function BioBlock({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="grid gap-8 border-t border-[var(--line)] px-5 py-16 sm:px-10 sm:py-24 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
      <div>
        <p className="eyebrow reveal">{eyebrow}</p>
        <h2 className="font-display reveal mt-4 max-w-sm text-[clamp(1.8rem,3.4vw,2.8rem)] font-semibold leading-[1.05] text-[var(--navy)]">
          {title}
        </h2>
      </div>
      <div className="body-copy reveal max-w-xl space-y-5 text-[1.05rem]">
        {children}
      </div>
    </section>
  );
}

function CvList({
  heading,
  items,
}: {
  heading: string;
  items: typeof experience;
}) {
  return (
    <section className="px-5 py-16 sm:px-10 sm:py-20">
      <p className="eyebrow reveal text-center">{heading}</p>
      <div className="mx-auto mt-12 max-w-5xl sm:mt-16">
        {items.map((e) => (
          <div
            key={e.org}
            className="reveal grid grid-cols-[auto_1fr] items-baseline gap-x-6 gap-y-1 border-b border-[var(--line)] py-7 sm:py-9 lg:grid-cols-[100px_1fr_auto]"
          >
            <span className="text-sm font-medium text-[var(--ink-faint)]">
              {e.year}
            </span>
            <h3 className="font-display text-[clamp(1.6rem,4vw,3rem)] font-semibold leading-tight text-[var(--navy)]">
              {e.org}
            </h3>
            <p className="body-copy col-span-2 text-sm sm:text-base lg:col-span-1 lg:max-w-xs lg:text-right">
              {e.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function About() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="mx-auto max-w-[1400px]">
      {/* ---------- header ---------- */}
      <section className="px-5 pt-32 sm:px-10 sm:pt-44">
        <p className="eyebrow reveal">About</p>
        <h1 className="font-display reveal mt-5 max-w-5xl text-[clamp(2.4rem,6vw,5.2rem)] font-semibold leading-[1.02] text-[var(--navy)]">
          I'm Fibel, and I like making things people actually use
        </h1>
        <p className="body-copy reveal mt-7 max-w-xl text-lg">
          Full-stack developer, data scientist, and creative technologist —
          based in Bamenda, Cameroon, working with people worldwide.
        </p>
      </section>

      {/* ---------- mock strip ---------- */}
      <div className="reveal marquee mt-16 sm:mt-24">
        <div className="marquee-track">
          {(["terminal", "editor", "comic", "chat", "site", "audio"] as const)
            .concat(["terminal", "editor", "comic", "chat", "site", "audio"])
            .map((k, i) => (
              <div key={i} className="w-[280px] shrink-0 sm:w-[380px]">
                <Mock kind={k} />
              </div>
            ))}
        </div>
      </div>

      {/* ---------- story ---------- */}
      <BioBlock
        eyebrow="It started with curiosity"
        title="Code, then data, then bots, then apps. Same curiosity, more tools."
      >
        <p>
          Honestly, I got into computers because I wanted to know what was
          happening behind the screen. One computer science degree at CATUC
          later, the curiosity never left — it just got better tooling. I went
          from "how does this work?" to "what can I make this do?", and that
          question has been paying my bills ever since.
        </p>
        <p>
          Along the way I picked up data science, because software that
          understands its own numbers is software that earns its keep. Then
          bots, because if a machine can do the boring part at 3am, it should.
          That's how I ended up building trading bots on Solana — equal parts
          engineering and adrenaline.
        </p>
        <p>
          These days I split my time between keeping systems running at NG
          Motors, shipping freelance work for clients in other time zones, and
          a growing pile of side projects — a video editor, a comic reader, an
          audio scripture app. If an idea won't leave me alone, I build it.
        </p>
        <p>
          The thread through all of it: things should work, feel considered,
          and actually get used. Everything else is decoration.
        </p>
      </BioBlock>

      {/* ---------- off the clock ---------- */}
      <BioBlock eyebrow="Off the clock" title="Software's not the whole story">
        <p>
          I debug best with coffee and synthwave — lo-fi and techno when the
          bug is really fighting back. My setup is Ubuntu and Windows dual-boot,
          VS Code by day, PyCharm when things get serious.
        </p>
        <p>
          Outside of that I'm usually exploring some new tool before it's cool,
          contributing to open source, or arguing that the terminal counts as
          a design medium. It does.
        </p>
        <p>
          That's the rest of me. Come say hi — I promise I'm more fun than this
          bio makes me sound.
        </p>
      </BioBlock>

      {/* ---------- experience ---------- */}
      <CvList
        heading="Teams and companies I've built alongside"
        items={experience}
      />
      <CvList heading="And the paperwork to back it up" items={credentials} />
    </div>
  );
}
