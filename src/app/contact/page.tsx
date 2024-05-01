'use client';

import React, { FormEvent, useState, useEffect } from 'react';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { SubresourceIntegrityPlugin } from 'next/dist/build/webpack/plugins/subresource-integrity-plugin';

function MusicSchoolContactUs() {
  const [formData, setFormData] = useState({
    subject: '',
    body: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const generateMailtoLink = () => {
    const { subject, body } = formData;
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(`${body}\n`);
    return `mailto:gopea999@gmail.com?subject=${encodedSubject}&body=${encodedBody}`;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission
    const mailtoLink = generateMailtoLink();
    window.location.href = mailtoLink; // Open default email client
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative">

      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />

      <div className="max-w-2xl mx-auto p-4 relative z-10">
        <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
          Contact Us
        </h1>
        <p className="text-gray-300 max-w-lg mx-auto my-2 text-sm text-center">
          We&apos;re here to help with any questions about our courses,
          programs, or events. Reach out and let us know how we can assist you
          in your musical journey.
        </p>
        <form className="space-y-4 mt-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            placeholder="Subject"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700 "
          />
          <textarea
            name="body"
            value={formData.body}
            onChange={handleChange}
            required
            placeholder="Message"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
            rows={5}
          ></textarea>
          <button
            type="submit"
            className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default MusicSchoolContactUs;