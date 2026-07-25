import React from "react";
import { Sparkles, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "They built our dashboard right on time. Whenever we had a bug in the React state or needed a quick layout change, they sorted it out the same day. Total lifesaver for our launch.",
    author: "Rohan Sharma",
    role: "Founder",
    company: "Kraftify",
    metrics: "On-Time Launch",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200",
  },
  {
    quote:
      "Working with them was super smooth. We shared our designs and they turned them into clean Tailwind and React components without any back-and-forth fuss. Saved us weeks of work.",
    author: "Priya Patel",
    role: "Product Lead",
    company: "FinPulse",
    metrics: "2 Weeks Saved",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
  },
  {
    quote:
      "Honestly, finding developers who write clean code and communicate properly is hard. These guys delivered our e-commerce flow cleanly and the site loads super fast now.",
    author: "Vikram Malhotra",
    role: "Tech Head",
    company: "UrbanCart",
    metrics: "Super Fast Speed",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="w-full bg-zinc-950 px-4 py-20 text-white sm:px-8 md:px-12 lg:px-16">
      <div className="mx-auto max-w-7xl">
        
        {/* Header Block */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between border-b border-zinc-800 pb-8">
          <div>
       
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              WHAT CLIENTS SAY
            </h2>
          </div>

          <p className="max-w-md text-xs text-zinc-400 sm:text-sm leading-relaxed">
            Real words from founders and team leads who needed dependable development and fast results.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="group relative flex flex-col justify-between rounded-xl border border-zinc-800 bg-zinc-900/80 p-6 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900 hover:shadow-2xl"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  <span className="rounded-md border border-zinc-800 bg-zinc-950 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-400">
                    {item.metrics}
                  </span>
                </div>

                <p className="mt-6 text-xs leading-relaxed text-zinc-300 sm:text-sm">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="mt-8 border-t border-zinc-800/80 pt-4">
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.author}
                    className="h-10 w-10 rounded-full object-cover border border-zinc-700"
                  />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                      {item.author}
                    </h4>
                    <p className="text-[11px] text-zinc-400">
                      {item.role} · <span className="text-zinc-300">{item.company}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;