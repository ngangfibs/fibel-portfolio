import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";

const links = [
  { to: "/about", label: "About" },
  { to: "/works", label: "Works" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[var(--cream)] via-[var(--cream)]/85 to-transparent" />
        <nav
          className="relative mx-auto flex max-w-[1400px] items-center justify-between px-5 py-5 sm:px-10"
          aria-label="Main navigation"
        >
          <Link
            to="/"
            className="font-mark text-2xl text-[var(--navy)]"
            aria-label="Home"
          >
            fibel.
          </Link>

          {/* desktop links */}
          <div className="hidden items-center gap-9 md:flex">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `text-[0.95rem] font-medium transition-opacity hover:opacity-60 ${
                    isActive ? "opacity-100" : "opacity-80"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <a href="mailto:Ngangfibel@gmail.com" className="pill pill-primary !min-h-[40px] !px-5 text-sm">
              Say hello
            </a>
          </div>

          {/* mobile menu button */}
          <button
            className="pill pill-ghost !min-h-[44px] !px-5 text-sm md:hidden"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? "Close" : "Menu"}
          </button>
        </nav>
      </header>

      {/* mobile overlay */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 flex flex-col justify-center gap-2 bg-[var(--cream)] px-8 transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {[{ to: "/", label: "Home" }, ...links].map((l, i) => (
          <Link
            key={l.to}
            to={l.to}
            className="font-display border-b border-[var(--line)] py-4 text-4xl font-semibold text-[var(--navy)]"
            style={{ transitionDelay: `${i * 40}ms` }}
            onClick={() => setOpen(false)}
          >
            {l.label}
          </Link>
        ))}
        <a
          href="mailto:Ngangfibel@gmail.com"
          className="pill pill-primary mt-8 w-max"
        >
          Say hello
        </a>
      </div>
    </>
  );
}
