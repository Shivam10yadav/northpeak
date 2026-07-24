import React from "react";
import { ArrowUpRight, Play, Sparkles } from "lucide-react";
import Navbar from "./Navbar";

const metrics = [
  { value: "150+", label: "Projects Delivered" },
  { value: "99.8%", label: "Client Satisfaction" },
  { value: "10x", label: "Average Growth" },
];

const clientLogos = ["ACME Corp", "Vortex AI", "Aura Luxury", "Nexus Tech"];

const Hero = () => {
  return (
    <section className="h-screen w-full bg-white p-2 sm:p-3 md:p-4">
      {/* Card Container */}
      <div className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl p-6 sm:p-8 md:rounded-[2.5rem] md:p-10">

        {/* Background Video Visual */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

        {/* Mounted Navbar Component */}
        <Navbar />

        <div className="relative z-10 my-auto grid grid-cols-3 gap-4 max-w-2xl mx-auto w-full border border-white/20 bg-black/30 p-4 rounded-2xl backdrop-blur-md">
          {metrics.map((metric, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {metric.value}
              </p>
              <p className="text-[10px] sm:text-xs uppercase tracking-wider text-white/80 font-semibold mt-0.5">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        <footer className="relative z-10 border-t border-white/20 pt-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:items-end">
            
            <div className="space-y-3 md:col-span-7 lg:col-span-6">
              
           

              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                NorthPeak Digital
              </h1>
              
              <p className="max-w-lg text-xs leading-relaxed text-white/90 sm:text-sm md:text-base">
                We partner with ambitious businesses to create high-performance
                websites and digital experiences that inspire growth, build trust,
                and help brands reach their next peak.
              </p>

              <div className="pt-2 flex items-center gap-4 text-[11px] font-semibold uppercase tracking-wider text-white/70">
                <span>Trusted by:</span>
                <div className="flex flex-wrap gap-3">
                  {clientLogos.map((logo, idx) => (
                    <span key={idx} className="text-white border-b border-white/20 pb-0.5">
                      {logo}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center md:col-span-5 md:justify-end lg:col-span-6">
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-black/30 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md transition-all hover:bg-white/10 sm:text-sm"
              >
                <Play className="h-3.5 w-3.5 fill-current" />
                View Showcase
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-black transition-all hover:bg-neutral-200 sm:text-sm"
              >
                Start Your Project
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>

          </div>
        </footer>

      </div>
    </section>
  );
};

export default Hero;