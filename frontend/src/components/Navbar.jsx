import React from "react";

const navItems = ["Services", "Testimonials", "Pricing", "Contact", "Footer"];

const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-6 sm:px-8 md:px-12 lg:px-16">
      {/* Logo */}
      <a href="#" className="text-2xl font-bold tracking-wider text-white">
        NORTHPEAK<span className="text-amber-400" aria-hidden="true">.</span>
      </a>

      <nav className="hidden md:block" aria-label="Primary">
        <ul className="flex items-center gap-8 rounded-full border border-white/20 bg-black/40 px-6 py-2.5 backdrop-blur-md">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-xs uppercase tracking-widest text-white/80 transition-colors hover:text-white"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex items-center gap-3">
        <a
          href="#contact"
          className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md transition-all hover:bg-white hover:text-black"
        >
          Let's Talk
        </a>
      </div>
    </header>
  );
};

export default Navbar;