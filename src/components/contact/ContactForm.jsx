"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Mail } from "lucide-react";
import Button from "@/components/ui/Button";
import { profileData } from "@/data/profile";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) errs.subject = "Subject is required";
    if (!formData.message.trim()) {
      errs.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters";
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
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
    // Simulate short processing delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const mailtoUrl = `mailto:${profileData.email}?subject=${encodeURIComponent(
    formData.subject || "Portfolio Inquiry"
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <div className="p-6 sm:p-8 rounded-2xl bg-[#111521] border border-white/[0.08] shadow-lg">
      <h3 className="text-xl font-bold text-[#F3F5FF] mb-2">
        Send a Message
      </h3>
      <p className="text-xs sm:text-sm text-[#9BA3B8] mb-6">
        Fill out the form below. Client-side validation is active.
      </p>

      {submitted ? (
        <div className="space-y-6 py-6 animate-in fade-in duration-300">
          <div className="p-5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 flex items-start gap-3.5">
            <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-emerald-400" />
            <div className="space-y-2 text-sm">
              <p className="font-semibold text-emerald-200">
                Validation Successful!
              </p>
              <p className="text-xs text-emerald-300/80 leading-relaxed">
                To respect data honesty: this portfolio does not connect a mock backend.
                To deliver this message directly to Siam right now, click the button below to
                open your email client with your entered details pre-filled.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Button
              href={mailtoUrl}
              variant="primary"
              size="md"
              icon={Mail}
              className="w-full sm:w-auto"
            >
              Send via Email Client
            </Button>
            <Button
              variant="ghost"
              size="md"
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: "", email: "", subject: "", message: "" });
              }}
              className="w-full sm:w-auto"
            >
              Reset Form
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-semibold uppercase tracking-wider text-[#9BA3B8] mb-1.5"
              >
                Your Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Alex Chen"
                className={`w-full px-4 py-2.5 rounded-xl bg-[#080A10] border text-sm text-[#F3F5FF] placeholder-[#9BA3B8]/40 focus:outline-none focus:ring-2 focus:ring-[#8B8DFF] transition-all ${
                  errors.name ? "border-red-500/60" : "border-white/10"
                }`}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <p id="name-error" className="mt-1 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.name}</span>
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-semibold uppercase tracking-wider text-[#9BA3B8] mb-1.5"
              >
                Your Email <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="alex@example.com"
                className={`w-full px-4 py-2.5 rounded-xl bg-[#080A10] border text-sm text-[#F3F5FF] placeholder-[#9BA3B8]/40 focus:outline-none focus:ring-2 focus:ring-[#8B8DFF] transition-all ${
                  errors.email ? "border-red-500/60" : "border-white/10"
                }`}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.email}</span>
                </p>
              )}
            </div>
          </div>

          {/* Subject */}
          <div>
            <label
              htmlFor="subject"
              className="block text-xs font-semibold uppercase tracking-wider text-[#9BA3B8] mb-1.5"
            >
              Subject <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Project Collaboration / Frontend Role"
              className={`w-full px-4 py-2.5 rounded-xl bg-[#080A10] border text-sm text-[#F3F5FF] placeholder-[#9BA3B8]/40 focus:outline-none focus:ring-2 focus:ring-[#8B8DFF] transition-all ${
                errors.subject ? "border-red-500/60" : "border-white/10"
              }`}
              aria-invalid={Boolean(errors.subject)}
              aria-describedby={errors.subject ? "subject-error" : undefined}
            />
            {errors.subject && (
              <p id="subject-error" className="mt-1 text-xs text-red-400 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.subject}</span>
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-xs font-semibold uppercase tracking-wider text-[#9BA3B8] mb-1.5"
            >
              Message <span className="text-red-400">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project, timeline, or engineering opportunity..."
              className={`w-full px-4 py-2.5 rounded-xl bg-[#080A10] border text-sm text-[#F3F5FF] placeholder-[#9BA3B8]/40 focus:outline-none focus:ring-2 focus:ring-[#8B8DFF] transition-all resize-none ${
                errors.message ? "border-red-500/60" : "border-white/10"
              }`}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && (
              <p id="message-error" className="mt-1 text-xs text-red-400 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.message}</span>
              </p>
            )}
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              variant="primary"
              size="md"
              icon={Send}
              disabled={isSubmitting}
              className="w-full sm:w-auto justify-center"
            >
              {isSubmitting ? "Validating..." : "Submit Inquiry"}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
