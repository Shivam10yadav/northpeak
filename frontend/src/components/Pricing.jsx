import React from "react";
import { Sparkles, Check, ArrowUpRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "₹999",
    period: "one-time",
    description: "Ideal for small businesses and portfolio sites needing a fast, clean web presence.",
    features: [
      "Up to 3-5 Static Pages",
      "Responsive Mobile Design",
      "Tailwind CSS & React/Vite",
      "Basic SEO Setup",
      "1 Week Delivery",
      "1 Month Free Support",
    ],
    popular: false,
    buttonText: "Choose Starter",
  },
  {
    name: "Growth",
    price: "₹1,999",
    period: "one-time",
    description: "Perfect for startups and growing brands requiring custom UI and dynamic features.",
    features: [
      "Up to 10 Dynamic Pages",
      "Full Custom UI/UX Design",
      "React / Node.js Stack",
      "Database & CMS Integration",
      "Speed & Core Web Vitals Optimization",
      "2 Weeks Delivery",
      "3 Months Free Support",
    ],
    popular: true,
    buttonText: "Start Growth Plan",
  },
  {
    name: "Custom / SaaS",
    price: "₹9,999+",
    period: "starting at",
    description: "For complex web apps, SaaS platforms, and AI-powered custom workflows.",
    features: [
      "Unlimited Custom Pages",
      "Full Stack MERN Architecture",
      "Custom AI / Gemini API Integration",
      "Payment Gateway (Razorpay/Stripe)",
      "High-Security & Scalable Setup",
      "Dedicated Project Timeline",
      "6 Months Dedicated Support",
    ],
    popular: false,
    buttonText: "Contact for Quote",
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="w-full bg-white px-4 py-20 text-neutral-950 sm:px-8 md:px-12 lg:px-16">
      <div className="mx-auto max-w-7xl">
        
        {/* Header Block */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between border-b border-neutral-200 pb-8">
          <div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl md:text-5xl">
              PRICING PLANS
            </h2>
          </div>

          <p className="max-w-md text-xs text-neutral-600 sm:text-sm leading-relaxed">
            Simple, upfront pricing with zero hidden charges. Pick a plan that fits your current business scale.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col justify-between rounded-2xl border p-8 transition-all duration-300 ${
                plan.popular
                  ? "border-neutral-950 bg-neutral-950 text-white shadow-2xl scale-105 z-10"
                  : "border-neutral-200 bg-neutral-50/50 text-neutral-950 hover:border-neutral-400 hover:bg-white"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-amber-400 px-3.5 py-1 text-[10px] font-extrabold uppercase tracking-widest text-neutral-950 shadow-md">
                  Most Popular
                </div>
              )}

              <div>
                <div className="flex items-center justify-between">
                  <h3 className={`text-xl font-bold tracking-tight ${plan.popular ? "text-white" : "text-neutral-950"}`}>
                    {plan.name}
                  </h3>
                </div>

                <div className="mt-6 flex items-baseline gap-2">
                  <span className={`text-4xl font-extrabold tracking-tight ${plan.popular ? "text-white" : "text-neutral-950"}`}>
                    {plan.price}
                  </span>
                  <span className={`text-xs font-semibold uppercase tracking-wider ${plan.popular ? "text-neutral-400" : "text-neutral-500"}`}>
                    / {plan.period}
                  </span>
                </div>

                <p className={`mt-3 text-xs leading-relaxed ${plan.popular ? "text-neutral-300" : "text-neutral-600"}`}>
                  {plan.description}
                </p>

                <ul className="mt-8 space-y-3 border-t border-neutral-200/20 pt-6">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-xs">
                      <div
                        className={`rounded-full p-1 ${
                          plan.popular
                            ? "bg-amber-400/20 text-amber-400"
                            : "bg-neutral-200/80 text-neutral-900"
                        }`}
                      >
                        <Check className="h-3 w-3 stroke-[3]" />
                      </div>
                      <span className={plan.popular ? "text-neutral-200" : "text-neutral-700"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="mt-10">
                <a
                  href="#contact"
                  className={`group inline-flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-xs font-bold uppercase tracking-wider transition-all ${
                    plan.popular
                      ? "bg-amber-400 text-neutral-950 hover:bg-amber-300"
                      : "bg-neutral-950 text-white hover:bg-neutral-800"
                  }`}
                >
                  {plan.buttonText}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;