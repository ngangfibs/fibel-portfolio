import { useMemo, useState } from "react";
import { projects, type ProjectCategory } from "@/data/projects";
import { MockFor, Mock } from "@/components/Mock";
import { useReveal } from "@/hooks/useReveal";

const filters: ("All" | ProjectCategory)[] = [
  "All",
  "Web",
  "Bots & Automation",
  "Mobile",
];

function WorkRow({
  index,
  project,
}: {
  index: number;
  project: (typeof projects)[number];
}) {
  const flip = index % 2 === 1;
  return (
    <article className="grid items-center gap-10 border-t border-[var(--line)] py-14 sm:py-20 lg:grid-cols-2 lg:gap-16">
      <div className={`reveal ${flip ? "lg:order-2 lg:text-right" : ""}`}>
        <p className="body-copy max-w-md text-[1.05rem] lg:max-w-none">
          {project.blurb}
        </p>
        <div
          className={`mt-8 ${flip ? "lg:flex lg:justify-end" : ""}`}
        >
          <p className="eyebrow">{project.category}</p>
          <h3 className="font-display mt-2 text-[clamp(2.2rem,5vw,4rem)] font-semibold leading-none text-[var(--navy)]">
            {project.name}
          </h3>
          <div
            className={`mt-4 flex flex-wrap gap-2 ${
              flip ? "lg:justify-end" : ""
            }`}
          >
            {project.stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-[var(--line)] px-3 py-1 text-xs font-medium text-[var(--ink-soft)]"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className={`reveal relative pb-10 ${flip ? "lg:order-1" : ""}`}>
        <div className="w-[86%]">
          <MockFor project={project} />
        </div>
        <div className="absolute -bottom-2 right-0 w-[48%] rotate-2">
          <Mock kind={projects[(index + 5) % projects.length].mock} />
        </div>
        <div className={`mt-8 ${flip ? "" : "lg:text-right"}`}>
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="pill pill-ghost"
          >
            View project \u2197
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Works() {
  const ref = useReveal<HTMLDivElement>();
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");

  const visible = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((p) => p.category === filter),
    [filter]
  );

  return (
    <div ref={ref} className="mx-auto max-w-[1400px] px-5 sm:px-10">
      <section className="pt-32 sm:pt-44">
        <p className="eyebrow reveal">Work</p>
        <h1 className="font-display reveal mt-5 max-w-4xl text-[clamp(2.4rem,6vw,5.2rem)] font-semibold leading-[1.02] text-[var(--navy)]">
          So, here's what I've been building
        </h1>
        <p className="body-copy reveal mt-7 max-w-xl text-lg">
          Some of it ships products, some of it ships at 2am. Have a look
          around.
        </p>

        {/* filters */}
        <div className="reveal mt-10 flex flex-wrap gap-2.5">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`pill !min-h-[44px] !px-5 text-sm ${
                filter === f ? "pill-primary" : "pill-ghost"
              }`}
              aria-pressed={filter === f}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      <section className="mt-10 sm:mt-14">
        {visible.map((p, i) => (
          <WorkRow key={p.id} index={i} project={p} />
        ))}
        {visible.length === 0 && (
          <p className="body-copy border-t border-[var(--line)] py-20 text-center">
            Nothing here yet — check back soon.
          </p>
        )}
      </section>
    </div>
  );
}
