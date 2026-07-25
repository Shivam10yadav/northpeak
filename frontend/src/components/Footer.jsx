import React from "react";
import {
  FaArrowUpRightFromSquare,
  FaGithub,
  FaXTwitter,
  FaLinkedin,
  FaEnvelope,
  FaWandMagicSparkles,
} from "react-icons/fa6";

const navLinks = {
  navigation: [
    { name: "Services", href: "#services" },
    { name: "Client Work", href: "#work" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ],
  capabilities: [
    { name: "Web Architecture", href: "#services" },
    { name: "UI/UX & Product Design", href: "#services" },
    { name: "Custom AI Solutions", href: "#services" },
    { name: "Full Stack MERN", href: "#services" },
    { name: "Performance & SEO", href: "#services" },
  ],
  socials: [
    { name: "GitHub", href: "https://github.com", icon: FaGithub },
    { name: "LinkedIn", href: "https://linkedin.com", icon: FaLinkedin },
    { name: "Twitter / X", href: "https://twitter.com", icon: FaXTwitter },
  ],
};

const Footer = () => {
  return (
    <footer id="footer" className="w-full border-t border-neutral-200 bg-white px-4 pb-8 pt-16 text-neutral-950 sm:px-8 md:px-12 lg:px-16">
      <div className="mx-auto max-w-7xl">
        
        {/* Top CTA Banner */}
        <div className="flex flex-col gap-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-8 md:flex-row md:items-center md:justify-between">
          <div>
         
            <h3 className="mt-2 text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl">
              Have a project in mind?
            </h3>
            <p className="mt-1 text-xs text-neutral-600 sm:text-sm">
              Let's talk about building your web app or digital product.
            </p>
          </div>

          <a
            href="#contact"
            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-neutral-950 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-neutral-800"
          >
            Schedule a Call
            <FaArrowUpRightFromSquare className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Main Footer Links Grid */}
        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-12">
          
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-4">
            <a href="#" className="text-2xl font-extrabold tracking-wider text-neutral-950">
              NORTHPEAK<span className="text-amber-500">.</span>
            </a>
            <p className="max-w-sm text-xs leading-relaxed text-neutral-600 sm:text-sm">
              Engineering high-performance web applications, modern interactive interfaces, and custom digital solutions for ambitious brands.
            </p>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-950">
              Navigation
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs">
              {navLinks.navigation.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="text-neutral-600 transition-colors hover:text-neutral-950"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities Column */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-950">
              Services
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs">
              {navLinks.capabilities.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="text-neutral-600 transition-colors hover:text-neutral-950"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-950">
              Stay Updated
            </h4>
            <p className="mt-2 text-xs text-neutral-600">
              Get occasional insights on web tech, UI patterns, and project releases.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="mt-4 flex items-center gap-2">
              <div className="relative w-full">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="w-full rounded-xl border border-neutral-300 bg-neutral-50 px-3.5 py-2.5 text-xs text-neutral-950 placeholder-neutral-500 outline-none transition-colors focus:border-neutral-950"
                />
              </div>
              <button
                type="submit"
                className="shrink-0 rounded-xl bg-neutral-950 p-3 text-white transition-colors hover:bg-neutral-800"
              >
                <FaEnvelope className="h-3.5 w-3.5" />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar with Mandatory Credit Line */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-neutral-200 pt-8 md:flex-row">
          <div className="flex flex-col items-center gap-1.5 md:items-start">
            <p className="text-[11px] text-neutral-500">
              © {new Date().getFullYear()} NorthPeak Digital. All rights reserved.
            </p>
            <p className="text-[11px] font-medium text-neutral-600">
              Built for Digital Heroes Training Task ·{" "}
              <a
                href="https://digitalheroesco.com"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-neutral-950 underline underline-offset-2 transition-colors hover:text-amber-600"
              >
                Digital Heroes
              </a>
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {navLinks.socials.map((social, idx) => {
              const Icon = social.icon;
              return (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-neutral-200 bg-neutral-50 p-2.5 text-neutral-600 transition-colors hover:border-neutral-400 hover:text-neutral-950"
                  aria-label={social.name}
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;