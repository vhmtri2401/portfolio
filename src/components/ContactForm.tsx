'use client';

import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function ContactForm({ email }: { email: string }) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    // Since there's no backend, we'll use mailto as fallback
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (submitted) {
    return (
      <div className="glass-card p-8 text-center">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
          <svg
            className="w-8 h-8 text-green-600 dark:text-green-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">Message Prepared</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Your email client should have opened. If not, please send your message
          directly to{' '}
          <a
            href={`mailto:${email}`}
            className="text-primary-600 dark:text-primary-400 hover:underline"
          >
            {email}
          </a>
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="btn-secondary"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium mb-2"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-xl border ${
            errors.name
              ? 'border-red-500 focus:ring-red-500'
              : 'border-gray-200 dark:border-gray-700 focus:ring-primary-500'
          } bg-white dark:bg-gray-800 focus:ring-2 focus:border-transparent transition-all`}
          placeholder="Your name"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-xl border ${
            errors.email
              ? 'border-red-500 focus:ring-red-500'
              : 'border-gray-200 dark:border-gray-700 focus:ring-primary-500'
          } bg-white dark:bg-gray-800 focus:ring-2 focus:border-transparent transition-all`}
          placeholder="your@email.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email}</p>
        )}
      </div>

      {/* Subject */}
      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium mb-2"
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-xl border ${
            errors.subject
              ? 'border-red-500 focus:ring-red-500'
              : 'border-gray-200 dark:border-gray-700 focus:ring-primary-500'
          } bg-white dark:bg-gray-800 focus:ring-2 focus:border-transparent transition-all`}
          placeholder="What is this about?"
        />
        {errors.subject && (
          <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={`w-full px-4 py-3 rounded-xl border ${
            errors.message
              ? 'border-red-500 focus:ring-red-500'
              : 'border-gray-200 dark:border-gray-700 focus:ring-primary-500'
          } bg-white dark:bg-gray-800 focus:ring-2 focus:border-transparent transition-all resize-none`}
          placeholder="Your message..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message}</p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Sending...
          </>
        ) : (
          <>
            Send Message
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </>
        )}
      </button>
    </form>
  );
}
