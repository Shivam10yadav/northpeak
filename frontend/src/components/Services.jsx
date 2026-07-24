import React from "react";
import {
  ArrowUpRight,
  Code2,
  Layout,
  Sparkles,
  Smartphone,
  Cpu,
  Zap,
  ShoppingBag,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Web Architecture",
    description:
      "Scalable web apps built with modern stacks (React, Vite, Node). Engineered for speed, reliability, and precision.",
    tags: ["React", "Vite", "Node.js"],
    icon: Code2,
  },
  {
    number: "02",
    title: "UI/UX & Product Design",
    description:
      "Minimal, glassmorphic interfaces designed to maximize brand presence and user engagement across devices.",
    tags: ["Design Systems", "Figma"],
    icon: Layout,
  },
  {
    number: "03",
    title: "AI Integration",
    description:
      "Embedding cutting-edge AI models, automated workflows, and smart features directly into existing web apps.",
    tags: ["Gemini API", "Automation"],
    icon: Cpu,
  },
  {
    number: "04",
    title: "Responsive Web Apps",
    description:
      "Cross-platform digital experiences engineered for mobile, desktop, and tablet with high frame-rate performance.",
    tags: ["PWA", "Mobile-First"],
    icon: Smartphone,
  },
  {
    number: "05",
    title: "Performance & SEO",
    description:
      "Core Web Vitals optimization, automated asset delivery, and technical SEO structure for high search visibility.",
    tags: ["PageSpeed", "SEO Struct"],
    icon: Zap,
  },
  {
    number: "06",
    title: "E-Commerce & SaaS",
    description:
      "High-converting storefronts and SaaS platforms with secure payment integrations and streamlined user flows.",
    tags: ["Stripe", "SaaS Systems"],
    icon: ShoppingBag,
  },
];

const Services = () => {
  return (
    <section id="services" className="w-full bg-white px-4 py-16 sm:px-8 md:px-12 lg:px-16">
      <div className="mx-auto max-w-7xl">
        
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between border-b border-neutral-200 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-md bg-neutral-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-neutral-800">
              <Sparkles className="h-3.5 w-3.5 text-amber-600" />
              <span>What We Do</span>
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl md:text-5xl">
              OUR CAPABILITIES
            </h2>
          </div>

          <p className="max-w-md text-xs text-neutral-600 sm:text-sm leading-relaxed">
            We specialize in crafting bespoke digital experiences where technical precision meets high-end luxury aesthetics.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative flex flex-col justify-between rounded-xl border border-neutral-200 bg-neutral-50/50 p-6 transition-all duration-300 hover:border-neutral-950 hover:bg-neutral-950 hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold tracking-widest text-neutral-400 group-hover:text-amber-400">
                      [{service.number}]
                    </span>
                    <div className="rounded-full border border-neutral-200 bg-white p-2.5 text-neutral-900 transition-colors group-hover:border-neutral-800 group-hover:bg-neutral-900 group-hover:text-white">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>

                  <h3 className="mt-6 text-xl font-bold tracking-tight text-neutral-950 transition-colors group-hover:text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-neutral-600 transition-colors group-hover:text-neutral-400 sm:text-sm">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-neutral-200/80 pt-4 group-hover:border-neutral-800">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex flex-wrap gap-1.5">
                      {service.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="rounded-md bg-neutral-200/60 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-neutral-700 transition-colors group-hover:bg-neutral-800 group-hover:text-neutral-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href="#contact"
                      className="inline-flex items-center gap-0.5 text-[11px] font-bold uppercase tracking-wider text-neutral-950 group-hover:text-amber-400 shrink-0"
                    >
                      Inquire
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;