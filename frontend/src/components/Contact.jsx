import React, { useState } from "react";
import {
  Sparkles,
  Send,
  CheckCircle2,
  AlertCircle,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "₹25k - ₹60k",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validate fields on submission
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Project details are required";
    } else if (formData.message.trim().length < 15) {
      newErrors.message =
        "Please describe your project in at least 15 characters";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear field error as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate API call delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", budget: "₹25k - ₹60k", message: "" });
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="w-full bg-zinc-950 px-4 py-20 text-white sm:px-8 md:px-12 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header Block */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between border-b border-zinc-800 pb-8">
          <div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              START A PROJECT
            </h2>
          </div>

          <p className="max-w-md text-xs text-zinc-400 sm:text-sm leading-relaxed">
            Have an idea or need a high-performance web app? Drop your details
            below and we’ll get back to you within 24 hours.
          </p>
        </div>

        {/* Form & Info Grid */}
        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="space-y-8 lg:col-span-5">
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Got questions?
              </h3>
              <p className="mt-2 text-xs text-zinc-400 leading-relaxed sm:text-sm">
                We work with startups, businesses, and agency partners across
                India and globally.
              </p>
            </div>

            <div className="space-y-6 border-t border-zinc-800/80 pt-6">
              <div className="flex items-center gap-4">
                <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-3 text-amber-400">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                    Email Us
                  </p>
                  <a
                    href="mailto:hello@northpeak.dev"
                    className="text-sm font-medium text-white hover:text-amber-400"
                  >
                    hello@northpeak.dev
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-3 text-amber-400">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                    Call / WhatsApp
                  </p>
                  <a
                    href="tel:+919876543210"
                    className="text-sm font-medium text-white hover:text-amber-400"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-3 text-amber-400">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                    Location
                  </p>
                  <p className="text-sm font-medium text-white">
                    Haryana, India
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Status Tag */}
            <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4 backdrop-blur-sm">
              <p className="text-xs font-semibold text-emerald-400">
                Currently accepting new projects for Q3/Q4.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 sm:p-8 backdrop-blur-sm">
              {isSubmitted ? (
                <div
                  className="flex flex-col items-center justify-center py-12 text-center"
                  role="status"
                >
                  <CheckCircle2
                    className="h-14 w-14 text-emerald-400"
                    aria-hidden="true"
                  />
                  <h3 className="mt-4 text-2xl font-bold text-white">
                    Message Sent!
                  </h3>
                  <p className="mt-2 max-w-sm text-xs text-zinc-400 sm:text-sm">
                    Thanks for reaching out! We’ve received your inquiry and
                    will respond to your email within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 rounded-xl bg-zinc-800 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white hover:bg-zinc-700"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  noValidate
                  aria-label="Project inquiry form"
                >
                  {/* Name Input */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold uppercase tracking-wider text-zinc-300"
                    >
                      Your Name <span className="text-amber-400" aria-hidden="true">*</span>
                    </label>

                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Verma"
                      required
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className={`mt-2 w-full rounded-xl border bg-zinc-950 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-colors ${
                        errors.name
                          ? "border-red-500/80 focus:border-red-500"
                          : "border-zinc-800 focus:border-amber-400"
                      }`}
                    />
                    {errors.name && (
                      <p
                        id="name-error"
                        role="alert"
                        className="mt-1.5 flex items-center gap-1 text-xs text-red-400"
                      >
                        <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold uppercase tracking-wider text-zinc-300"
                      >
                        Email Address <span className="text-amber-400" aria-hidden="true">*</span>
                      </label>

                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="rahul@company.com"
                        required
                        aria-required="true"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        className={`mt-2 w-full rounded-xl border bg-zinc-950 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-colors ${
                          errors.email
                            ? "border-red-500/80 focus:border-red-500"
                            : "border-zinc-800 focus:border-amber-400"
                        }`}
                      />
                      {errors.email && (
                        <p
                          id="email-error"
                          role="alert"
                          className="mt-1.5 flex items-center gap-1 text-xs text-red-400"
                        >
                          <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      {/* This label was previously pointing to htmlFor="message",
                          which mismatched both its own id (missing) and its
                          actual purpose (it labels the budget select, not
                          "Project Details" and not the message textarea). */}
                      <label
                        htmlFor="budget"
                        className="block text-xs font-semibold uppercase tracking-wider text-zinc-300"
                      >
                        Budget Range
                      </label>

                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="mt-2 w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-amber-400"
                      >
                        <option value="₹25k - ₹60k">₹25,000 - ₹60,000</option>
                        <option value="₹60k - ₹1.2L">
                          ₹60,000 - ₹1,20,000
                        </option>
                        <option value="₹1.2L+">₹1,20,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold uppercase tracking-wider text-zinc-300"
                    >
                      Project Details <span className="text-amber-400" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us briefly about what you want to build..."
                      required
                      aria-required="true"
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      className={`mt-2 w-full rounded-xl border bg-zinc-950 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-colors ${
                        errors.message
                          ? "border-red-500/80 focus:border-red-500"
                          : "border-zinc-800 focus:border-amber-400"
                      }`}
                    />
                    {errors.message && (
                      <p
                        id="message-error"
                        role="alert"
                        className="mt-1.5 flex items-center gap-1 text-xs text-red-400"
                      >
                        <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    aria-busy={isSubmitting}
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-amber-400 py-3.5 text-xs font-extrabold uppercase tracking-wider text-zinc-950 transition-all hover:bg-amber-300 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      "Sending Message..."
                    ) : (
                      <>
                        Send Inquiry
                        <Send
                          className="h-4 w-4 transition-transform group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;