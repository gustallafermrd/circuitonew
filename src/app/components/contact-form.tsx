"use client";

import { useState } from "react";

type ContactFormProps = {
  dictionary: {
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    subject: string;
    subjectOptions: {
      general: string;
      reservations: string;
      corporate: string;
      suggestions: string;
    };
    message: string;
    messagePlaceholder: string;
    submit: string;
    success: string;
    error: string;
  };
};

export default function ContactForm({ dictionary }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "general", // Default to first option key
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    // Simulate API call
    try {
      // artificial delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "general",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
      <div className="flex flex-col md:flex-row gap-6">
        <label className="flex flex-col flex-1">
          <span className="text-brand-blue dark:text-gray-200 text-sm font-bold mb-2">
            {dictionary.name}
          </span>
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-[#dbe6df] dark:border-[#2a3c30] bg-white dark:bg-[#1c2e24] px-4 py-3 text-base outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
              placeholder={dictionary.namePlaceholder}
            />
            <span className="material-symbols-outlined absolute right-4 top-3.5 text-gray-400 text-xl pointer-events-none">
              person
            </span>
          </div>
        </label>
        <label className="flex flex-col flex-1">
          <span className="text-brand-blue dark:text-gray-200 text-sm font-bold mb-2">
            {dictionary.email}
          </span>
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-[#dbe6df] dark:border-[#2a3c30] bg-white dark:bg-[#1c2e24] px-4 py-3 text-base outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
              placeholder={dictionary.emailPlaceholder}
            />
            <span className="material-symbols-outlined absolute right-4 top-3.5 text-gray-400 text-xl pointer-events-none">
              mail
            </span>
          </div>
        </label>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <label className="flex flex-col flex-1">
          <span className="text-brand-blue dark:text-gray-200 text-sm font-bold mb-2">
            {dictionary.phone}
          </span>
          <div className="relative">
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded-lg border border-[#dbe6df] dark:border-[#2a3c30] bg-white dark:bg-[#1c2e24] px-4 py-3 text-base outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
              placeholder={dictionary.phonePlaceholder}
            />
            <span className="material-symbols-outlined absolute right-4 top-3.5 text-gray-400 text-xl pointer-events-none">
              call
            </span>
          </div>
        </label>
        <label className="flex flex-col flex-1">
          <span className="text-brand-blue dark:text-gray-200 text-sm font-bold mb-2">
            {dictionary.subject}
          </span>
          <div className="relative">
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full rounded-lg border border-[#dbe6df] dark:border-[#2a3c30] bg-white dark:bg-[#1c2e24] px-4 py-3 text-base outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all appearance-none text-gray-500"
            >
              <option value="general">
                {dictionary.subjectOptions.general}
              </option>
              <option value="reservations">
                {dictionary.subjectOptions.reservations}
              </option>
              <option value="corporate">
                {dictionary.subjectOptions.corporate}
              </option>
              <option value="suggestions">
                {dictionary.subjectOptions.suggestions}
              </option>
            </select>
            <span className="material-symbols-outlined absolute right-4 top-3.5 text-gray-400 text-xl pointer-events-none">
              expand_more
            </span>
          </div>
        </label>
      </div>

      <label className="flex flex-col">
        <span className="text-brand-blue dark:text-gray-200 text-sm font-bold mb-2">
          {dictionary.message}
        </span>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full min-h-[140px] rounded-lg border border-[#dbe6df] dark:border-[#2a3c30] bg-white dark:bg-[#1c2e24] px-4 py-3 text-base outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all resize-none"
          placeholder={dictionary.messagePlaceholder}
        />
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-2 w-full md:w-auto self-start rounded-lg bg-secondary hover:bg-primary text-white px-8 py-3.5 text-base font-bold shadow-sm transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          <>
            <span>{dictionary.submit}</span>
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
              send
            </span>
          </>
        )}
      </button>

      {status === "success" && (
        <div className="p-4 bg-green-100 text-green-700 rounded-lg text-center font-medium border border-green-200">
          {dictionary.success}
        </div>
      )}

      {status === "error" && (
        <div className="p-4 bg-red-100 text-red-700 rounded-lg text-center font-medium border border-red-200">
          {dictionary.error}
        </div>
      )}
    </form>
  );
}
