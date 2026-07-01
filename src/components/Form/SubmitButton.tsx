'use client';

import { MoveRight } from 'lucide-react';
import { useFormStatus } from 'react-dom';

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="group flex items-center gap-4 bg-primary text-on-primary px-10 py-4 font-label-lg text-label-lg tracking-[0.2em] uppercase hover:bg-primary-container hover:text-on-primary-container transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      type="submit"
      disabled={pending}
    >
      {pending ? 'Sending...' : 'Request Itinerary'}
      {!pending && (
        <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
          <MoveRight />
        </span>
      )}
    </button>
  );
}