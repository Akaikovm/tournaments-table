import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import NavbarItem from "./navBar-item";

const navItems = [
  { label: "Home", to: "/", end: true },
  { label: "Torneos", to: "/tournaments-table" },
  { label: "Titulos", to: "/titles" },
  { label: "Estadisticas", to: "/standings" },
  { label: "Torneos En Vivo", to: "/live-tournaments" },
  { label: "Torneos Completados", to: "/completed-tournaments" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      {/* Top header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-2xl bg-ink-950/70 border-b border-white/10"
            : "backdrop-blur-md bg-ink-950/30 border-b border-white/5"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Brand */}
            <Link
              to="/"
              onClick={close}
              className="group flex items-center gap-2.5 shrink-0"
            >
              <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-gradient shadow-[0_8px_24px_rgba(245,158,11,0.45)]">
                <span className="text-white font-display font-bold text-base">
                  P
                </span>
                <span className="absolute inset-0 rounded-xl ring-1 ring-white/20" />
              </span>
              <div className="leading-tight">
                <div className="font-display font-bold text-base sm:text-lg text-white tracking-tight">
                  PGG <span className="gradient-text">Series</span>
                </div>
                <div className="hidden sm:block text-[10px] uppercase tracking-[0.2em] text-white/40">
                  Tournament Hub
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden xl:flex items-center gap-1.5">
              {navItems.map((item) => (
                <NavbarItem
                  key={item.to}
                  label={item.label}
                  to={item.to}
                  end={item.end}
                  variant="desktop"
                />
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-2">
              <Link
                to="/completed-tournaments"
                className="hidden md:inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white bg-brand-gradient bg-[length:200%_200%] hover:bg-[position:100%_50%] shadow-[0_8px_24px_rgba(245,158,11,0.35)] transition-all duration-300"
              >
                <span className="text-amber-200">★</span>
                Campeones
              </Link>
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="xl:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-colors"
                aria-label="Open menu"
              >
                <AiOutlineMenu size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`xl:hidden fixed inset-0 z-50 transition-all duration-300 ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
        aria-hidden={!open}
      >
        <button
          aria-label="Close menu backdrop"
          tabIndex={-1}
          onClick={close}
          className="absolute inset-0 bg-ink-950/70 backdrop-blur-sm"
        />
        <aside
          className={`absolute right-0 top-0 h-full w-[88%] max-w-sm bg-ink-900/95 backdrop-blur-2xl border-l border-white/10 shadow-2xl transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between h-16 sm:h-20 px-5 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-gradient shadow-[0_8px_24px_rgba(245,158,11,0.45)]">
                <span className="text-white font-display font-bold">P</span>
              </span>
              <div className="font-display font-bold text-white">
                PGG <span className="gradient-text">Series</span>
              </div>
            </div>
            <button
              type="button"
              onClick={close}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10"
              aria-label="Close menu"
            >
              <AiOutlineClose size={18} />
            </button>
          </div>
          <nav className="px-3 py-4 flex flex-col gap-1.5 overflow-y-auto h-[calc(100%-5rem)]">
            {navItems.map((item) => (
              <NavbarItem
                key={item.to}
                label={item.label}
                to={item.to}
                end={item.end}
                onClick={close}
                variant="mobile"
              />
            ))}
            <div className="mt-4 px-1">
              <Link
                to="/completed-tournaments"
                onClick={close}
                className="flex items-center justify-center gap-2 w-full rounded-2xl px-4 py-3 text-sm font-semibold text-white bg-brand-gradient shadow-[0_8px_24px_rgba(245,158,11,0.35)]"
              >
                <span className="text-amber-100">★</span>
                Ver Campeones
              </Link>
            </div>
          </nav>
        </aside>
      </div>
    </>
  );
};

export default Navbar;
