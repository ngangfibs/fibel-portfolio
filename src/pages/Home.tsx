import { Link } from "react-router";
import { featured, projects } from "@/data/projects";
import { Mock, MockFor } from "@/components/Mock";
import { useReveal } from "@/hooks/useReveal";

function HeroCluster() {
  return (
    <div className="reveal relative mt-16 h-[420px] select-none sm:h-[480px] lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:h-auto lg:w-[52%]">
      <div className="absolute left-0 top-16 w-[58%] rotate-[-3deg] lg:left-4 lg:top-24">
        <Mock kind="editor" />
      </div>
      <div className="absolute right-0 top-0 w-[52%] rotate-[2deg] lg:right-6 lg:top-16">
        <Mock kind="terminal" />
      </div>
      <div className="absolute bottom-0 left-[22%] w-[46%] rotate-[1.5deg] lg:bottom-10">
        <Mock kind="chat" />
      </div>
    </div>
  );
}

function FeaturedRow({
  index,
  project,
}: {
  index: number;
  project: (typeof featured)[number];
}) {
  const flip = index % 2 === 1;
  return (
    <article className="grid items-center gap-10 border-t border-[var(--line)] py-16 sm:py-24 lg:grid-cols-2 lg:gap-16">
      <div className={`reveal ${flip ? "lg:order-2" : ""}`}>
        <p className="eyebrow">{project.category}</p>
        <h3 className="font-display mt-3 text-[clamp(2.4rem,5vw,4.2rem)] font-semibold leading-none text-[var(--navy)]">
          {project.name}
        </h3>
        <p className="body-copy mt-5 max-w-md">{project.blurb}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="pill pill-ghost"
          >
            View repository \u2197
          </a>
        </div>
      </div>
      <div className={`reveal relative ${flip ? "lg:order-1" : ""}`}>
        <div className="w-[86%]">
          <MockFor project={project} />
        </div>
        <div
          className={`absolute -bottom-10 w-[52%] rotate-2 ${
            flip ? "right-0" : "right-0"
          }`}
        >
          <Mock
            kind={projects[(index + 3) % projects.length].mock}
          />
        </div>
      </div>
    </article>
  );
}

function CraftStrip({
  title,
  caption,
  kinds,
  reverse = false,
}: {
  title: string;
  caption: string;
  kinds: Parameters<typeof Mock>[0]["kind"][];
  reverse?: boolean;
}) {
  const row = [...kinds, ...kinds];
  return (
    <div className="py-20 sm:py-28">
      <h3 className="font-display reveal px-5 text-center text-[clamp(2.4rem,6vw,4.6rem)] font-semibold text-[var(--navy)]">
        {title}
      </h3>
      <div className="reveal marquee mt-12 sm:mt-16">
        <div className={`marquee-track ${reverse ? "reverse" : ""}`}>
          {row.map((k, i) => (
            <div key={i} className="w-[300px] shrink-0 sm:w-[420px]">
              <Mock kind={k} />
            </div>
          ))}
        </div>
      </div>
      <p className="body-copy reveal mx-auto mt-12 max-w-md px-5 text-center text-lg sm:mt-16">
        {caption}
      </p>
    </div>
  );
}

export default function Home() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div ref={ref}>
      {/* ---------- hero ---------- */}
      <section className="relative mx-auto max-w-[1400px] px-5 pt-32 sm:px-10 sm:pt-40 lg:min-h-[92vh]">
        <div className="relative z-10 lg:max-w-[54%]">
          <p className="eyebrow reveal">
            Full-Stack Developer · Data Scientist · Creative Technologist
          </p>
          <h1 className="font-display reveal mt-6 text-[clamp(2.9rem,8vw,7rem)] font-semibold leading-[0.98] text-[var(--navy)]">
            Software that feels hand-made, because it is.
          </h1>
          <p className="body-copy reveal mt-7 max-w-md text-lg">
            I design and build web apps, bots, and mobile products for founders
            and teams who want their software to feel like theirs.
          </p>
          <div className="reveal mt-10 flex flex-wrap gap-3">
            <a href="mailto:Ngangfibel@gmail.com" className="pill pill-primary">
              Say hello
            </a>
            <Link to="/works" className="pill pill-ghost">
              See the work
            </Link>
          </div>
        </div>
        <HeroCluster />
      </section>

      {/* ---------- featured works ---------- */}
      <section className="mx-auto mt-24 max-w-[1400px] px-5 sm:mt-36 sm:px-10">
        <p className="eyebrow reveal">A few things I've built</p>
        <h2 className="font-display reveal mt-5 max-w-3xl text-[clamp(2.4rem,6vw,5rem)] font-semibold leading-[1.02] text-[var(--navy)]">
          I'd rather show you than tell you
        </h2>

        <div className="mt-14 sm:mt-20">
          {featured.map((p, i) => (
            <FeaturedRow key={p.id} index={i} project={p} />
          ))}
        </div>

        <div className="reveal border-t border-[var(--line)] py-10 text-center">
          <Link to="/works" className="pill pill-ghost">
            See all work
          </Link>
        </div>
      </section>

      {/* ---------- craft sections ---------- */}
      <section className="mt-16 sm:mt-24">
        <p className="eyebrow reveal px-5 text-center">
          Code that doesn't stop at the demo
        </p>
        <CraftStrip
          title="Web apps"
          caption="Interfaces and systems built to hold up in production, not just the pitch."
          kinds={["editor", "site", "ngo", "astro"]}
        />
        <CraftStrip
          title="Bots & automation"
          caption="Little machines that do the boring work while you sleep."
          kinds={["terminal", "chat", "terminal", "chat"]}
          reverse
        />
        <CraftStrip
          title="Mobile"
          caption="Apps that feel native because they are."
          kinds={["comic", "audio", "comic", "audio"]}
        />
      </section>
    </div>
  );
}
